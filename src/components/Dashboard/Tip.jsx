import React from 'react'
import { FaBolt } from 'react-icons/fa'

export const Tip = ({ title, text, color, icon = <FaBolt />, _class="mb-5" }) => {
    const colorDefault = "#4cbeff";
    const _className = _class + " " + "callout h-md-250"
    return (
        <div
            className={_className}
            style={{ borderLeftColor: color ? color : colorDefault }}
        >
            <h5 className='d-flex align-items-center' style={{ color: color ? color : colorDefault }}>
               {icon}  <span dangerouslySetInnerHTML={{ __html: title ? title : "Tip importante" }}></span>
            </h5>

            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}
