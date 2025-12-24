'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type FAQItem = { q: string; a: string; tag?: string }

const FAQS: FAQItem[] = [
	{
		q: 'Is hnfin free?',
		a: 'Yes. You can start for free and use the core features to manage personal spending.',
		tag: 'Free',
	},
	{
		q: 'Is my data shared?',
		a: 'No. Your financial data is private and isolated per user account.',
		tag: 'Privacy',
	},
	{
		q: 'Where should I start?',
		a: 'Set up categories, enter a few recent transactions, then create monthly budgets.',
		tag: 'Getting started',
	},
	{
		q: 'Who is hnfin for?',
		a: 'Anyone who wants clarity on cashflow, budgets, and a consistent money habit.',
		tag: 'Users',
	},
	{
		q: 'Will Free users lose data after 3 months?',
		a: 'No. Your data remains safe. The Free plan limits viewing history beyond the recent window. Upgrade to unlock full history.',
		tag: 'Data retention',
	},
	{
		q: 'Can I cancel Pro anytime?',
		a: 'Yes. You can cancel anytime. You will keep access until the end of the billing period.',
		tag: 'Subscriptions',
	},
	{
		q: 'What payment methods are supported?',
		a: 'Common methods include cards and wallet payments depending on the payment provider. Exact options depend on your checkout integration.',
		tag: 'Payments',
	},
]

export function FaqSection() {
	return (
		<section
			id='faq'
			className='mx-auto container px-4 pb-14'>
			<h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
				FAQ
			</h2>

			<div className='mt-6 grid gap-4 md:grid-cols-2'>
				{FAQS.map((item) => (
					<Card
						key={item.q}
						className='rounded-2xl'>
						<CardHeader className='space-y-2'>
							<div className='flex items-start justify-between gap-3'>
								<CardTitle className='text-base'>
									{item.q}
								</CardTitle>

								{item.tag ? (
									<Badge variant='secondary'>
										{item.tag}
									</Badge>
								) : null}
							</div>
						</CardHeader>

						<CardContent className='text-sm text-muted-foreground'>
							{item.a}
						</CardContent>
					</Card>
				))}
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
	)
}
