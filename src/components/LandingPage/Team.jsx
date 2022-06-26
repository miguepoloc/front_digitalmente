import React from 'react'
import logos from '../../assets/img/imgLogos_Quienes_somos[9294].png'
import './assets/css/Team.scss'
export const Team = ({ section }) => {
    return (
        <>
            <section id={section.id} >
            
                <div className="Team bg-lightBlue">
                <svg xmlns="http://www.w3.org/2000/svg" className=' waveBottom' viewBox="0 0 1440 320">
                <path className='fill-darkBlue' d="M0,128L40,128C80,128,160,128,240,138.7C320,149,400,171,480,170.7C560,171,640,149,720,149.3C800,149,880,171,960,176C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
                    <div className="container pb-md-5 pb-5">
                        <div className="row gx-5">
                            <div className=" col-lg-5 col-md-12 justify-content-center align-self-center text-center ">
                                <img src={logos} className="img_Team" />
                            </div>
                            <div className=" col-lg-7 col-md-12 mt-md-0 mt-3 justify-content-center align-self-center" >
                                <h3 className="font-Geomanist display-5 fw-bold text-center text-darkBlue mb-4 ">¿Quíenes somos nosotros?</h3>

                                <h3 className='text-center text_Team text-darkBlue'>
                                    Somos jóvenes investigadores, profesionales y de
                                    pregrado financiados por Minciencias, a través, de la
                                    iniciativa Talento Joven en Salud. Esta investigación se
                                    desarrolla en el marco del proyecto “Identificación de la
                                    coparticipación del cronotipo, las inteligencias múltiples,
                                    la emoción, la ideación suicida, los síntomas depresivos
                                    y desempeño académico de estudiantes de la
                                    Universidad del Magdalena” bajo la tutoría del doctor
                                    Ubaldo Rodríguez De Ávila y la doctora Carmelina Paba
                                    Barbosa, docentes miembros del grupo Cognición y
                                    Educación de la Universidad del Magdalena.

                                </h3>
                            </div>

                        </div>

                    </div>
                   
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" className='waveBottom' viewBox="0 0 1440 320"><path className='fill-lightBlue' d="M0,256L48,256C96,256,192,256,288,229.3C384,203,480,149,576,112C672,75,768,53,864,64C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>
        </>
    )
}
