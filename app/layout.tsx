import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextProvider } from '@/providers/next-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '3d Website',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`dark bg-background text-foreground ${inter.className}`}>
				<NextProvider>
					{children}
				</NextProvider>
			</body>
		</html>
	)
}
