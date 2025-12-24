'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export type PlanKey = 'free' | 'pro' | 'lifetime'

export type PricingPlan = {
	key: PlanKey
	name: string
	badge?: string
	price: string
	billing: string
	description: string
	valueLine?: string
	features: string[]
	cta: { label: string; href: string; variant?: 'default' | 'outline' }
	disclaimer?: string
}

function PlanMiniCard({ plan }: { plan: PricingPlan }) {
	const highlight = plan.key === 'pro'

	return (
		<Card
			className={[
				'relative rounded-3xl transition-all',
				highlight
					? 'md:-translate-y-2 md:scale-[1.02] border-primary/50 shadow-lg shadow-primary/10 ring-1 ring-primary/20'
					: 'hover:shadow-sm',
			].join(' ')}>
			{/* soft glow for highlight */}
			{highlight ? (
				<div className='pointer-events-none absolute -inset-1 -z-10 rounded-[1.7rem] bg-primary/10 blur-2xl' />
			) : null}

			<CardHeader className='space-y-2'>
				<div className='flex items-center justify-between gap-3'>
					<CardTitle className='text-base'>{plan.name}</CardTitle>
					{plan.badge ? (
						<Badge
							className={
								highlight
									? 'bg-primary text-primary-foreground'
									: ''
							}>
							{plan.badge}
						</Badge>
					) : null}
				</div>

				<p className='text-sm text-muted-foreground'>
					{plan.description}
				</p>

				<div className='pt-1'>
					<div className='flex items-end gap-2'>
						<div className='text-3xl font-semibold'>
							{plan.price}
						</div>
						<div className='pb-1 text-sm text-muted-foreground'>
							{plan.billing}
						</div>
					</div>

					{/* value hook line (important) */}
					{plan.valueLine ? (
						<div className='mt-1 text-xs text-muted-foreground'>
							{plan.valueLine}
						</div>
					) : null}
				</div>
			</CardHeader>

			<CardContent className='space-y-4'>
				<ul className='space-y-2 text-sm'>
					{plan.features.map((f) => (
						<li
							key={f}
							className='flex items-start gap-2'>
							<span className='mt-1 inline-block h-2 w-2 rounded-full bg-primary' />
							<span className='text-muted-foreground'>{f}</span>
						</li>
					))}
				</ul>

				<Button
					className={[
						'w-full',
						highlight ? 'h-11 text-[15px]' : '',
					].join(' ')}
					variant={plan.cta.variant ?? 'default'}
					asChild>
					<Link href={plan.cta.href}>{plan.cta.label}</Link>
				</Button>

				{plan.disclaimer ? (
					<p className='text-xs text-muted-foreground'>
						{plan.disclaimer}
					</p>
				) : null}
			</CardContent>
		</Card>
	)
}

const PLANS: PricingPlan[] = [
	{
		key: 'free',
		name: 'Free',
		price: '$0',
		billing: 'forever',
		description: 'Start tracking with the essentials.',
		valueLine: 'Best for trying hnfin.',
		badge: undefined,
		features: [
			'Track income & expenses',
			'Basic categories',
			'Monthly overview',
			'Up to 500 transactions',
			'History up to 3 months',
		],
		cta: { label: 'Get started', href: '/enter', variant: 'outline' },
	},
	{
		key: 'pro',
		name: 'Pro',
		badge: 'Most popular',
		price: '$4',
		billing: 'per month',
		description: 'For people who want consistency and control.',
		valueLine: 'Unlock budgets, exports, and full history.',
		features: [
			'Stay on budget with category limits and alerts',
			'See full history & trends (no blind spots)',
			'Recurring bills so you don’t miss payments',
			'Export CSV/Excel for backup & analysis',
			'Multiple wallets to match real life',
		],
		cta: {
			label: 'Upgrade to Pro',
			href: '/enter?plan=pro',
			variant: 'default',
		},
	},
	{
		key: 'lifetime',
		name: 'Lifetime',
		badge: 'Early supporter',
		price: '$39',
		billing: 'one-time',
		description: 'One-time purchase for early supporters.',
		valueLine: 'No recurring payments.',
		features: [
			'All Pro features',
			'No recurring payments',
			'Access to current Pro features',
		],
		cta: {
			label: 'Get Lifetime',
			href: '/enter?plan=lifetime',
			variant: 'outline',
		},
		disclaimer:
			'Lifetime applies while hnfin operates and to Pro features available at purchase time.',
	},
]

export function PricingHighlights() {
	return (
		<section
			id='pricing'
			className='mx-auto container px-4 py-14'>
			<div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
				<div>
					<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
						Pricing
					</h2>

					<p className='mt-2 text-muted-foreground'>
						Start free, upgrade when you need budgets, exports, and
						full history.
					</p>
				</div>

				<Button
					variant='outline'
					asChild
					className='w-fit'>
					<Link href='/enter?plan=pro'>Upgrade</Link>
				</Button>
			</div>

			<div className='mt-8 grid gap-4 lg:grid-cols-3'>
				{PLANS.map((p) => (
					<PlanMiniCard
						key={p.key}
						plan={p}
					/>
				))}
			</div>
		</section>
	)
}
