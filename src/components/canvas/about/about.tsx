import * as THREE from "three"
import { useRef } from "react"
import { MeshTransmissionMaterial, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useScrollPosition } from "@hooks/useScrollPosition"
import { Animated } from "../animated/animated"
import { ResponsiveText } from "../text/text"
export const About3d = () => {
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
			end: 900,
			startProps: {
				position: [0, -15, 0],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, 0],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
		},

		{
			start: 900,
			end: 1200,
			startProps: {
				position: [0, 0, 0],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
			endProps: {
				position: [0, 0, 0],
				scale: 0.5,
				rotation: [0, 0, 0],
			},
		},
	]
	console.log(scrollY)
	return (
		<Animated scrollY={scrollY} configs={config}>
			<mesh position={[0, 0, -1]}>
				<planeGeometry args={[4, 4, 32, 32]} />
				<MeshTransmissionMaterial
					backside
					backsideThickness={1}
					thickness={1.5}
					ior={1}
				/>
			</mesh>
			<ResponsiveText>
				Who am I Samuel Azevedo and I am a passionate Front-end Developer and{" "}
				Designer. I specialize in creating visually stunning, responsive, and
				interactive web applications that provide seamless user experiences. With a
				keen eye for detail and a dedication to the craft, I bring ideas to life
				through code and design. Whether it's building from scratch or enhancing
				existing projects, I thrive on delivering high-quality results. Currently, I
				am working as a freelancer, collaborating with clients to create web
				applications that not only look great but also function flawlessly. Let's
				build something amazing together!
			</ResponsiveText>
		</Animated>
	)
}
