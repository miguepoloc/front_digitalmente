import React from 'react'

import { FcBiomass } from "react-icons/fc";
import { IconContext } from 'react-icons/lib';

export const Descripcion = ({ title, text, color, icon = <FcBiomass />, id, centerTitle = false , centerText = false }) => {
    const colorDefault = "#9CCC65";

    return (
        <div
            className="callout mb-5  h-md-250"
            style={{ borderLeftColor: color ? color : colorDefault }}
            id={id}
        >
            <h5 className={`d-flex align-items-center ${centerTitle? "justify-content-center":""}` } style={{ color: color ? color : colorDefault }}>
                <IconContext.Provider value={{ className: "me-2", size: "1.5em" }}>
                    {icon}
                </IconContext.Provider>
                <span dangerouslySetInnerHTML={{ __html: title ? title : "Actividad" }}></span>
            </h5>

            <p className={`${centerText? "text-center":""} `} dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}
