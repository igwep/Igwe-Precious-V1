import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsSection from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import TechStack from './pages/TechStack';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <Router>
      <ScrollToTop>
      <div className="App bg-black text-white">
       {/* <ParticlesBackground /> */} 
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
          <Route path="/projects" element={<ProjectsSection />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
        {/* Footer is visible on all routes */}
        
      </div>
      <div className={menuToggle ? 'relative bg-black' : 'z-10 relative bg-black'}
      >
        <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
