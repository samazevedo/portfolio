"use client"
import * as THREE from "three"
import { ThemeProvider } from "@components/theme/theme-provider"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
	Box,
	Cloud,
	Environment,
	PerspectiveCamera,
	Scroll,
	ScrollControls,
	Sparkles,
	View,
} from "@react-three/drei"
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
import { SectionProvider } from "@components/dom/section/section-context"
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { Ring } from "@components/canvas/ring/ring"
import { Block } from "@react-three/fiber/dist/declarations/src/core/utils"
import { useTheme } from "next-themes"
import { About3d } from "@components/canvas/about/about"

export default function Home() {
	useLenis()

	const domRef = useRef<HTMLDivElement>(null!)

	return (
		<div ref={domRef}>
			<Canvas
				eventSource={domRef}
				style={{ position: "fixed", width: "100%", height: "100%", zIndex: 10 }}
			>
				<Suspense fallback={null}>
					<CanvasConfig />
					<Ring radius={2} height={0.7} segments={40} text="SAM AZEVEDO  " />
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

const CanvasConfig = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} intensity={1} />

			<PerspectiveCamera makeDefault fov={75} position={[0, 0, 1]} />
		</>
	)
}
