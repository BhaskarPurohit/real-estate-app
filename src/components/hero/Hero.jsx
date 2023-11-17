import React from 'react'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCneter hero-container">
            <div className="hero-left">
                Left section
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Hero