import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AvanceContext } from '../../context/AvanceContext'
export const CartaActividadesFomento = () => {
    const history = useHistory()
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);

    return (
        <>
            <div className="col-7 col-md-7 col-lg-4 d-flex pb-lg-0 pb-3 order-lg-3 order-2">

                <div className="card w-100  d-flex align-items-center justify-content-center ">
                    <div className="text-center py-4 ">
                        <h6 className='font-Geomanist'>Actividades de fomento</h6>
                    </div>
                    <div className=" pb-2 w-100  text-center d-flex  flex-column justify-items-center">
                        <div className="">
                            <button type="submit" className="btn btn-verde w-75  mx-4 " onClick={() => AvanceState.estres > 2 ? history.push('/relax8') : ""} disabled={AvanceState.estres > 2 ? false : true}><span className='textCard'>Módlulo relax</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-morado w-75  mx-4 " onClick={() => AvanceState.emocional > 15 ? history.push('/emocional16') : ""} disabled={AvanceState.emocional > 15 ? false : true}><span className='textCard'>Módlulo Emocional</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-azul w-75  mx-4 " onClick={() => AvanceState.piensalo > 5 ? history.push('/piensalo6') : ""} disabled={AvanceState.piensalo > 5 ? false : true}><span className='textCard'>Módlulo Piensalo</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-amarillo w-75  mx-4 " onClick={() => AvanceState.habilidades > 5 ? history.push('/habilidades6') : ""} disabled={AvanceState.habilidades > 5 ? false : true}><span className='textCard'>Módlulo Mis Habilidades</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
