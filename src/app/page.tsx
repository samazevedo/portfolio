"use client"
import * as THREE from "three"
import { ThemeProvider } from "@components/theme/theme-provider"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, View } from "@react-three/drei"
import { Mouse } from "@components/canvas/mouse/mouse"
import { Scene } from "@components/canvas/scene/scene"
import About from "@components/dom/about/about"
import Contact from "@components/dom/contact/contact"
import Hero from "@components/dom/hero/hero"
import Main from "@components/dom/main/main"
import { ModeSwitch } from "@components/dom/mode-switcher/mode-switch"
import Portfolio from "@components/dom/portfolio/portfolio"

import Header from "@components/dom/header/header"

import { SphereGroup } from "@components/canvas/sphere/group"
import { useLenis } from "@hooks/useLenis"
import Footer from "@components/dom/footer/footer"
import { CanvasConfig } from "@components/canvas/config/config"

export default function Home() {
	useLenis()

	const domRef = useRef<HTMLDivElement>(null!)

	return (
		<div ref={domRef}>
			<Canvas
				eventSource={domRef}
				style={{ position: "fixed", width: "100%", height: "100%", zIndex: 10 }}
			>
				<CanvasConfig />
				<Suspense fallback={null}>
					<View.Port />
					{/* <Ring radius={2} height={0.7} segments={40} text="SAM AZEVEDO  " /> */}
					{/* <About3d /> */}
				</Suspense>
			</Canvas>

			<Main>
				<Header />
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</Main>
			<Footer />
		</div>
	)
}
