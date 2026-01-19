'use client'

import { ExpenseCategory, expenseCategories } from '@/interfaces'
import { Select, SelectItem } from '@heroui/react'
import { useMemo, useState } from 'react'

type CategoryFilter = 'all' | ExpenseCategory

type Item = { key: CategoryFilter; label: string }

export default function CategorySelect() {
	const [category, setCategory] = useState<CategoryFilter>('all')

	const items = useMemo<Item[]>(
		() => [
			{ key: 'all', label: 'All Categories' },
			...expenseCategories.map((c) => ({ key: c, label: c })),
		],
		[],
	)

	return (
		<Select
			className='max-w-xs'
			items={items}
			selectedKeys={[category]}
			onSelectionChange={(keys) => {
				const v = Array.from(keys)[0] as CategoryFilter | undefined
				if (v) setCategory(v)
			}}>
			{(item) => (
				<SelectItem
					key={item.key}
					className='capitalize'>
					{item.label}
				</SelectItem>
			)}
		</Select>
	)
}
