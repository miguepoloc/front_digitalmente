import React from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'
import imgCuadroEjemplo from "./assets/img/relaxActividadUnoEjemploCuadro.png"
// import { BiGift } from "react-icons/bi"
import { AiOutlineFileWord } from 'react-icons/ai'
import { VscFilePdf } from "react-icons/vsc"
import { TbBrandGoogleDrive } from "react-icons/tb"
import documento from "./assets/documents/AUTOREGISTRO.pdf"
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

            <div className=' text-center'>
                    <a href={documento} download="Autoregistro" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-pdf d-flex justify-content-center align-items-center '> Descargar PDF <VscFilePdf size={25} color="white" className='mx-1' /></button>
                    </a>

                    <a href={documento} download="Autoregistro" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-word d-flex justify-content-center align-items-center '>  Descargar documento editable DOC <AiOutlineFileWord size={25} color="white" className='mx-1' /></button>
                    </a>

                    <a href={documento} download="Autoregistro" className='d-flex justify-content-center'>
                        <button className='w-50 btn-radius btn-googleDocs d-flex justify-content-center align-items-center '>  Crear una copia en la nube <TbBrandGoogleDrive size={25} color="white" className='mx-1' /></button>
                    </a>
                </div>
        </>

    )
}
