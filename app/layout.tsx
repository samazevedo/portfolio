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
			}, 1000);
		}
	})
  return (
		<html className={mainFont.className}> 
			<head lang='en'>
				<title>Sam Azevedo</title>
		    <meta charSet="UTF-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Sam Azevedo Front-end Web Developer" />
				<meta property="og:locale" content="" />
				<meta property="og:site_name" content="samazevedo" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Sam Azevedo" />
				<meta property="og:description" content=" Sam Azevedo Front-end Web Developer" />
				<meta property="og:url" content="http://www.samazevedo.com" />
				<meta property="og:image" content="" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Sam Azevedo" />
				<meta name="twitter:description" content="Sam Azevedo Front-end Web Developer" />
				<meta name="twitter:image" content="" />

			</head>
			<body>
				{ loading ? ( <Loading/> ) : ( <>{children}</> )}
			</body>
		</html>
  )
}
