'use client'

import {
	Badge,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@heroui/react'
import { Bell, Calendar, ChevronDown } from 'lucide-react'

export default function OverviewHeader() {
	return (
		<header className='absolute top-0 left-0 z-20 w-full border-b bg-primary/20 border-neutral-500'>
			<div className='flex items-center justify-between px-6 py-4'>
				<h1 className='text-2xl font-semibold text-foreground'>
					Overview
				</h1>

				{/* Right */}
				<div className='flex items-center gap-3'>
					{/* Date dropdown */}
					<Dropdown placement='bottom-end'>
						<DropdownTrigger>
							<Button
								variant='flat'
								size='sm'
								startContent={<Calendar className='w-4 h-4' />}
								endContent={
									<ChevronDown className='w-4 h-4 opacity-70' />
								}>
								Oct 2023
							</Button>
						</DropdownTrigger>

						<DropdownMenu aria-label='Select month'>
							<DropdownItem key='oct-2023'>Oct 2023</DropdownItem>
							<DropdownItem key='sep-2023'>Sep 2023</DropdownItem>
							<DropdownItem key='aug-2023'>Aug 2023</DropdownItem>
						</DropdownMenu>
					</Dropdown>

					{/* Notification */}
					<Badge
						content=''
						color='danger'
						shape='circle'
						placement='top-right'>
						<Button
							isIconOnly
							size='sm'
							variant='flat'
							aria-label='Notifications'>
							<Bell className='w-4 h-4' />
						</Button>
					</Badge>
				</div>
			</div>
		</header>
	)
}
