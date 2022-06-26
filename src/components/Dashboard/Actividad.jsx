import React from 'react'
import PropTypes from 'prop-types';

import { AiFillStar } from "react-icons/ai";

/**
 * @param {{src: imgGanso, title: string, text: string , showIcon: boolean}} src
 */
export const Actividad = ({src,title,text, showIcon = true}) => {
    const icon = showIcon? <AiFillStar style={{color:"#ffd000", height:"1.5em", width:"1.5em"}} />  : ""
    return (
        <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3  ">
            <img
                style={{ width: "150px", height: "150px" }}
                className="card-img-left  justify-content-center align-self-center"
                src={src}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center w-100">
                <h5 className="card-title d-flex align-items-center w-100"> {icon} <span className='mx-1 w-100' dangerouslySetInnerHTML={{__html: title}}></span> {icon}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{__html: text}}></p>
            </div>
        </div>
    )
}

Actividad.prototypes = {
    src: PropTypes.string,
    title: PropTypes.string
}
