import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <Router>
      <div className="App bg-black text-white">
       <ParticlesBackground /> 
        {/* Navbar is visible on all routes */}
        <div className='z-40 relative'>
        <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          {/* Projects Route */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer is visible on all routes */}
        
      </div>
      <div className={menuToggle ? 'hidden' : 'z-40 relative'}
      >
        <Footer />
        </div>
    </Router>
  );
}

export default App;
