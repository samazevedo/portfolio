import * as THREE from "three"
import { useMemo, useRef } from "react"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"

export const Logo3D = () => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
		}),
		[]
	)

	return (
		<mesh ref={meshRef}>
			<boxGeometry />
			<rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				transparent
				glslVersion={THREE.GLSL3}
			/>
		</mesh>
	)
}
