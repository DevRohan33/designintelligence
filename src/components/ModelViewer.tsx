import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF } from '@react-three/drei';

import AnimateModel from './AnimateModel';
import CameraRig from './CameraRig';
import FallbackComponent from './FallbackConponent';

interface ModelViewerProps {
  modelPath?: string;
  className?: string;
  isAnimating?: boolean;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath = '/model.glb',
  className,
  isAnimating= false
}) => {
  // const [isAnimating, setIsAnimating] = useState(false);

  // const triggerAnimation = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => setIsAnimating(false), 1200);
  // };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '600px',
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      {/* <button
        onClick={triggerAnimation}
        style={{
          position: 'absolute',
          top: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          padding: '10px 16px',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Animate Model
      </button> */}

      <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 45 }}>
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
              position={[0, 0.5, 0]}
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
