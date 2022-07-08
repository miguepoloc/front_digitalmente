import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Iframe from 'react-iframe'

export const ManejoEstres = () => {
    return (
        <>
            <h2 className='text-center'>Técnica de Ejercicio para el manejo de estrés</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-5'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`<br>Realizar actividad física es una alternativa eficaz en la reducción de los síntomas de estrés puesto que permite que el cuerpo en movimiento realice un gasto importante de energía acumulada, liberando endorfinas y otorgando una sensación de bienestar que permite disminuir la tensión que normalmente genera el estrés (Ávila 2014). Por ende, realizar ejercicio es una de las técnicas más recomendables para el manejo adecuado del estrés en los quehaceres diarios y en relación al estrés académico que genera la vida universitaria.
                        <br></br>
                        ¡Hacer ejercicio no solo es la opción comúnmente observada de ir al gym, aquí te damos otras opciones para que observes otras posibles alternativas que podrían resultar mucho más divertidas!`} showIcon={false} />
                </div>
                <div className='col-lg-7'>
                    <Actividad siImange={false} src={imgGanso.explicando} title="Ejercicios para principiantes en casa"
                        video={
                            <div>
                                <p className='text-justify'>
                                    Esta alternativa propone realizar actividad física desde tu casa con un espacio reducido, brinda explicaciones claras sobre la realización de cada uno de los ejercicios y no emplea de otro recurso más que tu propio cuerpo, de este modo es una excelente opción, si como a muchos, no te llama la atención ir a un gimnasio.
                                </p>
                                <Iframe url="https://www.youtube.com/embed/wXC2EXuXoIc"
                                    width="100%"
                                    height="315px"
                                    id="myId"
                                    display="initial"
                                    position="relative" />
                            </div>
                        } showIcon={false} />
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.ganso_ejercicio} title="Manejar bicicleta"
                        text={`<br>Esta actividad te permitirá ejercitarte de una forma agradable, puedes hacerlo de camino a la universidad o los fines de semana con un grupo de amigos, también hacerlo individualmente mientras escuchas música, resultará siendo una actividad antiestrés y que además podría ahorrarte el gasto de dinero en transporte, llegarás a tiempo y mejorarás tu salud. (Jakovcevic, Franco, Dalla & Ledesma 2016)`} showIcon={false} />
                </div>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.feliz_250x200} title="Salir a caminar con amigos o mascota"
                        text={`<br>Caminar diariamente puede mejorar la salud física y mental de las personas, cuando das aproximadamente 10000 pasos diarios puedes mantener bienestar ya que podrías reducir el riesgo de adquirir enfermedades crónico degenerativas y además traería beneficios para tu salud mental, podrías hacerlo con tu mascota, con amigos o familiares sin necesidad de ser un deportista de alto rendimiento. (Hernández 2011)`} showIcon={false} />
                </div>

            </div>
        </>
    )
}
