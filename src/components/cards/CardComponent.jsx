import React from 'react'
import "./cardComponent.css"


const CardComponent = ({
  imgSrc,
  title,
  description
}) => {
  return (
    <div className='card' id='services'>
      <img src={imgSrc} />
      <div className='card-info'>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent