import React, {Suspense, useEffect, useState} from 'react'


export const Computers = ({isMobile}) => {


  return (

    <mesh>
      <ambientLight intensity={1} groundColor="black" />
      <directionalLight intensity={2} angle={0.12} penumbra={1} castShadow position={[-20, 50, 10]} />
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.1 : 0.5}
      position={[0, -1.25, -1]}
      rotate={[0, -3.25, -1.5]}
      />
    </mesh>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=> {
    const mediaQuery = window.matchMedia(
      ('max-width: 687px'))

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