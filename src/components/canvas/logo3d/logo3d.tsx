import * as THREE from "three"
import { useMemo, useRef, useState } from "react"
// import vertex from "./vertex.glsl"
// import fragment from "./fragment.glsl"
import { Text3D, Center } from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { Animated } from "../animated/animated"
import { useScrollPosition } from "@hooks/useScrollPosition"

export const Logo3D = () => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/green.png")
	// const texture2 = useLoader(THREE.TextureLoader, "/assets/matcaps/orange.png")
	// const uniforms = useMemo(
	// 	() => ({
	// 		uTime: { value: 0 },
	// 		uTexture: { value: texture },
	// 	}),
	// 	[texture]
	// )
	const scrollY = useScrollPosition()
	console.log(scrollY)
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
			end: 300,
			startProps: {
				position: [0, 0, -0.3],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, 0.5],
				scale: 1.0,
				rotation: [0, 7, 0],
			},
		},
		{
			start: 300,
			end: 500,
			startProps: {
				position: [0, 0, 0.5],
				scale: 1.0,
				rotation: [0, 7, 0],
			},
			endProps: { position: [-0.3, 0.8, 0], scale: 0.01, rotation: [0, 0, 0] },
		},
		{
			start: 500,
			end: 4000,
			startProps: { position: [-0.3, 0.8, 0], scale: 0.1, rotation: [0, 0, 0] },
			endProps: { position: [-0.3, 0.8, 0], scale: 0.1, rotation: [0, 0, 0] },
		},
	]

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

	return (
		<Animated configs={config} scrollY={scrollY} style={{ zIndex: 10 }}>
			<Center>
				<a.mesh ref={meshRef} rotation={[0, 0, 0]}>
					<Text3D
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
						position={[0, 0, -2]}
					>
						SAM
						<meshMatcapMaterial map={texture} />
					</Text3D>

					{/* <rawShaderMaterial
							vertexShader={vertex}
							fragmentShader={fragment}
							uniforms={uniforms}
							glslVersion={THREE.GLSL3}
						/> */}
				</a.mesh>
			</Center>
		</Animated>
	)
}
