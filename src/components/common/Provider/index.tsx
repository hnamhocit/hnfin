'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { onAuthStateChanged, Unsubscribe } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { Loader2Icon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useRef } from 'react'

import { auth, db } from '@/config'
import { IUser } from '@/interfaces'
import { useUserStore } from '@/stores'

export default function Provider({ children }: { children: ReactNode }) {
	const { setIsLoading, setUser, isLoading, user } = useUserStore()
	const router = useRouter()
	const pathname = usePathname()
	const snapshotRef = useRef<Unsubscribe | null>(null)

	useEffect(() => {
		if (snapshotRef.current) {
			snapshotRef.current()
			snapshotRef.current = null
		}

		const unsubscriber = onAuthStateChanged(auth, (user) => {
			if (user) {
				snapshotRef.current = onSnapshot(
					doc(db, 'users', user.uid),
					(snapshot) => {
						const userData = snapshot.data() as IUser
						setUser(userData)
					},
				)

				setIsLoading(false)
			} else {
				setUser(null)
				setIsLoading(false)
			}
		})

		return () => {
			unsubscriber()
			if (snapshotRef.current) snapshotRef.current()
		}
	}, [])

	useEffect(() => {
		if (!isLoading) {
			const publicPaths = ['/', '/enter', '/forgot-password']
			const isPublicPath = publicPaths.includes(pathname)

			if (!user && !isPublicPath) {
				router.replace('/enter')
				return
			}

			if (user && isPublicPath) {
				router.replace('/dashboard')
			}
		}
	}, [isLoading, pathname, router, user])

	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<Loader2Icon
					className='animate-spin text-primary'
					size={64}
				/>
			</div>
		)
	}

	return (
		<HeroUIProvider>
			<main className='money-dark text-foreground bg-[radial-gradient(520px_circle_at_0%_0%,rgba(16,185,129,0.18),transparent_62%),linear-gradient(135deg,#06322c,#04231f_55%,#031917)] min-h-screen'>
				{children}
			</main>
			<ToastProvider />
		</HeroUIProvider>
	)
}
