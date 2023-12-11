import React from 'react'
import "./cardComponent.css"


const CardComponent = ({
  imgSrc,
  title,
  description
}) => {
  return (
    <div className='card' id='services'>
      <img src={imgSrc} style={{width:"100%", height:"100%"}}/>
      <div className='card-info'>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent