"use client"
import { ThemeProvider } from "@components/theme/theme-provider"
import * as THREE from "three"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, OrbitControls } from "@react-three/drei"
import { Mouse } from "@components/canvas/mouse/mouse"
import Scene from "@components/canvas/scene/scene"
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

export default function Home() {
	useLenis()

	return (
		<>
			<Scene />
			<Header />
			<Main>
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</Main>
			<Footer />
		</>
	)
}

// const SphereComponent = () => {
// 	const ref = useRef<HTMLDivElement>(null!)
// 	return (
// 		<>
// 			<div
// 				ref={ref}
// 				style={{
// 					display: "grid",
// 					placeItems: "center",
// 					height: "100vh",
// 					width: "100vw",
// 					padding: "20rem",
// 				}}
// 			>
// 				hello
// 			</div>
// 			<UseCanvas>
// 				<ScrollScene track={ref}>
// 					{(props) => (
// 						<mesh {...props}>
// 							<SphereGroup />
// 						</mesh>
// 					)}
// 				</ScrollScene>
// 			</UseCanvas>
// 		</>
// 	)
// }
{
	/* <GlobalCanvas
				style={{
					pointerEvents: "none",
					height: "100vh",
					width: "100vw",
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: -1,
				}}
				dpr={[1, 2]}
				camera={
					{
						// near: 0.1,
						// far: 1000,
						// fov: 75,
						// position: [0, 0, 1],
					}
				}
			>
				{(globalChildren) => (
					<Suspense fallback={null}>
						{globalChildren}
						<spotLight position={[10, 10, 10]} angle={0.15} penumbra={12} />
						<ambientLight intensity={0.7} />
					</Suspense>
				)}
			</GlobalCanvas> */
}
