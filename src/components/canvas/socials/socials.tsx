import * as THREE from "three"
import { useRef } from "react"
import { MeshTransmissionMaterial, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export const Socials = () => {
	const groupRef = useRef<THREE.Group>(null!)

	return (
		<group ref={groupRef} position={[0, -2, -4]}>
			<mesh>
				<planeGeometry args={[10, 10, 32, 32]} />
				<MeshTransmissionMaterial
					backside
					backsideThickness={0.1}
					thickness={3.1}
				/>
			</mesh>
		</group>
	)
}
