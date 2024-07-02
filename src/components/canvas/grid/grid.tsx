import * as THREE from "three"
import { Instances, Instance } from "@react-three/drei"
interface GridProps {
	number: number
	lineWidth: number
	height: number
}
export const Grid = ({ number, lineWidth, height }: GridProps) => {
	return (
		<Instances limit={number * number} position={[10, -1, 10]}>
			<planeGeometry args={[lineWidth, height]} />
			<meshBasicMaterial color="#F1812B" />
			{Array.from({ length: number }, (_, y) =>
				Array.from({ length: number }, (_, x) => (
					<group
						position={[
							x * 2 - Math.floor(number / 2) * 2,
							-0.01,
							y * 2 - Math.floor(number / 2) * 2,
						]}
					>
						<Instance rotation={[-Math.PI / 2, 0, 0]} />
						<Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
					</group>
				))
			)}
			<gridHelper
				args={[100, 100, "#797979", "#3F3F3F"]}
				position={[0, -0.01, 0]}
			/>
		</Instances>
	)
}
