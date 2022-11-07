import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export default function CursorObj() {
  // viwport canvas in 3d units meters
  const { viewport } = useThree()

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, y, 0)
    // ref.current.rotation.set(-y, x, 0)
  })

  const ref = useRef<THREE.Mesh>(null!)
  return (
    <mesh ref={ref}>
      <ringGeometry args={[0.3, 0.31, 40]} />
      <meshNormalMaterial />
    </mesh>
  )
}
