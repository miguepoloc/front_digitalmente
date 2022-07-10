import React, { useState } from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'
import imgCuadroEjemplo from "./assets/img/relaxActividadUnoEjemploCuadro.png"
import { ErrorAlert, Correct_Alert, SendOkAlert } from '../../../helpers/helper_Swal_Alerts'
import { BiGift } from "react-icons/bi"

import documento from "./assets/documents/AUTOREGISTRO.pdf"

export const Actividad1 = () => {

    const [ActividadCompletada, setActividadCompletada] = useState(false)

    const validarTextArea = (name) => {
        let textArea = document.getElementsByName(name)[0].value;
        console.log(name)
        return textArea.trim().length > 5
    }

    const handleBtnEnviar = () => {
        const arrTextArea = ["Texto1", "Texto2", "Texto3", "Texto4", "Texto5"]
        for (let textArea of arrTextArea) {
            if (!validarTextArea(textArea)) {
                ErrorAlert("Ups algo ha salido mal.", "Parece que has dejado uno o varios campos en blanco")
                return false
            }
        }

        setActividadCompletada(true)

        Correct_Alert("¡Felicidades has realizado tu autorregistro antiestrés!", `Reconocer de forma objetiva las situaciones estresantes que se nos presentan en la vida permite que podamos formular mejores estrategias de solución frente a las mismas y tener una conducta adaptativa que favorecerá nuestro bienestar y salud mental.
        <br/>
        `).then(() => SendOkAlert("¡Te he traido un regalo!", "Ahora Puedes descargar un documento PDF para imprimirlo y realizar la misma actividad"))
    }


    return (

        <><h2 className='text-center'>Técnica de Ejercicio para el manejo de estrés</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`<br>En muchas ocasiones de nuestra vida podemos llegar a sentirnos abrumados, preocupados e irritados ante las situaciones estresantes que se presentan en el día a día, generando respuestas fisiológicas que entorpecen la búsqueda de soluciones y la generación de estratégias eficaces para la superación de estos obstáculos que serán comunes a lo largo de la vida, tales como: evitar las obligaciones, realizar generalizaciones como: “es que nunca voy a poder lograrlo”, sacar conclusiones sin evidencia: “El profesor de cálculo me odia”, distorsiones cognitivas como: “soy un inutil”, entre otros que impiden una visualización acertada de la realidad y que afectan directamente nuestro rendimiento en los diferentes ámbitos en los cuales nos desenvolvemos.`

                        }
                        showIcon={false} />
                </div>
                <div className='col-lg-6'>
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
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h4 className='my-4'>Tabla guía</h4>
                <img src={imgCuadroEjemplo} alt="" srcset="" />
                <p className='mt-2 mb-4 text-center'><small>Tabla 1 de elaboración propia basada en Guía para el mármol del estrés académico. Pérez, García, & Pérez (s.f.)</small></p>
            </div>

            <div className='mb-4'>
                <Actividad src={imgGanso.elegante} title="¿Qué tal si lo practicamos?"
                    text={`<br><p class="text-center">Acontinuación tendrás una planilla donde podrás 
                        Generar respuestas adaptativas ante las situaciones generadoras de estrés, planteando soluciones organizadas ante las mismas.
                        <br>
                        Al finalizar cuack te dará un regalo 
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#7DAAF1" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style="color: rgb(125, 170, 241);"><path d="M122.7 23.32l1.7 21.87-16.7 14.25 21.4 5.17 8.4 20.25L149 66.18l21.8-1.75-14.2-16.71 5.1-21.32-20.3 8.35-18.7-11.43zM464 32a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM239.8 42.5a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm183.9 6.84c-9.2 1.74-17.7 7.18-25.9 14.28-7.6 6.53-14.7 14.66-20.7 23.45-18.8 3.01-37.6 10.67-50.2 21.13-16.1 13.2-30.4 35.8-38.2 59.1-7.4 3.1-14.4 6.8-20.1 10.8-15.5 10.9-23.5 31.8-29.4 50-5.9 18.3-8.8 34.3-8.8 34.3l17.8 3.2s2.7-15 8.1-31.9c5.5-16.9 14.8-35.3 22.7-40.8 1.3-.9 3-1.9 4.5-2.8-.6 5.7-.6 11.4.3 16.8 1.8 11.4 8 22.3 19 28.2 7.8 4.2 16.6 3.2 24 .2 7.4-3.1 14-8.2 19.7-14.2 5.7-6 10.4-13.1 13.2-20.6 2.8-7.5 3.8-16 .2-23.9h-.1c-3.9-8.4-11.4-13.8-19.4-16.1-8-2.3-16.6-2.2-25.2-.9-1.5.2-2.9.7-4.4 1 7.4-15.8 18-30.7 27.5-38.6 6.2-5.1 16.6-10 27.7-13.6-1.4 3.8-2.5 7.6-3 11.5-1.6 10.5.7 21.9 9.1 29.7 6.1 5.6 14.3 6.5 21.5 5.3 7.1-1.2 14-4.4 20.2-8.5 6.2-4.2 11.7-9.4 15.6-15.5 3.9-6.1 6.5-13.9 4-21.7v-.1c-3.3-10.07-11.5-16.99-20.6-20.27-3.9-1.4-8-2.19-12.2-2.66 2.9-3.26 5.9-6.31 8.9-8.92 6.8-5.84 13.7-9.5 17.6-10.23l-3.4-17.68zM174.8 84.39l-15.2 9.56 34.5 55.25-56.4 2.9 26.5 57.8 16.4-7.6-15.5-33.6 60.6-3.1-50.9-81.21zm216.4 19.31c6.1-.1 11.5.6 15.5 2.1 5.4 1.9 8.1 4.3 9.5 8.8.4 1.1.2 3.3-1.9 6.6-2.2 3.4-6.1 7.2-10.5 10.2-4.5 3-9.5 5.1-13.2 5.7-3.8.7-5.5 0-6.3-.7-3.5-3.2-4.5-7.2-3.5-13.9.8-5.4 3.3-11.9 7-18.6 1.2 0 2.3-.2 3.4-.2zM94.99 123a16 16 0 0 0-16 16 16 16 0 0 0 16 16A16 16 0 0 0 111 139a16 16 0 0 0-16.01-16zm356.11 37.2l-14.4 16.6-21.8-1.8 11.4 18.8-8.5 20.2 21.4-5 16.6 14.3 1.9-21.9 18.7-11.4-20.2-8.5-5.1-21.3zm-123.5 16.5c2.9.1 5.6.5 7.7 1.1 4.3 1.2 6.6 3 8.2 6.4.9 1.9 1 5.4-.7 10-1.7 4.7-5.2 10.1-9.4 14.6s-9.3 8.1-13.5 9.8c-4.2 1.7-6.8 1.6-8.5.7h-.1c-5.8-3.2-8.6-7.8-9.7-15.2-1-6.3-.3-14.3 1.8-22.9 4.9-1.7 9.8-3.1 14.5-3.8 3.5-.5 6.7-.7 9.7-.7zm-202.4 51.9c-7.2-.2-11.7 1.5-14.5 4.3-2.8 2.8-4.5 7.3-4.3 14.5.2 7.3 2.6 16.9 7.2 27.6 9.2 21.5 27.3 47.4 51.6 71.8 24.3 24.3 50.3 42.3 71.8 51.5 10.6 4.6 20.2 7 27.5 7.2 7.3.3 11.7-1.5 14.5-4.3 2.8-2.8 4.6-7.2 4.3-14.5-.2-7.3-2.6-16.9-7.2-27.6-9.2-21.4-27.2-47.4-51.5-71.7-24.3-24.4-50.3-42.4-71.8-51.6-10.7-4.6-20.3-7-27.6-7.2zm232 31.3l-33 54-29.1-27.9-12.4 13 45.1 43.3 33.8-55.2 38.7 32.3 89.3-38.2-7-16.6-79.3 34-46.1-38.7zM93.43 272.6l-17.64 57.9c41.41 49.1 89.71 76.7 142.11 94.7l21.6-6.6c-3.1-1.1-6.4-2.4-9.7-3.8-24.4-10.4-51.7-29.6-77.3-55.3-25.7-25.7-44.9-53-55.34-77.4-1.41-3.2-2.65-6.4-3.73-9.5zm-23.82 78.2l-14.01 46c28.89 27 59 39.2 90.6 50.2l43.4-13.2c-43.2-17.6-84-43.3-119.99-83zM368 352a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM49.81 415.9l-20.29 66.6 88.28-26.9c-22.77-9.1-45.78-20.7-67.99-39.7z"></path></svg>
                        </p>
                        `

                    }
                    showIcon={true} />
            </div>

            {ActividadCompletada ? (<>
                <div className=' text-center'>
                    <a href={documento} download="Autoregistro" className='d-flex justify-content-center'>
                        <button className='w-50 search-buttons card-buttons d-flex justify-content-center align-items-center '> <BiGift size={25} color="white" className='mx-1'/> Descargar PDF</button>
                    </a>
                </div>
            </>) : (
                <div className='row'>

                    <div className="col-lg  mb-4 p-2">
                        <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#7DAAF1", minHeight: "69px" }}>
                            <h5 className="my-0 font-weight-normal text-white  text-center" style={{ fontSize: "0.9em" }}>Situación estresante</h5>
                        </div>
                        <div className="border shadow  ">
                            <div className="float-left d-flex flex-column">
                                <textarea name="Texto1" rows="3" className="w-100" >
                                </textarea>
                                {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg mb-4 p-2">
                        <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#7DAAF1", minHeight: "69px" }}>
                            <h5 className="my-0 font-weight-normal text-white  text-center" style={{ fontSize: "0.9em" }}>Mi acción frente a la situación estresante</h5>
                        </div>
                        <div className="border shadow  ">
                            <div className="float-left d-flex flex-column">
                                <textarea name="Texto2" rows="3" className="w-100">
                                </textarea>
                                {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg mb-4 p-2">
                        <div className="card-header  d-flex align-items-center justify-content-center " style={{ background: "#7DAAF1", minHeight: "69px" }}>
                            <h5 className="my-0 font-weight-normal text-white  text-center" style={{ fontSize: "0.825em" }}>Cosas que me digo ante la situación estresante</h5>
                        </div>
                        <div className="border shadow  ">
                            <div className="float-left d-flex flex-column">
                                <textarea name="Texto3" rows="3" className="w-100">
                                </textarea>
                                {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mb-4 p-2">
                        <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#7DAAF1", minHeight: "69px" }}>
                            <h5 className="my-0 font-weight-normal text-white  text-center" style={{ fontSize: "0.9em" }}>¿Es funcional?</h5>
                        </div>
                        <div className="border shadow  ">
                            <div className="float-left d-flex flex-column">
                                <textarea name="Texto4" rows="3" className="w-100">
                                </textarea>
                                {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg mb-4 p-2">
                        <div className="card-header  d-flex align-items-center justify-content-center " style={{ background: "#7DAAF1", minHeight: "69px" }}>
                            <h5 className="my-0 font-weight-normal text-white  text-center" style={{ fontSize: "0.9em" }}>¿Qué cosas podría hacer?</h5>
                        </div>
                        <div className="border shadow  ">
                            <div className="float-left d-flex flex-column">
                                <textarea name="Texto5" rows="3" className="w-100">
                                </textarea>
                                {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                            </div>
                        </div>
                    </div>
                    <div className=' text-center'><button className='w-50 search-buttons card-buttons' onClick={() => handleBtnEnviar()}>Enviar</button></div>

                </div>)}



        </>


    )
}
