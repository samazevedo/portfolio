// import dynamic from 'next/dynamic'
// import * as THREE from 'three'
// import {
//   Center,
//   Text3D,
//   MeshDistortMaterial,
//   useTexture,
// } from '@react-three/drei'
// import { useMemo, useRef, useLayoutEffect } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
// import sacred from '../../assets/fonts/sacred.json'
// interface TextProps {
//   children: React.ReactNode
//   size?: number
//   height?: number
//   curverSegments?: number
//   bevelEnabled?: boolean
//   bevelThickness?: number
//   bevelSize?: number
//   bevelOffset?: number
//   bevelSegments?: number
//   font?: string
// }

// export default function Text({ children, ...props }: TextProps) {
//   const ref = useRef<THREE.Mesh>(null!)
//   const config = useMemo(
//     () => ({
//       size: 0.4,
//       height: 0.2,
//       curveSegments: 7,
//       bevelEnabled: true,
//       bevelThickness: 0.01,
//       bevelSize: 0.01,
//       bevelOffset: 0.01,
//       bevelSegments: 10,
//       font: sacred,
//     }),
//     []
//   )
//   // const texture = useTexture('matcap.png')
//   const clock = new THREE.Clock()
//   const { size, viewport } = useThree()
//   const aspect = size.width / viewport.width
//   useFrame(({ mouse }) => {
//     // ref.current.rotation.x = Math.sin(clock.getElapsedTime()) / 5
//     // ref.current.rotation.y = Math.sin(clock.getElapsedTime()) / 10
//     // ref.current.rotation.z = Math.sin(clock.getElapsedTime() - 0.5) * 0.05
//     // ref.current.rotation.z = Math.cos(clock.getElapsedTime() - 0.5) * 0.5
//     // ref.current.rotation.x = Math.sin(clock.getElapsedTime() - 0.5) * 0.05
//     // ref.current.rotation.y = Math.sin(clock.getElapsedTime() - 0.5) * 0.05
//     // ref.current.rotation.y = THREE.MathUtils.lerp(
//     //   ref.current.rotation.y,
//     //   mouse.x * Math.PI * 0.02,
//     //   0.1
//     // )
//     // ref.current.rotation.x = THREE.MathUtils.lerp(
//     //   ref.current.rotation.x,
//     //   mouse.y * Math.PI * 0.02,
//     //   0.1
//     // )
//   })
//   return (
//     <Center>
//       <Text3D {...config} ref={ref} {...props}>
//         {children}
//         <MeshDistortMaterial
//           color={[0.7, 1.0, 0.2]}
//           speed={0.9}
//           distort={0.2}
//           radius={1}
//           roughness={0.7}
//           metalness={0.7}
//           clearcoat={1}
//           clearcoatRoughness={1}
//           transparent
//         />
//       </Text3D>
//     </Center>
//   )
// }
export const Text = () => <h1>Text</h1>
