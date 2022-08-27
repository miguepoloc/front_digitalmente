import React from 'react'
import PropTypes from 'prop-types';

import { AiFillStar } from "react-icons/ai";

/**
 * @param {{src: imgGanso, title: string, text: string , showIcon: boolean}} src
 */
export const Actividad = ({ src, title, text, showIcon = true, video, siImange = true, style = { width: "150px", height: "150px" }, id = "", imageRight = false, titular }) => {
    const icon = showIcon ? <AiFillStar style={{ color: "#ffd000", height: "1.5em", width: "1.5em" }} /> : ""
    return (
        <>
            <div className="card flex-md-row mb-2 box-shadow h-md-250 px-md-4  py-4 mt-3  " id={id}>
                {!imageRight && <>
                    {siImange ?
                        <img
                            style={style}
                            className="card-img-left  justify-content-center align-self-center"
                            src={src}
                            alt="ganso_lupa_celular"
                        />
                        :
                        <></>
                    }

                    <div className="card-body d-flex flex-column align-items-start justify-content-center w-100">
                        <div className='d-flex align-items-center justify-content-center w-100'><h5 className="card-title d-flex align-items-center justify-content-center"> {icon} <span className='mx-1 w-100 text-center' dangerouslySetInnerHTML={{ __html: title }}></span> {icon}</h5></div>
                        <h4 className="card-text w-100 text-justify" dangerouslySetInnerHTML={{ __html: titular }}></h4>
                        <p className="card-text w-100" dangerouslySetInnerHTML={{ __html: text }}></p>

                        {video}
                    </div>
                </>}

                {imageRight && <>

                    <div className="card-body d-flex flex-column align-items-start justify-content-center w-100">
                        <div className='d-flex align-items-center justify-content-center w-100'><h5 className="card-title d-flex align-items-center justify-content-center"> {icon} <span className='mx-1 w-100 text-center' dangerouslySetInnerHTML={{ __html: title }}></span> {icon}</h5></div>
                        <p className="card-text w-100" dangerouslySetInnerHTML={{ __html: text }}></p>
                        {video}
                    </div>
                    {siImange ?
                        <img
                            style={{ ...style, transform: "scaleX(-1)" }}
                            className="card-img-left  justify-content-center align-self-center"
                            src={src}
                            alt="ganso_lupa_celular"
                        />
                        :
                        <></>
                    }
                </>}

            </div>
        </>
    )
}

Actividad.prototypes = {
    src: PropTypes.string,
    title: PropTypes.string
}
