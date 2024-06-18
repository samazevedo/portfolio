import * as THREE from "three"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"

export const Mouse = () => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const { viewport } = useThree()
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
		}),
		[]
	)

	const [spring, api] = useSpring(() => ({
		position: [0, 0, 0],
		config: { mass: 1, tension: 80, friction: 10, precision: 0.0001 },
	}))

	useFrame(({ pointer }) => {
		api.start({
			position: [
				(pointer.x * viewport.width) / 2,
				(pointer.y * viewport.height) / 2,
				0,
			],
		})
	})

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			event.preventDefault()
			const x = (event.clientX / window.innerWidth) * 2 + 1
			const y = -(event.clientY / window.innerHeight) * 2 - 1
			api.start({ position: [x, y, 0] })
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [api, viewport])

	return (
		<a.mesh ref={meshRef} position={spring.position.to((x, y, z) => [x, y, z])}>
			<circleGeometry args={[0.1, 30]} />
			<rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				transparent
				glslVersion={THREE.GLSL3}
			/>
		</a.mesh>
	)
}
