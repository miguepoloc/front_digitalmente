import React from 'react'
import { renderToString } from "react-dom/server";
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import { ActivityCards } from './ActivityCards'
import ButtonLibro from '../ButtonLibro'
import { FaBookOpen } from 'react-icons/fa'
export const SeccionInicial = () => {
    return (
        <>

            <Actividad src={imgGanso.meditando} title="<h3 class='d-flex align-items-center justify-content-center w-100 mb-0'>Bienvenido al Módulo Relax</h3> <hr class='mt-1 mb-2' /> ¿Para qué me servirá este módulo?"
                text={`<ul class="ms-2">
    <li>Reconocer el concepto de estrés.</li>
    <li>Identificar los patrones conductuales relacionados al estrés.</li>
    <li>Desarrollar habilidades enfocadas al manejo adecuado del estrés propio o ajeno en situaciones cotidianas.</li>
    </ul>
    <small class="d-flex justify-content-center"><span style="color:red">*</span>${renderToString(<div className='mx-1' >

                    <div
                        className={" buttonReferenciaNoFixed text-white"} style={{ cursor: "auto" }}
                    >
                        <FaBookOpen size={14} />
                    </div>
                    <ButtonLibro asImg={true} size={14} />

                </div>)} Aquí podrás encontrar referencias bibliográficas del contenido de este módulo  e información adicional sobre el tema de estrés.</small>`} showIcon={false} />

            <Actividad src={imgGanso.elegante} title="¿Qué es el estrés?"
                text={`Es la sensación de tensión que se origina en nosotros cuando consideramos que una determinada situación se sale de nuestro control y nos obliga a recurrir a nuevas estrategias o habilidades, dando la idea de que será imposible enfrentar a la misma, puede ocurrir con muchos casos de nuestra cotidianidad (Ávila, 2014).`} showIcon={false} />
            <div className="d-sm-none">
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
            </div>


            <div className="frame d-none d-sm-block titulo_sup_card w-100">

                <h4 className='text-center mb-2 '> Algunos de sus signos </h4>

                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Aceleración del ritmo cardiaco
                </button>
                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Temblores
                </button>
                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Dolor de cabeza
                </button>
                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Respiración agitada.
                </button>

                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Malestares digestivos.
                </button>


                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Irritabilidad.
                </button>


                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Desorden en hábitos saludables.
                </button>


                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Frustración.
                </button>


                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Pensamientos de incapacidad.
                </button>


                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Inadaptabilidad al cambio.
                </button>

                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Problemas de concentración.
                </button>

                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Poca agilidad para la realización de tareas.
                </button>
                <button className="search-buttons rounded-pill mx-1" style={{ cursor: "auto" }}>
                    Tristeza
                </button>
            </div>

            <Actividad src={imgGanso.escribiendo_250x200} title="Datos curiosos sobre el estrés"
                text={`<ul class="ms-4">
        <li>	Lo sufrimos casi todos en algún momento de la vida	</li>
        <li>	Es un mecanismo de defensa para afrontar una situación nueva	</li>
        <li>	Tiene una función adaptativa en el ser humano	</li>
      </ul>`} showIcon={false} />

            <div style={{ marginBottom: "0.3rem", marginTop: "3rem" }} className="titulo_sup_card p-4">
                <h4 className='text-center'>A continuación encontrarás actividades que te podrán ofrecer estrategias para el manejo del estrés, esperemos que te sean útiles y puedas emplear la que mejor se ajuste a tus preferencias y necesidades.</h4>
            </div>

            <ActivityCards />

            <Actividad showIcon={false} src={imgGanso.explicando} title={"¿Cómo empiezo?"} color={"#A1B7EF"} text={"<span class='d-flex justify-content-center'>¡Puedes hacerlo dandole click al boton siguiente!</span>"} />

        </>


    )
}
