import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Iframe from 'react-iframe'

export const ManejoEstres = () => {
    return (
        <>
            <Actividad src={imgGanso.meditando} title="<span class='d-flex align-items-center justify-content-center w-100'>Técnica de Ejercicio para el manejo de estrés</span> <br/> ¿Para qué me servirá esta actividad?"
                text={`Realizar actividad física es una alternativa eficaz en la reducción de los síntomas de estrés puesto que permite que el cuerpo en movimiento realice un gasto importante de energía acumulada, liberando endorfinas y otorgando una sensación de bienestar que permite disminuir la tensión que normalmente genera el estrés (Ávila 2014). Por ende, realizar ejercicio es una de las técnicas más recomendables para el manejo adecuado del estrés en los quehaceres diarios y en relación al estrés académico que genera la vida universitaria. 
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
