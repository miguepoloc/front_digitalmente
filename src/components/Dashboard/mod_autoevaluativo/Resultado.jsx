import React from 'react'
import { Resultados } from '../../Surveys/Resultados'

export const Resultado = ({ number, resultado, setRenderResultados, surveys }) => {
    let encuestaConRespuestas = surveys.loadDataAnswerUser(resultado.respuestas)

    return (
        <div className="" >
            {/* Validaciones que deberían ir en reusltados.creo. */}
            {surveys.arrSurvey ? (
                <>
                    {
                        <div className="m-2 card_SurveyRealizada d-flex align-items-center justify-content-center" onClick={() => { setRenderResultados(<Resultados setRenderResultados={setRenderResultados} objResultados={encuestaConRespuestas.results()}></Resultados>) }}>
                            <div className="text-center pb-0 d-flex flex-column align-items-center justify-content-center">
                                <p className='display-1  m-0 text-white'><strong>{number}</strong></p>
                                <p className='m-0 text-white'>{resultado.fecha}</p>
                            </div>
                        </div>
                    }
                </>
            ) :
                (<></>)
            }
        </div>
    )
}
