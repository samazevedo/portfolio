import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import useStore from '../../../helper/store'

export const CanvasL = ({ children }: any) => {
  const dom = useStore((state) => state.dom)
  return (
    <>
      <Canvas style={{ position: 'absolute', top: 0 }}>{children}</Canvas>
    </>
  )
}
