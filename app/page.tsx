'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import sun from './assets/icons/sun.svg'
import moon from './assets/icons/moon.svg'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './styles/theme'
import { ScrollControls, Scroll } from '@react-three/drei'
// components
import Dom from './components/layout/dom'
import Home from './components/dom/home/home'
import Header from './components/dom/header/header'
import Logo from './components/dom/logo/logo'
import Nav from './components/dom/navigation/nav'
import About from './components/dom/about/about'
import Projects from './components/dom/projects/projects'
import Contact from './components/dom/contact/contact'

// const Dom = dynamic(() => import('./components/layout/dom'), {
//   ssr: false,
// })
// const Home = dynamic(() => import('./components/dom/home/home'), {
//   ssr: false,
// })

// const Header = dynamic(() => import('./components/dom/header/header'), {
//   ssr: false,
// })
// const Logo = dynamic(() => import('./components/dom/logo/logo'), {
//   ssr: false,
// })
// const Nav = dynamic(() => import('./components/dom/navigation/nav'), {
//   ssr: false,
// })
// const About = dynamic(() => import('./components/dom/about/about'), {
//   ssr: false,
// })
// const Projects = dynamic(() => import('./components/dom/projects/projects'), {
//   ssr: false,
// })

// const Contact = dynamic(() => import('./components/dom/contact/contact'), {
//   ssr: false,
// })

// three components
import CanvasL from './components/layout/canvas'
import Text from './components/canvas/text'
import Box from './components/canvas/refactor/Box'

const R3F = () => {
  return (
    <CanvasL>
      <Box />
      <ScrollControls pages={4}>
        {/* <Scroll html></Scroll> */}
        <Scroll></Scroll>
      </ScrollControls>
    </CanvasL>
  )
}
const DOM = () => {
  return (
    <Dom>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>footer</footer>
    </Dom>
  )
}

export default function Page() {
  const [theme, setTheme] = useState('dark')
  const [icon, setIcon] = useState(sun)

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    theme === 'light' ? setIcon(sun) : setIcon(moon)
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />

        <R3F />
        <button onClick={handleTheme} className='theme-btn'>
          <Image src={icon} alt='theme icon' width={15} />
        </button>
        <DOM />
      </ThemeProvider>
    </>
  )
}
