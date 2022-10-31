'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  let segment = useSelectedLayoutSegment
  console.log('segment: ', segment)
  let active = href === `/${segment}`
  // console.log({ href, active })
  return (
    <Link className={active ? 'underline' : 'no-underline'} href={href}>
      {children}
    </Link>
    // // <nav className='space-x-4'>

    //   {/* <Link href='/'>Home</Link> */}
    //   {/* <Link href='/about'>About</Link> */}
    //   {/* <Link href='/products'>Products</Link> */}
    //   {/* <Link href='/contact'>Contact</Link> */}
    // {/* </nav> */}
  )
}
