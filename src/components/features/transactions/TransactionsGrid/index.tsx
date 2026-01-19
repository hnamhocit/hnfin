'use client'

import { Tooltip } from '@heroui/react'
import {
	BanknoteIcon,
	BriefcaseIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CircleDotIcon,
	ClapperboardIcon,
	CreditCardIcon,
	FuelIcon,
	HeartPulseIcon,
	HomeIcon,
	LandmarkIcon,
	ReceiptIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UtensilsIcon,
} from 'lucide-react'
import { ComponentType, useMemo, useState } from 'react'

import { ExpenseCategory } from '@/interfaces'

type TxStatus = 'completed' | 'pending'
type TxType = 'income' | 'expense'
type AccountIcon = 'card' | 'bank' | 'cash'

export type TxRow = {
	id: string
	dateLabel: string
	timeLabel: string
	category: ExpenseCategory | 'salary' // income example
	title: string
	subtitle?: string
	accountLabel: string
	accountIcon: AccountIcon
	status: TxStatus
	amount: number // + income, - expense
	currency: string
	type: TxType
}

const CATEGORY_ICON: Record<
	ExpenseCategory | 'salary',
	React.ComponentType<{ size?: number; className?: string }>
> = {
	groceries: ShoppingCartIcon,
	dining: UtensilsIcon,
	transport: FuelIcon,
	entertainment: ClapperboardIcon,
	shopping: ShoppingBagIcon,
	bills: ReceiptIcon,
	housing: HomeIcon,
	health: HeartPulseIcon,
	other: CircleDotIcon,
	salary: BriefcaseIcon,
}

const ACCOUNT_ICON: Record<
	AccountIcon,
	ComponentType<{ size?: number; className?: string }>
> = {
	card: CreditCardIcon,
	bank: LandmarkIcon,
	cash: BanknoteIcon,
}

function capitalize(s: string) {
	return s.length ? s[0].toUpperCase() + s.slice(1) : s
}

function labelFromKey(key: string) {
	return capitalize(key.replace(/_/g, ' '))
}

function formatMoney(amount: number, currency: string) {
	const abs = Math.abs(amount)
	const formatted = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(abs)
	return amount < 0 ? `-${formatted}` : `+${formatted}`
}

function StatusPill({ status }: { status: TxStatus }) {
	const ok = status === 'completed'
	return (
		<span
			className={[
				'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1',
				ok ?
					'bg-emerald-950/40 text-emerald-300 ring-emerald-900/50'
				:	'bg-amber-950/40 text-amber-300 ring-amber-900/50',
			].join(' ')}>
			<span
				className={[
					'h-2 w-2 rounded-full',
					ok ? 'bg-emerald-400' : 'bg-amber-400',
				].join(' ')}
			/>
			{ok ? 'Completed' : 'Pending'}
		</span>
	)
}

function CategoryIconOnly({ category }: { category: TxRow['category'] }) {
	const Icon = CATEGORY_ICON[category]
	const label = labelFromKey(category)

	return (
		<Tooltip
			content={label}
			placement='top'
			delay={150}>
			<div className='flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-900/25 ring-1 ring-emerald-900/30'>
				<Icon
					size={18}
					className='text-emerald-200/80'
				/>
			</div>
		</Tooltip>
	)
}

function AccountIcon({ icon }: { icon: AccountIcon }) {
	const Icon = ACCOUNT_ICON[icon]
	return (
		<Icon
			size={16}
			className='text-emerald-200/70'
		/>
	)
}

