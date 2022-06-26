import React from 'react'
import { Actividad } from './Actividad'
import { Descripcion } from './Descripcion'


export const ActividadConDesc = ({ actividadSrc, actividadTitle, actividadSText,
    descTitle, descText, descColor }) => {
    return (
        <div className="row">
            <div className="col">
                <Actividad src={actividadSrc} title={actividadTitle} text={actividadSText} />
            </div>
            <div className="w-100"></div>
            <div className="col">
                <Descripcion title = {descTitle} text = {descText} color={descColor}/>
            </div>
        </div>
    )
}
