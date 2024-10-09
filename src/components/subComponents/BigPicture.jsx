import React from 'react'
import { BigPictureWrapper } from '../styles'
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlineArrowLongLeft, HiArrowLongRight  } from "react-icons/hi2";
import { IoIosHome } from "react-icons/io";



const BigPicture = () => {
  return (
    <BigPictureWrapper className='genLayout'>

       
        <div className="backk ">
        <Link to='/shelf'>
        <LiaLongArrowAltLeftSolid  className='back' />
          </Link>
        </div>
        

          <div className="pictureContainer  ">
            <h1> Web Performance: The Big Picture</h1>
            <p>  As the web platform continues to evolve very quickly, new technologies and development techniques spring up even more rapidly. It has become alarming how many slow sites are on the web today, one of the reasons being the drastic shift of the web from a document-centric platform to a much more dynamic application platform — the web is more powerful than ever, making it possible for users to get virtually any experience on the web — and that’s awesome, really.<br/><br/>

                 However, the web really is getting slower. It’s quite unfortunate that a lot of web teams and businesses just want a “magical solution” not realizing there’s no one antidote to poor performance of sites; there’s no one tech or approach that’s going to make websites or the web platform as a whole fast automagically, which is why in my opinion, engineering teams should prioritize performance at every phase of the design sprint for a product.<br/><br/>

                 In this article, we’ll be talking about why web performance really matters. So, let’s dive right in!</p>

                 <div className="pictureInfo">
                    <h2>Why Performance matters</h2>
                    <p>In one word, performance is about your users. Users. That’s why performance matters. You’re building a product for people to use it, right? Whether you’re building your portfolio, a news site, or a more dynamic experience like Facebook, you want people to use your stuff; and users in a lot of cases means success, same way, success means profit if it’s a business!<br/><br/>

                       However, for people to interact seamlessly with your application or website, it has to be accessible. Note that “accessible” here is more about showing content to your users quickly at least, and if possible, making the most basic feature work. Diving deeper, optimizing performance for users means providing a great user experience overall. Let’s see how doing this is of benefit to our businesses and products.</p>
                 </div>

                 <div className="pictureInfo">
                    <h2> Web Performance meets User Experience</h2>
                    <p>  Now that we know a little about why performance matters, let’s talk more about how great performance and poor performance impact user experience.<br/><br/>

                         Great performance means great user experience; great user experience translates to retaining users, and that means more users! You want people to go to your site and do whatever the site was made for. If it’s an e-commerce site, you want people to go there, sign up, and buy or sell stuff. If it’s a business, you want users to use your product, talk about it, share it, bring more users, and get more revenue. Performance plays a great role in this because:<br/><br/>

                         If your site is slow to load or make the most basic feature possible to use, your users get tired of waiting and discouraged. Nobody wants to spend the whole day waiting for your site or app to load to be able to perform a task, because, remember, it’s the world wide web: for the most part, there are alternatives to your product, you have competitors. So, once a user thinks your platform would to take too much of their time, they want to leave and go to another site that offers close to or exactly what your site offers.<br/><br/>

                         Also, in rare cases where there’s no alternative to your product, the users either get frustrated up to the level they want to quit your platform totally, or they just leave your site and go somewhere else, and that can be bad for business.<br/><br/>

                         Again, poor performance means more cost for the users — Yes, cost. We know the web is becoming a mobile-dominant platform. Mobile means movable — the users can take the web with them wherever they go, and as such, they can’t determine network conditions or expect to get a certain network quality in such situations. So, your user might have no choice other than to access your site on a 2G network. If your site is not optimized for such conditions, the user becomes increasingly tired of trying to access it because of the time spent and the cost of trying subsequently over such conditions. Note that “cost” also includes real cost for data plans.<br/><br/>

                         On the contrary…<br/><br/>

                         Great performance can be perceived as a site that delivers what matters quickly: the user gets to your site, for example, a social networking app optimized for poor network and hardware conditions — which of course requires deliberate commitment by the engineering and product team as a whole at every process. Imagine your user can view at least 10% of relevant content (useful-to-user content) on your app (maybe text posts from friends without images), or the user gets a very minimal version of your site on a poor network, take m.facebook.com for example. That’s an awesome experience because even if the user is engaged with 10% of your platform, it’s much better than losing the user totally, which is less than, or sometimes 0%. This way, the user can interact with your app, and of course, instills in the mind of your users that your site is always a go-to no matter the network condition. That makes better user experience and more profit for the business.<br/><br/>

                         Let’s take a look quickly at some case-studies on how performance has either impacted positively or negatively in conversion rates and revenue on products.</p>
                 </div>

                   <div className="pictureInfo">
                      <h2>Case Studies</h2>
                     <h4>Where Performance  Optimization has helped</h4>
                     <ul>
                        <li><Link to="https://www.thinkwithgoogle.com/intl/en-emea/marketing-collections/mobile/zitmaxx-wonen-building-faster-mobile-site-pagespeed-insights-test-my-site/" target='_blank'>By reducing their load time to 3 seconds, Furniture retailer, </Link>Zitmaxx Women saw conversion jump 50.2%. Overall revenue from the mobile site also increased by 98.7%.</li>
                        <li><Link to="https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7#.wwimdmkpp" target='_blank'>Rebuilding Pinterest pages for performance resulted </Link> in a 40% decrease in wait time, a 15% increase in SEO traffic and a 15% increase in conversion rate to signup.</li>
                        <li><Link to="https://edge.akamai.com/ec/us/highlights/keynote-speakers.jsp#edge2016futureofcommercemodal" target='_blank'>AliExpress saw a 10.5% increase in orders and a 27% increase in conversion for new customers </Link> when they reduced load time by 36%.</li>
                    </ul>
                    <h4>Where Poor Performance has affected the products</h4>
                    <ul>
                        <li>Financial Times added a one second delay to every page view and saw a 4.9% drop in the number of articles users read over a 7 day window. A two-second delay resulted in a 4.4% drop, and a three second delay saw a 7.2% drop.<Link to='https://medium.com/ft-product-technology' target='_blank'> After twenty-eight days the two and three second variants both resulted in further drops in engagement.</Link> </li>
                        <li><Link to='https://marketingplatform.google.com/about/resources/' target='_blank'>According to research from Google's DoubleClick,</Link> 53% of visits to mobile sites are abandoned after 3 seconds.</li>
                        <li><Link to='https://marketingplatform.google.com/about/resources/' target='_blank'>DoubleClick by Google found 53% of mobile site visits were abandoned</Link> if a page took longer than 3 seconds to load. </li>
                        <li><Link to='https://www.slideshare.net/slideshow/alertsitetrac/6720057' target='_blank'>TRAC Research found, in a survey of 300 companies,</Link> that the average revenue loss for an hour of downtime was $21,000. For the same set of companies, average revenue loss due to an hour of slow performance (defined as load times exceeding 4.4 seconds) was $4,100. Website slowdowns occurred ten times more often than outages.</li>
                    </ul>
                     <p>Case studies sourced from <Link to='https://wpostats.com/' target='_blank'>WPO Stats.</Link></p>
                 </div>
                  
                  <div className="pictureInfo">
                    <h2>Conclusion</h2>
                    <p>Hopefully, you have a better take on web performance, why your team should consider it at every process of product design, and the benefits it holds for your businesses and product. You’ve also seen from the case studies where poor performance has led to losing users and less revenue. Stay tuned for the next articles where I talk about the several factors affecting performance, including strategies and patterns to tackle these problems.</p>
                  </div>

                  <div className="pictureInfo">
                    <h2>Further Reading and Resources…</h2>
                    <ul>
                        <li><Link to='https://calibreapp.com/blog/beyond-the-bubble' target='_blank'>Beyond the Bubble: Real world performance</Link> by Ben Schwarz</li>
                        <li><Link to='https://www.youtube.com/watch?v=VpixmppRbZU' target='_blank'>The New Mobile Reality </Link> by Alex Russell</li>
                        <li><Link to='https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9' target='_blank'>A Netflix Web Performance Case Study</Link> by Addy Osmani</li>
                    </ul>
                  </div>

                  <div className="tags">
                    <h4>Tags:</h4>
                    <div className="links">
                        <Link to='/shelf'>web performance</Link>
                        <Link to='/shelf'>user experience</Link>
                        </div>
                    
                    <div className="icons">
                    <FaFacebook className='face' style={{color:''}} />
                    <FaTwitter className='twitter' />
                    </div>
                    
                  </div>
                  <div className="arrows">
                       <div className="first">
                       <HiOutlineArrowLongLeft className='big' />
                       <span>Previous Post</span>
                       </div>
                        
                            <Link to='/'>
                        <IoIosHome className='home' />
                        </Link>

                       <Link to='/read'>
                       <div className="first">
                       <span>Next Post</span>
                       <HiArrowLongRight className='bigg' />
                       </div>
                       </Link>
                       
                  </div>
          </div>

    </BigPictureWrapper>
  )
}

export default BigPicture