import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface AnimateModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  isAnimating: boolean;
}

const AnimateModel: React.FC<AnimateModelProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  isAnimating,
}) => {
  const group = useRef<Group>(null!);
  const { scene } = useGLTF(modelPath);
  const [step, setStep] = useState<number | null>(null);

  useEffect(() => {
    if (isAnimating) {
      setStep(0);
    }
  }, [isAnimating]);

  useFrame(() => {
    if (step === null || !group.current) return;

    const g = group.current;

    switch (true) {
      case step < 20: // Rotate right
        g.rotation.y += 0.05;
        break;
      case step < 40: // Rotate left
        g.rotation.y -= 0.05;
        break;
      case step < 60: // Nod up
        g.rotation.x += 0.03;
        break;
      case step < 80: // Nod down
        g.rotation.x -= 0.03;
        break;
      case step < 100: // Shake
        g.rotation.z = Math.sin(step * 0.5) * 0.1;
        break;
      case step < 120: // Smooth reset
        g.rotation.x += (-g.rotation.x) * 0.2;
        g.rotation.y += (-g.rotation.y) * 0.2;
        g.rotation.z += (-g.rotation.z) * 0.2;
        break;
      default:
        // Fully reset to ensure precision
        g.rotation.set(0, 0, 0);
        setStep(null); // stop animation
        return;
    }

    setStep((prev) => (prev !== null ? prev + 1 : null));
  });

  return (
    <group ref={group} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
};

export default AnimateModel;
