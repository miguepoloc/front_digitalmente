import React from 'react'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'
import { Actividad } from '../../Actividad'
// import { BiGift } from "react-icons/bi"

import imgCuadroEjemplo from "../assets/img/relaxActividadUnoEjemploCuadro.png"
import { Descargables, DescargablesActFomento } from './DescargablesActFomento'

export const ActividadDeFomentoRelax = () => {
    return (
        <>
            <h2 className='text-center my-4'>Actividad de fomento - Relax</h2>

            <Actividad
                siImange={true}
                src={imgGanso.explicando}
                style={{ width: "110px", height: "110px" }}
                title="De este modo, esta plantilla permite reconocer de forma objetiva la situación estresante y se diligenciará de izquierda a derecha de la siguiente manera: "
                text={`<ol class="ms-4">
                                <li>	Anotando primero la situación estresante a la que planeo hacer frente. 	</li>
                                <li>	Luego escribir las conductas que estoy realizando ante la situación problema (funcionales o no). </li>
                                <li>	Después anotar las cosas que pienso y me digo a mí mism@ sobre la situación estresante que experimentó.	</li>
                                <li>	Reconocer si las cosas que pienso y me digo resultan funcionales para poder afrontar la situación estresante y escribir si lo son o no. 	</li>
                                <li>	Finalmente, apuntar las cosas que puedo hacer y que son factibles para realizar ante las situaciones de estrés que estoy vivenciando, teniendo en cuenta diferentes alternativas, redes de apoyo y herramientas con las que cuento actualmente.	</li>
                            </ol>`}
                showIcon={false} />

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h4 className='my-4'>Ejemplo</h4>
                <img src={imgCuadroEjemplo} alt="" />
                <p className='mt-2 mb-4 text-center'><small><b>Fuente.</b> Elaboración propia basada en Pérez <i>et al.</i> (s.f.)</small></p>
            </div>

            <Actividad src={imgGanso.lupa_celular} title="¡Actividad de fomento!"
                    text={`<br><p class="text-center">¡Esto significa que es un ejercicio para que practiques la habilidad orientada en el módulo a tu ritmo y cuando tu desees. Completamente voluntario. Los tres botones abajo presentados te permitirán: a) descargar una versión en pdf que puedes imprimir si quieres, b) una versión en Word editable para que llenes en tu celular y c) una versión en Excel que se unirá a tu nube en Drive para que llenes también cuando quieras. ¿Lo mejor de estas opciones? Solo tú tienes acceso a estas y solo tú puedes ver lo que escribes allí. Nadie más. Esperamos que sea una herramienta que te ayude a fortalecer tu salud mental.
                        <br>
                        `
                    }
                    showIcon={true} />

            <DescargablesActFomento />
        </>

    )
}
