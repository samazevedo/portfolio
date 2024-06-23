import type { Metadata } from "next"
import { Kalnia, Suwannaphum, Italiana } from "next/font/google"
import { ThemeProvider } from "@components/theme/theme-provider"
import { Layout } from "@components/dom/layout/Layout"
// import Header from "@components/dom/header/header"
import "./globals.css"

// const kalnia = Kalnia({
// 	subsets: ["latin"],
// 	weight: "400",
// 	variable: "--kalnia",
// })
// const suwannaphum = Suwannaphum({
// 	subsets: ["latin"],
// 	weight: "100",
// 	variable: "--suwannaphum",
// })

const italiana = Italiana({
	subsets: ["latin"],
	weight: "400",
	variable: "--farsan",
})

export const metadata: Metadata = {
	title: "Sam Azevedo",
	description: "Sam Azevedo's portfolio website",
	icons: {
		icon: "/favicon.ico",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${italiana.className}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
