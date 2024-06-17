import type { Metadata } from "next"
import { Kalnia, Suwannaphum, Italiana } from "next/font/google"
import { ThemeProvider } from "@components/theme/theme-provider"
import "./globals.css"
import Header from "@components/dom/header/header"
import Footer from "@components/dom/footer/footer"

const kalnia = Kalnia({
	subsets: ["latin"],
	weight: "400",
	variable: "--kalnia",
})
const suwannaphum = Suwannaphum({
	subsets: ["latin"],
	weight: "100",
	variable: "--suwannaphum",
})

const farsan = Italiana({
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
			<body className={`${farsan.className}`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
