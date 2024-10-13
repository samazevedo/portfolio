import type { Metadata } from 'next';
import { ThemeProvider } from '@components/theme/theme-provider';
import './globals.css';
import localFont from 'next/font/local';

const newScience = localFont({
	src: [
		{
			path: '../../public/fonts/New_Science_Regular_Extended.otf',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/New_Science_Thin_Extended.otf',
			weight: '300',
			style: 'thin'
		}
	]
});

export const metadata: Metadata = {
	title: 'Sam Azevedo',
	description: "Sam Azevedo's portfolio website",
	icons: {
		icon: '/favicon.ico'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ThemeProvider>
				<body className={`${newScience.className}`}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
