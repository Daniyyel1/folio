import React from 'react'
import { PerformanceWrapper } from '../styles'
import { Link } from 'react-router-dom'

const Performance = () => {
  return (
    <PerformanceWrapper className='genLayout'>
       
       <div className="performanceContainer">
        <Link to="/read">
        <h1>web performance: The Problems</h1>
        <p>No doubt,there's a ton of reasons why websites are slow, some of which are case-specific. i like to look at these factors from two perspective...</p>
        </Link>
       </div>

       <div className="performanceContainer">
        <Link to="/readd">
        <h1>web performance: The Big Picture</h1>
        <p>As the web platform continues to evolve very quickly, new technologies and development techniques spring up even more rapidly. It has become alarming how many slow sites are on the web today.</p>
        </Link>
       </div>
    </PerformanceWrapper>
  )
}

export default Performance