"use client"
import * as THREE from "three"
import { Suspense, useEffect, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import {
	Cloud,
	Environment,
	Scroll,
	ScrollControls,
	Sparkles,
} from "@react-three/drei"
import { useTheme } from "next-themes"
import { Particle } from "../particles/particle"
import { Perf } from "r3f-perf"
import { Logo3D } from "../logo3d/logo3d"
import { Photo } from "../photo/photo"
import { Grid } from "../grid/grid"
import { BG } from "../bg/bg"

export const Scene = ({ children }: { children: React.ReactNode }) => {
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
			gl={{
				antialias: true,
			}}
			style={{
				width: "100vw",
				height: "100vh",

				pointerEvents: "none",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: -1,
				overflow: "hidden",
			}}
		>
			<ambientLight intensity={0.2} />

			<color attach="background" args={[bg]} />

			<Suspense fallback={null}>{children}</Suspense>
			<Perf />
		</Canvas>
	)
}
