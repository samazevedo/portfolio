import * as THREE from "three"
import { useEffect, useMemo, useRef } from "react"
import { useLoader, useThree, useFrame } from "@react-three/fiber"
import { Center, shaderMaterial } from "@react-three/drei"
import vertex from "./vertex.glsl"
import fragment from "./fragment.glsl"
import { Animated } from "../animated/animated"
import { useScrollPosition } from "@hooks/useScrollPosition"
import { useTheme } from "next-themes"

export const Photo = () => {
	const { theme } = useTheme()
	// const bg = theme === "dark" ? "#141311" : "#e8dfaa"
	const pointsRef = useRef<THREE.Points>(null!)
	const materialRef = useRef<THREE.RawShaderMaterial>(null!)
	const uTexture = useLoader(THREE.TextureLoader, "/images/sam.jpg")
	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uTexture: { value: uTexture },
			uResolution: {
				value: new THREE.Vector2(window.innerWidth, window.innerHeight),
			},
			uColor: { value: new THREE.Color("#d5e3c3") },
		}),
		[theme]
	)

	const SIZE = 128
	const positions = useMemo(() => {
		const positions = new Float32Array(SIZE * SIZE * 3)
		let index = 0
		for (let i = 0; i < SIZE; i++) {
			for (let j = 0; j < SIZE; j++) {
				const k = i * SIZE + j
				positions[k * 3 + 0] = (5 * i) / SIZE
				positions[k * 3 + 1] = (5 * j) / SIZE
				positions[k * 3 + 2] = 0
			}
		}

		return positions
	}, [])

	const refPositions = useMemo(() => {
		const positions = new Float32Array(SIZE * SIZE * 2)
		let index = 0
		for (let i = 0; i < SIZE; i++) {
			for (let j = 0; j < SIZE; j++) {
				const k = i * SIZE + j
				positions[k * 2 + 0] = (5 * i) / (SIZE - 1)
				positions[k * 2 + 1] = (5 * j) / (SIZE - 1)
			}
		}

		return positions
	}, [])

	useFrame(({ clock }) => {
		uniforms.uTime.value = clock.getElapsedTime()
		pointsRef.current.geometry.center()
		pointsRef.current.geometry.attributes.position.needsUpdate = true
	})

	const scrollY = useScrollPosition()
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
			end: 800,
			startProps: {
				position: [-3, 0, 0],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [-2, 0, 0.5],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
		},
		{
			start: 800,
			end: 1250,
			startProps: {
				position: [-2, 0, 0.5],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, 0],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
		},
		{
			start: 1250,
			end: 1400,
			startProps: {
				position: [0, 0, 0],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, 0],
				scale: 0.4,
				rotation: [0, 0, 0],
			},
		},
		{
			start: 1400,
			end: 2000,
			startProps: { position: [0, 0, 0], scale: 0.4, rotation: [0, 0, 0] },
			endProps: { position: [3, 0, 0], scale: 0.4, rotation: [0, 0, 0] },
		},
		{
			start: 2000,
			end: 4000,
			startProps: { position: [3, 0, 0], scale: 0.4, rotation: [0, 0, 0] },
			endProps: { position: [3, 0, 0], scale: 0.4, rotation: [0, 0, 0] },
		},
	]
	const scale = 0.4
	const { size } = useThree((state) => state)

	return (
		<Animated scrollY={scrollY} configs={config}>
			<points ref={pointsRef} position={[0, 0.7, -2]}>
				<planeGeometry args={[3, 3, 128, 128]} />
				{/* <bufferGeometry>
				<bufferAttribute
                attach="attributes-position"
                array={positions}
                count={positions.length / 3}
                itemSize={3}
				/>
				<bufferAttribute
                attach="attributes-ref"
                array={refPositions}
                count={refPositions.length / 2}
                itemSize={2}
				/>
                </bufferGeometry> */}
				<rawShaderMaterial
					ref={materialRef}
					transparent
					glslVersion={THREE.GLSL3}
					vertexShader={vertex}
					fragmentShader={fragment}
					uniforms={uniforms}
				/>
			</points>
		</Animated>
	)
}
