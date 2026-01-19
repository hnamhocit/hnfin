'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

import Private from '@/layouts/Private'
import { useUserStore } from '@/stores'

const PrivateLayout = ({ children }: { children: ReactNode }) => {
	const { isLoading, user } = useUserStore()
	const router = useRouter()

	useEffect(() => {
		if (!isLoading && !user) router.replace('/enter')
	}, [isLoading, user, router])

	if (isLoading) return null
	if (!user) return null

	return <Private>{children}</Private>
}

export default PrivateLayout
