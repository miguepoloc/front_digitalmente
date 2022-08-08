import React from 'react'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'
import { Actividad } from '../../Actividad'

import imgCuadroEjemplo from "../assets/img/PiensaloActividadEjemplo.png"
import { DescargablesActFomento } from './DescargablesActFomento'

export const ActividadDeFomentoPiensalo = () => {
    return (
        <>
            <h2 className='text-center my-4'>Actividad de fomento - Piensalo</h2>

            <Actividad src={imgGanso.lupa_celular} title="¡Actividad de fomento!"
                text={`<br><p class="text-center">Esta es una actividad de fomento. Eso significa que es un ejercicio para que practiques la habilidad orientada en el módulo a tu ritmo y cuando tu desees. Completamente voluntario. Los cuatro botones abajo presentados te permitirán: a) descargar una versión en pdf que puedes imprimir si quieres, b) una versión en Word editable para que llenes en tu celular, c) una versión en Excel editable para que llenes en tu celular y d) una versión en Excel que se unirá a tu nube en Drive para que llenes también cuando quieras. ¿Lo mejor de estas opciones? Solo tú tienes acceso a estas y solo tú puedes ver lo que escribes allí. Nadie más. Esperamos que sea una herramienta que te ayude a fortalecer tu salud mental.
                        <br>
                        `
                }
                showIcon={true} />

            <Actividad
                siImange={true}
                src={imgGanso.explicando}
                style={{ width: "110px", height: "110px" }}
                title={"Esta plantilla te permitirá mantener un registro de la gestión de tus emociones. Recuerda que puedes escribir cuanto quieras. El limite lo pones tú. Lo importante es que intentes practicar a diario, escribir al menos cada día. Ten en cuenta cada columna:"}
                text={`<ol class="ms-4">
                                <li type="disc"><b>Situación: </b>Indica la situación que te haya producido la emoción. No tiene que ser algo grande. Las situaciones del día a día nos provocan diversas emociones. Es bueno que practiques con situaciones cotidianas para identificar lo que sucede a través de la semana. </li>
                                <li type="disc"><b>Sensaciones: </b>¿Qué experimentaste ante esa situación? ¿Cómo sentiste tu cuerpo en general? ¿Internamente hubo algún cambio? Descríbelo con tus palabras sin necesidad de ser técnico. Es un diario de ti para ti. </li>
                                <li type="disc"><b>Emociones: </b>Describe con tus palabras que emociones principalmente te llenaron. Puedes colocar las que has nombrado durante el modulo. Una situación puede ocasionarte varias emociones. Identificarlas y darles un nombre te ayuda a hacerlo consciente. </li>
                                <li type="disc"><b>Pensamientos: </b>¿Qué pensamientos te atravesaron la mente en ese momento? ¿Qué considerabas? ¿Hacia dónde te inclinabas a pensar? </li type="disc">
                                <li type="disc"><b>Acciones: </b>¿Qué te provoco hacer e hiciste finalmente? ¿Cómo afrontaste la situación o la emoción que la produjo? </li>
                                <li type="disc"><b>Consecuencias: </b>¿Qué paso después de hacer eso? ¿Qué impacto tuvo en ti o en los demás?  </li>
                            </ol>`}
                showIcon={false} />

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h4 className='my-4'>Ejemplo</h4>
                <img src={imgCuadroEjemplo} alt="" />
                <p className='mt-2 mb-4 text-center'><small><b>Fuente:</b> Elaboración propia inspirado en Hervas y Moral (2017)</small></p>
            </div>

            <DescargablesActFomento />
        </>

    )
}
