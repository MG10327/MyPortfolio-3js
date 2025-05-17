import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'


export const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (

    <mesh>
      <ambientLight intensity={1} groundColor="black" />
      <directionalLight intensity={2} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024} position={[-20, 50, 10]} />
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.5 : 0.5}
      position={isMobile ? [0, -1.5, -1] : [0, -1.25, -1]}
      rotate={[0, -3.25, -1.5]}
      />
    </mesh>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=> {
    const mediaQueryW = window.matchMedia(
      "(max-width: 687px)")

      setIsMobile(mediaQueryW.matches)

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      mediaQueryW.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQueryW.removeEventListener('change', handleMediaQueryChange)
      }
  }, []);

   return (
    <Canvas
    frameLoop='demand'
    shadows
    camera={{position: [20,3,1], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

    <Preload all />
    </Canvas>
   )
}

export default ComputersCanvas