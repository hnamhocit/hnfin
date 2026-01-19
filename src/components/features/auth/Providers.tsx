'use client'

import { addToast, Button } from '@heroui/react'

import { authService } from '@/services'
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'

const providers = [
	{
		name: 'google',
		logo: '/providers/google.webp',
	},
	{
		name: 'facebook',
		logo: '/providers/facebook.png',
	},
] as const

export default function Providers() {
	const [disabled, setDisabled] = useState(false)

	async function signInWithProvider(provider: 'google' | 'facebook') {
		setDisabled(true)

		try {
			await authService.signInWithProvider(provider)
		} catch (error) {
			if (error instanceof FirebaseError) {
				addToast({
					title: `Sign in with ${provider.toUpperCase()} failed`,
					description: error.message,
					color: 'danger',
				})
			}

			console.error('Signed in with provider failed: ', error)
		} finally {
			setDisabled(false)
		}
	}

	return (
		<div className='flex items-center gap-4'>
			{providers.map((provider) => (
				<Button
					disabled={disabled}
					key={provider.name}
					variant='bordered'
					className='flex-1'
					onPress={() => signInWithProvider(provider.name)}>
					<img
						src={provider.logo}
						alt={provider.name}
						className='w-5 h-5 mr-2 inline-block align-middle'
					/>
					{provider.name}
				</Button>
			))}
		</div>
	)
}
