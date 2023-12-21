import React from 'react'
import "./hero.css"
import CountUp from 'react-countup'
import {animate, motion} from "framer-motion"

const Hero =()=> {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* left side  */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1 initial={{y:"2rem"}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}>
                        Discover <br /> new villas property 
                    </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a vairety of properties that suit your style</span>
                    <span className='secondaryText'>Forget all defficulties of finding a residence</span>
                </div>
                <div className="search-bar">

                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span> </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy customers</span>


                    </div>
                    <div className="flexColCenter stat">
                        <span> <CountUp start={0} end={200} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards</span>


                    </div>
                </div>
            </div>
                {/* right side  */}
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem", opacity:0}} animate={{x:0, opacity:1}} transition={{
                    duration:2,
                    type:"spring"
                }} className="image-container">
                    <img src="../public/photos/hero-image.png" alt="" />
                </motion.div>

            </div>

        </div>
    </section>
  )
}

export default Hero