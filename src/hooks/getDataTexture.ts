import * as THREE from "three"

export const getDataTexture = (size: number) => {
	const number = size * size
	const data = new Float32Array(4 * number)

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const index = i * size + j
			data[4 * index] = (i / size - 0.5) * 2 // range [-1, 1]
			data[4 * index + 1] = (j / size - 0.5) * 2 // range [-1, 1]
			data[4 * index + 2] = 0
			data[4 * index + 3] = 0
		}
	}

	const dataTexture = new THREE.DataTexture(
		data,
		size,
		size,
		THREE.RGBAFormat,
		THREE.FloatType
	) as THREE.DataTexture

	dataTexture.needsUpdate = true

	return dataTexture
}

// data texture sphere shape
// export const getDataTexture = (size: number) => {
// 	const number = size * size
// 	const data = new Float32Array(4 * number)

// 	for (let i = 0; i < size; i++) {
// 		for (let j = 0; j < size; j++) {
// 			const index = i * size + j

// 			const theta = Math.random() * Math.PI * 2
// 			const phi = Math.acos(Math.random() * 2 - 1)

// 			const x = Math.sin(phi) * Math.cos(theta)
// 			const y = Math.sin(phi) * Math.sin(theta)
// 			const z = Math.cos(phi)

// 			data[4 * index] = x
// 			data[4 * index + 1] = y
// 			data[4 * index + 2] = z
// 			data[4 * index + 3] = (Math.random() - 0.5) * 0.01
// 		}
// 	}

// 	const dataTexture = new THREE.DataTexture(
// 		data,
// 		size,
// 		size,
// 		THREE.RGBAFormat,
// 		THREE.FloatType
// 	) as THREE.DataTexture

// 	dataTexture.needsUpdate = true

// 	return dataTexture
// }
