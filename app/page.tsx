'use client'
import Image from 'next/image'
import sun from './assets/icons/sun.svg'
import moon from './assets/icons/moon.svg'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './styles/theme'
import { ScrollControls, Scroll } from '@react-three/drei'
// components
import Dom from './components/layout/dom'
import Header from './components/header/header'
import Logo from './components/logo/logo'
import Nav from './components/navigation/nav'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

// three components
import CanvasL from './components/layout/canvas'
import Text from './components/canvas/text'

const R3F = () => {
  return (
    <CanvasL>
      <ScrollControls pages={4}>
        <Scroll html></Scroll>
        <Scroll>
          <Text>Sam Azevedo</Text>
        </Scroll>
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

        {/* <R3F /> */}
        <button onClick={handleTheme} className='theme-btn'>
          <Image src={icon} alt='theme icon' width={15} />
        </button>
        <DOM />
      </ThemeProvider>
    </>
  )
}
