import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "./sphere"
import { Sphere2 } from "./sphere2"
export const SphereGroup = () => {
	const groupRef = useRef<THREE.Group>(null!)
	const group1Ref = useRef<THREE.Group>(null!)
	const group2Ref = useRef<THREE.Group>(null!)
	// sphere count
	const sphereCount = 500
	const radius = 0.15

	// sphere position
	const spherePosition = Array.from(
		{
			length: sphereCount,
		},
		(_, i) => {
			const theta = Math.random() * 2 * Math.PI
			const phi = Math.random() * Math.PI
			const x = radius * Math.sin(phi) * Math.cos(theta)
			const y = radius * Math.sin(phi) * Math.sin(theta)
			const z = radius * Math.cos(phi)
			return { x, y, z }
		}
	)
	const spherePosition2 = Array.from(
		{
			length: sphereCount,
		},
		(_, i) => {
			const theta = Math.random() * 2 * Math.PI
			const phi = Math.random() * Math.PI
			const x = radius * Math.sin(phi) * Math.cos(theta)
			const y = radius * Math.sin(phi) * Math.sin(theta)
			const z = radius * Math.cos(phi)
			return { x, y, z }
		}
	)

	useFrame(() => {
		// if (group1Ref.current) {
		// 	group1Ref.current.rotation.y += 0.001
		// }
		// if (group2Ref.current) {
		// 	group2Ref.current.rotation.y += 0.00009
		// }

		groupRef.current.rotation.y += 0.001
	})

	return (
		<group ref={groupRef}>
			<group ref={group1Ref}>
				{spherePosition.map((pos, i) => (
					<Sphere key={i} position={[pos.x, pos.y, pos.z]} />
				))}
			</group>
			<group ref={group2Ref}>
				{spherePosition2.map((pos, i) => (
					<Sphere2 key={i} position={[pos.x, pos.y, pos.z]} />
				))}
			</group>
		</group>
	)
}
