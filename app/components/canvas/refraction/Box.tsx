import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { useMemo } from 'react'
import RefractionMaterial from './BackfaceMaterial'
import BackfaceMaterial from './BackfaceMaterial'
import { Object3D } from 'three'

export default function Box() {
  const ref = useRef<THREE.Mesh>(null!)
  const { size, viewport, gl, scene, camera, clock } = useThree()

  // // create fbo's and materials
  // const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] =
  //   useMemo(() => {
  //     const envFbo = new THREE.WebGLRenderTarget(size.width, size.height)
  //     const backfaceFbo = new THREE.WebGLRenderTarget(size.width, size.height)
  //     const backfaceMaterial = new BackfaceMaterial()
  //     const refractionMaterial = new RefractionMaterial({
  //       enMap: envFbo.texture,
  //       backfaceMap: backfaceFbo.texture,
  //       resolution: [size.width, size.height],
  //     })
  //     return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
  //   }, [size])

  // const dummy = useMemo(() => new Object3D(), [])
  useFrame(({ mouse }) => {
    let elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = Math.sin(elapsedTime) * 2
    ref.current.rotation.z = Math.sin(elapsedTime) * 2
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2.1, 0]} />
      <meshBasicMaterial />

      <meshPhysicalMaterial
        roughness={0.5}
        metalness={1.0}
        transmission={0.5}
      />
    </mesh>
  )
}
