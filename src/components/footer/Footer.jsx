import React from 'react'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left-side  */}
            <div className="flexColStart f-left">
                <img src="./final-logo.PNG" width={120} alt="" />
                <span className="secondaryText">
                    Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Nostrum, aliquid.


                </span>
            </div>
            {/* right side */}
            <div className="f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>151 civil lines jaipur</span>

                <div className="flexCenter f-menu">
                    <span>property</span>
                    <span>property</span>
                    <span>property</span>
                    <span>property</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer