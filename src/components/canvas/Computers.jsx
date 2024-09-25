import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'


export const Computers = () => {

  const computer = useGLTF('../../../../public/desktop_pc/scene.gltf')

  return (

    <mesh>
      <ambientLight intensity={1} groundColor="black" />
      <directionalLight intensity={2} angle={0.12} penumbra={1} castShadow position={[-20, 50, 10]} />
      <primitive
      object={computer.scene}
      scale={0.5}
      position={[0, -3.25, -1.5]}
      rotate={[0, -3.25, -1.5]}
      />
    </mesh>

  )
}

const ComputersCanvas = () => {
   return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,3,5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>

    <Preload all />
    </Canvas>
   )
}

export default ComputersCanvas