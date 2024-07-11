import * as THREE from "three"
import { useMemo, useRef, useEffect } from "react"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import {
	Text3D,
	Center,
	MeshTransmissionMaterial,
	MeshDistortMaterial,
	Stage,
} from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { Animated } from "../animated/animated"
import { useScrollPosition } from "@hooks/useScrollPosition"

interface Props {
	children?: React.ReactNode
	position?: [number, number, number]
	scale?: number
	rotation?: [number, number, number]
}

export const Logo3D = ({ position, scale, rotation, children }: Props) => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const texture = useLoader(
		THREE.TextureLoader,
		"/assets/matcaps/green-metal.png"
	)
	// const texture2 = useLoader(THREE.TextureLoader, "/assets/matcaps/orange.png")
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uTexture: { value: texture },
		}),
		[texture]
	)
	const mouse = new THREE.Vector2()
	// const handleMouseMove = (e: MouseEvent) => {
	// 	mouse.x = (e.clientX / window.innerWidth) * 2 - 1
	// 	mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
	// }
	// useEffect(() => {
	// 	window.addEventListener("mousemove", handleMouseMove)
	// 	return () => {
	// 		window.removeEventListener("mousemove", handleMouseMove)
	// 	}
	// }, [handleMouseMove])

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
	// }))\
	const { pointer, viewport } = useThree()
	useFrame((state) => {
		meshRef.current.geometry.center()
		// meshRef.current.position.x = mouse.x * 0.1
		// meshRef.current.position.y = mouse.y * 0.1
	})

	return (
		<Text3D
			ref={meshRef}
			position={position}
			scale={scale}
			rotation={rotation}
			castShadow
			font="/fonts/Anton/Anton.json"
			size={0.5}
			height={0.2}
			curveSegments={10}
			bevelEnabled
			bevelThickness={0.1}
			bevelSize={0.02}
			bevelOffset={0}
			bevelSegments={5}
		>
			{/* <rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				glslVersion={THREE.GLSL3}
				transparent
			/> */}

			{/* <MeshTransmissionMaterial map={texture} roughness={0.5} transparent /> */}
			{children}
			<MeshDistortMaterial transparent map={texture} distort={0.05} />
		</Text3D>
	)
}
