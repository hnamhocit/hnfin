import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@heroui/react'
import {
	ChartPie,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	GoalIcon,
	LayoutDashboardIcon,
	ReceiptIcon,
	Settings2Icon,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { authService } from '@/services'
import { useUserStore } from '@/stores'
import clsx from 'clsx'
import Image from 'next/image'
import ActiveLink from './ActiveLink'

const pages = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: <LayoutDashboardIcon />,
	},
	{
		title: 'Transactions',
		href: '/transactions',
		icon: <ReceiptIcon />,
	},
	{
		title: 'Goals',
		href: '/goals',
		icon: <GoalIcon />,
	},
	{
		title: 'Reports',
		href: '/reports',
		icon: <ChartPie />,
	},
	{
		title: 'Settings',
		href: '/settings',
		icon: <Settings2Icon />,
	},
]

const Sidebar = () => {
	const { user } = useUserStore()
	const [isExpand, setIsExpand] = useState(true)

	return (
		<div
			className={clsx(
				'flex flex-col transition-all duration-300 border-r shrink-0 bg-primary/20 border-neutral-500',
				isExpand ? 'w-96' : 'w-20',
			)}>
			<div className='h-16 p-4 border-b border-neutral-500'>
				<div
					className={clsx(
						'flex items-center h-full',
						isExpand ? 'justify-between' : 'justify-center',
					)}>
					{isExpand && (
						<div className='flex items-center gap-4'>
							<Link href='/dashboard'>
								<img
									src='/logo.svg'
									alt='HNFin'
									className='object-cover w-10 h-10 rounded-full bg-primary'
								/>
							</Link>

							<div className='text-lg font-semibold'>HNFin</div>
						</div>
					)}

					<Button
						isIconOnly
						variant='bordered'
						onPress={() => setIsExpand(!isExpand)}>
						{isExpand ?
							<ChevronLeftIcon />
						:	<ChevronRightIcon />}
					</Button>
				</div>
			</div>

			<div className='flex flex-col flex-1 gap-4 py-4 pl-4 overflow-hidden overflow-y-scroll hide-scrollbar'>
				{pages.map((page) => (
					<ActiveLink
						key={page.href}
						{...page}
						isExpand={isExpand}
					/>
				))}
			</div>

			<div className='p-4 border-t border-neutral-500'>
				<Dropdown>
					<DropdownTrigger>
						<div
							className={clsx(
								'flex items-center h-full',
								isExpand ? 'justify-between' : 'justify-center',
							)}>
							<div className='flex items-center gap-4'>
								<Image
									src={user?.photoURL ?? ''}
									alt={user?.displayName ?? ''}
									width={32}
									height={32}
									className='rounded-full'
								/>

								{isExpand && (
									<div>
										<div className='font-semibold'>
											{user?.displayName}
										</div>
										<div className='text-xs'>Free Plan</div>
									</div>
								)}
							</div>

							{isExpand && <ChevronUpIcon />}
						</div>
					</DropdownTrigger>

					<DropdownMenu>
						<DropdownItem
							key='logout'
							onPress={authService.logout}
							color='danger'>
							Logout
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	)
}

export default Sidebar
