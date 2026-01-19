'use client'

import {
	CategoryScale,
	ChartData,
	Chart as ChartJS,
	ChartOptions,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import { useMemo, useRef } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
)

type DailyPoint = {
	// ISO date: '2026-01-20' (khuyến nghị)
	date: string
	orders: number
}

type Props = {
	title?: string
	subtitle?: string
	days?: number // default 30
	points: DailyPoint[] // data rời rạc, không cần đủ 30 ngày
	missingAs?: 'zero' | 'null' // zero => nối thẳng; null => đứt đoạn nếu thiếu ngày
}

function toISODate(d: Date) {
	// yyyy-mm-dd theo local
	const y = d.getFullYear()
	const m = String(d.getMonth() + 1).padStart(2, '0')
	const day = String(d.getDate()).padStart(2, '0')
	return `${y}-${m}-${day}`
}

function lastNDaysLabels(n: number) {
	const today = new Date()
	const dates: string[] = []
	for (let i = n - 1; i >= 0; i--) {
		const d = new Date(today)
		d.setDate(today.getDate() - i)
		dates.push(toISODate(d))
	}
	return dates
}

export default function SpendingTrendsChart({
	title = 'Spending Trends',
	subtitle = 'Last 30 Days',
	days = 30,
	points,
	missingAs = 'zero',
}: Props) {
	const chartRef = useRef<ChartJS<'line'> | null>(null)

	const { labels, values } = useMemo(() => {
		const labels = lastNDaysLabels(days)

		// Map date -> orders
		const map = new Map<string, number>()
		for (const p of points) map.set(p.date, p.orders)

		const values = labels.map((d) => {
			const v = map.get(d)
			if (v == null) return missingAs === 'zero' ? 0 : null
			return v
		})

		return { labels, values }
	}, [days, points, missingAs])

	const data: ChartData<'line'> = {
		// hiển thị label ngắn gọn: chỉ show ngày (dd) để clean
		labels: labels.map((iso) => iso.slice(-2)),
		datasets: [
			{
				label: 'Orders',
				data: values,
				tension: 0.45, // mượt giống ảnh
				borderWidth: 4,
				pointRadius: 5,
				pointHoverRadius: 7,
				pointBorderWidth: 3,
				pointBackgroundColor: '#ffffff',
				pointBorderColor: '#22c55e',
				borderColor: '#22c55e',
				fill: true,
				// Gradient fill
				backgroundColor: (ctx) => {
					const chart = ctx.chart
					const { chartArea } = chart
					if (!chartArea) return 'rgba(34,197,94,0.12)'
					const g = chart.ctx.createLinearGradient(
						0,
						chartArea.top,
						0,
						chartArea.bottom,
					)
					g.addColorStop(0, 'rgba(34,197,94,0.22)')
					g.addColorStop(1, 'rgba(34,197,94,0.00)')
					return g
				},
				// Nếu missingAs='null' thì line sẽ đứt đoạn ở điểm null
				spanGaps: false,
			},
		],
	}

	const options: ChartOptions<'line'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				displayColors: false,
				callbacks: {
					// tooltip label clean
					label: (item) => `Orders: ${item.formattedValue}`,
				},
			},
		},
		layout: { padding: { left: 8, right: 8, top: 8, bottom: 8 } },
		scales: {
			x: {
				grid: { display: false },
				border: { display: false },
				ticks: {
					maxTicksLimit: 6,
					color: 'rgba(100,116,139,0.8)',
					font: { size: 12 },
				},
			},
			y: {
				beginAtZero: true,
				grid: {
					color: 'rgba(148,163,184,0.25)',
					borderDash: [6, 6],
					drawTicks: false,
				},
				border: { display: false },
				ticks: {
					display: false, // ẩn số bên trái cho clean
				},
			},
		},
	}

	const exportPng = () => {
		const chart = chartRef.current
		if (!chart) return
		const url = chart.toBase64Image('image/png', 1)
		const a = document.createElement('a')
		a.href = url
		a.download = 'spending-trends.png'
		a.click()
	}

	return (
		<div className='col-span-3 p-6 bg-white border shadow-sm rounded-2xl border-slate-200'>
			<div className='flex items-start justify-between gap-4'>
				<div>
					<div className='text-lg font-semibold text-slate-900'>
						{title}
					</div>
					<div className='text-sm text-slate-500'>{subtitle}</div>
				</div>

				<button
					onClick={exportPng}
					className='px-4 py-2 text-sm bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50'>
					Export
				</button>
			</div>

			<div className='mt-6 h-[260px] w-full'>
				<Line
					ref={(instance) => {
						chartRef.current = instance as any
					}}
					data={data}
					options={options}
				/>
			</div>
		</div>
	)
}
