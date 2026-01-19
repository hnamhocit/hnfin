'use client'

import { Select, SelectItem } from '@heroui/react'
import { useMemo, useState } from 'react'

type MonthKey = `${number}-${string}` // "YYYY-MM"
type MonthValue = MonthKey | 'all'

type Item = { key: MonthValue; label: string }

function startOfMonth(d: Date) {
	return new Date(d.getFullYear(), d.getMonth(), 1)
}

function addMonths(d: Date, delta: number) {
	const nd = new Date(d)
	nd.setMonth(nd.getMonth() + delta)
	return nd
}

function toMonthKey(d: Date): MonthKey {
	const y = d.getFullYear()
	const m = String(d.getMonth() + 1).padStart(2, '0')
	return `${y}-${m}` as MonthKey
}

function monthLabel(k: MonthKey) {
	const [y, m] = k.split('-')
	return `${m}/${y}`
}

function visibleMonthsFromNow(createdAt: Date, maxVisible = 12) {
	const current = startOfMonth(new Date())
	const created = startOfMonth(createdAt)

	const out: MonthKey[] = []
	for (let i = 0; i < maxVisible; i++) {
		const d = addMonths(current, -i)
		if (d < created) break
		out.push(toMonthKey(d))
	}
	return out
}

function allMonthsFromNowToCreated(createdAt: Date) {
	const current = startOfMonth(new Date())
	const created = startOfMonth(createdAt)

	const out: MonthKey[] = []
	let d = current
	while (d >= created) {
		out.push(toMonthKey(d))
		d = addMonths(d, -1)
	}
	return out
}

export default function MonthSelect({
	createdAt,
	maxVisibleMonths = 12,
	onMonthChange,
}: {
	createdAt: Date
	maxVisibleMonths?: number
	onMonthChange?: (v: MonthValue) => void
}) {
	const currentKey = toMonthKey(new Date())

	const [selectedMonth, setSelectedMonth] = useState<MonthValue>(currentKey)
	const [showAllMonths, setShowAllMonths] = useState(false)

	const monthsLimited = useMemo(
		() => visibleMonthsFromNow(createdAt, maxVisibleMonths),
		[createdAt, maxVisibleMonths],
	)

	const monthsAll = useMemo(
		() => allMonthsFromNowToCreated(createdAt),
		[createdAt],
	)

	const monthOptions = showAllMonths ? monthsAll : monthsLimited
	const hasMore = monthsAll.length > monthsLimited.length

	const items = useMemo<Item[]>(
		() => [
			{ key: 'all', label: 'All Time' },
			...monthOptions.map((k) => ({ key: k, label: monthLabel(k) })),
		],
		[monthOptions],
	)

	return (
		<Select
			className='sm:max-w-xs'
			items={items}
			selectedKeys={[selectedMonth]}
			onSelectionChange={(keys) => {
				const v = Array.from(keys)[0] as MonthValue | undefined
				if (!v) return
				setSelectedMonth(v)
				onMonthChange?.(v)
			}}>
			{(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
		</Select>
	)
}
