"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useTheme } from "next-themes"

export default function Scene() {
	const { theme } = useTheme()

	const bg = theme === "dark" ? "#1D1C1C" : "#98B899"

	return (
		<Canvas
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<color attach="background" args={[bg]} />
		</Canvas>
	)
}
