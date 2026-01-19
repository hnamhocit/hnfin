import { ReactNode } from 'react'

import Sidebar from '../components/Sidebar'

const Private = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex min-h-screen overflow-hidden'>
			<Sidebar />

			<div className='relative flex-1 p-6 space-y-12 overflow-y-scroll'>
				{children}
			</div>
		</div>
	)
}

export default Private
