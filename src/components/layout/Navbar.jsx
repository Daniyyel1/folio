import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../styles'
import Aos from "aos";
import 'aos/dist/aos.css'

const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () =>{
  setIsOpen(!isOpen);
 }


 const closeMenu = ()=>{
  setIsOpen(!isOpen)
 }

 useEffect(()=>{
  Aos.init({duration:500, easing: 'linear'})
},[])


  return (
    <NavWrapper>
      <div data-aos="fade-down" className="nav genLayout">
      <h1>Daniel<span>Dev</span></h1>
      
      
     
     <div className= 'navRight'>
       <div className={`navItems ${isOpen ? 'open' : ''}`}>
        <Link onClick={closeMenu} to="/">home</Link>
        <Link onClick={closeMenu} className='good' to="/shelf">shelf</Link>
        <Link onClick={closeMenu} to="/work">work</Link>
        <Link onClick={closeMenu} to="contact">contact</Link>
       </div>

     </div>
     <div className="hamburger " onClick={toggleMenu}>
          <div className={`bars ${isOpen ? 'rotate' : ''}`}></div>
        
          <div className={`bars ${isOpen ? 'rotate' : ''}`}></div>
        
          <div className={`bars ${isOpen ? 'rotate' : ''}`}></div>
        
        </div>


     </div>

     
    </NavWrapper>
  )
}

export default Navbar