'use client'
import { useEffect, useState } from 'react'
import './styles/styles.scss'
import localFont from '@next/font/local'
import Loading from './loading'
const mainFont = localFont({
  src: './assets/fonts/Bulgatry/Bulgatry.otf',
})

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children}: RootProps) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		if(children) { 
			setTimeout(() => {
				setLoading(false)
			}, 3000);
		}
	})
  return (
		<html className={mainFont.className}> 
			<head lang='en'>
				<title>Sam Azevedo</title>
			</head>
			<body>
				{ loading ? ( <Loading/> ) : ( <>{children}</> )}
			</body>
		</html>
  )
}
