import React from 'react'
import { FooterWrapper } from '../styles'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>

    <div className="footContainer genLayout">
        
        <h1>Say Hello</h1>
        
         <div className="footInfo">
           <p>Zionwhbeenarh@gmail.com</p>
           {/* <FaWhatsapp /> */}
           <div className="footF">
            <Link to="/">Home<br /><br /> </Link>
           <Link to="/about">About<br/><br /></Link>
           <Link to="/contact">Contact</Link>
           </div>
         </div>

        <div className="line">
            
        </div>

        </div> 



    </FooterWrapper>
  )
}

export default Footer