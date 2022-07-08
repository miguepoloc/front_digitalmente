import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Iframe from 'react-iframe'

export const ManejoRespiracion = () => {
    return (
        <>
            <h2 className='text-center'>Técnica Manejo respiración</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-5'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`Esta técnica permite ejercer control sobre la sensación de estrés por medio de la respiración, debido a que estimula la activación del sistema nervioso parasimpático enviando reflejos que originan en nosotros una respuesta fisiológica positiva ante la sensación de estrés (Villen 2016).`} showIcon={false} />
                </div>
                <div className='col-lg-7'>
                    <Actividad siImange={true} src={imgGanso.explicando} title="Existen diferentes tipos de ejercicios de respiración en el manejo del estrés, sin embargo, aquí te explicaremos algunos, para poder intentarlo debes tomar una postura corporal cómoda y seguir los pasos a continuación:"
                        text={`<ul class="ms-4">
                            <li>	Identifica el ritmo actual de tu respiración	</li>
                            <li>	Controla el aire que entra en tus pulmones llenando solo su parte inferior, para hacerlo, recibe el aire por la nariz y toca tu estómago, cuando sientas que tu mano se mueve lo estarás haciendo bien.	</li>
                            <li>	Luego recibe el aire por la nariz y llena tus pulmones en la parte superior, para lograrlo podrás poner tu mano en el pecho como en el ejercicio anterior	</li>
                            <li>	Podrás realizar este ejercicio de forma repetitiva teniendo en cuenta que debe ser pausado y sosteniendo el aire de tres a 4 segundos	</li>
                            <li>	Además, puedes hacerlo las veces que consideres necesario.	</li>
                        </ul>`
                        } showIcon={false} />
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Descripcion title={"Aprendamos a respirar "}
                        text={`
                Tenemos otras dos maneras didácticas en la que aprenderás a respirar, una de ellas es observando el video con atención y respirando al ritmo en el que se te indica en la misma, notarás cómo experimentas una sensación de relajación. 
                <br><br>
                Otra de ellas es escuchando el audio de abajo y respiar según lo indicado para manejar el ritmo de tu respiración.
                <br><br>
                Todo lo anterior siguiendo el ritmo que te indican con la ayuda de un video o audio y en los tiempos presentados a continuación:
                <ul class="ms-4">
                    <li>	Inhalar 5 segundos	</li>
                    <li>	Sostener la respiración 2 segundos	</li>
                    <li>	Exhalar 3 segundos 	</li>
                </ul>`
                        } icon={<FcSurvey style={{ fontSize: '1.3rem' }} />} color="#03A9F4" />
                </div>

                <div className='col-lg-6'>

                    <Iframe url="https://www.youtube.com/embed/adpR2UQTElk"
                        width="100%"
                        height="315px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </div>
            </div>

            <div className='mt-2 row justify-content-center align-items-center'>
                <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1301441647&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    width="100%"
                    height="150"
                    scrolling="no"
                    frameborder="no"
                    allow='autoplay'
                />
            </div>
        </>
    )
}
