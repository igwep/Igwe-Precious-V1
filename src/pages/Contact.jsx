import React, { useState, useEffect} from 'react';
import CanvasNest from 'canvas-nest.js';

const Contact = () => {
  const ParticlesBackground = () => {
    useEffect(() => {
      const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
        color: '255, 255, 255', // White color for visibility
        opacity: 3,           // Adjust opacity
        count: 150,             // Increase the number of particles
        zIndex: 0.5,              // Ensure particles are below other content
      });
  
      return () => {
        canvasNest.destroy(); // Cleanup on unmount
      };
    }, []);
  
    return (
      <div  className='md:h-[100%] h-[130vh]'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend, display success message, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen  flex items-center md:flex-row flex-col-reverse gap-8 justify-between py-12 px-8 w-full">
      <ParticlesBackground />
      <div className="map-container w-[90%] md:w-[50%] flex items-center z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.337942145144!2d144.95565501531812!3d-37.8172099797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1f2d94c79%3A0x5045675218ced10!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631079083196!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className='z-10 w-[90%] md:w-[50%] flex justify-center'>
      <div  style={{ backgroundColor: '#222' }} className=" text-white p-8 rounded-lg shadow-lg w-full max-w-lg z-10">
        <h2  
        style={{
          background: ' #00C0FD',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
        }}className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center mb-8">
          Have a question or want to get in touch? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm" style={{
              background: ' #00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
            }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ backgroundColor: '#333' }}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm" style={{
              background: ' #00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
            }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ backgroundColor: '#333' }}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm" style={{
              background: ' #00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
            }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ backgroundColor: '#333' }}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>

          <button
          style={{
            background: 'rgb(0, 192, 253)',
            boxShadow: '0 0 15px rgba(0, 192, 253, 0.8)', // Glow effect
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 192, 253, 1)')} // Stronger glow on hover
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 192, 253, 0.8)')} // Restore glow after hover
            type="submit"
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
