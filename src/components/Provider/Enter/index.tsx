import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import {
	auth,
	facebookProvider,
	githubProvider,
	googleProvider,
	signInWithPopup,
} from '@/config'
import { upsertUser } from '@/utils'
import Image from 'next/image'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function EnterPage() {
	const tabOrder = useMemo(() => ['signin', 'register'] as const, [])
	type TabKey = (typeof tabOrder)[number]

	const [tab, setTab] = useState<TabKey>('signin')
	const [disabled, setDisabled] = useState(false)
	const prevTab = useRef<TabKey>('signin')

	const dir = useMemo(() => {
		const prevIdx = tabOrder.indexOf(prevTab.current)
		const nextIdx = tabOrder.indexOf(tab)
		return nextIdx > prevIdx ? 1 : -1
	}, [tab, tabOrder])

	useEffect(() => {
		prevTab.current = tab
	}, [tab])

	const slideVariants = {
		initial: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
		animate: { x: 0, opacity: 1 },
		exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
	}

	const signInWithProvider = async (
		provider: 'github' | 'google' | 'facebook',
	) => {
		setDisabled(true)

		try {
			let _provider: any = null

			if (provider === 'github') {
				_provider = githubProvider
			} else if (provider === 'google') {
				_provider = googleProvider
			} else {
				_provider = facebookProvider
			}

			const { user } = await signInWithPopup(auth, _provider)
			await upsertUser(user)
		} catch (error) {
			console.error('Error during sign-in with provider:', error)
		} finally {
			setDisabled(false)
		}
	}

	return (
		<main className='min-h-screen bg-[#013626]'>
			<div className='mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12'>
				<div className='grid w-full items-center gap-10 md:grid-cols-2'>
					<section className='hidden space-y-3 text-white md:block'>
						<Image
							src='/logo.png'
							alt='HNFin Logo'
							width={80}
							height={80}
							className='rounded-full border border-neutral-600 shadow'
						/>

						<h1 className='text-3xl font-semibold tracking-tight'>
							Welcome to{' '}
							<span className='inline-block rounded-md bg-primary px-2 py-1 tracking-wider text-white'>
								hnfin
							</span>
						</h1>

						<div className='text-slate-200'>
							Young man, they don't think highly of you, but
							giving up isn't in your nature.
						</div>
					</section>

					<section>
						<Card className='mx-auto w-full max-w-md'>
							<CardHeader>
								<CardTitle className='text-xl'>Enter</CardTitle>
								<CardDescription>
									Continue with social login or email.
								</CardDescription>
							</CardHeader>

							<CardContent className='space-y-6'>
								{/* SOCIAL */}
								<TooltipProvider delayDuration={120}>
									<div className='flex gap-3'>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													disabled={disabled}
													type='button'
													className='flex-1 justify-center bg-neutral-950 py-6! hover:bg-neutral-900'
													onClick={() =>
														signInWithProvider(
															'github',
														)
													}>
													<Image
														src='/providers/github.png'
														alt='GitHub'
														width={24}
														height={24}
														className='rounded-full'
													/>
												</Button>
											</TooltipTrigger>

											<TooltipContent side='top'>
												Continue with GitHub
											</TooltipContent>
										</Tooltip>

										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													disabled={disabled}
													type='button'
													className='flex-1 justify-center border border-input bg-white py-6! text-foreground hover:bg-muted'
													variant='outline'
													onClick={() =>
														signInWithProvider(
															'google',
														)
													}>
													<Image
														src='/providers/google.webp'
														alt='Google'
														width={24}
														height={24}
													/>
												</Button>
											</TooltipTrigger>

											<TooltipContent side='top'>
												Continue with Google
											</TooltipContent>
										</Tooltip>

										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													disabled={disabled}
													type='button'
													className='flex-1 justify-center bg-[#1877F2] py-6! text-white hover:bg-[#166FE5]'
													variant='default'
													onClick={() =>
														signInWithProvider(
															'facebook',
														)
													}>
													<Image
														src='/providers/facebook.png'
														alt='Facebook'
														width={24}
														height={24}
													/>
												</Button>
											</TooltipTrigger>

											<TooltipContent side='top'>
												Continue with Facebook
											</TooltipContent>
										</Tooltip>
									</div>
								</TooltipProvider>

								<div className='flex items-center gap-3'>
									<Separator className='flex-1' />
									<span className='text-xs text-muted-foreground'>
										or
									</span>
									<Separator className='flex-1' />
								</div>

								{/* EMAIL TABS */}

								<motion.div
									className='relative mt-6 overflow-hidden'
									layout
									transition={{
										duration: 0.22,
										ease: 'easeOut',
									}}>
									<AnimatePresence
										mode='wait'
										custom={dir}
										initial={false}>
										{tab === 'signin' ? (
											<motion.div
												key='signin'
												custom={dir}
												variants={slideVariants}
												initial='initial'
												animate='animate'
												exit='exit'
												className='space-y-4'
												transition={{
													duration: 0.22,
													ease: 'easeOut',
												}}
												layout>
												<LoginForm
													disabled={disabled}
													setDisabled={setDisabled}
												/>
											</motion.div>
										) : (
											<motion.div
												key='register'
												custom={dir}
												variants={slideVariants}
												initial='initial'
												animate='animate'
												className='space-y-4'
												exit='exit'
												transition={{
													duration: 0.22,
													ease: 'easeOut',
												}}
												layout>
												<RegisterForm
													disabled={disabled}
													setDisabled={setDisabled}
												/>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>

								{/* ✅ TERMS/PRIVACY: chỉ 1 lần, không duplicate */}
								<p className='text-xs text-muted-foreground'>
									By continuing, you agree to our{' '}
									<Link
										className='text-primary underline-offset-4 hover:underline'
										href='#'>
										Terms
									</Link>{' '}
									and{' '}
									<Link
										className='text-primary underline-offset-4 hover:underline'
										href='#'>
										Privacy Policy
									</Link>
									.
								</p>
							</CardContent>

							<CardFooter className='flex flex-col gap-2'>
								{/* ✅ Footer chuyển theo tab */}
								{tab === 'signin' ? (
									<p className='text-xs text-muted-foreground'>
										Don&apos;t have an account?{' '}
										<button
											type='button'
											onClick={() => setTab('register')}
											className='text-primary underline-offset-4 hover:underline'>
											Register
										</button>
									</p>
								) : (
									<p className='text-xs text-muted-foreground'>
										Already have an account?{' '}
										<button
											type='button'
											onClick={() => setTab('signin')}
											className='text-primary underline-offset-4 hover:underline'>
											Login
										</button>
									</p>
								)}
							</CardFooter>
						</Card>
					</section>
				</div>
			</div>
		</main>
	)
}
