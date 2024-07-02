import * as THREE from "three"
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect } from "react"

export const ResizeCamera = () => {
	const { camera, size } = useThree()
	useEffect(() => {
		if (camera instanceof THREE.PerspectiveCamera) {
			camera.aspect = size.width / size.height
			camera.updateProjectionMatrix()
		}
	}, [camera, size.width, size.height])

	return null
}
