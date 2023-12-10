'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function NextProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<ProgressBar
				height="2px"
				color="#fff"
				options={{ showSpinner: true }}
				shallowRouting
			/>
			{children}
		</NextUIProvider>
	)
}