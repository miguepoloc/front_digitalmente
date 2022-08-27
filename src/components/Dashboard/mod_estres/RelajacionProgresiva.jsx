import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Carrusel from '../Carrusel'
import { TecnicaEmocional } from '../../../helpers/helperTecnicaEmocional';


export const RelajacionProgresiva = () => {
    return (
        <>
            <h2 className='text-center'>Técnica de Relajación Progresiva de Jacobson</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-12'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`En la imagen a continuación se muestra la forma en la que se realizará ésta actividad, puedes hacerlo si te encuentras en una situación de estrés en este momento, si tienes tiempo puedes realizar todos los grupos musculares, sin embargo si realizas solo uno también tendrás una sensación de relajación muscular que querrás repetir. Te recomendamos estar sentado en una posición cómoda. `} showIcon={false} />
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                {TecnicaEmocional.map((carrusel, index_tecnica) => (
                    <div className='col-lg-6' key={index_tecnica}>
                        <Carrusel
                            carrusel={carrusel}
                            key={index_tecnica}
                        />
                    </div>
                ))}
            </div>

            <Descripcion
                title={"Para finalizar"}
                text={`Es necesario tener en cuenta que este ejercicio permite tener los músculos trabajados en estado de relajación, de tal manera que cada vez que se sienta tensión en estas áreas se podrá evocar a la sensación de relajación del mismo y relajar automáticamente el mismo. Al terminar los ejercicios permanezca unos minutos disfrutando la sensación de relajación centrando la atención en las sensaciones agradables que propició el ejercicio.`}
                icon={<FcSurvey style={{ fontSize: '2rem' }} />}
                color="#03A9F4"
            />

        </>
    )
}
