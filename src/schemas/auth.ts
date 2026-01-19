import * as z from 'zod'

const passwordSchema = z
	.string()
	.nonempty('Password is required')
	.regex(
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
		'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
	)

const loginSchema = z.object({
	email: z.email('Invalid email address'),
	password: passwordSchema,
})

const registerSchema = z.object({
	email: z.email('Invalid email address'),
	password: passwordSchema,
	displayName: z.string().nonempty('Display name is required'),
})

type LoginValues = z.infer<typeof loginSchema>
type RegisterValues = z.infer<typeof registerSchema>

export { loginSchema, registerSchema, type LoginValues, type RegisterValues }
