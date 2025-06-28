import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
   const [mobileMenu,setMobileMenu] = useState(false)
  const ToggleMenu = ()=>{
   mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt="Logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <div className="right">
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
      <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonialse
      </Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500}>About
      </Link></li>
      <li><Link to='contact' smooth={true} offset={-260} duration={500} 
      className='btn'>Contact</Link></li>
        </div>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu}/>
    </nav>
  )
}

export default Navbar;
