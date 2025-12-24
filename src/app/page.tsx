'use client'

import { Button } from '@/components/ui/button'
import { authService } from '@/services'

export default function Home() {
	return (
		<div className='p-6'>
			<Button onClick={authService.logout}>Logout</Button>
		</div>
	)
}
