'use client'

import { Button } from '@/components/ui/button'
import { authService } from '@/services'

export default function DashboardPage() {
	return (
		<div className='p-4 space-y-4'>
			<h1 className='text-2xl font-bold'>Dashboard</h1>
			<p>Welcome to your dashboard!</p>
			<Button onClick={authService.logout}>Logout</Button>
		</div>
	)
}
