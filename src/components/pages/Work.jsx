import React from 'react'
import { useLocation } from 'react-router-dom'
import { WorkWrapper } from '../styles';
import WorkDetails from '../subComponents/WorkDetails';

const Work = () => {

   const location = useLocation();

  return (
    <WorkWrapper className=''>

       <div className="work">
       <h1>{location.pathname.replace(/\//g, "/")}</h1>
       </div>

       <WorkDetails />

    </WorkWrapper>
  )
}

export default Work