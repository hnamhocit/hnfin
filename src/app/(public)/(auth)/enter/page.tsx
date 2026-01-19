'use client'

import { useState } from 'react'

import Login from '@/components/features/auth/Login'
import Providers from '@/components/features/auth/Providers'
import Register from '@/components/features/auth/Register'
import Link from 'next/link'

type Tab = 'login' | 'register'

export default function EnterPage() {
	const [tab, setTab] = useState<Tab>('login')

	const toggleTab = () => {
		setTab((prev) => (prev === 'login' ? 'register' : 'login'))
	}

	return (
		<div className='flex items-center justify-center min-h-screen p-6'>
			<div className='p-6 space-y-7 w-sm'>
				{/* Header */}
				<div className='space-y-3 text-center'>
					<Link
						href='/'
						className='block'>
						<img
							src='/logo.png'
							alt='HNFin'
							className='object-cover w-20 h-20 mx-auto rounded-full'
						/>
					</Link>

					<div className='text-2xl font-semibold'>HNFin</div>

					<div className='text-sm text-muted-foreground'>
						Manage your finances simply
					</div>
				</div>

				<Providers />

				{tab === 'login' ?
					<Login />
				:	<Register />}

				<div className='text-xs text-center text-muted-foreground'>
					<span>{tab === 'login' ? 'Already' : "Don't"} </span>
					have an account?{' '}
					<button
						type='button'
						className='text-primary hover:underline'
						onClick={toggleTab}>
						{tab === 'login' ? 'Create one' : ' Sign in instead '}
					</button>
				</div>
			</div>
		</div>
	)
}
