import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../ParticlesBackground';
import { motion } from 'framer-motion';
import resume from '../../../public/assets/resume.pdf';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sentences = [
    "Front-End Developer",
    "FreeLancer",
    "React Developer"
  ];
  
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < sentences[sentenceIndex].length) {
      // Append the next character
      const timeout = setTimeout(() => {
        setText((prev) => prev + sentences[sentenceIndex][charIndex]); // Add the next character
        setCharIndex((prev) => prev + 1); // Move to the next character
      }, 100); // Adjust speed by modifying this value
  
      return () => clearTimeout(timeout); // Clean up timeout
    } else {
      // If the sentence is finished typing
      const nextSentenceTimeout = setTimeout(() => {
        // If we reached the last sentence, go back to the first
        if (sentenceIndex < sentences.length - 1) {
          setSentenceIndex((prev) => prev + 1); // Move to next sentence
        } else {
          setSentenceIndex(0); // Loop back to the first sentence
        }
        setCharIndex(0); // Reset character index
        setText(''); // Clear text for the new sentence
      }, 2000); // Wait 2 seconds before starting the next sentence
  
      return () => clearTimeout(nextSentenceTimeout); 
    }
  }, [charIndex, sentenceIndex, sentences]);
  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
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
    <>
    <ParticlesBackground />
    <div className='px-4 py-4 mt-52 md:mt-0 md:px-20 md:py-16 md:h-[80vh] h-[80vh] items-center md:flex-row flex-col-reverse gap-8 md:gap-0 flex justify-between z-10  relative'>
 
  
  {/* Floating particles overlay */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-[#00C0FD] rounded-full opacity-20 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        }}
      />
    ))}
  </div>

  {/* Text Section with Glass Effect */}
  <motion.div 
    className='md:w-[50%] w-full relative z-20'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={textVariants}
  >
    <div className="glass-container p-8 rounded-2xl backdrop-blur-md border border-[#00C0FD]/20 shadow-xl">
      <motion.p className="text-[#00C0FD] font-mono">Hello World, I&apos;m</motion.p>
      
      {/* Name with your custom blue styling */}
      <motion.p className='md:text-5xl text-3xl font-bold'>
        <span style={{
          background: '#00C0FD',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
        }}>IGWE</span> PRECIOUS
      </motion.p>
      
      {/* Position with your custom blue styling */}
      <motion.p className='mb-4 mt-4 text-white md:text-3xl text-xl md:min-h-8'>
        And I&apos;m a <span className='font-semibold' style={{
          background: '#00C0FD',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
        }}>{text}</span><span className='blinking-cursor'>|</span>
      </motion.p>
      
      <motion.p className='text-white text-sm md:text-base mb-8'>
      I build responsive, dynamic applications using modern technologies. Specializing in front-end development, I create intuitive user interfaces, integrate APIs, and optimize performance. From crypto dashboards to secure admin panels, I bring ideas to life through scalable, maintainable solutions.
      </motion.p>

      {/* Download Button (unchanged) */}
      <a href={resume} download="Resume - Igwe Precious">
        <button
          className="px-4 py-2 rounded-3xl text-black font-bold relative mt-4 z-10"
          style={{
            background: 'rgb(0, 192, 253)',
            boxShadow: '0 0 15px rgba(0, 192, 253, 0.8)',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 192, 253, 1)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 192, 253, 0.8)')}
        >
          Download Resume
        </button>
      </a>
    </div>
  </motion.div>

  {/* Image Section (unchanged styling) */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={imageVariants}
    className='md:w-[32%] w-[80%] items-center flex justify-center z-10'
  >
    <div
      className='transition-all duration-1000 cursor-pointer w-full'
      style={{
        boxShadow: '0 0 20px 10px rgba(0, 192, 253, 0.8)',
        animation: 'pulseGlow 2s infinite alternate',
        background: 'rgba(0, 192, 253, 0.8)',
        borderRadius: '50%', 
        padding: '8px', 
        width: 'fit-content',
        transform: isHovered ? 'scale(1.05, 1.05)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className='w-full rounded-full rotate-12' src="/assets/images/me.PNG" alt="" />
    </div>
  </motion.div>

  {/* CSS Styles */}
  <style jsx global>{`
    .glass-container {
      background: rgba(34, 34, 34, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    
    .blinking-cursor {
      animation: blink 1s step-end infinite;
      color: #00C0FD;
      text-shadow: 0 0 4px rgba(0, 192, 253, 0.8);
    }
    
    @keyframes blink {
      50% { opacity: 0; }
    }
    
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 20px rgba(0, 192, 253, 0.6); }
      100% { box-shadow: 0 0 30px rgba(0, 192, 253, 0.9); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  `}</style>
</div>
    </>
  );
}

export default Hero;
