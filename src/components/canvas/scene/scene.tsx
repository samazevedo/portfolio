"use client"
import * as THREE from "three"
import { Suspense, useEffect, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Particle } from "../particles/particle"
import { Perf } from "r3f-perf"
import { Logo3D } from "../logo3d/logo3d"

export const Scene = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null!)
	// change canvas bg color based on theme
	const { theme } = useTheme()
	const bg = theme === "dark" ? "#141311" : "#e3e3e3"

	return (
		<Canvas
			ref={canvasRef}
			camera={{
				position: [0, 0, 1.5],
				fov: 60,
				near: 0.01,
				far: 10,
			}}
			dpr={[1, 2]}
			style={{
				position: "fixed",
				overflow: "hidden",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
			}}
			gl={{
				antialias: true,
				// toneMapping: THREE.ACESFilmicToneMapping,
			}}
		>
			<ambientLight intensity={0.9} />
			<pointLight position={[1, 10, 10]} />
			<color attach="background" args={[bg]} />

			<Suspense fallback={null}>
				<Logo3D />
			</Suspense>
			<Perf />
		</Canvas>
	)
}
