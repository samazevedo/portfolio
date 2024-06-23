"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <>{children}</> // Prevent hydration mismatch
	}

	return (
		<NextThemesProvider
			attribute="class"
			enableSystem={true}
			enableColorScheme={false}
			defaultTheme="dark"
			themes={["dark", "light"]}
		>
			{children}
		</NextThemesProvider>
	)
}
