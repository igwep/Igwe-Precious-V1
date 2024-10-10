import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navLinks = ['Home', 'About', 'Projects', 'Contact', 'Tech Stack'];
 
  
  return (
    <div className='w-full'>
      <nav className='flex justify-between md:px-16 md:py-4 xl:px-20 xl:py-8  '>
      <div>
        <p className=' font-bold text-xl' style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)'
            
          }}>&lt;Precious /&gt;</p>
      </div>
      <ul className='md:flex gap-16 font-semibold   hidden  '>
        {navLinks.map((item, index) =>(
          <li key={index} 
          className='cursor-pointer'
          style={{color: hoveredIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
            textShadow: hoveredIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
            background: hoveredIndex === index?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none'}}
          onMouseEnter={()=> setHoveredIndex(index)}
          onMouseLeave={()=> setHoveredIndex(null)}>{item}</li>
        ))}
        {/* <li style={{color: isHovered ?  'rgba(0, 192, 253, 0.8)' : 'white',
                    textShadow: isHovered ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                    background: isHovered ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none'
        }}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
         >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/tech-stack">Tech Stack</Link>
          </li> */}
          <li className='flex gap-4 '>
          <Link>
          <GitHubIcon />
          </Link>
          <Link>
          <XIcon />
          </Link>
          <Link>
          <LinkedInIcon />
          </Link>
        </li>
      </ul>
      <div className='md:hidden flex'>
        <MenuIcon />
      </div>
      {/* mobile links */}
      {/* <div>
        
      </div> */}
    </nav>
    </div>
  );
};

export default Navbar;
