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
                        <div className="flexStart ">
                            <div className="flexCenter  icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'></span>
                            </div>
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
                <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3539.741360321972!2d76.72414727620185!3d27.4773103355984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI4JzM4LjMiTiA3NsKwNDMnMzYuMiJF!5e0!3m2!1sen!2sin!4v1703599788528!5m2!1sen!2sin" width="800" height="600" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact