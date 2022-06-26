import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import './assets/css/AboutUs.scss'
const AboutUs = ({ section }) => {
  return (
        <>
            <section id={section.id} className="mt-lg-5 mt-md-2">
                <div className="aboutUs">
                    <div className="container pt-md-5">
                        <div className="row">
                            <div className=" col-lg-4 col-md-12  col-12 justify-content-center align-self-center text-center mx-auto">
                                <img src={imgGanso.pensando} className="ganso_aboutUs" />
                            </div>
                            <div className=" col-lg-8 col-md-12 mt-md-0 mt-3 col-12 justify-content-center align-self-center">
                                <h3 className="font-Geomanist display-5 fw-bold text-center text-darkBlue mb-4 ">¿Qué es DigitalMente?</h3>

                                <h3 className='text-center'>
                                    Somos una estrategia digital de promoción de la salud mental dirigida
                                    a estudiantes, donde estos son el eje central y contribuyeron en la
                                    construcción y elección de cada elemento. Nuestro enfoque se basa
                                    en la psicoeducación y el desarrollo de actividades para fortalecer tus
                                    habilidades para tu bienestar. Contamos con varios módulos, los
                                    cuales te permitirán evaluar y desarrollar estrategias que contribuyan a
                                    mejorar tu calidad de vida.
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
  )
}

export default AboutUs
