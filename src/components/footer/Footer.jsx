import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <section className='footer' style={{backgroundImage: `url("/photos/bg-img-footer.png")`}}>
        <div className='dimmer'>
            <div className="left">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam?</span>
            </div>
            <div className="right">
                <div className="title">Information</div>
                <div className="subtitle">151 Civil Lines Jaipur</div>
                <div className="content"></div>
            </div>
        </div>
    </section>
    
//     <section className="f-wrapper" style={{background: `url("/photos/bg-img-footer.png") center no-repeat 200% 200%`}}>
//     <div className="paddings innerWidth flexCenter f-container">
//         {/* left-side  */}
//         <div className="flexColStart f-left">
//             {/* <img src="photos/bg-img-footer.png" width={120} alt="" /> */}
//             <span className="secondaryText">
//                 Lorem ipsum dolor sit amet, <br /> consectetur adipisicing.



//             </span>
//         </div>
//         {/* right side */}
//         <div className="flexColStart f-right">
//             <span className='primaryText'>Information</span>
//             <span className='secondaryText'>151 civil lines jaipur</span>

//             <div className="flexCenter f-menu">
//                 <span>property</span>
//                 <span>property</span>
//                 <span>property</span>
//                 <span>property</span>
//             </div>
//         </div>
//     </div>
// </section>
  )
}

export default Footer