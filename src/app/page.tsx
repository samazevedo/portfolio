"use client"
import * as THREE from "three"
import { ThemeProvider } from "@components/theme/theme-provider"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Cloud, Scroll, ScrollControls, Sparkles } from "@react-three/drei"
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
import { Logo3D } from "@components/canvas/logo3d/logo3d"

export default function Home() {
	useLenis()

	return (
		<>
			{/* <Scene>
				<Cloud scale={0.5} position={[0, 0, 0]} castShadow />
				<Sparkles
					count={100}
					scale={1}
					position={[0, 0, -0.1]}
					castShadow
					speed={0.3}
					color={"#268a1f"}
				/>
				<Logo3D children={"SAM"} position={[0, 0.1, 0]} scale={0.22} />
				<Logo3D children={"AZEVEDO"} position={[0, -0.02, 0]} scale={0.2} />
			</Scene> */}
			<Main>
				<Header />
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</Main>
			<Footer />
		</>
	)
}
