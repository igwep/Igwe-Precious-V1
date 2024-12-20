import React, { useEffect } from 'react';
import CanvasNest from 'canvas-nest.js';
import { Email, Phone, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import MUI icons
import { motion } from 'framer-motion';

const Contact = () => {
  const ParticlesBackground = () => {
    useEffect(() => {
      const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
        color: '255, 255, 255', // White color for visibility
        opacity: 3,           // Adjust opacity
        count: 150,           // Increase the number of particles
        zIndex: 0.5,          // Ensure particles are below other content
      });

      return () => {
        canvasNest.destroy(); // Cleanup on unmount
      };
    }, []);

    

    return (
    
        <div  className='md:h-[100%] h-[100vh]'
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
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeInOut' }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-8 w-full ">
      <ParticlesBackground />
      
      <motion.div 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={imageVariants}
      className="z-10 w-[95%] md:w-[70%] lg:w-[60%] flex flex-col justify-center items-center">
        <div style={{ backgroundColor: '#222' }} className="text-white p-12 rounded-lg shadow-lg w-full text-center">
          <h2
            style={{
              background: ' #00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
            }}
            className="md:text-5xl text-3xl font-bold mb-8"
            
          >
            Let's Connect!
          </h2>
          <p className="md:text-xl text-base mb-10 font-semibold">
            We're excited to hear from you! Whether it's a question, a collaboration idea, or just to say hello, feel free to drop a message. Let’s make something amazing together!
          </p>

          <div className="flex flex-col items-start text-white space-y-6 mb-10 text-lg">
            <div className="flex items-center justify-center space-x-4">
              <Email style={{ color: '#00C0FD', fontSize: 30 }} />
              <span className="md:text-xl">your-email@example.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone style={{ color: '#00C0FD', fontSize: 30 }} />
              <span className="md:text-xl text-base">+123 456 7890</span>
            </div>
          </div>

          <p className="md:text-xl text-base font-semibold mb-6">You can reach me also on these platforms:</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-10 mt-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ color: '#00C0FD', fontSize: 50 }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ color: '#00C0FD', fontSize: 50 }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ color: '#00C0FD', fontSize: 50 }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn style={{ color: '#00C0FD', fontSize: 50 }} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
