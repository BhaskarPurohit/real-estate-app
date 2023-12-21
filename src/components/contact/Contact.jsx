import React from 'react'
import "./contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"


const Contact = () => {
  return (
    <section className='c-wrapper' id='contact-us'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="c-left flexColStart">
                <span>our contacts</span>
                <span>easyu to contact</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nulla voluptatibus.</span>
                {/* first row  */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href="tel:8107117767">Call Now</a>
                        </div>
                    </div>
                    {/* second mode  */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            
                            <div className="flexColStart detail">
                                
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* second row  */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Email Us</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href="mailto:harshsingh0610@gmail.com" >Send an Email</a>
                            
                        </div>
                    </div>
                    {/* second mode  */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Book a Visit</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Send Details 
                        </div>
                    </div>
                </div>

            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="photos/contact.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact