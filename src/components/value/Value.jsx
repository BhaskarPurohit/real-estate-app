import React from 'react'
import {
    Accordion,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemState

    
}  from "react-accessible-accordion"

import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from "react-icons/md"
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
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
                <Accordion allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item, i)=>{
                            return(
                                <AccordionItem className='accordionItem'>
                                    <AccordionItemHeading>
                                        
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