/* eslint-disable eqeqeq */
import React, { useState, useContext, useEffect } from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'
import imgAutoRegistro from "./assets/img/cuadroAutorregistro.png"
import { ErrorAlert, Correct_Alert } from '../../../helpers/helper_Swal_Alerts'
import { BotonContext } from '../../../context/BotonContext'
import { AvanceContext } from '../../../context/AvanceContext'
// import { AuthContext } from '../../../context/AuthContext'
import imgTip from './assets/img/1Capsutips.png'
import { Tip } from '../Tip'
import { DescargablesActFomento } from './actividadDeFomento/DescargablesActFomento'
import { useParams } from 'react-router-dom'

export const AutoRegistro = () => {
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext)
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);
    //TODO: se debe validar si esta actividad se hizo anteriormente
    //con el fin de mostar directamente las descargas de los archivos

    // const { authState } = useContext(AuthContext)
    // const { userInfo } = authState

    const [ActividadCompletada, setActividadCompletada] = useState(false)




    useEffect(() => {
        console.log(AvanceState.habilidades, AvanceState.habilidades == 1 && !ActividadCompletada)
        if (AvanceState.habilidades <= parseInt(slug) && !ActividadCompletada) {
            setBotonState(true)
        }
        else {
            setBotonState(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState, ActividadCompletada])

    const [Datos, setDatos] = useState({
        Texto1: "",
        Texto2: "",
        Texto3: "",
        Texto4: "",
        Texto5: ""
    })

    const validarTextArea = (name) => {
        let textArea = document.getElementsByName(name)[0].value;
        return textArea.trim().length >= 1
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
        Correct_Alert("¡Felicidades has realizado tu autorregistro!", `¡Cuack está orgulloso de tí has completado tu registro! Identificar aquellos patrones en las emociones y pensamientos en torno a la procrastinación de actividades nos permite hacer frente a los mismos y encontrar estrategias para afrontar estos de una mejor manera.
            <br/>
            `)
    }

    const handleChange = (event) => {
        setDatos({
            ...Datos,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="mx-md-2 mx-md-4">

            <h2 className='text-center'>Autorregistro</h2>


            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-10'>
                    <Actividad src={imgGanso.elegante} title="¿Para qué me servirá esta actividad?"
                        text={`Servirá para identificar los pensamientos y emociones asociadas a la procrastinación.`

                        }
                        showIcon={false} />
                </div>
                <div className='col-lg-10'>
                    <Actividad
                        siImange={true}
                        src={imgGanso.explicando}
                        style={{ width: "110px", height: "110px" }}
                        title="Descripcion de la actividad"
                        text={`La procrastinación sucede cuando el individuo se enfrenta a tareas o situaciones que son interpretadas por este como aversivas (difíciles, aburridas, etc). La persona que procrastina una actividad, se centra en cambiar el estado de ánimo negativo y no en el desarrollo de la tarea, por lo tanto, se suele desplazar la tarea inicial por otras que generen una satisfacción a corto plazo y restablezcan el estado de ánimo positivo. A pesar de esto no se puede dejar de lado el malestar que genera dicho aplazamiento a futuro, convirtiéndose en un ciclo: aplazas para no sentirte mal y luego te sientes mal por aplazar (Sirois y Pychyl, 2013)
                        `}
                        showIcon={false} />


                </div>
                <div className="col-lg-10">
                    <Actividad
                        siImange={true}
                        src={imgGanso.pensando}
                        style={{ width: "110px", height: "110px" }}
                        title="¿Cómo utilizamos este autorregistro?"
                        text={`¡No te preocupes, es pan comido! En cada casilla está indicado lo que debes colocar y un ejemplo para que te guíes. Te recomendamos hacer seguimiento de este por lo menos durante una semana o también anotar aquellas situaciones anteriores (pasadas) en cada una de las casillas, para esto puedes agregar la fecha para mayor precisión. Al completar el autorregistro notarás como algunos sentimientos, pensamientos y comportamientos (Conductas de distracción) son repetitivos, del mismo modo, con la practica (y experimentación de alternativas) vamos siendo más asertivos en la forma de afrontarlos los mismos.
                        `}
                        showIcon={false} />
                </div>
                <div className="col-lg-10">
                    <Actividad
                        siImange={true}
                        src={imgGanso.leyendo}
                        style={{ width: "110px", height: "110px" }}
                        title=""
                        text={`Teniendo en cuenta lo anterior es importante que identifiquemos cuales son las actividades que más tendemos a aplazar y los sentimientos asociados a las mismas para así lograr afrontarlas de una mejor manera. Para esto te ayudarás con el siguiente cuadro de autorregistro, el cual también te orientará con un ejemplo (basado en hechos reales)
                `}
                        showIcon={false} />
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='my-4'>Ejemplo</h4>
                    <img src={imgAutoRegistro} alt="" />
                    <p className='mt-2 mb-4 text-center'><small><b>Fuente.</b> Elaboración propia basada en Beck (1995/2000) </small></p>
                </div>
            </div>

            {ActividadCompletada || AvanceState.habilidades > 4 ? (<>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="col-10">
                        <Actividad src={imgGanso.lupa_celular} title="¡Un regalo para ti!"
                            text={`<br><p class="text-center">Te he traído un regalo. Aquí tienes unas versiones editables del ejercicio para que realices cuando quieras, de forma privada y a tu propio ritmo. Esto hace parte de una actividad de fomento, una actividad voluntaria de fortalecimiento que estará disponible al final de módulo y en tu Dashboard, cuando quieras acceder a él.
                <br>
                `
                            }
                            showIcon={true} />
                    </div>
                </div>
                <DescargablesActFomento />

            </>) : (
                <>
                    <div className='mb-4'>
                        <Actividad src={imgGanso.elegante} title="¿Qué tal si lo practicamos?"
                            text={`<br><p class="text-center">A continuación tendrás la oportudidad de realizar un autorregistro didáctico en el que podrás analizar la información de tus situaciones de estrés y plantear soluciones apropiadas para diferentes momentos relacionados al mismo.
        <br>
        <br>
        Al finalizar Cuack te dará un regalo
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#FCD75A" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style="color: rgb(125, 170, 241);"><path d="M122.7 23.32l1.7 21.87-16.7 14.25 21.4 5.17 8.4 20.25L149 66.18l21.8-1.75-14.2-16.71 5.1-21.32-20.3 8.35-18.7-11.43zM464 32a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM239.8 42.5a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm183.9 6.84c-9.2 1.74-17.7 7.18-25.9 14.28-7.6 6.53-14.7 14.66-20.7 23.45-18.8 3.01-37.6 10.67-50.2 21.13-16.1 13.2-30.4 35.8-38.2 59.1-7.4 3.1-14.4 6.8-20.1 10.8-15.5 10.9-23.5 31.8-29.4 50-5.9 18.3-8.8 34.3-8.8 34.3l17.8 3.2s2.7-15 8.1-31.9c5.5-16.9 14.8-35.3 22.7-40.8 1.3-.9 3-1.9 4.5-2.8-.6 5.7-.6 11.4.3 16.8 1.8 11.4 8 22.3 19 28.2 7.8 4.2 16.6 3.2 24 .2 7.4-3.1 14-8.2 19.7-14.2 5.7-6 10.4-13.1 13.2-20.6 2.8-7.5 3.8-16 .2-23.9h-.1c-3.9-8.4-11.4-13.8-19.4-16.1-8-2.3-16.6-2.2-25.2-.9-1.5.2-2.9.7-4.4 1 7.4-15.8 18-30.7 27.5-38.6 6.2-5.1 16.6-10 27.7-13.6-1.4 3.8-2.5 7.6-3 11.5-1.6 10.5.7 21.9 9.1 29.7 6.1 5.6 14.3 6.5 21.5 5.3 7.1-1.2 14-4.4 20.2-8.5 6.2-4.2 11.7-9.4 15.6-15.5 3.9-6.1 6.5-13.9 4-21.7v-.1c-3.3-10.07-11.5-16.99-20.6-20.27-3.9-1.4-8-2.19-12.2-2.66 2.9-3.26 5.9-6.31 8.9-8.92 6.8-5.84 13.7-9.5 17.6-10.23l-3.4-17.68zM174.8 84.39l-15.2 9.56 34.5 55.25-56.4 2.9 26.5 57.8 16.4-7.6-15.5-33.6 60.6-3.1-50.9-81.21zm216.4 19.31c6.1-.1 11.5.6 15.5 2.1 5.4 1.9 8.1 4.3 9.5 8.8.4 1.1.2 3.3-1.9 6.6-2.2 3.4-6.1 7.2-10.5 10.2-4.5 3-9.5 5.1-13.2 5.7-3.8.7-5.5 0-6.3-.7-3.5-3.2-4.5-7.2-3.5-13.9.8-5.4 3.3-11.9 7-18.6 1.2 0 2.3-.2 3.4-.2zM94.99 123a16 16 0 0 0-16 16 16 16 0 0 0 16 16A16 16 0 0 0 111 139a16 16 0 0 0-16.01-16zm356.11 37.2l-14.4 16.6-21.8-1.8 11.4 18.8-8.5 20.2 21.4-5 16.6 14.3 1.9-21.9 18.7-11.4-20.2-8.5-5.1-21.3zm-123.5 16.5c2.9.1 5.6.5 7.7 1.1 4.3 1.2 6.6 3 8.2 6.4.9 1.9 1 5.4-.7 10-1.7 4.7-5.2 10.1-9.4 14.6s-9.3 8.1-13.5 9.8c-4.2 1.7-6.8 1.6-8.5.7h-.1c-5.8-3.2-8.6-7.8-9.7-15.2-1-6.3-.3-14.3 1.8-22.9 4.9-1.7 9.8-3.1 14.5-3.8 3.5-.5 6.7-.7 9.7-.7zm-202.4 51.9c-7.2-.2-11.7 1.5-14.5 4.3-2.8 2.8-4.5 7.3-4.3 14.5.2 7.3 2.6 16.9 7.2 27.6 9.2 21.5 27.3 47.4 51.6 71.8 24.3 24.3 50.3 42.3 71.8 51.5 10.6 4.6 20.2 7 27.5 7.2 7.3.3 11.7-1.5 14.5-4.3 2.8-2.8 4.6-7.2 4.3-14.5-.2-7.3-2.6-16.9-7.2-27.6-9.2-21.4-27.2-47.4-51.5-71.7-24.3-24.4-50.3-42.4-71.8-51.6-10.7-4.6-20.3-7-27.6-7.2zm232 31.3l-33 54-29.1-27.9-12.4 13 45.1 43.3 33.8-55.2 38.7 32.3 89.3-38.2-7-16.6-79.3 34-46.1-38.7zM93.43 272.6l-17.64 57.9c41.41 49.1 89.71 76.7 142.11 94.7l21.6-6.6c-3.1-1.1-6.4-2.4-9.7-3.8-24.4-10.4-51.7-29.6-77.3-55.3-25.7-25.7-44.9-53-55.34-77.4-1.41-3.2-2.65-6.4-3.73-9.5zm-23.82 78.2l-14.01 46c28.89 27 59 39.2 90.6 50.2l43.4-13.2c-43.2-17.6-84-43.3-119.99-83zM368 352a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM49.81 415.9l-20.29 66.6 88.28-26.9c-22.77-9.1-45.78-20.7-67.99-39.7z"></path></svg>
        </p>
        `

                            }
                            showIcon={true} />
                    </div>
                    <div className='row'>

                        <div className="col-lg  mb-4 p-2">
                            <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#FCD75A", minHeight: "69px" }}>
                                <h5 className="my-0 font-weight-normal  text-center" style={{ fontSize: "0.9em" }}>Actividad que se pretende aplazar</h5>
                            </div>
                            <div className="border shadow  ">
                                <div className="float-left d-flex flex-column">
                                    <textarea name="Texto1" rows="3" className="w-100" onChange={handleChange}>
                                    </textarea>
                                    {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg mb-4 p-2">
                            <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#FCD75A", minHeight: "69px" }}>
                                <h5 className="my-0 font-weight-normal text-center" style={{ fontSize: "0.9em" }}>Sentimientos que genera su realización</h5>
                            </div>
                            <div className="border shadow  ">
                                <div className="float-left d-flex flex-column">
                                    <textarea name="Texto2" rows="3" className="w-100" onChange={handleChange}>
                                    </textarea>
                                    {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg mb-4 p-2">
                            <div className="card-header  d-flex align-items-center justify-content-center " style={{ background: "#FCD75A", minHeight: "69px" }}>
                                <h5 className="my-0 font-weight-normal text-center" style={{ fontSize: "0.825em" }}>Pensamientos en torno su realización</h5>
                            </div>
                            <div className="border shadow  ">
                                <div className="float-left d-flex flex-column">
                                    <textarea name="Texto3" rows="3" className="w-100" onChange={handleChange}>
                                    </textarea>
                                    {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg mb-4 p-2">
                            <div className="card-header  d-flex align-items-center justify-content-center" style={{ background: "#FCD75A", minHeight: "69px" }}>
                                <h5 className="my-0 font-weight-normal text-center" style={{ fontSize: "0.9em" }}>Comportamiento</h5>
                            </div>
                            <div className="border shadow  ">
                                <div className="float-left d-flex flex-column">
                                    <textarea name="Texto4" rows="3" className="w-100" onChange={handleChange}>
                                    </textarea>
                                    {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg mb-4 p-2">
                            <div className="card-header  d-flex align-items-center justify-content-center " style={{ background: "#FCD75A", minHeight: "69px" }}>
                                <h5 className="my-0 font-weight-normal  text-center" style={{ fontSize: "0.9em" }}>Forma de Afrontarlo</h5>
                            </div>
                            <div className="border shadow  ">
                                <div className="float-left d-flex flex-column">
                                    <textarea name="Texto5" rows="3" className="w-100" onChange={handleChange}>
                                    </textarea>
                                    {/* <div style="color: red;">Es necesario llenar esta información</div> */}
                                </div>
                            </div>
                        </div>
                        <div className='text-center'><button className='w-50 search-buttons card-buttons' style={{ backgroundColor: "#FCD75A", color: "#3F3F3F" }} onClick={() => handleBtnEnviar()}>Enviar</button></div>

                    </div>


                </>
            )}
            <Tip src={imgGanso.celular} title=" "
                text={`<h4 class="text-center">A continuación, también te regalamos los siguientes tips que te ayudarán a luchar contra la procrastinación</h4>
                        <div class="text-center mt-4">
                        <img src="${imgTip}" class="text-center rounded-3" style="max-width: 535px;width:100%; "/>
                        </div>
                        `
                }
                color={"#FCD75A"}
                icon="" />

        </div>
    )
}
