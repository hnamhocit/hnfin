import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoginInput, loginSchema } from '@/schemas'
import { authService } from '@/services'

interface FormProps {
	disabled: boolean
	setDisabled: (disabled: boolean) => void
}

export default function LoginForm({ disabled, setDisabled }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: LoginInput) => {
		setDisabled(true)

		try {
			await authService.login(data)
		} catch (error) {
			console.error('Error during email sign-in:', error)
		} finally {
			setDisabled(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='space-y-4'>
			<Field>
				<FieldLabel>Email</FieldLabel>

				<Input
					id='email'
					type='email'
					{...register('email')}
				/>

				<FieldError>{errors.email?.message}</FieldError>
			</Field>

			<Field>
				<FieldLabel>Password</FieldLabel>

				<Input
					id='password'
					type='password'
					{...register('password')}
				/>

				<FieldError>{errors.password?.message}</FieldError>
			</Field>

			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Checkbox
						id='remember'
						disabled={disabled}
					/>

					<Label
						htmlFor='remember'
						className='text-sm text-muted-foreground'>
						Remember me
					</Label>
				</div>

				<Link
					className='text-sm text-primary underline-offset-4 hover:underline'
					href='#'>
					Forgot password?
				</Link>
			</div>

			<Button
				type='submit'
				disabled={disabled}
				className='w-full'>
				Sign in
			</Button>
		</form>
	)
}
