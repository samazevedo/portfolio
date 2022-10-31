import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import styled from 'styled-components'
import { PerspectiveCamera } from '@react-three/drei'
interface CanvasProp {
  children: React.ReactNode
}

const Loading = () => <div>Loading . . .</div>

const LoadingS = styled.div``

export default function CanvasL({ children }: CanvasProp) {
  return (
    <div id='canvas'>
      <Canvas shadows>
        {/* <color attach='background' args={['#dadada']} /> */}
        {/* <spotLight position={[10, 10, 10]} intensity={1} />
        <ambientLight intensity={0.2} /> */}
        <PerspectiveCamera
          makeDefault
          far={100}
          near={0.1}
          fov={28}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <directionalLight
            castShadow
            position={[11, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>

        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
