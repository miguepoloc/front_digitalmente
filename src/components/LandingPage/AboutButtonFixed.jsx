import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import './assets/css/AboutButtonFixed.scss'
import '../../assets/css/ButtonFixed.scss'
import { ImArrowRight } from 'react-icons/im'
import { BsFillChatFill } from 'react-icons/bs'
export const AboutButtonFixed = ({ section }) => {
  return (
        <section className="mt-lg-5 mt-md-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waveTop'><path className='fill-darkBlue' d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,80C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="bg_aboutButtonFixed" id={section.id}>
                <div className="container pb-5" style={{ marginTop: '-2%' }}>
                    <div className="row" >
                        <h3 className="font-Geomanist display-5 fw-bold text-center text-white mb-5 ">¿Y has visto este boton que te sigue durante la página?</h3>
                    </div>
                    <div className="row">
                        <div className=" col-lg-4 col-md-12  col-12 justify-content-center align-self-center text-center mx-auto">
                            <img src={imgGanso.explicando} className="ganso_aboutUs" />
                        </div>
                        <div className=" col-lg-7 col-md-12 mt-md-0 mt-3 col-12 justify-content-center align-self-center text-white mb-2">

                            <h5 className='text-center'>
                                Somos una estrategia de promoción en salud mental basada en la
                                psicoeducación y el entrenamiento de habilidades orientada al desarrollo
                                a diversas actividades. No estamos enfocados a dar atención clínica u
                                orientación psicológica. Pero si en algún momento sientes que necesitas
                                ayuda, puedes presionar este botón y dale click al boton morado de chat
                                ubicado en la parte inferior izquierda de la página del Proyecto Salud Mental SGR.
                            </h5>
                            <div className="d-flex justify-content-center align-items-center mt-5">
                                <a className='buttonFixed_aboutButtonFixed bg-naranja' target="_blank" href='https://sgrsaludmental.unimagdalena.edu.co/' rel="noreferrer">
                                    <BsFillChatFill size={40} className="shake" color="white" />
                                </a>
                                <ImArrowRight className='mx-4 d-flex justify-content-center align-items-center' size={40} color="white" />
                                <a className='buttonFixed_aboutButtonFixed' target="_blank" href='https://sgrsaludmental.unimagdalena.edu.co/' rel="noreferrer">
                                    <BsFillChatFill size={40} className="shake" color="white" />
                                </a>
                            </div>

                            <h5 className='text-center mt-5 mb-5'>A través del chat virtual disponible en esa página,
                                podrás recibir orientación psicológica gratuita.
                            </h5>
                        </div>

                    </div>

                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waveBottom'><path className='fill-darkBlue' d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,80C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
  )
}
