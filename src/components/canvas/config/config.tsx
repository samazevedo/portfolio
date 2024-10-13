import { PerspectiveCamera } from '@react-three/drei';

export const CanvasConfig = () => {
	return (
		<>
			<ambientLight intensity={0.9} />
			<pointLight position={[10, 10, 10]} intensity={1} />
			<PerspectiveCamera makeDefault fov={65} position={[0, 0, 1]} />
		</>
	);
};
