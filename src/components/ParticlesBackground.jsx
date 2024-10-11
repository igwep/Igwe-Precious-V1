import React, { useEffect } from 'react';
import CanvasNest from 'canvas-nest.js';

const ParticlesBackground = () => {
  useEffect(() => {
    const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
      color: '255, 255, 255', // White color for visibility
      opacity: 3,           // Adjust opacity
      count: 200,             // Increase the number of particles
      zIndex: 1,              // Ensure particles are below other content
    });

    return () => {
      canvasNest.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div  className='md:h-[80vh] h-[100vh]'
      id="canvasContainer" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
         
        zIndex: 1,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default ParticlesBackground;
