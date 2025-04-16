import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const CameraRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rigRef = useRef<Group>(null);

  useFrame(({ mouse }) => {
    if (rigRef.current) {
      rigRef.current.rotation.y = mouse.x * 0.5;
      rigRef.current.rotation.x = mouse.y * 0.2;
    }
  });

  return <group ref={rigRef}>{children}</group>;
};

export default CameraRig;
