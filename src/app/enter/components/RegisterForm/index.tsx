import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RegisterInput, registerSchema } from '@/schemas'
import { authService } from '@/services'

interface FormProps {
	disabled: boolean
	setDisabled: (disabled: boolean) => void
}

export default function RegisterForm({ disabled, setDisabled }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			displayName: '',
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: RegisterInput) => {
		setDisabled(true)

		try {
			await authService.register(data)
		} catch (error) {
			console.error('Error during registration:', error)
		} finally {
			setDisabled(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='space-y-4'>
			<Field>
				<FieldLabel>Full name</FieldLabel>

				<Input
					id='displayName'
					{...register('displayName')}
				/>

				<FieldError>{errors.displayName?.message}</FieldError>
			</Field>

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

			<Button
				type='submit'
				disabled={disabled}
				className='w-full'
				variant='default'>
				Create account
			</Button>
		</form>
	)
}
