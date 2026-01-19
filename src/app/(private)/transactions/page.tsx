'use client'

import { Button, Input } from '@heroui/react'
import { SearchIcon } from 'lucide-react'

import CategorySelect from '@/components/features/transactions/CategorySelect'
import MonthSelect from '@/components/features/transactions/MonthSelect'
import TransactionsGrid, {
	TxRow,
} from '@/components/features/transactions/TransactionsGrid'
import { useUserStore } from '@/stores'

export const mockRows: TxRow[] = [
	{
		id: 'tx_001',
		dateLabel: 'Jun 24, 2026',
		timeLabel: '10:42 AM',
		category: 'groceries',
		title: 'Weekly Groceries',
		subtitle: 'Essentials and snacks',
		accountLabel: 'Cash',
		accountIcon: 'cash',
		status: 'completed',
		amount: -142.5,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_002',
		dateLabel: 'Jun 23, 2026',
		timeLabel: '09:00 AM',
		category: 'salary',
		title: 'Salary Payment',
		subtitle: 'Monthly payroll',
		accountLabel: 'Checking …8832',
		accountIcon: 'bank',
		status: 'completed',
		amount: 3200,
		currency: 'USD',
		type: 'income',
	},
	{
		id: 'tx_003',
		dateLabel: 'Jun 22, 2026',
		timeLabel: '06:15 PM',
		category: 'transport',
		title: 'Grab Ride',
		subtitle: 'Trip to office',
		accountLabel: 'Visa …1024',
		accountIcon: 'card',
		status: 'pending',
		amount: -8.75,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_004',
		dateLabel: 'Jun 21, 2026',
		timeLabel: '08:30 PM',
		category: 'entertainment',
		title: 'Movie Tickets',
		subtitle: '2 seats',
		accountLabel: 'Visa …1024',
		accountIcon: 'card',
		status: 'completed',
		amount: -24.0,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_005',
		dateLabel: 'Jun 20, 2026',
		timeLabel: '12:15 PM',
		category: 'dining',
		title: 'Lunch',
		subtitle: 'Meal with friends',
		accountLabel: 'Amex Gold',
		accountIcon: 'card',
		status: 'completed',
		amount: -84.2,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_006',
		dateLabel: 'Jun 19, 2026',
		timeLabel: '07:10 PM',
		category: 'shopping',
		title: 'New Shoes',
		subtitle: 'Sports store',
		accountLabel: 'Visa …1024',
		accountIcon: 'card',
		status: 'completed',
		amount: -129.99,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_007',
		dateLabel: 'Jun 18, 2026',
		timeLabel: '05:40 PM',
		category: 'bills',
		title: 'Internet Bill',
		subtitle: 'Home broadband',
		accountLabel: 'Checking …8832',
		accountIcon: 'bank',
		status: 'completed',
		amount: -24.0,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_008',
		dateLabel: 'Jun 17, 2026',
		timeLabel: '11:05 AM',
		category: 'housing',
		title: 'Rent',
		subtitle: 'Monthly rent',
		accountLabel: 'Checking …8832',
		accountIcon: 'bank',
		status: 'completed',
		amount: -850.0,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_009',
		dateLabel: 'Jun 16, 2026',
		timeLabel: '03:25 PM',
		category: 'health',
		title: 'Pharmacy',
		subtitle: 'Vitamins & medicine',
		accountLabel: 'Cash',
		accountIcon: 'cash',
		status: 'completed',
		amount: -18.6,
		currency: 'USD',
		type: 'expense',
	},
	{
		id: 'tx_010',
		dateLabel: 'Jun 15, 2026',
		timeLabel: '02:10 PM',
		category: 'other',
		title: 'Refund',
		subtitle: 'Order adjustment',
		accountLabel: 'Chase Sapphire',
		accountIcon: 'card',
		status: 'completed',
		amount: 12.3,
		currency: 'USD',
		type: 'income',
	},
]

const Transactions = () => {
	const { user } = useUserStore()

	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='space-y-3'>
					<div className='text-3xl font-bold'>Transactions</div>
					<div className='text-lg font-medium'>
						Manage and track your financial activity in real-time
					</div>
				</div>

				<Button color='primary'>Add transaction</Button>
			</div>

			<div className='flex items-center gap-4'>
				<Input
					startContent={<SearchIcon />}
					placeholder='Search transactions...'
				/>

				<MonthSelect createdAt={user?.createdAt.toDate()!} />

				<CategorySelect />
			</div>

			<TransactionsGrid rows={mockRows} />
		</>
	)
}

export default Transactions
