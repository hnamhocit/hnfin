'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function LandingPage() {
	return (
		<main className='min-h-screen bg-background'>
			{/* Header */}
			<header className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur'>
				<div className='mx-auto flex items-center justify-between container px-4 py-3'>
					<Link
						href='/'
						className='flex items-center gap-2'>
						<Image
							src='/logo.png'
							alt='HNFin Logo'
							width={36}
							height={36}
							className='rounded-full border border-neutral-600 shadow'
							priority
						/>

						<div className='leading-tight'>
							<div className='text-sm font-semibold'>hnfin</div>
							<div className='text-xs text-muted-foreground'>
								Personal finance
							</div>
						</div>
					</Link>

					<nav className='hidden items-center gap-6 md:flex'>
						<a
							href='#features'
							className='text-sm text-muted-foreground hover:text-foreground'>
							Features
						</a>
						<a
							href='#how-it-works'
							className='text-sm text-muted-foreground hover:text-foreground'>
							How it works
						</a>
						<a
							href='#faq'
							className='text-sm text-muted-foreground hover:text-foreground'>
							FAQ
						</a>
					</nav>

					<div className='flex items-center gap-2'>
						<Button
							variant='ghost'
							asChild>
							<Link href='/enter'>Sign in</Link>
						</Button>
						<Button asChild>
							<Link href='/enter'>Get started free</Link>
						</Button>
					</div>
				</div>
			</header>

			{/* Hero */}
			<section className='mx-auto container px-4 py-14 md:py-20'>
				<div className='grid items-center gap-10 md:grid-cols-2'>
					<div>
						<div className='flex flex-wrap items-center gap-2'>
							<Badge variant='secondary'>Simple</Badge>
							<Badge variant='secondary'>Visual</Badge>
							<Badge variant='secondary'>Cashflow-first</Badge>
						</div>

						<h1 className='mt-4 text-3xl font-semibold tracking-tight md:text-5xl'>
							Track spending smarter.
							<br className='hidden md:block' />
							Understand your cashflow.
							<br className='hidden md:block' />
							Stay in control.
						</h1>

						<p className='mt-4 text-base text-muted-foreground md:text-lg'>
							hnfin helps you track income and expenses, manage
							budgets, and spot spending patterns so you can make
							better financial decisions.
						</p>

						<div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
							<Button
								size='lg'
								asChild>
								<Link href='/enter'>Create a free account</Link>
							</Button>
							<Button
								size='lg'
								variant='outline'
								asChild>
								<Link href='#features'>See features</Link>
							</Button>
						</div>

						<p className='mt-4 text-sm text-muted-foreground'>
							No ads. Minimal experience. Your personal data stays
							protected.
						</p>
					</div>

					{/* Visual mock */}
					<div className='relative'>
						<div className='absolute -inset-2 -z-10 rounded-3xl bg-muted/40 blur-2xl' />
						<Card className='rounded-3xl'>
							<CardHeader>
								<CardTitle className='flex items-center justify-between'>
									<span>This month overview</span>
									<Badge>Live</Badge>
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-3 gap-3'>
									<div className='rounded-2xl border p-3'>
										<div className='text-xs text-muted-foreground'>
											Income
										</div>
										<div className='mt-1 text-lg font-semibold'>
											+ 18,500,000
										</div>
									</div>
									<div className='rounded-2xl border p-3'>
										<div className='text-xs text-muted-foreground'>
											Expenses
										</div>
										<div className='mt-1 text-lg font-semibold'>
											- 9,240,000
										</div>
									</div>
									<div className='rounded-2xl border p-3'>
										<div className='text-xs text-muted-foreground'>
											Balance
										</div>
										<div className='mt-1 text-lg font-semibold'>
											9,260,000
										</div>
									</div>
								</div>

								<div className='rounded-2xl border p-4'>
									<div className='flex items-center justify-between'>
										<div>
											<div className='text-sm font-medium'>
												Food budget
											</div>
											<div className='text-xs text-muted-foreground'>
												62% used
											</div>
										</div>
										<Badge variant='secondary'>
											On track
										</Badge>
									</div>
									<div className='mt-3 h-2 w-full overflow-hidden rounded-full bg-muted'>
										<div className='h-full w-[62%] rounded-full bg-primary' />
									</div>
									<div className='mt-2 flex justify-between text-xs text-muted-foreground'>
										<span>3,100,000 / 5,000,000</span>
										<span>1,900,000 left</span>
									</div>
								</div>

								<div className='rounded-2xl border p-4'>
									<div className='text-sm font-medium'>
										Recent transactions
									</div>
									<div className='mt-3 space-y-2 text-sm'>
										<div className='flex items-center justify-between'>
											<span className='text-muted-foreground'>
												Coffee
											</span>
											<span className='font-medium'>
												-45,000
											</span>
										</div>
										<div className='flex items-center justify-between'>
											<span className='text-muted-foreground'>
												Groceries
											</span>
											<span className='font-medium'>
												-320,000
											</span>
										</div>
										<div className='flex items-center justify-between'>
											<span className='text-muted-foreground'>
												Salary
											</span>
											<span className='font-medium'>
												+18,500,000
											</span>
										</div>
									</div>
								</div>

								<div className='flex gap-2 flex-wrap'>
									<Button
										className='w-full'
										asChild>
										<Link href='/enter'>Get started</Link>
									</Button>
									<Button
										className='w-full'
										variant='outline'
										asChild>
										<Link href='/enter'>View demo</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			{/* Problems */}
			<section className='mx-auto container px-4 py-14'>
				<div className='grid gap-8 md:grid-cols-2'>
					<div>
						<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
							Stop wondering where your money went
						</h2>
						<p className='mt-3 text-muted-foreground'>
							hnfin focuses on three things: accurate tracking,
							clear categorization, and actionable insights to
							keep your budget under control.
						</p>
					</div>

					<div className='grid gap-3 sm:grid-cols-2'>
						<Card className='rounded-2xl'>
							<CardHeader>
								<CardTitle className='text-base'>
									No clear overview
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								Expenses are scattered, making it hard to see
								what’s driving your spending.
							</CardContent>
						</Card>

						<Card className='rounded-2xl'>
							<CardHeader>
								<CardTitle className='text-base'>
									Budget slips silently
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								Without limits per category, it’s easy to go
								over plan without noticing.
							</CardContent>
						</Card>

						<Card className='rounded-2xl'>
							<CardHeader>
								<CardTitle className='text-base'>
									Inconsistent logging
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								Skip a few days and your month becomes
								impossible to reconcile.
							</CardContent>
						</Card>

						<Card className='rounded-2xl'>
							<CardHeader>
								<CardTitle className='text-base'>
									Hard to take action
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-muted-foreground'>
								Data is there, but you lack guidance on what to
								improve next.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Features */}
			<section
				id='features'
				className='mx-auto container px-4 pb-14'>
				<div className='flex items-end justify-between gap-4'>
					<div>
						<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
							Core features
						</h2>
						<p className='mt-2 text-muted-foreground'>
							Powerful enough for daily use, simple enough to stay
							consistent.
						</p>
					</div>
					<Button
						variant='outline'
						asChild
						className='hidden sm:inline-flex'>
						<Link href='/enter'>Try it</Link>
					</Button>
				</div>

				<div className='mt-8 grid gap-4 md:grid-cols-3'>
					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Income & expense tracking
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Quick entry, clear categories, and searchable
							history when you need it.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Category budgets
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Set limits, monitor usage, and get alerted before
							you overspend.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Spending insights
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Identify patterns over time to optimize your
							personal financial plan.
						</CardContent>
					</Card>

					<Card className='rounded-2xl md:col-span-2'>
						<CardHeader>
							<CardTitle className='text-base'>
								Visual monthly snapshot
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Income, expenses, balance, top categories, and
							notable transactions — at a glance.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Privacy & security
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Your financial data is private. Designed with
							user-level isolation and secure access.
						</CardContent>
					</Card>
				</div>
			</section>

			<Separator />

			{/* How it works */}
			<section
				id='how-it-works'
				className='mx-auto container px-4 py-14'>
				<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
					How it works
				</h2>
				<p className='mt-2 text-muted-foreground'>
					Three steps to get into a solid money routine.
				</p>

				<div className='mt-8 grid gap-4 md:grid-cols-3'>
					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								1) Create an account
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Sign up with email and set up your categories in
							minutes.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								2) Log transactions
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Add income/expense in seconds. Everything updates in
							real time.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								3) Review & improve
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Track budgets, spot trends, and adjust spending with
							intention.
						</CardContent>
					</Card>
				</div>
			</section>

			{/* FAQ */}
			<section
				id='faq'
				className='mx-auto container px-4 pb-14'>
				<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
					FAQ
				</h2>

				<div className='mt-6 grid gap-4 md:grid-cols-2'>
					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Is hnfin free?
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Yes. You can start for free and use the core
							features to manage personal spending.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Is my data shared?
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							No. Your financial data is private and isolated per
							user account.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Where should I start?
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Set up categories, enter a few recent transactions,
							then create monthly budgets.
						</CardContent>
					</Card>

					<Card className='rounded-2xl'>
						<CardHeader>
							<CardTitle className='text-base'>
								Who is hnfin for?
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-muted-foreground'>
							Anyone who wants clarity on cashflow, budgets, and a
							consistent money habit.
						</CardContent>
					</Card>
				</div>

				<div className='mt-8 rounded-3xl border p-6 md:p-8'>
					<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
						<div>
							<div className='text-lg font-semibold'>
								Ready to take control?
							</div>
							<div className='mt-1 text-sm text-muted-foreground'>
								Start today: track — categorize — budget.
							</div>
						</div>
						<div className='flex gap-2'>
							<Button
								size='lg'
								asChild>
								<Link href='/enter'>Create account</Link>
							</Button>
							<Button
								size='lg'
								variant='outline'
								asChild>
								<Link href='/enter'>Sign in</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='border-t bg-background'>
				<div className='container mx-auto px-4 py-12'>
					<div className='grid gap-10 md:grid-cols-4'>
						{/* Brand */}
						<div className='space-y-3'>
							<div className='flex items-center gap-2'>
								<Image
									src='/logo.png'
									alt='HNFin Logo'
									width={32}
									height={32}
									className='rounded-full border border-neutral-600 shadow'
								/>
								<div>
									<div className='text-sm font-semibold'>
										hnfin
									</div>
									<div className='text-xs text-muted-foreground'>
										Personal finance manager
									</div>
								</div>
							</div>

							<p className='text-sm text-muted-foreground leading-relaxed'>
								A simple personal finance app to track cashflow,
								manage budgets, and build better money habits.
							</p>
						</div>
						{/* Product */}
						<div>
							<div className='text-sm font-semibold'>Product</div>
							<ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
								<li>
									<Link
										href='/'
										className='hover:text-foreground'>
										Overview
									</Link>
								</li>
								<li>
									<Link
										href='#features'
										className='hover:text-foreground'>
										Features
									</Link>
								</li>
								<li>
									<Link
										href='/enter'
										className='hover:text-foreground'>
										Get started
									</Link>
								</li>
							</ul>
						</div>
						{/* Resources */}
						<div>
							<div className='text-sm font-semibold'>
								Resources
							</div>
							<ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
								<li>
									<Link
										href='/blog'
										className='hover:text-foreground'>
										Finance blog
									</Link>
								</li>
								<li>
									<Link
										href='/faq'
										className='hover:text-foreground'>
										Help / FAQ
									</Link>
								</li>
								<li>
									<Link
										href='/privacy'
										className='hover:text-foreground'>
										Privacy policy
									</Link>
								</li>
								<li>
									<Link
										href='/terms'
										className='hover:text-foreground'>
										Terms of service
									</Link>
								</li>
							</ul>
						</div>
						{/* CTA */}

						<div>
							<div className='text-sm font-semibold'>
								Subscribe
							</div>
							<p className='mt-4 text-sm text-muted-foreground'>
								Get product updates and personal finance tips.
								Unsubscribe anytime.
							</p>

							<form className='mt-4 flex flex-col gap-2 sm:flex-row'>
								<Input
									type='email'
									placeholder='you@example.com'
									required
									className='h-10'
								/>
								<Button
									type='submit'
									className='h-10'>
									Subscribe
								</Button>
							</form>

							<p className='mt-2 text-xs text-muted-foreground'>
								No spam. You can unsubscribe at any time.
							</p>
						</div>
					</div>

					<div className='mt-12 border-t pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
						<div className='text-xs text-muted-foreground'>
							© {new Date().getFullYear()} hnfin. All rights
							reserved.
						</div>

						<div className='flex gap-4 text-xs text-muted-foreground'>
							<Link
								href='/privacy'
								className='hover:text-foreground'>
								Privacy
							</Link>
							<Link
								href='/terms'
								className='hover:text-foreground'>
								Terms
							</Link>
							<Link
								href='/contact'
								className='hover:text-foreground'>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</main>
	)
}
