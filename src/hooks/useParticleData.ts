import { useMemo } from "react"
import * as THREE from "three"

type Shape = "plane" | "sphere" | "triangle"

const generatePlaneData = (count: number, side: number) => {
	const positions = new Float32Array(count * 3)
	const uvs = new Float32Array(count * 2)

	let i3 = 0
	let i2 = 0
	for (let i = 0; i < count; i++) {
		const x = (i % side) / side
		const y = Math.floor(i / side) / side

		positions[i3] = x * 2 - 1
		positions[i3 + 1] = y * 2 - 1
		positions[i3 + 2] = 0

		uvs[i2] = x
		uvs[i2 + 1] = y
		i3 += 3
		i2 += 2
	}

	return { positions, uvs }
}

const generateSphereData = (count: number) => {
	const positions = new Float32Array(count * 3)
	const uvs = new Float32Array(count * 2)

	for (let i = 0; i < count; i++) {
		const theta = 2 * Math.PI * Math.random()
		const phi = Math.acos(2 * Math.random() - 1)
		const x = Math.sin(phi) * Math.cos(theta)
		const y = Math.sin(phi) * Math.sin(theta)
		const z = Math.cos(phi)

		const i3 = i * 3
		const i2 = i * 2

		positions[i3] = x
		positions[i3 + 1] = y
		positions[i3 + 2] = z

		uvs[i2] = (x + 1) / 2
		uvs[i2 + 1] = (y + 1) / 2
	}

	return { positions, uvs }
}

const generateTriangleData = (count: number) => {
	const positions = new Float32Array(count * 3)
	const uvs = new Float32Array(count * 2)

	for (let i = 0; i < count; i++) {
		const x = (Math.random() - 0.5) * 2
		const y = (Math.random() - 0.5) * 2

		const i3 = i * 3
		const i2 = i * 2

		positions[i3] = x
		positions[i3 + 1] = y
		positions[i3 + 2] = 0

		uvs[i2] = (x + 1) / 2
		uvs[i2 + 1] = (y + 1) / 2
	}

	return { positions, uvs }
}

export const useParticleData = (count: number, shape: Shape) => {
	return useMemo(() => {
		const side = Math.ceil(Math.sqrt(count))
		const totalParticles = side * side

		switch (shape) {
			case "sphere":
				return generateSphereData(totalParticles)
			case "triangle":
				return generateTriangleData(totalParticles)
			case "plane":
			default:
				return generatePlaneData(totalParticles, side)
		}
	}, [count, shape])
}
