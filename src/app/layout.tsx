import Provider from '@/components/Provider'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'hnfin',
	description:
		'hnfin là ứng dụng quản lý chi tiêu tài chính cá nhân, tập trung vào việc ghi nhận, phân loại và phân tích dòng tiền. Hệ thống cung cấp cái nhìn tổng quan về thu – chi, hỗ trợ theo dõi ngân sách, lịch sử giao dịch và hành vi chi tiêu, giúp người dùng tối ưu hoá kế hoạch tài chính cá nhân theo thời gian.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<StyledComponentsRegistry>
					<Provider>{children}</Provider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
