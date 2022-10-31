import './styles/global.css'
import localFont from '@next/font/local'

const Jost = localFont({
  src: './assets/fonts/Jost/static/Jost-Thin.ttf',
})

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  console.log('This is server side ')

  return (
    <html className={Jost.className}>
      <head lang='en'>
        <title>Sam Azevedo</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
