'use client'

import { Button, Link } from '@heroui/react'
import { ArrowRight, Menu, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const shellClass = scrolled
		? 'bg-content1/65 backdrop-blur-md border-b border-foreground/10'
		: 'bg-transparent'

	return (
		<header className={`sticky top-0 z-50 ${shellClass}`}>
			<div className='container mx-auto px-6 h-16 flex items-center justify-between'>
				{/* Brand */}
				<div className='flex items-center gap-3'>
					<div className='w-10 h-10 rounded-2xl bg-foreground/10 flex items-center justify-center border border-foreground/10'>
						<Wallet className='w-5 h-5' />
					</div>
					<div className='flex flex-col leading-tight'>
						<span className='font-semibold tracking-tight'>
							HNFin
						</span>
						<span className='text-xs text-foreground/60 -mt-0.5'>
							Finance tracker
						</span>
					</div>
				</div>

				{/* Desktop nav */}
				<nav className='hidden md:flex items-center gap-8 text-sm'>
					<a
						href='#features'
						className='text-foreground/75 hover:text-foreground transition'>
						Features
					</a>
					<a
						href='#pricing'
						className='text-foreground/75 hover:text-foreground transition'>
						Pricing
					</a>
					<a
						href='#faq'
						className='text-foreground/75 hover:text-foreground transition'>
						FAQ
					</a>
				</nav>

				{/* Actions */}
				<Button
					as={Link}
					href='/enter'
					color='primary'
					endContent={<ArrowRight className='w-4 h-4' />}
					className='bg-[linear-gradient(90deg,#10B981,#34D399)] shadow-[0_10px_30px_-12px_rgba(16,185,129,0.55)]'>
					Get started
				</Button>

				{/* Mobile menu */}
				<div className='md:hidden flex items-center gap-2'>
					<Button
						isIconOnly
						variant='flat'
						className='bg-foreground/5 border border-foreground/10'
						onPress={() => setOpen((v) => !v)}
						aria-label='Open menu'>
						<Menu className='w-5 h-5' />
					</Button>
				</div>
			</div>

			{/* Mobile dropdown */}
			{open && (
				<div className='md:hidden border-t border-foreground/10 bg-content1/70 backdrop-blur-md'>
					<div className='container mx-auto px-6 py-4 flex flex-col gap-3'>
						<>
							<a
								href='#features'
								className='py-2 text-foreground/80'
								onClick={() => setOpen(false)}>
								Features
							</a>
							<a
								href='#pricing'
								className='py-2 text-foreground/80'
								onClick={() => setOpen(false)}>
								Pricing
							</a>
							<a
								href='#faq'
								className='py-2 text-foreground/80'
								onClick={() => setOpen(false)}>
								FAQ
							</a>
							<div className='h-px bg-foreground/10 my-1' />
						</>

						<Button
							as={Link}
							href='/enter'
							color='primary'
							endContent={<ArrowRight className='w-4 h-4' />}
							className='bg-[linear-gradient(90deg,#10B981,#34D399)] shadow-[0_10px_30px_-12px_rgba(16,185,129,0.55)]'
							onPress={() => {
								setOpen(false)
							}}>
							Get started
						</Button>
					</div>
				</div>
			)}
		</header>
	)
}
