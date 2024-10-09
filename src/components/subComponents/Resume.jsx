import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div>

        <div className="resumeWrapper">

           <div className="resumeContainer">

            <div className="firstWrapper">
                <Link>zionowhbeenarh@gmail.com</Link>
                <p>Lagos, Nigeria</p>
                <div className="technologies">
                    <h3>Core Technologies:</h3>
                    <div className="boxC">
                        <div className="box">
                            <div className="smallBox"></div>
                            <p>React</p>
                        </div>
                        <div className="box">
                            <div className="smallBox"></div>
                            <p>Flutter</p>
                        </div>
                        <div className="box">
                            <div className="smallBox"></div>
                            <p>Material UI</p>
                        </div>
                        <div className="box">
                            <div className="smallBox"></div>
                             <p>Javascript</p>
                        </div>
                        <div className="box">
                            <div className="smallBox"></div>
                            <p>HTML & CSS</p>
                        </div>
                    
                    </div>
                </div>
            </div>
                
                <div className="secondWrapper">
                    <h1>Obinna Daniel Nwokorie</h1>
                    
                    <div className="secInfo">
                        <span>Frontend Developer and UI/UX Engineer.</span>
                        <p>Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack.</p>
                    </div>

                    <div className="long"></div>
                     
                </div>

           </div>
            


        </div>



    </div>
  )
}

export default Resume