import * as THREE from "three"
import { useRef, useMemo, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import { useTheme } from "next-themes"
import { MeshDistortMaterial } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"

export const BG = () => {
	const ref = useRef<THREE.Mesh>(null!)
	const texture = useLoader(THREE.TextureLoader, "/images/bg1.jpeg")
	const { theme } = useTheme()
	// const color = theme === "dark" ? "#1C1C1C" : "#aec670"
	const color = "#0c0c0c"
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
			uTexture: { value: texture },
			uColor: { value: new THREE.Color(color) },
		}),
		[color, texture]
	)
	// get dom mouse position
	const mouse = new THREE.Vector2()
	const handleMouseMove = (e: MouseEvent) => {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1
		mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
	}

	useFrame(({ clock }) => {
		const time = clock.getElapsedTime()
		if (ref.current.material instanceof THREE.RawShaderMaterial) {
			ref.current.material.uniforms.uTime.value = time
			ref.current.material.uniforms.uMouse.value = new THREE.Vector3(0, 0, 0)
			ref.current.material.uniforms.uColor.value = new THREE.Color(color)
		}
		// update position based on mouse

		ref.current.position.x = -mouse.x * 0.1
		ref.current.position.y = -mouse.y * 0.1

		ref.current.rotation.z = time * 0.05
		// ref.current.rotation.x = time * 0.5
	})

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [handleMouseMove])

	return (
		<mesh ref={ref} position={[0, 0, -1]} scale={1} castShadow receiveShadow>
			<planeGeometry args={[32, 32, 32, 32]} />
			<rawShaderMaterial
				transparent
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				glslVersion={THREE.GLSL3}
			/>
		</mesh>
	)
}
