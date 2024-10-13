import * as THREE from 'three';
import { MeshTransmissionMaterial, Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { Animated } from '../animated/animated';
import { useScrollPosition } from '@hooks/useScrollPosition';

interface Props {
	radius: number;
	height: number;
	segments: number;
	text: string;
}

export const Ring = ({ radius, height, segments, text }: Props) => {
	const { theme } = useTheme();

	const groupRef = useRef<THREE.Group>(null!);

	// calc text position
	const textPositions: {
		x: number;
		z: number;
		rotation: number;
	}[] = [];
	const angleStep = (Math.PI * 2) / text.length;
	for (let i = 0; i < text.length; i++) {
		const angle = angleStep * i;
		const x = radius * Math.sin(angle);
		const z = radius * Math.cos(angle);
		textPositions.push({ x, z, rotation: -angle });
	}
	useFrame(() => {
		groupRef.current.rotation.y -= 0.006;
		groupRef.current.position.set(0, 0, -2);
	});

	return (
		<group ref={groupRef}>
			<mesh>
				<cylinderGeometry args={[radius, radius, height, segments]} />
				<MeshTransmissionMaterial backside backsideThickness={0.8} thickness={10.1} transmission={2} />
			</mesh>
			{text.split('').map((char: string, index: number) => (
				<Text
					key={index}
					position={[textPositions[index].x, 0, textPositions[index].z]}
					rotation={[0, textPositions[index].rotation, 0]}
					fontSize={0.5}
					lineHeight={1}
					fontWeight={400}
					letterSpacing={0.01}
					textAlign="center"
					anchorX="center"
					anchorY="middle"
				>
					{char}
				</Text>
			))}
		</group>
	);
};
