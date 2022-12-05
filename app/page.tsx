'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import sun from './assets/icons/sun.svg'
import moon from './assets/icons/moon.svg'
import { useState, useEffect, Suspense, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './styles/theme'
import { ScrollControls, Scroll, Center, Stars } from '@react-three/drei'
// components
import Dom from './components/layout/dom'
import Home from './components/dom/home/home'
import Header from './components/dom/header/header'
import Logo from './components/dom/logo/logo'
import Nav from './components/dom/navigation/nav'
import About from './components/dom/about/about'
import Projects from './components/dom/projects/projects'
import Contact from './components/dom/contact/contact'
import Loading from './loading'
import Burger from './components/dom/burger/burger'
import Menu from './components/dom/menu/menu'


// three components
import CanvasL from './components/layout/canvas'
import Box from './components/canvas/refraction/Box'
import CursorObj from './components/canvas/cursor/Cursor'
import { Router } from 'next/router'
// hooks
import {useOnclickOutside} from './hooks/hooks'
import Main from './components/dom/main/main'
import Switch from './components/dom/switch/switch'
import { useAtom } from "jotai"
import { themeAtom } from "./hooks/store"
import HtmlPage from './components/dom/html/html'

const R3F = () => {
  return (
    <CanvasL>
      <CursorObj />
			<ScrollControls pages={4}>
				<HtmlPage/>
			</ScrollControls>
			<Stars/>
    </CanvasL>
  )
}
interface DOMProps {
  children?: React.ReactNode
}

const DOM = ({children}:DOMProps) => {
	const [menuOpen, setMenuOpen] =  useState(false)
	const node = useRef(null)
	useOnclickOutside(node, () => setMenuOpen(false))
  return (
		<Dom >
			<Header>
				<Logo/>
				<Nav/>
				<div ref={node}>
					<Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<Menu menuOpen={menuOpen}  />
				</div>
			</Header>
			<Main>
				<Home/>
				<About/>
				<Projects/>
				<Contact/>
			</Main>
		</Dom>
	)
	
}

export default function Page() {
  // const [theme, setTheme] = useState('dark')

  const [icon, setIcon] = useState(sun)
	// const [loading, setLoading] = useState(false)

	const [theme, setTheme] = useAtom(themeAtom)
  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('dark')
    theme === 'light' ? setIcon(sun) : setIcon(moon)
  }


	

  return (
		<>
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
					{/* <Switch handleTheme={handleTheme} theme={theme}/> */}

        {/* <R3F /> */}
        <DOM />
      </ThemeProvider>
		</>
      
  )
}


