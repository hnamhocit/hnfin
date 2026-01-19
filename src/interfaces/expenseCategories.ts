export const expenseCategories = [
	'groceries',
	'dining',
	'transport',
	'entertainment',
	'shopping',
	'bills',
	'housing',
	'health',
	'other',
] as const

export type ExpenseCategory = (typeof expenseCategories)[number]
