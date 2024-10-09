import React from 'react'
import { ContactWrapper } from '../styles'
import { useLocation } from 'react-router-dom'
import Resume from '../subComponents/Resume';

const Contact = () => {
 
   const location = useLocation();

  return (
    <ContactWrapper >
       <div className="contact genLayout">
       <h1>{location.pathname.replace(/\//g, "/")}</h1>
       </div>
   
        <Resume />
    </ContactWrapper>
  )
}

export default Contact