'use client'

import {
	ArcElement,
	ChartData,
	Chart as ChartJS,
	ChartOptions,
	Legend,
	Tooltip,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type Category = {
	name: string
	amount: number
	color?: string
}

type Props = {
	title?: string
	categories: Category[]
	currency?: string // e.g. "USD"
}

function formatMoney(value: number, currency: string) {
	return new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency,
		maximumFractionDigits: 0,
	}).format(value)
}

export default function ExpensesByCategoryCard({
	title = 'Expenses by Category',
	categories,
	currency = 'USD',
}: Props) {
	const total = categories.reduce((s, c) => s + c.amount, 0)

	const labels = categories.map((c) => c.name)
	const values = categories.map((c) => c.amount)

	// Provide clean green palette defaults (override per category with color)
	const fallbackColors = [
		'#22c55e',
		'#10b981',
		'#34d399',
		'#a7f3d0',
		'#86efac',
	]
	const colors = categories.map(
		(c, i) => c.color ?? fallbackColors[i % fallbackColors.length],
	)

	const data: ChartData<'doughnut'> = {
		labels,
		datasets: [
			{
				data: values,
				backgroundColor: colors,
				borderWidth: 0,
				hoverOffset: 6,
				cutout: '72%',
			},
		],
	}

	const options: ChartOptions<'doughnut'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				displayColors: false,
				callbacks: {
					label: (ctx) => {
						const v = Number(ctx.raw ?? 0)
						const pct =
							total > 0 ? Math.round((v / total) * 100) : 0
						return `${ctx.label}: ${formatMoney(v, currency)} (${pct}%)`
					},
				},
			},
		},
	}

	return (
		<div className='max-w-sm col-span-1 p-6 bg-white border shadow-sm rounded-2xl border-slate-200'>
			<div className='text-lg font-semibold text-slate-900'>{title}</div>

			<div className='relative mt-6 h-[220px] w-full'>
				<Doughnut
					data={data}
					options={options}
				/>
				<div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
					<div className='text-3xl font-semibold text-slate-900'>
						{formatMoney(total, currency)}
					</div>
					<div className='text-sm text-slate-500'>Total</div>
				</div>
			</div>

			<div className='grid grid-cols-2 mt-6 gap-x-8 gap-y-4'>
				{categories.map((c, idx) => {
					const pct =
						total > 0 ? Math.round((c.amount / total) * 100) : 0
					const dot = colors[idx]

					return (
						<div
							key={c.name}
							className='flex items-start gap-3'>
							<span
								className='w-3 h-3 mt-1 rounded-full'
								style={{ backgroundColor: dot }}
							/>
							<div>
								<div className='text-sm font-medium text-slate-900'>
									{c.name}
								</div>
								<div className='text-xs text-slate-500'>
									{pct}%
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
