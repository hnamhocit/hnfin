'use client'

import { addToast, Button, Input, Link } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { loginSchema, type LoginValues } from '@/schemas'
import { authService } from '@/services'
import { FirebaseError } from 'firebase/app'

export default function Login() {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = handleSubmit(async (values) => {
		try {
			await authService.login(values)
		} catch (error) {
			if (error instanceof FirebaseError) {
				addToast({
					title: 'Login failed',
					description: error.message,
					color: 'danger',
				})
			}

			console.error('Login failed:', error)
		}
	})

	return (
		<form
			className='space-y-7'
			onSubmit={onSubmit}>
			<Controller
				control={control}
				name='email'
				render={({ field }) => (
					<Input
						label='Email'
						placeholder='Enter your email'
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
						placeholder='Enter your password'
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

			<div className='flex justify-end'>
				<Link
					href='/enter/forgot-password'
					className='text-xs text-primary hover:underline'>
					Forgot password?
				</Link>
			</div>

			<Button
				type='submit'
				fullWidth
				color='primary'
				isLoading={isSubmitting}
				isDisabled={isSubmitting}>
				Sign in
			</Button>
		</form>
	)
}
