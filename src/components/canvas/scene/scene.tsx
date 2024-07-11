"use client"
import * as THREE from "three"
import { Suspense, useEffect, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { useTheme } from "next-themes"
import { Particle } from "../particles/particle"
import { Perf } from "r3f-perf"
import { Logo3D } from "../logo3d/logo3d"
import { Photo } from "../photo/photo"
import { Grid } from "../grid/grid"
import { BG } from "../bg/bg"
import { Ring } from "../ring/ring"
import {
	EffectComposer,
	Glitch,
	ChromaticAberration,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
export const Scene = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null!)
	// change canvas bg color based on theme
	const { theme } = useTheme()
	const bg = theme === "dark" ? "#000000" : "#000000"
	const delay = new THREE.Vector2(0.8, 0.6)

	const offset = new THREE.Vector2(0.01, 0.01)

	return (
		<Canvas
			camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 100 }}
			dpr={[1, 2]}
			gl={{ antialias: true }}
			style={{
				pointerEvents: "none",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
			shadows
		>
			<color attach="background" args={[bg]} />

			<Suspense fallback={null}>
				{/* <Logo3D children={"SAM"} scale={0.2} position={[0, 0.23, 1]} /> */}
				{/* <Logo3D children={"AZEVEDO"} scale={0.2} position={[0, 0.07, 1]} /> */}
				{/* <BG /> */}
				<Ring radius={2} height={0.7} segments={40} text="SAM AZEVEDO" />
				{/* <EffectComposer>
					<Glitch blendFunction={BlendFunction.OVERLAY} active delay={delay} />
					<ChromaticAberration
						blendFunction={BlendFunction.NORMAL}
						offset={offset}
						radialModulation={true}
						modulationOffset={0.01}
					/>
				</EffectComposer> */}
				<Perf />
				{/* <Environment preset="night" /> */}
				<ambientLight intensity={0.8} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			</Suspense>
		</Canvas>
	)
}
