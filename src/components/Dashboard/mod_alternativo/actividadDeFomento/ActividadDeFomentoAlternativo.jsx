import React,{useState,useContext} from 'react'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'
import { Actividad } from '../../Actividad'
import imgAutoRegistro from "../assets/img/cuadroAutorregistro.png"
import { ErrorAlert, Correct_Alert } from '../../../../helpers/helper_Swal_Alerts'
import { BotonContext } from '../../../../context/BotonContext'
import { AvanceContext } from '../../../../context/AvanceContext'
import { AuthContext } from '../../../../context/AuthContext'
import { DescargablesActFomento } from './DescargablesActFomento'

export const ActividadDeFomentoAlternativo = () => {

    const { setBotonState } = useContext(BotonContext)
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);
    //TODO: se debe validar si esta actividad se hizo anteriormente
    //con el fin de mostar directamente las descargas de los archivos

    const { authState } = useContext(AuthContext)
    const { userInfo } = authState

    const [ActividadCompletada, setActividadCompletada] = useState(false)

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
        <div className="mx-4">

            <h2 className='text-center'>Activida de fomento - Mis habilidades</h2>


            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-10'>
                <Actividad src={imgGanso.lupa_celular} title="¡Actividad de fomento!"
                text={`<br><p class="text-center">Esta es una actividad de fomento. Eso significa que es un ejercicio para que practiques la habilidad orientada en el módulo a tu ritmo y cuando tu desees. Completamente voluntario. Los cuatro botones abajo presentados te permitirán: a) descargar una versión en pdf que puedes imprimir si quieres, b) una versión en Word editable para que llenes en tu celular, c) una versión en Excel editable para que llenes en tu celular y d) una versión en Excel que se unirá a tu nube en Drive para que llenes también cuando quieras. ¿Lo mejor de estas opciones? Solo tú tienes acceso a estas y solo tú puedes ver lo que escribes allí. Nadie más. Esperamos que sea una herramienta que te ayude a fortalecer tu salud mental.
                        <br>
                        `
                }
                showIcon={true} />
                </div>
                <div className='col-lg-10'>

                    <Actividad
                        siImange={true}
                        src={imgGanso.pensando}
                        style={{ width: "110px", height: "110px" }}
                        title="¿Cómo utilizamos este autorregistro?"
                        text={`¡No te preocupes, es pan comido! En cada casilla está indicado lo que debes colocar y un ejemplo para que te guíes. Te recomendamos hacer seguimiento de este por lo menos durante una semana o también anotar aquellas situaciones anteriores (pasadas) en cada una de las casillas, para esto puedes agregar la fecha para mayor precisión. Al completar el autorregistro notarás como algunos sentimientos, pensamientos y comportamientos (Conductas de distracción) son repetitivos, del mismo modo, con la practica (y experimentación de alternativas) vamos siendo más asertivos en la forma de afrontarlos los mismos.
                        `}
                        showIcon={false} />

                    <Actividad
                        siImange={true}
                        src={imgGanso.explicando}
                        style={{ width: "110px", height: "110px" }}
                        title=""
                        text={`Teniendo en cuenta lo anterior es importante que identifiquemos cuales son las actividades que más tendemos a aplazar y los sentimientos asociados a las mismas para así lograr afrontarlas de una mejor manera. Para esto te ayudarás con el siguiente cuadro de autorregistro, el cual también te orientará con un ejemplo (basado en hechos reales)
                `}
                        showIcon={false} />
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='my-4'>Ejemplo</h4>
                    <img src={imgAutoRegistro} alt="" />
                    <p className='mt-2 mb-4 text-center'><small><b>Fuente.</b> Elaboración propia basada en Beck (1995, 2000) </small></p>
                </div>
            </div>

            <DescargablesActFomento /> 
            
        </div>
    )
}
