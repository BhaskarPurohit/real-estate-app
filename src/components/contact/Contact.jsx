import React from 'react'
import "./contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"


const Contact = () => {
  return (
    <section className='c-wrapper'>
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
                                <span className='secondaryText'><a href="tel:8107117767"></a></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call now
                        </div>
                    </div>
                    {/* second mode  */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat on Whatsapp</span>
                                <span className='secondaryText'><a href="https://wa.me/8107117767"></a></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Chat now
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
                                <span className='secondaryText'><a href="mailto:harshsingh0610@gmail.com"/></span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Send Email
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
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact