import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import './assets/css/AboutUsGanso.scss'
export const AboutGanso = ({ section }) => {
  return (
        <>
            <section id={section.id} style={{ marginTop: '-5%' }}>
                <div className="aboutUs">
                    <div className="container pt-md-5">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-12 mb-md-0 mb-3 justify-content-center align-self-center text-center mx-auto">
                                <img src={imgGanso.presentacion_personaje} className="img_aboutUsGanso" />
                            </div>
                            <div className=" col-lg-6 col-md-12 mt-md-0 mt-3 col-12 justify-content-center align-self-center">
                                <h3 className="font-Geomanist display-5 fw-bold text-center text-darkBlue mb-4 ">¿Quíen soy yo?</h3>

                                <h3 className='text-center'>Mi nombre es Cuack. Soy quien te
                                    estaré guiando en tu plataforma.
                                    Fui escogido por los estudiantes
                                    en votaciones por redes sociales.
                                    Mi nombre también. Represento a
                                    un elemento importante del
                                    ecosistema Unimagdalena. Soy
                                    parte de la famosa legión de
                                    gansos aunque con un poco mas
                                    de tranquilidad.
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
  )
}
