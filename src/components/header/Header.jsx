import React, { useState } from 'react'
import './header.css'
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler  from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = ()=>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./final-logo.PNG" alt="home-logo" width={100}/>
            <OutsideClickHandler onOutsideClick={()=>{
              setMenuOpened(false)
            }}>
                  <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                      <a href="">Our Value</a>
                      <a href="">Contact Us</a>
                      <a href="">Get Started</a>
                      <button className='button'>
                        <a href="">Book a visit</a>
                      </button>
                
                  <a href=""></a>
                </div>
            </OutsideClickHandler>
            
            <div className="menu-icon" onClick={()=> setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight/>
            </div>
        </div>
    </section>
  )
}

export default Header