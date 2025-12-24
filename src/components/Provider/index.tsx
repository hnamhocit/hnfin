'use client'

import { ReactNode, useEffect, useRef } from 'react'

import { auth, db, doc, onAuthStateChanged, onSnapshot } from '@/config'
import { IUser } from '@/interfaces'
import { useUserStore } from '@/stores'
import Loading from '../Loading'
import EnterPage from './Enter'

const Provider = ({ children }: { children: ReactNode }) => {
	const { isLoading, user, setUser, setIsLoading } = useUserStore()
	const unsubscribeProfileRef = useRef<null | (() => void)>(null)

	useEffect(() => {
		const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
			unsubscribeProfileRef.current?.()
			unsubscribeProfileRef.current = null

			if (!user) {
				setUser(null)
				setIsLoading(false)
				return
			}

			const userRef = doc(db, 'users', user.uid)

			unsubscribeProfileRef.current = onSnapshot(
				userRef,
				(snapshot) => {
					if (snapshot.exists()) {
						setUser(snapshot.data() as IUser)
					}

					setIsLoading(false)
				},
				(error) => {
					console.error('[User snapshot]', error)
					setUser(null)
				},
			)
		})

		return () => {
			unsubscribeAuth()
			unsubscribeProfileRef.current?.()
		}
	}, [setIsLoading, setUser])

	if (isLoading) {
		return (
			<div className='h-screen'>
				<Loading />
			</div>
		)
	}

	if (!user) return <EnterPage />

	return children
}

export default Provider
