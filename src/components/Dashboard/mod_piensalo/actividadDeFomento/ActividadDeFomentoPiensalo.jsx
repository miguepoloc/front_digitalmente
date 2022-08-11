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
                title={"Esta plantilla te permitirá mantener un registro diario de pensamientos distorsionados. Recuerda que puedes escribir cuanto quieras. El limite lo pones tú. Lo importante es que intentes practicar a diario, escribir al menos cada día."}
                text={`
                <p>
                Hemos adquirido herramientas que nos permiten identificar distorsiones cognitivas y formas de poder cuestionarlas, no obstante, el proceso para lograr modificarlas no se logra en un día, por eso es necesario que continuamente puedas ejercitar el proceso de identificación para que sea mucho más fácil después encontrar una respuesta racional. A continuación, encontraras un diario para el registro de pensamientos distorsionados, es importante que lo diligencies todos los días.
                </p>
                <p>
                <b>Instrucciones:</b> Cuando experimente una emoción desagradable, describa la situación que pudo motivar la aparición de la emoción (Si la emoción tuvo lugar mientras usted pensaba algo, anótelo). A continuación, anote el pensamiento automático asociado con la emoción. Anote el grado de creencia en este pensamiento: 0 = nada en absoluto; 100= totalmente. En la evaluación de la intensidad de la emoción, 1 = un leve indicio; 100 = la máxima posible, evalué del 1 al 100 el nivel de respuesta racional y el resultado. A continuación, se muestra un ejemplo. 
                </p>
                `}
                showIcon={false} />

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h4 className='my-4'>Ejemplo</h4>
                <img src={imgCuadroEjemplo} alt="" />
                <p className='mt-2 mb-4 text-center'><small><b>Fuente:</b> Tomado de Beck et al (1983)</small></p>
            </div>

            <DescargablesActFomento />
        </>

    )
}
