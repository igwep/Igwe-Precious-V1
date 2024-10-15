import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8  text-white min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8 z-10">
        <img
          src="/assets/images/aboutImage.jpg" // Replace with your image link
          alt="About Me"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* About Me Text Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-5xl font-bold text-blue-500 mb-4" 
        style={{
          background: ' #00C0FD',
         WebkitBackgroundClip: 'text',
         color: 'transparent',
         textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
         
       }}>About ME</h1>
        <h3 className="text-2xl font-semibold mb-6 italic" style={{
             background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
            
          }}>Curious about me? Well, here’s my story!</h3>
        
        <p className="text-lg leading-relaxed mb-4">
          I'm a dedicated full-stack developer with a strong focus on building dynamic and responsive web applications. 
          Specializing in technologies like <span className="font-semibold">React.js</span> and <span className="font-semibold">Node.js</span>, 
          I take pride in bridging the technical and visual aspects of a project, bringing ideas to life with clean, efficient, and scalable code.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          My journey in web development began several years ago, and since then, I’ve worked tirelessly to refine my skills in both front-end 
          and back-end development. I love experimenting with modern frameworks and tools like <span className="font-semibold" style={{
             background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
            
          }}>Next.js</span>, 
          <span className="font-semibold" style={{
             background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
            
          }}>TypeScript</span>, <span className="font-semibold" style={{
            background: ' #00C0FD',
           WebkitBackgroundClip: 'text',
           color: 'transparent',
           textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
           
         }}>Firebase</span>, and <span className="font-semibold" style={{
          background: ' #00C0FD',
         WebkitBackgroundClip: 'text',
         color: 'transparent',
         textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
         
       }}>Tailwind CSS</span>.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          One of the things I value most is creating exceptional user experiences. Whether it’s crafting pixel-perfect designs, ensuring 
          mobile responsiveness, or writing performant APIs, I always aim to deliver a product that both users and clients love.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Outside of coding, I’m active on platforms like Twitter and GitHub, where I share insights and ideas. I love connecting with 
          other developers and startups, and I’m always keeping an eye on the latest trends in the tech world.
        </p>

        <p className="text-lg leading-relaxed">
          Feel free to reach out if you're interested in collaborating or just want to chat about tech! I’m open to freelance opportunities, 
          and I promise, I don’t bite. 😉
        </p>
      </div>
    </section>
  );
};

export default About;
