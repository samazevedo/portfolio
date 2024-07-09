import * as THREE from "three"
import { useMemo, useRef, useState } from "react"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import { Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { Animated } from "../animated/animated"
import { useScrollPosition } from "@hooks/useScrollPosition"

interface Props {
	children: string
	position?: [number, number, number]
	scale?: number
	rotation?: [number, number, number]
}

export const Logo3D = ({ children, position, scale, rotation }: Props) => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/mirror.png")
	// const texture2 = useLoader(THREE.TextureLoader, "/assets/matcaps/orange.png")
	// const uniforms = useMemo(
	// 	() => ({
	// 		uTime: { value: 0 },
	// 		uTexture: { value: texture },
	// 	}),
	// 	[texture]
	// )

	// const [clicked, setClicked] = useState(false)

	// const [props, api] = useSpring(() => ({
	// 	map: texture,
	// 	config: {
	// 		mass: 5,
	// 		tension: 550,
	// 		friction: 140,
	// 		duration: 0.5,
	// 		precision: 0.0001,
	// 	},
	// }))
	useFrame((state) => {
		meshRef.current.geometry.center()
	})

	return (
		<Text3D
			ref={meshRef}
			position={position}
			scale={scale}
			rotation={rotation}
			castShadow
			font="/fonts/italiana-regular.json"
			size={0.5}
			height={0.1}
			curveSegments={10}
			bevelEnabled
			bevelThickness={0.1}
			bevelSize={0.02}
			bevelOffset={0}
			bevelSegments={5}
		>
			{children}
			{/* <rawShaderMaterial
							vertexShader={vertex}
							fragmentShader={fragment}
							uniforms={uniforms}
							glslVersion={THREE.GLSL3}
						/> */}
			<MeshTransmissionMaterial
				map={texture}
				ior={0.2}
				opacity={0.9}
				transmission={2.5}
			/>
		</Text3D>
	)
}
