import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
export const SeccionInicial = () => {
  return (
    <>
      <Actividad src={imgGanso.meditando} title="<span class='d-flex align-items-center justify-content-center w-100'>Bienvenido al módulo Relax</span> <br/> ¿Para qué me servirá este módulo?"
        text={`<ul class="ms-2">
    <li>Reconocer el concepto de estrés.</li>
    <li>Identificar los patrones conductuales relacionados al estrés.</li>
    <li>Desarrollar habilidades enfocadas al manejo adecuado del estrés propio o ajeno en situaciones cotidianas.</li>
    </ul>`} showIcon={false} />

      <Actividad src={imgGanso.elegante} title="¿Qué es el estrés?"
        text={`Es la sensación de tensión que se origina en nosotros cuando consideramos que una determinada situación se sale de nuestro control y nos obliga a recurrir a nuevas estrategias o habilidades, dando la idea de que será imposible enfrentar a la misma, puede ocurrir con muchos casos de nuestra cotidianidad.`} showIcon={false} />

      <Descripcion title={"Algunos de sus signos:"}
        text={`
    <ul class="ms-4">
      <li>	Aceleración del ritmo cardiaco.	</li>
      <li>	Temblores.	</li>
      <li>	Dolor de cabeza.	</li>
      <li>	Respiración agitada.	</li>
      <li>	Malestares digestivos.	</li>
      <li>	Irritabilidad.	</li>
      <li>	Tristeza .	</li>
      <li>	Frustración.	</li>
      <li>	Pensamientos de incapacidad.	</li>
      <li>	Inadaptabilidad al cambio.	</li>
      <li>	Problemas de concentración.	</li>
      <li>	Poca agilidad para la realización de tareas.	</li>
      <li>	Desorden en hábitos saludables.	</li>
    </ul>
    `} icon={<FcSurvey />} color="#03A9F4" />

      <Actividad src={imgGanso.escribiendo_250x200} title="Datos curiosos sobre el estrés"
        text={`<ul class="ms-4">
        <li>	Lo sufrimos casi todos en algún momento de la vida	</li>
        <li>	Es un mecanismo de defensa para afrontar una situación nueva	</li>
        <li>	Tiene una función adaptativa en el ser humano	</li>
      </ul>`} showIcon={false} />

      <div className='mt-4'>
        <h6 className='text-center'>A continuación encontrarás actividades que te podrán ofrecer estrategias para el manejo del estrés, esperemos que te sean útiles y puedas emplear la que mejor se ajuste a tus preferencias y necesidades.</h6>
      </div>

    </>


  )
}
