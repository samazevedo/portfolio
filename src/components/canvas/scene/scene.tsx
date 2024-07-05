"use client"
import * as THREE from "three"
import { Suspense, useEffect, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Cloud, Environment, Sparkles } from "@react-three/drei"
import { useTheme } from "next-themes"
import { Particle } from "../particles/particle"
import { Perf } from "r3f-perf"
import { Logo3D } from "../logo3d/logo3d"
import { Photo } from "../photo/photo"
import { Grid } from "../grid/grid"
import { BG } from "../bg/bg"

export const Scene = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null!)
	// change canvas bg color based on theme
	const { theme } = useTheme()
	const bg = theme === "dark" ? "#1C1C1C" : "#aec670"

	return (
		<Canvas
			ref={canvasRef}
			camera={{
				position: [0, 0, 1],
				fov: 75,
				near: 0.1,
				far: 100,
			}}
			dpr={[1, 2]}
			style={{
				position: "fixed",
				overflow: "hidden",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
			}}
			gl={{
				antialias: true,
			}}
		>
			<ambientLight intensity={0.05} />
			{/* <pointLight position={[1, 1, 1]} /> */}
			<color attach="background" args={[bg]} />

			<Suspense fallback={null}>
				<Logo3D />

				<Photo />
				{/* <BG /> */}
				<Environment preset="night" />

				<Sparkles
					position={[0, 0, -1]}
					count={50}
					scale={1.9}
					speed={0.3}
					size={2.5}
					noise={10.1}
					color="#488d2d"
				/>
				<Cloud
					position={[0, 0, -1]}
					scale={0.7}
					speed={0.05}
					color={theme === "dark" ? "#ccbee1" : "#256722"}
				/>
			</Suspense>
			{/* <Perf /> */}
		</Canvas>
	)
}
