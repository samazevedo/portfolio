import * as THREE from "three"
import { useRef, useEffect, useMemo } from "react"
import { useFrame, useThree, createPortal } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import { useParticleData } from "@hooks/useParticleData"
import { useFBO } from "@react-three/drei"
import fboVertex from "./fboVertex.glsl"
import fboFragment from "./fboFragment.glsl"

export const Particle = () => {
	const pointsRef = useRef<THREE.Points>(null!)
	const particlesMaterialRef = useRef<THREE.RawShaderMaterial>(null!)
	const fboMaterialRef = useRef<THREE.RawShaderMaterial>(null!)
	const mouseRef = useRef<THREE.Mesh>(null!)
	const { viewport, camera, size } = useThree()

	// setup particles
	const count = 15000
	const shape = "plane"
	const { positions, uvs } = useParticleData(count, shape)

	// setup FBO
	const textureSize = Math.ceil(Math.sqrt(count))
	const fboSize = Math.pow(2, Math.ceil(Math.log2(textureSize)))
	const fboScene = new THREE.Scene()
	const fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1)
	let target1 = useFBO(fboSize, fboSize, {
		type: THREE.HalfFloatType,
		magFilter: THREE.NearestFilter,
		minFilter: THREE.NearestFilter,
	})
	let target2 = useFBO(fboSize, fboSize, {
		type: THREE.HalfFloatType,
		magFilter: THREE.NearestFilter,
		minFilter: THREE.NearestFilter,
	})

	// load image texture
	const imageTexture = useMemo(
		() => new THREE.TextureLoader().load("/images/bg5.jpg"),
		[]
	)

	const fboUniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uResolution: { value: new THREE.Vector2(fboSize, fboSize) },
			uMouse: { value: new THREE.Vector2(0, 0) },
			uTexture: { value: imageTexture },
		}),
		[size]
	)

	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uResolution: { value: new THREE.Vector2(fboSize, fboSize) },
			uTexture: { value: imageTexture },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
			uDisplacement: { value: target1.texture },
		}),
		[size, imageTexture, target1.texture]
	)

	const [{ position }, api] = useSpring(() => ({
		position: [0, 0, 0],
		config: { mass: 1, tension: 500, friction: 20, precision: 0.0001 },
	}))

	const handleMouseMove = (event: MouseEvent) => {
		event.preventDefault()
		const x = (event.x / window.innerWidth) * 2 - 1
		const y = -(event.y / window.innerHeight) * 2 + 1

		// convert to normalized device coordinates NDC
		const vec = new THREE.Vector3(x, y, 0.5)
		vec.unproject(camera)

		const dir = vec.sub(camera.position).normalize()
		const distance = -camera.position.z / dir.z
		const position = camera.position.clone().add(dir.multiplyScalar(distance))

		api.start({ position: [position.x, position.y, 0] })

		if (mouseRef.current) {
			mouseRef.current.position.set(position.x, position.y, 0)
		}

		if (fboUniforms.uMouse) {
			fboUniforms.uMouse.value.set(
				event.clientX / size.width,
				1.0 - event.clientY / size.height
			)
		}
	}

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [camera, api, size])

	useFrame(({ clock, gl, pointer }) => {
		// // Convert mouse position to normalized device coordinates

		const elapsedTime = clock.getElapsedTime()
		const mouseX = (pointer.x * viewport.width) / 2
		const mouseY = (pointer.y * viewport.height) / 2

		//  update uniforms values
		if (particlesMaterialRef.current) {
			particlesMaterialRef.current.uniforms.uMouse.value.copy(
				mouseRef.current.position
			)
			particlesMaterialRef.current.uniforms.uTime.value = elapsedTime
		}

		if (fboUniforms.uTime) {
			fboUniforms.uTime.value = elapsedTime
		}

		// update FBO scene
		if (fboMaterialRef.current) {
			fboMaterialRef.current.uniforms.uTime.value = elapsedTime
			fboMaterialRef.current.uniforms.uMouse.value.copy(fboUniforms.uMouse.value)
		}

		// swap FBO targets
		gl.setRenderTarget(target1)
		gl.clear()
		gl.render(fboCamera, fboCamera)
		gl.setRenderTarget(null)
		// swap targets
		const temp = target1
		target1 = target2
		target2 = temp

		fboMaterialRef.current.uniforms.uTexture.value = target2.texture
		particlesMaterialRef.current.uniforms.uTexture.value = target1.texture

		api.start({
			position: [mouseX, mouseY, 0],
		})
	})

	return (
		<>
			{createPortal(
				<mesh>
					<planeGeometry args={[2, 2]} />
					<rawShaderMaterial
						ref={fboMaterialRef}
						vertexShader={fboVertex}
						fragmentShader={fboFragment}
						uniforms={fboUniforms}
						glslVersion={THREE.GLSL3}
					/>
				</mesh>,
				fboScene
			)}
			<mesh ref={mouseRef}>
				<circleGeometry args={[0.1, 30]} />
				<meshBasicMaterial color={" #A3E635"} />
			</mesh>
			<points ref={pointsRef} position={[0, 0, 2]}>
				<bufferGeometry>
					<bufferAttribute
						attach="attributes-position"
						count={positions.length / 3}
						array={positions}
						itemSize={3}
					/>

					<bufferAttribute
						attach="attributes-uv"
						count={uvs.length / 2}
						array={uvs}
						itemSize={2}
					/>
				</bufferGeometry>
				<rawShaderMaterial
					ref={particlesMaterialRef}
					vertexShader={vertex}
					fragmentShader={fragment}
					uniforms={uniforms}
					transparent
					glslVersion={THREE.GLSL3}
					toneMapped={true}
				/>
			</points>
		</>
	)
}
