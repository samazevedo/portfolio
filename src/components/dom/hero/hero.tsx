import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import Socials from "../socials/socials"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import {
	ChromaticAberration,
	EffectComposer,
	Glitch,
	Noise,
	Sepia,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Cloud, Environment, Sparkles } from "@react-three/drei"
import { Logo3D } from "@components/canvas/logo3d/logo3d"
import { BG } from "@components/canvas/bg/bg"

export default function Hero() {
	const offset = new THREE.Vector2(0.01, 0.01)
	const delay = new THREE.Vector2(0.8, 0.6)
	// const { theme } = useTheme()
	// const bg = theme === "dark" ? "#1C1C1C" : "#8d8b8e"

	return (
		<section className="relative w-full h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
			<Canvas
				camera={{ position: [0, 0, 2], fov: 75, near: 0.1, far: 100 }}
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
				{/* <color attach="background" args={[bg]} /> */}

				{/* <Logo3D children="SAM" position={[0, 0, 0]} scale={0.3} /> */}
				{/* <Logo3D children="AZEVEDO" position={[0, -0.15, 0]} scale={0.15} /> */}
				<BG />

				<EffectComposer>
					<Glitch blendFunction={BlendFunction.OVERLAY} active delay={delay} />
					<ChromaticAberration
						blendFunction={BlendFunction.NORMAL}
						offset={offset}
						radialModulation={false}
						modulationOffset={0.1}
					/>
				</EffectComposer>
				<ambientLight intensity={0.15} />
				<Environment preset="night" />
			</Canvas>
			<div className="absolute inset-0  grid grid-rows-[1.5fr_1.0fr_0.5fr] justify-center">
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-end">
					<h1 className="text-5xl font-bold tracking-tighter   sm:text-5xl md:text-6xl text-lime-500 dark:text-orange-600">
						Sam Azevedo
					</h1>
				</div>

				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 self-start mt-1">
					<p className="text-lg text-gray-500 dark:text-gray-100 sm:text-md md:text-xl">
						Front End Web Developer | Designer.
					</p>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row self-start justify-center ">
					<Socials />
				</div>
			</div>
		</section>
	)
}
