import * as THREE from "three"
import { MeshTransmissionMaterial, Text } from "@react-three/drei"
import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Animated } from "../animated/animated"
import { useScrollPosition } from "@hooks/useScrollPosition"

interface Props {
	radius: number
	height: number
	segments: number
	text: string
}

export const Ring = ({ radius, height, segments, text }: Props) => {
	const { theme } = useTheme()
	const color = theme === "dark" ? "#ffffff" : "#ddfa80"
	const groupRef = useRef<THREE.Group>(null!)

	// calc text position
	const textPositions: {
		x: number
		z: number
		rotation: number
	}[] = []
	const angleStep = (Math.PI * 2) / text.length
	for (let i = 0; i < text.length; i++) {
		const angle = angleStep * i
		const x = radius * Math.sin(angle)
		const z = radius * Math.cos(angle)
		textPositions.push({ x, z, rotation: -angle })
	}
	useFrame(() => {
		groupRef.current.rotation.y -= 0.003
	})
	const scrollY = useScrollPosition()
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
			end: 200,
			startProps: {
				position: [0, 0, -1],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, -10],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
		},

		{
			start: 200,
			end: 500,
			startProps: {
				position: [0, 0, -10],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 10, -10],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
		},
		{
			start: 500,
			end: 7000,
			startProps: {
				position: [0, 10, -10],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 10, -10],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
		},
	]
	console.log(scrollY)

	return (
		<Animated scrollY={scrollY} configs={config}>
			<group ref={groupRef}>
				<mesh>
					<cylinderGeometry args={[radius, radius, height, segments]} />
					<MeshTransmissionMaterial
						backside
						backsideThickness={1.5}
						thickness={3.1}
						transmission={1}
					/>
				</mesh>
				{text.split("").map((char: string, index: number) => (
					<Text
						key={index}
						position={[textPositions[index].x, 0, textPositions[index].z]}
						rotation={[0, textPositions[index].rotation, 0]}
						fontSize={0.7}
						lineHeight={1.2}
						fontWeight={500}
						letterSpacing={1}
						color={color}
						textAlign="center"
						anchorX="center"
						anchorY="middle"
					>
						{char}
					</Text>
				))}
			</group>
		</Animated>
	)
}
