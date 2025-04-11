import React from 'react';

const FallbackComponent = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="lightgray" />
  </mesh>
);

export default FallbackComponent;