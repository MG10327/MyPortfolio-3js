import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'


export const Computers = ({isMobile}) => {

  const computer = useGLTF('../../../../public/desktop_pc/scene.gltf')


  return (

    <mesh>
      <ambientLight intensity={1} groundColor="black" />
      <directionalLight intensity={2} angle={0.12} penumbra={1} castShadow position={[-20, 50, 10]} />
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.3 : 0.5}
      position={isMobile ? [0, -0.25, -0.5] : [0, -1.25, -1]}
      rotate={[0, -3.25, -1.5]}
      />
    </mesh>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=> {
    const mediaQuery = window.matchMedia(
      "(max-width: 687px)")

      setIsMobile(mediaQuery.matches)

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
  }, []);

   return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,3,5], fov: 25}}
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