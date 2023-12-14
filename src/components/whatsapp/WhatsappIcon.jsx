import React from 'react'
import "./whatsappIcon.css"
import {FaWhatsapp} from "react-icons/fa"
const WhatsappIcon = () => {
    const whatsappLink = "https://wa.me/$8107117767"
  return (
    <div className='icon'>
        <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#fff',height:'100%', textDecoration: 'none' }}
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  )
}

export default WhatsappIcon