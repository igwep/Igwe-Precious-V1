import React, { useState, useEffect } from 'react'

const Hero = () => {
  const sentences = [
    "I design and develop websites that bring ideas to life.",
    "want to collab?"
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
    <div className='md:mx-20 md:my-16 items-center md:flex-row flex-col-reverse flex justify-between '>
        <div className='  md:w-[70%] w-full '>{/* text */}
          <p style={{
            background: 'linear-gradient(to right, #00C0FD, #E70FAA)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
             textShadow: '0 0 10px #00C0FD'
            
          }}>Hello World, I'm</p>
        <p className='text-5xl font-bold'  >Igwe Precious</p>
        <p className='mb-4 mt-4 text-white ' style={{
            background: 'linear-gradient(to right, #00C0FD, #E70FAA)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
             textShadow: '0 0 10px #00C0FD'
            
          }}>Web Developer | React | Firebase | Node.js</p>
        <p className='text-white'>
        I build responsive, dynamic applications using modern technologies. Specializing in front-end development, I create intuitive user interfaces, integrate APIs, and optimize performance. From crypto dashboards to secure admin panels, I bring ideas to life through scalable, maintainable solutions.
        </p>
        </div>
        <div className='w-[50%] items-center flex justify-center '>{/* image */}
            <div
            style={{
                boxShadow: '0 0 20px 10px rgba(0, 192, 253, 0.8)',
                background: 'rgba(0, 192, 253, 0.8)',
                borderRadius: '50%', /* Make sure the border is rounded like the image */
                padding: '8px', /* This will act as the border width */
                width: 'fit-content',
              }}
            >

            <img className='w-80 rounded-full rotate-12  ' src="/assets/images/me.PNG" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero