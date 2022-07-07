import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Iframe from 'react-iframe'

export const ManejoRespiracion = () => {
    return (
        <>
            <Actividad src={imgGanso.meditando} title="<span class='d-flex align-items-center justify-content-center w-100'>Técnica Manejo respiración: Duración: 20-30 minutos</span> <br/> ¿Para qué me servirá este módulo?"
                text={`<ul class="ms-2">
    <li><b>Objetivo:</b> Adquirir estrategias eficaces para dar respuesta inmediata a situaciones de estrés.</li>
    <li><b>Recursos:</b> Texto explicación actividad, imagen en movimiento, posiblemente audio.</li>
    <li><b>Descripción.</b> Técnica de control de respiración:</li>
    </ul>
    Esta técnica permite ejercer control sobre la sensación de estrés por medio de la respiración, debido a que estimula la activación del sistema nervioso parasimpático enviando reflejos que originan en nosotros una respuesta fisiológica positiva ante la sensación de estrés (Villen 2016). 
    `} showIcon={false} />

            <Actividad src={imgGanso.explicando} title="Existen diferentes tipos de ejercicios de respiración en el manejo del estrés, sin embargo, aquí te explicaremos algunos, para poder intentarlo debes tomar una postura corporal cómoda y seguir los pasos a continuación:"
                text={`<ul class="ms-4">
        <li>	Identifica el ritmo actual de tu respiración	</li>
        <li>	Controla el aire que entra en tus pulmones llenando solo su parte inferior, para hacerlo, recibe el aire por la nariz y toca tu estómago, cuando sientas que tu mano se mueve lo estarás haciendo bien.	</li>
        <li>	Luego recibe el aire por la nariz y llena tus pulmones en la parte superior, para lograrlo podrás poner tu mano en el pecho como en el ejercicio anterior	</li>
        <li>	Podrás realizar este ejercicio de forma repetitiva teniendo en cuenta que debe ser pausado y sosteniendo el aire de tres a 4 segundos	</li>
        <li>	Además, puedes hacerlo las veces que consideres necesario.	</li>
      </ul>`} showIcon={false} />


            <Descripcion title={"Tenemos otra manera didáctica en la que aprenderás a respirar "}
                text={`
                Observando a la pantalla con atención y respirando al ritmo en el que se te indica en la misma, notarás cómo experimentas una sensación de relajación
    <ul class="ms-4">
      <li>	Inhalar 5 segundos	</li>
      <li>	Sostener la respiración 2 segundos	</li>
      <li>	Exhalar 3 segundos 	</li>
    </ul>
    `} icon={<FcSurvey style={{ fontSize: '2rem' }} />} color="#03A9F4" />

            <Actividad title="Video"
                showIcon={false}
                video={<Iframe url="https://www.youtube.com/embed/adpR2UQTElk"
                    width="560px"
                    height="315px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />}

            />


            <Actividad src={imgGanso.feliz_250x200} title="Logro"
                text={`Afrontar situaciones de estrés de manera inmediata manejando por sí mismos las respuestas de estrés asociadas a conductas desadaptativas y poco funcionales.`} showIcon={false} />
        </>
    )
}
