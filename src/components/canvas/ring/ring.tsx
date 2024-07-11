import * as THREE from "three"
import { MeshTransmissionMaterial, Text } from "@react-three/drei"
import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { useTheme } from "next-themes"

interface Props {
	radius: number
	height: number
	segments: number
	text: string
}

export const Ring = ({ radius, height, segments, text }: Props) => {
	const { theme } = useTheme()
	const color = theme === "dark" ? "#ffffff" : "#bfdd48"
	const groupRef = useRef<THREE.Group>(null!)

	// calc text position
	const textPositions: {
		x: number
		z: number
	}[] = []
	const angleStep = (Math.PI * 2) / text.length
	for (let i = 0; i < text.length; i++) {
		const angle = angleStep * i
		const x = radius * Math.sin(angle)
		const z = radius * Math.cos(angle)
		textPositions.push({ x, z })
	}
	useFrame(() => {
		groupRef.current.rotation.y -= 0.005

		// groupRef.current.rotation.z += Math.PI * 0.002
		// groupRef.current.rotation.x += Math.PI * 0.002
	})

	return (
		<group ref={groupRef} position={[0, 0, -4]}>
			<mesh>
				<cylinderGeometry args={[radius, radius, height, segments]} />
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.1}
					thickness={3.1}
				/>
			</mesh>
			{text.split("").map((char: string, index: number) => (
				<Text
					key={index}
					position={[textPositions[index].x, 0, textPositions[index].z]}
					rotation={[0, -angleStep * index + Math.PI / 2, 0]}
					fontSize={0.7}
					lineHeight={1}
					color={color}
					textAlign="center"
					anchorX="center"
					anchorY="middle"
				>
					{char}
				</Text>
			))}
		</group>
	)
}
