import React, { useState } from 'react'
import {
    Accordion,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemState


} from "react-accessible-accordion"

import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"
import data from "../../utils/accordion"

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />

                    </div>
                </div>

                {/* {right side} */}

                <div className="flexColStart v-right">
                    <span className='orangeText'>Our values</span>
                    <span className='primaryText'>Values we give to you</span>
                    <span className='secondaryText'>
                        Always ready for good customer service <br />
                        we believe goof gkdnjvnfo
                    </span>
                    <Accordion className='accordion' allowMultipleExpanded={false}
                        preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                // const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className='accordionItem' key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>
                             
                                )
                            })
                        }

                    </Accordion>


                </div>


            </div>

        </section>
    )
}

export default Value