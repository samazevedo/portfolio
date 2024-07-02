import * as THREE from "three"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree, useLoader } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { useTexture } from "@react-three/drei"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"

export const Sphere = ({
	position,
}: {
	position?: [number, number, number]
}) => {
	const meshRef = useRef<THREE.Mesh>(null!)

	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/purple2.png")
	// const [texture2] = useTexture("/assets/matcaps/pink.png")
	// const [texture3] = useTexture("/assets/matcaps/blue.png")
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
			uMatcap: { value: texture },
		}),
		[]
	)

	const [spring, api] = useSpring(() => ({
		position: [0, 0, 0],
		config: { mass: 1, tension: 80, friction: 10, precision: 0.0001 },
	}))

	useFrame(({ pointer, clock: { elapsedTime } }) => {
		// api.start({
		// 	position: [
		// 		(pointer.x * viewport.width) / 2,
		// 		(pointer.y * viewport.height) / 2,
		// 		0,
		// 	],
		// })
	})

	return (
		<a.mesh ref={meshRef} position={position}>
			<boxGeometry args={[0.0005, 0.0005, 0.0005]} />
			{/* <rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				transparent
				wireframe
				glslVersion={THREE.GLSL3}
			/> */}
			{/* <meshStandardMaterial map={texture} /> */}
		</a.mesh>
	)
}
