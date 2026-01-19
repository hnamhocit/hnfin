import { auth } from '@/config'
import type { LoginValues, RegisterValues } from '@/schemas'
import { upsertUser } from '@/utils/upsertUser'
import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth'

export const authService = {
	async login(values: LoginValues) {
		const { user } = await signInWithEmailAndPassword(
			auth,
			values.email,
			values.password,
		)

		await upsertUser(user)
	},

	async signInWithProvider(provider: 'google' | 'facebook') {
		const _provider =
			provider === 'google' ?
				new GoogleAuthProvider()
			:	new FacebookAuthProvider()
		const { user } = await signInWithPopup(auth, _provider)

		await upsertUser(user)
	},

	async register(values: RegisterValues) {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password,
		)

		await upsertUser({ ...user, displayName: values.displayName })
	},

	async logout() {
		await auth.signOut()
	},
}
