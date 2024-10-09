import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../styles'


const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () =>{
  setIsOpen(!isOpen);
 }

  return (
    <NavWrapper>
      <div className="nav genLayout">
      <h1>Daniel<span>Dev</span></h1>
      
      
     
     <div className= 'navRight'>
       <div className={`navItems ${isOpen ? 'open' : ''}`}>
        <Link to="/">home</Link>
        <Link className='good' to="/shelf">shelf</Link>
        <Link to="/work">work</Link>
        <Link to="contact">contact</Link>
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