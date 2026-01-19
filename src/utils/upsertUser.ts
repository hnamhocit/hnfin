import type { User } from 'firebase/auth'
import { doc, getDoc, setDoc, Timestamp, updateDoc } from 'firebase/firestore'

import { db } from '@/config'
import type { IUser } from '@/interfaces'

export const upsertUser = async (user: User) => {
	const snapshot = await getDoc(doc(db, 'users', user.uid))

	const now = Timestamp.now()

	if (snapshot.exists()) {
		await updateDoc(doc(db, 'users', user.uid), {
			updatedAt: now,
		})

		return
	}

	const payload: IUser = {
		id: user.uid,
		email: user.email!,
		displayName: user.displayName || 'Anonymous',
		photoURL: user.photoURL,
		createdAt: now,
		updatedAt: now,
	}

	await setDoc(doc(db, 'users', user.uid), payload)
}
