import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navLinks = [
    {linkName:'Home',
       routes:'/'
      },
      {linkName:'About',
        routes:'/about'
       },
       {linkName:'Projects',
        routes:'/projects'
       },
       {linkName:'Contact',
        routes:'/contact'
       },
       {linkName:'Tech stack',
        routes:'/tech-stack'
       }
  ]
  const socialLinks = ['GitHubIcon', 'XIcon', 'LinkedInIcon'];
  const [socialLinksIndex, setSocialLinksIndex] = useState(null);

  const icons = {
    GitHubIcon: GitHubIcon,
    XIcon: XIcon,
    LinkedInIcon: LinkedInIcon
  }
  
  return (
    <div className='w-full'>
      <nav className='flex justify-between px-4 py-4 md:px-16 md:py-4 xl:px-20 xl:py-8  '>
      <div>
        <p className=' font-bold text-xl' style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)'
            
          }}>&lt;Igwe <span className='text-white'>Precious</span> /&gt;</p>
      </div>
      <ul className='md:flex gap-16 font-semibold   hidden  '>
        {navLinks.map((item, index) =>{
          return (
          <Link key={index} to={item.routes}
          className='cursor-pointer'
          style={{color: hoveredIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
            textShadow: hoveredIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
            background: hoveredIndex === index?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
            
          }}
          onMouseEnter={()=> setHoveredIndex(index)}
          onMouseLeave={()=> setHoveredIndex(null)}>{item.linkName}</Link>
        )
        })}
       
          <li className='flex gap-4 '>
            {socialLinks.map((items, index)=>{
              const IconComponent = icons[items];
              return (
                <Link key={index}   style={{color: socialLinksIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
                  textShadow: socialLinksIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                  background: socialLinksIndex === index?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none'}}
                onMouseEnter={()=> setSocialLinksIndex(index)}
                onMouseLeave={()=> setSocialLinksIndex(null)}>
                <li><IconComponent/></li>
                </Link>
              )
            })}
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
