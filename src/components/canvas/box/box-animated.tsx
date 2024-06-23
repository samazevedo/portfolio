import * as THREE from "three"
import { a, useSpring } from "@react-spring/three"
import { MeshProps } from "@react-three/fiber"

interface BoxProps extends MeshProps {
	section: number
	sectionConfig: {
		[key: number]: {
			position: [number, number, number]
			scale: number
			rotation: [number, number, number]
		}
	}
}

export const BoxAnimated = ({
	section,
	sectionConfig,
	children,
	...props
}: BoxProps) => {
	const config = sectionConfig[section] || sectionConfig[0]
	const { position, scale, rotation } = useSpring({
		position: config.position,
		scale: config.scale,
		rotation: config.rotation,
		config: {
			mass: 5,
			tension: 500,
			friction: 50,
			precision: 0.0001,
		},
	})

	return (
		<a.mesh
			position={position as any}
			scale={scale}
			rotation={rotation as any}
			{...props}
		>
			{children}
		</a.mesh>
	)
}
