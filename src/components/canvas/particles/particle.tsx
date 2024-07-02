import * as THREE from "three"
import { useMemo, useRef } from "react"
import { useLoader } from "@react-three/fiber"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"

export const Particle = () => {
	const pointsRef = useRef<THREE.Points>(null!)
	const imageTexture = useLoader(THREE.TextureLoader, "/images/sam.jpg")
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uTexture: { value: imageTexture },
		}),
		[]
	)

	return (
		<points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					count={1000}
					array={new Float32Array(1000 * 3)}
					itemSize={3}
					attach="attributes-position"
				/>
				<bufferAttribute
					count={1000}
					array={new Float32Array(1000 * 2)}
					itemSize={2}
					attach="attributes-uv"
				/>
			</bufferGeometry>
			<rawShaderMaterial
				transparent
				glslVersion={THREE.GLSL3}
				uniforms={uniforms}
				vertexShader={vertex}
				fragmentShader={fragment}
			/>
		</points>
	)
}
