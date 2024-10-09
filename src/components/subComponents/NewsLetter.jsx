import React, { useState } from 'react'
import { NewsLetterWrapper } from '../styles'
import Footer from './Footer'

const NewsLetter = () => {

  const [email, setEmail] = useState('');
  return (
    <NewsLetterWrapper className=''>
           <div className="news genLayout">
             <h1>Join the newsletter</h1>
             <span>Email address</span>
             <div className="email">
                <input type='email' className='input' placeholder='email@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type='submit' disabled={email.length < 1}>subscribe</button>
             </div>
           </div>
           <Footer />
    </NewsLetterWrapper>
  )
}

export default NewsLetter