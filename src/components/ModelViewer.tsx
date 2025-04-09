import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Group, Vector3, Object3D } from 'three';
import { useState } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring ,  animated } from '@react-spring/three';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  isAnimating?: boolean;
}
// animation
const AnimateModel: React.FC<ModelProps> = ({
  modelPath,
  scale = 1.5,
  position = [0, -1.2, 0],
  isAnimating = false,
}) => {
  const { scene } = useGLTF(modelPath) as unknown as { scene: Object3D };

  const { position: animatedPos } = useSpring({
    position: isAnimating ? [2, 0.5, 1] : position,
    config: { tension: 120, friction: 14 },
    loop: false,
  });

  return (
    <animated.primitive
      object={scene}
      scale={scale}
      position={animatedPos as unknown as [number, number, number]}
      dispose={null}
    />
  );
};
//Camera Rig
const CameraRig: React.FC<{ children : React.ReactNode }> = ({ children}) => {
  const rigRef =  useRef<Group>(null);

  useFrame(({ mouse }) => {
    if ( rigRef.current){
      rigRef.current.rotation.y = mouse.x * 0.5;
      rigRef.current.rotation.x = mouse.y * 0.2;
    }
  })
  return <group ref={rigRef}>{children}</group>
}

// const Model: React.FC<ModelProps> = ({ modelPath, scale = 1.5, position = [0, -1.2, 0] }) => {
//   const { scene } = useGLTF(modelPath) as unknown as { scene: Object3D };
//   return (
//     <primitive 
//       object={scene} 
//       scale={scale} 
//       position={position} 
//       dispose={null} 
//     />
//   );
// };

const FallbackComponent = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="lightgray" />
  </mesh>
);

interface ModelViewerProps {
  modelPath?: string;
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath = '/model.glb',
  className
}) => {
  const [isAnimating,setIsAnimating] = useState(false);
  const triggerAnimatation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  }

  return (
    <div 
      className={className}
      style={{
        width: '100%',
        height: '600px',
        backgroundColor: '#fff' ,
        position:'relative'
      }}
    >
      <button
        onClick={triggerAnimatation}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          padding: '10px 16px',
          background: '#333',
          color:'#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Animate Model
      </button>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 3], fov: 45 }}
      >
        <ambientLight intensity={1.9} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={<FallbackComponent />}>
          <CameraRig>
            <AnimateModel
              modelPath={modelPath}
              scale={1.5}
              position={[0,0.5,0]}
              isAnimating={isAnimating}
            />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={10}
              blur={2}
              far={1.6}
            />
            <Environment preset="studio" />
          </CameraRig>
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/model.glb');

export default ModelViewer;
