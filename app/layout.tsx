import '../styles/globals.css'
import { Nav, Footer } from './components'

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  console.log('rendering here not there')
  return (
    <html className='bg-gray-800 text-lime-100 antialiased font-extralight font-mono'>
      <head>
        <title>Sam Azevedo</title>
      </head>
      <body className='overflow-y-scroll'>
        <header className='border-b p-3 grid gap-1 grid-cols-2 w-screen'>
          <div className='logo '>Sam Azevedo</div>
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
