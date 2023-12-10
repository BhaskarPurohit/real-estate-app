import React from 'react'
import "./cardComponent.css"


const CardComponent = ({
  imgSrc,
  title,
  description
}) => {
  return (
    <div className='card' id='services'>
      <img src="https://imgs.search.brave.com/-mcuuiRfM-M42hiWlAG2uXuFZJxYws_stJiGCtvyc3Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTMz/MTE3ODQ2L3Bob3Rv/L2NvdW50cnktaG91/c2UtaW4tdGhlLWNv/dHN3b2xkcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VlhE/WElTWkVUWXk5TENN/ZzhTWFdWOGxGeU9k/Y0QxTUxOT1ByTEZ2/ZWJVOD0" />
      <div className='card-info'>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent