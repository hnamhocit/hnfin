'use client'

import { useUserStore } from '@/stores'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
	const { user } = useUserStore()
	const router = useRouter()

	if (!user) {
		router.replace('/enter')
		return null
	}

	return children
}

export default ProtectedLayout
