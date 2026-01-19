import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'

interface ActiveLinkProps {
	href: string
	title: string
	icon: ReactNode
	isExpand: boolean
}

const ActiveLink = ({ href, title, icon, isExpand }: ActiveLinkProps) => {
	const pathname = usePathname()

	const isActive = useMemo(() => {
		if (href === '/' && pathname === '/') return true
		return pathname.startsWith(href)
	}, [href, pathname])

	return (
		<Link
			key={href}
			href={href}
			className={clsx(
				'flex items-center gap-4 transition duration-300 rounded-l-2xl hover:scale-105 hover:bg-primary',
				isActive && 'bg-primary font-semibold',
				isActive ? 'text-white' : 'text-muted-foreground',
				isActive && !isExpand ? 'p-3' : 'px-4 py-3',
			)}>
			{icon}
			{isExpand && title}
		</Link>
	)
}

export default ActiveLink
