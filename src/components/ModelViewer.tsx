import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Vector3, Object3D } from 'three';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: Vector3 | [number, number, number];
}

const Model: React.FC<ModelProps> = ({ modelPath, scale = 1.5, position = [0, -1.2, 0] }) => {
  const { scene } = useGLTF(modelPath) as unknown as { scene: Object3D };
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      dispose={null} 
    />
  );
};

interface ModelViewerProps {
  modelPath?: string;
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath = '/model.glb',
  className
}) => {
  return (
    <div className={className} style={{ width: '100%', height: '500px', backgroundColor: '#fff' }}>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 3], fov: 45 }}
      >
        {/* Ambient and directional light */}
        <ambientLight intensity={0.9} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={<FallbackComponent />}>
          <Model modelPath={modelPath} scale={1.5} position={[0, 0.3, 0]} />
        </Suspense>

        {/* Soft shadows under model */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={1.6}
        />

        {/* Optional: HDR environment light */}
        <Environment preset="studio" />

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.7}
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

const FallbackComponent = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="lightgray" />
  </mesh>
);

useGLTF.preload('/model.glb');

export default ModelViewer;
