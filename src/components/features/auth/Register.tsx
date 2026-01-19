'use client'

import { addToast, Button, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { registerSchema, type RegisterValues } from '@/schemas'
import { authService } from '@/services'
import { FirebaseError } from 'firebase/app'

export default function Register() {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			displayName: '',
			email: '',
			password: '',
		},
	})

	const onSubmit = handleSubmit(async (values) => {
		try {
			await authService.register(values)
		} catch (error) {
			if (error instanceof FirebaseError) {
				addToast({
					title: 'Register failed',
					description: error.message,
					color: 'danger',
				})
			}

			console.error('Register failed:', error)
		}
	})

	return (
		<form
			className='space-y-7'
			onSubmit={onSubmit}>
			<Controller
				control={control}
				name='displayName'
				render={({ field }) => (
					<Input
						label='Full name'
						placeholder='Nguyễn Văn A'
						type='text'
						variant='bordered'
						value={field.value}
						onBlur={field.onBlur}
						onValueChange={field.onChange}
						isInvalid={Boolean(errors.displayName)}
						errorMessage={errors.displayName?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name='email'
				render={({ field }) => (
					<Input
						label='Email'
						placeholder='you@company.com'
						type='email'
						variant='bordered'
						value={field.value}
						onBlur={field.onBlur}
						onValueChange={field.onChange}
						isInvalid={Boolean(errors.email)}
						errorMessage={errors.email?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name='password'
				render={({ field }) => (
					<Input
						label='Password'
						placeholder='Create a password'
						type='password'
						variant='bordered'
						value={field.value}
						onBlur={field.onBlur}
						onValueChange={field.onChange}
						isInvalid={Boolean(errors.password)}
						errorMessage={errors.password?.message}
					/>
				)}
			/>

			<Button
				type='submit'
				className='w-full'
				color='primary'
				isLoading={isSubmitting}
				isDisabled={isSubmitting}>
				Create account
			</Button>
		</form>
	)
}
