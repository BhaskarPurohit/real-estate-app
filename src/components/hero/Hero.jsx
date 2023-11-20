import React from 'react'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container">
            <div className=" flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle">
                       <h1>Discover <br />beautiful Villas</h1>

                    </div>
                </div>
                <div className="flexColStart hero-des">
                    <span>Find a variety of properties that reflect your aspirations</span>
                    <span>Forget your difficulties in finding residence for you</span>
                </div>

                <div className="search-bar"></div>
            </div>
              {/* right side */}
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