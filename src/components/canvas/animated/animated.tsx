import { MeshProps } from "@react-three/fiber"
import { a, useSpring } from "@react-spring/three"
interface AnimatedProps extends MeshProps {
	style?: React.CSSProperties
	scrollY: number
	configs: {
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
	}[]
}

export const Animated = ({
	scrollY,
	configs,
	children,
	...props
}: AnimatedProps) => {
	const config =
		configs.find((cfg) => scrollY >= cfg.start && scrollY < cfg.end) || configs[0]

	const progress = (scrollY - config.start) / (config.end - config.start)

	const { position, scale, rotation } = useSpring({
		position: [
			config.startProps.position[0] +
				(config.endProps.position[0] - config.startProps.position[0]) * progress,
			config.startProps.position[1] +
				(config.endProps.position[1] - config.startProps.position[1]) * progress,
			config.startProps.position[2] +
				(config.endProps.position[2] - config.startProps.position[2]) * progress,
		],
		scale:
			config.startProps.scale +
			(config.endProps.scale - config.startProps.scale) * progress,
		rotation: [
			config.startProps.rotation[0] +
				(config.endProps.rotation[0] - config.startProps.rotation[0]) * progress,
			config.startProps.rotation[1] +
				(config.endProps.rotation[1] - config.startProps.rotation[1]) * progress,
			config.startProps.rotation[2] +
				(config.endProps.rotation[2] - config.startProps.rotation[2]) * progress,
		],
		config: { mass: 1, tension: 170, friction: 26, precision: 0.0001 },
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
