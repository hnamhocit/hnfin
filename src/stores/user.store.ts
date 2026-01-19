import { create } from 'zustand'

import { IUser } from '@/interfaces'

interface UserStore {
	user: IUser | null
	isLoading: boolean
	setUser: (user: IUser | null) => void
	setIsLoading: (isLoading: boolean) => void
}

export const useUserStore = create<UserStore>((set) => ({
	user: null,
	isLoading: true,
	setUser: (user) => set(() => ({ user })),
	setIsLoading: (isLoading) => set(() => ({ isLoading })),
}))
