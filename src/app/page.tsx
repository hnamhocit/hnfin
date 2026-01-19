'use client'

import Header from '@/components/features/home/Header'
import {
	Accordion,
	AccordionItem,
	Button,
	Card,
	CardBody,
	Chip,
	Divider,
	Link,
} from '@heroui/react'

import {
	ArrowRight,
	Bell,
	Check,
	PieChart,
	ShieldCheck,
	Sparkles,
	TrendingUp,
	Zap,
} from 'lucide-react'

type Feature = { icon: React.ReactNode; title: string; desc: string }
type Plan = {
	name: string
	price: string
	tagline: string
	items: string[]
	cta: string
	highlighted: boolean
}

export default function FinanceTrackerLanding() {
	const features: Feature[] = [
		{
			icon: <Zap className='w-5 h-5' />,
			title: 'Capture expenses in seconds',
			desc: 'Fast entry, smart defaults, and auto-categorization that learns your habits.',
		},
		{
			icon: <PieChart className='w-5 h-5' />,
			title: 'Reports you actually understand',
			desc: 'Beautiful monthly summaries, category breakdowns, and trends at a glance.',
		},
		{
			icon: <TrendingUp className='w-5 h-5' />,
			title: 'Budgets that keep you on track',
			desc: 'Set limits per category and get nudges before you overspend.',
		},
		{
			icon: <Bell className='w-5 h-5' />,
			title: 'Bills & subscriptions reminders',
			desc: 'Never miss a due date—recurring bills, subscriptions, and loans stay organized.',
		},
		{
			icon: <ShieldCheck className='w-5 h-5' />,
			title: 'Privacy-first by design',
			desc: 'You stay in control—secure access, clear permissions, and safe backups.',
		},
		{
			icon: <Sparkles className='w-5 h-5' />,
			title: 'Automation that saves time',
			desc: 'Rules, recurring transactions, and smart summaries—less work, more clarity.',
		},
	]

	const pricing: Plan[] = [
		{
			name: 'Free',
			price: '$0',
			tagline: 'Start tracking with the essentials',
			items: [
				'Unlimited transactions',
				'Custom categories',
				'Basic reports',
			],
			cta: 'Get started',
			highlighted: false,
		},
		{
			name: 'Pro',
			price: '$4.99/mo',
			tagline: 'Budgets, reminders, and exports',
			items: [
				'Category budgets',
				'Bill reminders',
				'CSV/Excel export',
				'Multi-device sync',
			],
			cta: 'Upgrade to Pro',
			highlighted: true,
		},
		{
			name: 'Team',
			price: '$12.99/mo',
			tagline: 'Shared wallets for families & teams',
			items: [
				'Shared wallets',
				'Member permissions',
				'Audit history',
				'Priority support',
			],
			cta: 'Contact sales',
			highlighted: false,
		},
	]

	return (
		<div className='min-h-screen'>
			<Header />

			{/* Hero */}
			<section className='px-6'>
				<div className='container mx-auto pt-16 pb-12'>
					<div className='flex flex-col items-center text-center gap-6'>
						<Chip
							variant='flat'
							className='px-3 py-1'>
							Finance tracking — fast, clean, and effortless
						</Chip>

						<h1 className='text-4xl md:text-6xl font-semibold tracking-tight'>
							Know where your money goes.
							<span className='block'>
								Build better spending habits.
							</span>
						</h1>

						<p className='text-base md:text-lg text-foreground/70 max-w-3xl'>
							HNFin turns messy transactions into clear insights.
							Track expenses in seconds, set budgets that work,
							and get reminders before bills slip your mind.
						</p>

						<div className='flex flex-col sm:flex-row gap-3'>
							<Button
								as={Link}
								href='/register'
								color='primary'
								size='lg'
								endContent={<ArrowRight className='w-4 h-4' />}>
								Create your account
							</Button>
							<Button
								as={Link}
								href='#features'
								variant='flat'
								size='lg'>
								See how it works
							</Button>
						</div>

						<div className='text-sm text-foreground/60'>
							No credit card required. Cancel anytime.
						</div>
					</div>

					{/* Mock preview */}
					<div className='mt-10'>
						<Card className='container mx-auto'>
							<CardBody>
								<div className='grid lg:grid-cols-3 gap-4'>
									<Card className='lg:col-span-2'>
										<CardBody className='space-y-3'>
											<div className='flex items-center justify-between'>
												<div className='font-semibold'>
													This month overview
												</div>
												<Chip
													size='sm'
													variant='flat'>
													Jan
												</Chip>
											</div>
											<Divider />
											<div className='grid sm:grid-cols-3 gap-3'>
												<div className='p-4 rounded-xl bg-foreground/5'>
													<div className='text-xs text-foreground/60'>
														Income
													</div>
													<div className='text-xl font-semibold'>
														$2,350
													</div>
												</div>
												<div className='p-4 rounded-xl bg-foreground/5'>
													<div className='text-xs text-foreground/60'>
														Spent
													</div>
													<div className='text-xl font-semibold'>
														$1,120
													</div>
												</div>
												<div className='p-4 rounded-xl bg-foreground/5'>
													<div className='text-xs text-foreground/60'>
														Saved
													</div>
													<div className='text-xl font-semibold'>
														$1,230
													</div>
												</div>
											</div>
											<div className='p-4 rounded-xl bg-foreground/5 text-sm text-foreground/70'>
												Insight: You’re spending{' '}
												<span className='font-medium'>
													12%
												</span>{' '}
												more on Food & Drinks than last
												month.
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardBody className='space-y-3'>
											<div className='font-semibold'>
												Top categories
											</div>
											<Divider />
											<div className='flex items-center justify-between text-sm'>
												<span>Food & Drinks</span>
												<span className='font-medium'>
													$310
												</span>
											</div>
											<div className='flex items-center justify-between text-sm'>
												<span>Transport</span>
												<span className='font-medium'>
													$140
												</span>
											</div>
											<div className='flex items-center justify-between text-sm'>
												<span>Entertainment</span>
												<span className='font-medium'>
													$95
												</span>
											</div>
											<Divider />
											<Button
												size='sm'
												variant='flat'
												as={Link}
												href='/register'>
												Try it now
											</Button>
										</CardBody>
									</Card>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</section>

			{/* Features */}
			<section
				id='features'
				className='px-6 py-16'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-3 mb-8'>
						<h2 className='text-3xl md:text-4xl font-semibold'>
							Everything you need to stay in control
						</h2>
						<p className='text-foreground/70 max-w-3xl'>
							Track daily spending, understand patterns, and
							improve outcomes—without spreadsheets.
						</p>
					</div>

					<div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
						{features.map((f) => (
							<Card key={f.title}>
								<CardBody className='space-y-3'>
									<div className='w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center'>
										{f.icon}
									</div>
									<div className='font-semibold'>
										{f.title}
									</div>
									<div className='text-sm text-foreground/70'>
										{f.desc}
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section
				id='pricing'
				className='px-6 py-16'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-3 mb-8'>
						<h2 className='text-3xl md:text-4xl font-semibold'>
							Pricing that scales with you
						</h2>
						<p className='text-foreground/70 max-w-3xl'>
							Start free. Upgrade when you need budgets,
							reminders, exports, and shared wallets.
						</p>
					</div>

					<div className='grid xl:grid-cols-3 gap-4'>
						{pricing.map((p) => (
							<Card
								key={p.name}
								className={
									p.highlighted ? 'ring-2 ring-primary' : ''
								}>
								<CardBody className='space-y-4'>
									<div className='flex items-start justify-between'>
										<div>
											<div className='text-lg font-semibold'>
												{p.name}
											</div>
											<div className='text-sm text-foreground/70'>
												{p.tagline}
											</div>
										</div>
										{p.highlighted ? (
											<Chip
												color='primary'
												variant='flat'>
												Most popular
											</Chip>
										) : null}
									</div>

									<div className='text-3xl font-semibold'>
										{p.price}
									</div>

									<Divider />

									<ul className='space-y-2 text-sm'>
										{p.items.map((it) => (
											<li
												key={it}
												className='flex items-center gap-2 text-foreground/80'>
												<Check className='w-4 h-4' />
												<span>{it}</span>
											</li>
										))}
									</ul>

									<Button
										as={Link}
										href={
											p.name === 'Team'
												? '/contact'
												: '/register'
										}
										color={
											p.highlighted
												? 'primary'
												: 'default'
										}
										variant={
											p.highlighted ? 'solid' : 'flat'
										}>
										{p.cta}
									</Button>
								</CardBody>
							</Card>
						))}
					</div>

					{/* Trust strip */}
					<div className='mt-8'>
						<Card>
							<CardBody className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
								<div className='space-y-1'>
									<div className='font-semibold'>
										Built for clarity — not complexity
									</div>
									<div className='text-sm text-foreground/70'>
										Minimal setup. Fast capture. Clean
										insights. Your money, finally organized.
									</div>
								</div>
								<Button
									as={Link}
									href='/register'
									color='primary'
									endContent={
										<ArrowRight className='w-4 h-4' />
									}>
									Start tracking today
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section
				id='faq'
				className='px-6 py-16'>
				<div className='container mx-auto max-w-4xl'>
					<div className='flex flex-col gap-3 mb-6'>
						<h2 className='text-3xl md:text-4xl font-semibold'>
							FAQ
						</h2>
						<p className='text-foreground/70'>
							Quick answers to help you decide. If you have a
							specific workflow, we can tailor it.
						</p>
					</div>

					<Card>
						<CardBody>
							<Accordion selectionMode='multiple'>
								<AccordionItem
									key='1'
									aria-label='q1'
									title='Can I use it for free?'>
									Yes. The Free plan includes unlimited
									transactions and basic reporting.
								</AccordionItem>
								<AccordionItem
									key='2'
									aria-label='q2'
									title='Is my data secure?'>
									Use best practices: strong authentication,
									strict access rules, and secure backups. You
									control who has access.
								</AccordionItem>
								<AccordionItem
									key='3'
									aria-label='q3'
									title='Can I export my data?'>
									Yes. Pro includes CSV/Excel exports so you
									can keep a copy or do deeper analysis.
								</AccordionItem>
							</Accordion>
						</CardBody>
					</Card>

					<div className='mt-8 flex items-center justify-center'>
						<Button
							as={Link}
							href='/register'
							color='primary'
							size='lg'
							endContent={<ArrowRight className='w-4 h-4' />}>
							Get started for free
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='px-6 py-10'>
				<div className='container mx-auto'>
					<Divider />
					<div className='pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-foreground/60'>
						<div>
							© {new Date().getFullYear()} HNFin. All rights
							reserved.
						</div>
						<div className='flex gap-4'>
							<Link
								href='/privacy'
								color='foreground'>
								Privacy
							</Link>
							<Link
								href='/terms'
								color='foreground'>
								Terms
							</Link>
							<Link
								href='/contact'
								color='foreground'>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
