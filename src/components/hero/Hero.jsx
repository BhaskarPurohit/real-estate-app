import React from 'react'
import "./hero.css"
import {HiLocationMarker} from "react-icons/hi"
// import {CountUp} from 'react-countup/build/CountUp'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCneter hero-container">
            <div className="flexColStart  hero-left">
                <div className="hero-title">
                    <div className="orange-circle">
                       <h1>Discover <br /> Luxury Villas</h1>

                    </div>
                </div>
                <div className="flexColStart hero-des">
                    <span>Find a home that reflects your aspirations</span> <br />
                    <span>K.B. Developers offering you a great home <br /> with state of the art construction <br />, architecture and amenities</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var--blue)" size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            50
                            <span>+</span>
                        </span>
                        <span>Premium Villas</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            200
                            <span>+</span>
                        </span>
                        <span>Happy Families</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="https://greenlakes.in/wp-content/uploads/2023/08/DSC04531-HDR-1-1-1024x683.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Hero