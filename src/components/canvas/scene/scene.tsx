"use client"
import * as THREE from "three"
import { Suspense } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Particle } from "../particles/particle"
import { OrbitControls, Stats } from "@react-three/drei"
import { useScrollPosition } from "@hooks/useScrollPosition"
import { Animated } from "../animated/animated"
import { SphereGroup } from "../sphere/group"

export default function Scene() {
	const { theme } = useTheme()
	const bg = theme === "dark" ? "#000000" : "#FFFFFF"

	// const sections = useScrollSection()

	return (
		<Canvas
			camera={{
				position: [0, 0, 3],
			}}
			dpr={[1, 1.5]}
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
			gl={{
				antialias: true,
				// toneMapping: THREE.ACESFilmicToneMapping,
			}}
		>
			<ambientLight intensity={0.7} />
			<Stats />
			<pointLight position={[1, 10, 10]} />

			<color attach="background" args={[bg]} />

			<Suspense fallback={null}>
				{/* <Particle /> */}
				<UsingAnimated />
			</Suspense>
		</Canvas>
	)
}

const UsingAnimated = () => {
	const scrollY = useScrollPosition()
	const { clock } = useThree()
	const elapsed = clock.getElapsedTime()
	console.log(scrollY)
	const config: {
		start: number
		end: number
		startProps: {
			position: [number, number, number]
			scale: number
			rotation: [number, number, number]
		}
		endProps: {
			position: [number, number, number]
			scale: number
			rotation: [number, number, number]
		}
	}[] = [
		{
			start: 0,
			end: 300,
			startProps: {
				position: [0, 0.5, 0],
				scale: 2.5,
				rotation: [0, 0, 0],
			},
			endProps: { position: [0.0, -2, 0], scale: 30.6, rotation: [0, 0, 0] },
		},
		{
			start: 500,
			end: 1000,
			startProps: { position: [0.0, -2, 0], scale: 1.6, rotation: [0, 0, 0] },
			endProps: { position: [4, 1, 0], scale: 2, rotation: [0, 0, 0] },
		},
	]

	return (
		<Animated configs={config} scrollY={scrollY}>
			<SphereGroup />
		</Animated>
	)
}
