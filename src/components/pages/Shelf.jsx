import React from 'react'
import { useLocation } from 'react-router-dom';
import Performance from '../subComponents/Performance';
import { ShelfWrapper } from '../styles';
import Footer from '../subComponents/Footer';

const MyShelf = () => {
   const location = useLocation();

  return (
    <ShelfWrapper className=''>
      <div className="shelf genLayout">
      <h1>{location.pathname.replace(/\//g, "/")}</h1>
      
       </div>
       <Performance />
       <Footer />
    </ShelfWrapper>
  )
}

export default MyShelf