import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'
export default function Box() {
  const ref = useRef<THREE.Mesh>(null!)

  const clock = new THREE.Clock()

  useFrame(() => {
    let elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = Math.sin(elapsedTime) * 2
    ref.current.rotation.z = Math.sin(elapsedTime) * 2
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2.1, 0]} />

      <meshPhysicalMaterial
        roughness={0.5}
        metalness={1.0}
        transmission={0.5}
      />
    </mesh>
  )
}
