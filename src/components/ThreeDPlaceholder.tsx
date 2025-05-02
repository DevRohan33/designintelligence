
import React from 'react';

const ThreeDPlaceholder = () => {
  return (
    <div className="w-full h-full rounded-lg border-2 border-dashed border-ais-coral/50 flex flex-col items-center justify-center p-6 bg-black/5">
      <div className="text-center">
        <svg 
          className="w-16 h-16 mx-auto mb-4 text-ais-coral/50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1" 
            d="M12 4v16m8-8H4m4-4l8 8m0-8l-8 8"
          />
        </svg>
        <h3 className="text-xl font-bold text-ais-dark mb-2">3D Interaction Area</h3>
        <p className="text-gray-500">
          Your custom 3D experience will render here. This placeholder reserves the space needed for your future implementation.
        </p>
        <div className="mt-4 text-xs text-ais-coral font-mono">
          // 3D rendering area
        </div>
      </div>
    </div>
  );
};

export default ThreeDPlaceholder;
