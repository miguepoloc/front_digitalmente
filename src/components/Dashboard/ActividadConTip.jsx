import React from 'react'
import { Actividad } from './Actividad'
import { Tip } from './Tip'

export const ActividadConTip = ({ actividadSrc, actividadTitle, actividadSText,
    tipTitle, tipText, tipColor }) => {
    return (
        <div className="row">
            <div className="col">
                <Actividad src={actividadSrc} title={actividadTitle} text={actividadSText} />
            </div>
            <div className="w-100"></div>
            <div className="col">
                <Tip title = {tipTitle} text = {tipText} color={tipColor}/>
            </div>
        </div>
    )
}
