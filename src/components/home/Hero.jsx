import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import { green } from '@mui/material/colors';



const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sentences = [
    "I design and develop websites that bring ideas to life.",
    "Turning complex problems into elegant, user-friendly digital solutions.",
    "A web developer passionate about crafting responsive, intuitive, and dynamic websites."
  ]
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] =useState(0);
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
  
      return () => clearTimeout(nextSentenceTimeout); // Clean up timeout
    }
  }, [charIndex, sentenceIndex, sentences]);


/* style={{
            background: 'linear-gradient(to right, #00C0FD, #E70FAA)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '2rem',
            fontWeight: 'bold'
          }} */
  return (
    <div className='md:mx-20 md:my-16 h-[60vh] items-center md:flex-row flex-col-reverse flex justify-between z-10 '>
        <div className='  md:w-[70%] w-full '>{/* text */}
          <p >Hello World, I'm</p>
        <p className='text-5xl font-bold' style={{
             background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)'
            
          }}  >IGWE PRECIOUS</p>
       {/*  <p className='mb-4 mt-4 text-white ' >Web Developer | React | Firebase | Node.js</p> */}
       <p className='mb-4 mt-4 text-white min-h-8' >{text}<span className='blinking-cursor'>|</span></p>
        <p className='text-white'>
        I build responsive, dynamic applications using modern technologies. Specializing in front-end development, I create intuitive user interfaces, integrate APIs, and optimize performance. From crypto dashboards to secure admin panels, I bring ideas to life through scalable, maintainable solutions.
        </p>
          <div className='mt-4 flex items-center'><span><LocationOnIcon /></span><span>Nigeria, Lagos</span></div>
          <div className='mt-4 ml-2 flex items-center gap-1'><span><CircleIcon style={{ color: green[700], fontSize: 8 }} /></span><span>Available for new projects</span></div>
        </div>
        <div className='w-[50%] items-center flex justify-center  z-10 '>{/* image */}
            <div
            className='transition-all duration-1000'
            style={{
                boxShadow: '0 0 20px 10px rgba(0, 192, 253, 0.8)',
                animation: 'pulseGlow 2s infinite alternate',
                background: 'rgba(0, 192, 253, 0.8)',
                borderRadius: '50%', /* Make sure the border is rounded like the image */
                padding: '8px', /* This will act as the border width */
                width: 'fit-content',
               transform: isHovered ? 'scale(1.05, 1.05)' : 'none'
              }}
              onMouseEnter={()=> setIsHovered(true)}
              onMouseLeave={()=> setIsHovered(false)}
            >

            <img className='w-96 rounded-full rotate-12  ' src="/assets/images/me.PNG" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero