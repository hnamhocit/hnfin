'use client'

import clsx from 'clsx'
import {
	ClapperboardIcon,
	LandmarkIcon,
	PiggyBankIcon,
	ShoppingCartIcon,
} from 'lucide-react'

import ExpensesByCategoryCard from '@/components/features/dashboard/ExpensesByCategoryCard'
import OverviewHeader from '@/components/features/dashboard/OverviewHeader'
import SpendingTrendsChart from '@/components/features/dashboard/SpendingTrendsChart'
import { Button } from '@heroui/react'

const cards = [
	{
		title: 'Total Balance',
		icon: <LandmarkIcon />,
		value: 2.5,
		description: ' vs last month',
	},
	{
		title: 'Monthly Income',
		icon: <PiggyBankIcon />,
		description: 'Incoming payments',
	},
	{
		title: 'Monthly Expenses',
		icon: <ShoppingCartIcon />,
		value: 1.2,
		description: ' vs last month',
	},
]

const Dashboard = () => {
	return (
		<>
			<OverviewHeader />

			<div className='mt-16 space-y-12'>
				<div className='grid grid-cols-3 gap-4'>
					{cards.map((card, i) => (
						<div
							key={card.title}
							className='p-4 bg-white border rounded-lg shadow-md text-neutral-700'>
							<div className='flex items-center justify-between'>
								<h2 className='text-lg font-medium'>
									{card.title}
								</h2>

								<div
									className={clsx(
										'flex items-center justify-center w-12 h-12 text-white rounded-full shadow-md',
										i === 0 ? 'bg-primary'
										: i === 1 ? 'bg-green-500'
										: 'bg-red-500',
									)}>
									{card.icon}
								</div>
							</div>

							{/* Placeholder for card content */}
							<div className='mt-2 mb-4 text-3xl font-bold text-black'>
								$0.00
							</div>

							<div>
								{card.value && (
									<span
										className={clsx(
											'font-bold',
											i === 2 ? 'text-danger' : (
												'text-primary'
											),
										)}>
										{card.value > 0 ? '+ ' : ' -'}
										{card.value}%
									</span>
								)}
								{card.description}
							</div>
						</div>
					))}
				</div>

				<div className='grid grid-cols-4 gap-4'>
					<SpendingTrendsChart
						points={[
							{ date: '2026-01-01', orders: 2 },
							{ date: '2026-01-05', orders: 10 },
							{ date: '2026-01-20', orders: 3 }, // ngày 20 chỉ là key, không phải value
						]}
						missingAs='zero' // hoặc "null"
					/>

					<ExpensesByCategoryCard
						currency='USD'
						categories={[
							{ name: 'Housing', amount: 860 },
							{ name: 'Food', amount: 540 },
							{ name: 'Transport', amount: 320 },
							{ name: 'Others', amount: 430 },
						]}
					/>
				</div>

				<div className='bg-white rounded-lg'>
					<div className='flex items-center justify-between p-6'>
						<h2 className='text-3xl font-semibold text-neutral-700'>
							Upcoming Bill
						</h2>

						<a
							href='#'
							className='text-lg font-medium text-primary hover:underline'>
							View All
						</a>
					</div>

					<div className='flex items-center justify-between p-6 border-t-2'>
						<div className='flex items-center gap-4'>
							<div className='flex items-center justify-center w-16 h-16 bg-red-200 rounded-lg shadow'>
								<ClapperboardIcon className='w-10 h-10 text-red-500' />
							</div>

							<div>
								<div className='text-2xl text-black'>
									Netflix Subscription
								</div>
								<div className='text-sm text-neutral-700'>
									Entertainment - Due Tomorrow
								</div>
							</div>
						</div>

						<div className='flex items-center gap-4'>
							<div className='text-lg font-semibold text-primary'>
								$50.00
							</div>
							<Button color='primary'>Pay</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard
