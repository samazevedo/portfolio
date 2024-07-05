import * as THREE from "three"
import { useRef, useMemo } from "react"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import { MeshDistortMaterial } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"

export const BG = () => {
	const ref = useRef<THREE.Mesh>(null!)
	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/green2.png")
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
		}),
		[]
	)
	useFrame(({ clock }) => {
		const time = clock.getElapsedTime()
		ref.current.rotation.y = time * 0.5
		ref.current.rotation.x = time * 0.5
	})
	return (
		<mesh ref={ref} position={[0, 0, -3]} scale={20} castShadow receiveShadow>
			<octahedronGeometry args={[0.2]} />
			<MeshDistortMaterial
				distort={0.5}
				color="#d3f349"
				speed={0.5}
				radius={0.9}
				map={texture}
			/>
			{/* <rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
			/> */}
		</mesh>
	)
}
