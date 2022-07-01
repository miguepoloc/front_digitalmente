import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import './assets/css/CartaResultado.scss'
export const CartaResultados = () => {
    return (
        <>
            <div className="col-lg-3 col-5 order-lg-2 order-1 pb-lg-0 pb-3">
                <div className="card d-flex flex-column align-items-center justify-content-center w-100 ">

                    <div className="text-center pt-4 pb-2 mx-md-4">
                        <h6 className='font-Geomanist textCard '>Resultados módulo Autoevaluativo</h6>
                    </div>
                    <div className="text-center pb-2">
                        <img
                            src={imgGanso.leyendo}
                            className="imgGanso_cartaSeguimiento"
                            alt="ganso"
                        />
                    </div>
                    <a href='/autoevaluativo_resultados' className="btn btn-info w-75" ><span className='textCard'>Consultar</span></a>
                </div>
            </div>

        </>
    )
}
