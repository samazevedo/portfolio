import { useRef } from 'react'
import * as THREE from 'three'

export const Sphere = () => {
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}
