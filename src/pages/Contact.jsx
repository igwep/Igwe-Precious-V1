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
    <div className="min-h-screen flex flex-col items-center justify-start py-12 w-full relative overflow-hidden">
    <ParticlesBackground />
    
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={imageVariants}
      className="z-10 w-[95%] md:w-[70%] lg:w-[60%] flex flex-col justify-center items-center"
    >
      <div 
        style={{ 
          backgroundColor: 'rgba(34, 34, 34, 0.95)',
          background: 'linear-gradient(145deg, rgba(34,34,34,0.95) 0%, rgba(50,50,50,0.95) 100%)',
          border: '1px solid rgba(0, 192, 253, 0.3)',
          boxShadow: '0 0 30px rgba(0, 192, 253, 0.2)'
        }} 
        className="text-white p-8 md:p-12 rounded-2xl shadow-2xl w-full text-center backdrop-blur-lg"
      >
        <motion.h2
          style={{
            background: 'linear-gradient(45deg, #00C0FD, #00a8e8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 15px rgba(0, 192, 253, 0.5)'
          }}
          className="md:text-6xl text-4xl font-bold mb-8 font-montserrat"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Let's Connect!
        </motion.h2>

        <motion.p 
          className="md:text-xl text-base mb-10 font-medium opacity-90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're excited to hear from you! Whether it's a question, a collaboration idea, or just to say hello, feel free to drop a message. Let’s make something amazing together!
        </motion.p>

        <div className="flex flex-col items-center space-y-6 mb-12">
          {[
            { icon: <Email />, text: 'Igwep5537@gmail.com' },
            { icon: <Phone />, text: '07065155757' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-transparent via-[#00c0fd15] to-transparent hover:bg-[#00c0fd10] transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {React.cloneElement(item.icon, { 
                style: { 
                  color: '#00C0FD', 
                  fontSize: 40,
                  transition: 'all 0.3s ease'
                },
                className: 'group-hover:scale-110'
              })}
              <span className="md:text-xl text-lg font-medium group-hover:text-[#00C0FD] transition-colors duration-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="md:text-xl text-base font-semibold mb-8 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          You can reach me also on these platforms:
        </motion.p>

        <div className="flex justify-center space-x-6 md:space-x-10 mt-8 flex-wrap">
          {[
            { icon: <Facebook />, link: 'https://www.facebook.com/...' },
            { icon: <Twitter />, link: 'https://twitter.com' },
            
            { icon: <LinkedIn />, link: 'https://linkedin.com/...' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#ffffff08] hover:bg-[#00c0fd20] transition-all duration-300 group relative"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring',
                delay: 1 + index * 0.1,
                stiffness: 100
              }}
            >
              {React.cloneElement(social.icon, {
                style: {
                  color: '#00C0FD',
                  fontSize: 50,
                  filter: 'drop-shadow(0 0 5px rgba(0, 192, 253, 0.5))'
                },
                className: 'group-hover:drop-shadow-[0_0_15px_#00C0FD] transition-all duration-300'
              })}
              <div className="absolute inset-0 border border-[#00C0FD] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Animated background elements */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-[#00C0FD] rounded-full opacity-20 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  </div>
  );
};

export default Contact;
