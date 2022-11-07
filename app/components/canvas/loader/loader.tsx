import { useProgress } from "@react-three/drei";

export function Loader(){
	const {active, progress} = useProgress()

	return active ? (
		<div style={{position:'absolute', top:'0', width:'100vw', height:'100vh', background: '#FF2727F2', zIndex: '1000'}}>
			<span>
				{Math.floor(progress)}%
			</span>
		</div>
	) : null
}