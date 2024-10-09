import React from 'react'
import { BannerWrapper } from '../styles'
import me from "../../assets/me.jpg"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  const handleType = () => {
    // access word count number
    console.log()}
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <BannerWrapper className=''>

        <div className="full genLayout">
          <h3>
          <Typewriter words={['Hello, my name is Obinna Daniel Nwokorie']} loop={100} deleteSpeed={50} delaySpeed={100} onLoopDone={handleDone} onType={handleType} />
          </h3>
        <div className="bannerContainer">
            <div className="bInfo">
        <h1>Frontend<br /> Developer<span>.</span></h1>
        <p>I like to craft solid and scalable frontend products with great user experiences.</p>
        </div>
      <div className="bannerImg">
        <img src={me} alt='me'/>
      </div> 
         </div>
          <div className="span">
            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p>Proven experience building successful products for clients across several countries.</p>
          </div>
         </div>
    </BannerWrapper>
  )
}


export default Banner