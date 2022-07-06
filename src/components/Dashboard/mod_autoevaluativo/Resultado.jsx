import React from 'react'
import { Resultados } from '../../Surveys/Resultados'

export const Resultado = ({ number, resultado, setRenderResultados, surveys }) => {
    let encuestaConRespuestas = surveys.loadDataAnswerUser(resultado.respuestas)
    var fecha = new Date(resultado.fecha);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    return (
        <div className="" >
            {/* Validaciones que deberían ir en reusltados.creo. */}
            {surveys.arrSurvey ? (
                <>
                    {
                        <div className="m-2 card_SurveyRealizada d-flex align-items-center justify-content-center"
                            onClick={() => {
                                setRenderResultados(<Resultados setRenderResultados={setRenderResultados} objResultados={encuestaConRespuestas.results()} mostrarMensajeDeAlerta={false}
                                ></Resultados>)
                            }}>
                            <div className="text-center pb-0 d-flex flex-column align-items-center justify-content-center">
                                <p className='display-1  m-0 text-white'><strong>{number}</strong></p>
                                <p className='m-0 text-white'>
                                    {`${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${anio}`}
                                    <br />
                                    {`${hora < 10 ? "0" + hora : hora}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`}
                                </p>
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
