import * as THREE from "three"
import { Instances, Instance } from "@react-three/drei"
interface GridProps {
	number: number
	lineWidth: number
	height: number
}
export const Grid = ({ number, lineWidth, height }: GridProps) => {
	return (
		<Instances
			limit={number * number}
			position={[0, 0, -5]}
			rotation={[Math.PI * 0.5, 0, 0]}
		>
			<planeGeometry args={[lineWidth, height]} />
			<meshBasicMaterial color="#e59a38" />
			{Array.from({ length: number }, (_, y) =>
				Array.from({ length: number }, (_, x) => (
					<group
						position={[
							x * 2 - Math.floor(number / 2) * 2,
							-0.01,
							y * 2 - Math.floor(number / 2) * 2,
						]}
					>
						<Instance />
						<Instance />
					</group>
				))
			)}
			<gridHelper
				args={[100, 100, "#ff4b2b", "#424242"]}
				position={[0, 0, 10]}
				rotation={[0, 0, 0]}
			/>
		</Instances>
	)
}