export default function TransactionsGrid({
	rows,
	pageSize = 8,
}: {
	rows: TxRow[]
	pageSize?: number
}) {
	const [page, setPage] = useState(1)

	const total = rows.length
	const totalPages = Math.max(1, Math.ceil(total / pageSize))

	const pageRows = useMemo(() => {
		const start = (page - 1) * pageSize
		return rows.slice(start, start + pageSize)
	}, [page, pageSize, rows])

	const from = total === 0 ? 0 : (page - 1) * pageSize + 1
	const to = Math.min(total, page * pageSize)

	const canPrev = page > 1
	const canNext = page < totalPages

	return (
		<div className='w-full overflow-hidden rounded-2xl border border-emerald-900/40 bg-[#0b1411] shadow-[0_0_0_1px_rgba(16,185,129,0.08)]'>
			{/* Header */}
			<div className='grid grid-cols-5 bg-[#132019] px-2 py-3 text-xs font-medium uppercase tracking-wider text-emerald-100/70'>
				<div className='px-4'>Date</div>
				<div className='px-4'>Category</div>
				<div className='px-4'>Description</div>
				<div className='px-4'>Account</div>
				<div className='px-4 text-right'>Amount</div>
			</div>

			{/* Rows */}
			<div className='divide-y divide-emerald-900/30'>
				{pageRows.map((tx) => {
					return (
						<div
							key={tx.id}
							className='grid items-center grid-cols-5 px-2 py-4 transition-colors hover:bg-emerald-900/10'>
							{/* DATE */}
							<div className='px-4'>
								<div className='text-sm font-semibold text-emerald-50'>
									{tx.dateLabel}
								</div>
								<div className='text-sm text-emerald-100/60'>
									{tx.timeLabel}
								</div>
							</div>

							{/* CATEGORY (icon only + tooltip) */}
							<div className='px-4'>
								<CategoryIconOnly category={tx.category} />
							</div>

							{/* DESCRIPTION */}
							<div className='px-4'>
								<div className='flex items-center gap-3'>
									<div>
										<div className='text-sm font-semibold text-emerald-50'>
											{tx.title}
										</div>
										{tx.subtitle ?
											<div className='text-sm text-emerald-100/60'>
												{tx.subtitle}
											</div>
										:	null}
									</div>

									<div className='hidden lg:block'>
										<StatusPill status={tx.status} />
									</div>
								</div>
							</div>

							{/* ACCOUNT */}
							<div className='px-4'>
								<div className='flex items-center gap-2 text-sm text-emerald-50'>
									<AccountIcon icon={tx.accountIcon} />
									<span className='truncate'>
										{tx.accountLabel}
									</span>
								</div>
							</div>

							{/* AMOUNT */}
							<div className='px-4 text-right'>
								<div
									className={[
										'text-sm font-semibold tabular-nums',
										tx.type === 'income' ?
											'text-emerald-400'
										:	'text-emerald-50',
									].join(' ')}>
									{formatMoney(tx.amount, tx.currency)}
								</div>
								<div className='mt-1 lg:hidden'>
									<StatusPill status={tx.status} />
								</div>
							</div>
						</div>
					)
				})}

				{pageRows.length === 0 && (
					<div className='px-6 py-10 text-sm text-emerald-100/60'>
						No transactions
					</div>
				)}
			</div>

			{/* Footer */}
			<div className='flex flex-col gap-4 px-6 py-4 border-t border-emerald-900/30 sm:flex-row sm:items-center sm:justify-between'>
				<div className='text-sm text-emerald-100/60'>
					Showing {from} to {to} of {total} results
				</div>

				<div className='flex items-center gap-3'>
					<button
						disabled={!canPrev}
						onClick={() => setPage((p) => Math.max(1, p - 1))}
						className={[
							'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm',
							canPrev ?
								'bg-emerald-900/20 text-emerald-50 hover:bg-emerald-900/30'
							:	'bg-emerald-900/10 text-emerald-100/30 cursor-not-allowed',
						].join(' ')}>
						<ChevronLeftIcon size={16} />
						Previous
					</button>

					<button
						disabled={!canNext}
						onClick={() =>
							setPage((p) => Math.min(totalPages, p + 1))
						}
						className={[
							'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border',
							canNext ?
								'border-emerald-900/40 text-emerald-50 hover:bg-emerald-900/10'
							:	'border-emerald-900/20 text-emerald-100/30 cursor-not-allowed',
						].join(' ')}>
						Next
						<ChevronRightIcon size={16} />
					</button>
				</div>
			</div>
		</div>
	)
}
