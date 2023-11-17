import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./final-logo.PNG" alt="home-logo" width={100}/>
            <div className="flexCenter h-menu">
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
                
                <a href=""></a>
            </div>
        </div>
    </section>
  )
}

export default Header