import React from 'react'
import "./hero.css"
import {CountUp} from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover <br /> new villas property 
                    </h1>
                </div>
                <div className="flexColStart hero-desc">
                    <span>Find a vairety of properties that suit your style</span>
                    <span>Forget all defficulties of finding a residence</span>
                </div>
                <div className="search-bar">

                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span> </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColStart stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy customers</span>


                    </div>
                    <div className="flexColStart stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards</span>


                    </div>
                </div>
            </div>
                {/* right side  */}
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