import React from 'react'
import { FaBolt} from 'react-icons/fa'

export const Tip = ({ title, text, color }) => {
    const colorDefault = "#4cbeff";
    return (
        <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: color ? color : colorDefault }}
        >
            <h5 className='d-flex align-items-center' style={{ color: color ? color : colorDefault }}>
                <FaBolt /> <span dangerouslySetInnerHTML={{__html: title? title : "Tip importante"}}></span>
            </h5>

            <p dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )
}
