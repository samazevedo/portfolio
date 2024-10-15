import * as THREE from 'three';
import { useRef, useMemo, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import { useTheme } from 'next-themes';
import { MeshDistortMaterial, Edges, Box, Torus, Sphere } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';

export const BG = () => {
	const ref = useRef<THREE.Group>(null!);
	const geometryRef = useRef<THREE.Mesh>(null!);
	const texture = useLoader(THREE.TextureLoader, '/images/bg1.jpeg');
	const { theme } = useTheme();
	const { size } = useThree();
	// const color = theme === "dark" ? "#1C1C1C" : "#aec670"
	const color = '#0c0c0c';

	const uniforms = useMemo(
		() => ({
			uTime: { value: 0.0 },
			uMouse: { value: new THREE.Vector3(0, 0, 0) },
			uTexture: { value: texture },
			uColor: { value: new THREE.Color(color) },
			uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
		}),
		[color, texture]
	);
	// get dom mouse position
	const mouse = new THREE.Vector2();
	const handleMouseMove = (e: MouseEvent) => {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
	};

	useFrame(({ clock }) => {
		const time = clock.getElapsedTime();
		uniforms.uTime.value = performance.now() / 1000;
		uniforms.uMouse.value = new THREE.Vector3(mouse.x, mouse.y, 0);

		// geometryRef.current.rotation.x = time * 0.5;
		// geometryRef.current.rotation.y = time * 0.5;

		// update position based on mouse

		// ref.current.position.y = Math.sin(time) * 0.05;
		// ref.current.position.x = mouse.x * 0.05;
		// ref.current.position.y = -mouse.y * 0.05;
	});

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [handleMouseMove]);

	return (
		<group ref={ref} position={[0, 0, 0]} scale={0.5}>
			<ambientLight intensity={0.9} />
			<pointLight position={[10, 10, 10]} intensity={1} />
			<pointLight position={[-10, -10, -10]} intensity={0.8} />
			<mesh position={[0, 0, 0]} scale={2.5} ref={geometryRef}>
				<planeGeometry args={[10, 10, 32, 32]} />
				{/* <sphereGeometry args={[1.4, 32, 32]} /> */}
				<rawShaderMaterial
					transparent
					vertexShader={vertex}
					fragmentShader={fragment}
					uniforms={uniforms}
					glslVersion={THREE.GLSL3}
					depthTest={false}
				/>
			</mesh>
			{/* <NeonGreenGridPanel /> */}
		</group>
	);
};

const NeonGreenGridPanel = () => {
	const gray = '#827d7b';
	const neonGreen = '#35ff69';
	const orange = '#ff8552';

	// Material for the grid lines (neon green color)
	const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ color: orange, linewidth: 1.5 }), [orange]);

	// Material for the metallic plane
	const GridLines = () => {
		const gridSize = 100;
		const divisions = 100;
		const gridHelper = new THREE.GridHelper(gridSize, divisions, gray, gray);
		gridHelper.material = new THREE.LineBasicMaterial({ color: gray, linewidth: 0.5 });
		gridHelper.material.depthTest = false; // Ensures lines stay on top of the mesh
		gridHelper.rotation.x = Math.PI / 2;
		gridHelper.position.set(0, 0, -1);

		return <primitive object={gridHelper} />;
	};

	return (
		<>
			{/* <mesh position={[6, -2, -10]} scale={1.5}>
				<boxGeometry args={[5, 5]} />
				<meshNormalMaterial />
			</mesh>
			<mesh position={[7, -1, -10]} scale={1.5}>
				<boxGeometry args={[5, 5]} />
				<meshNormalMaterial />
			</mesh> */}

			{/* Neon green grid lines */}
			<GridLines />
		</>
	);
};
