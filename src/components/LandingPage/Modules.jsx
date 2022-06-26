import React from 'react'
import './assets/css/Modules.scss'
import './assets/css/Team.scss'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const Modules = ({ section }) => {
    return (
        <section
            className="flex-center"
            style={{ marginTop: '-3%' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className='waveTop' viewBox="0 0 1440 320">
                <path className='fill-darkBlue' d="M0,192L60,186.7C120,181,240,171,360,154.7C480,139,600,117,720,128C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>             </svg>
            <div className="content-103 bg-darkBlue" style={{marginTop: "-6%"}}>
                <div className="container" id={section.id}>

                    <h2 className="font-Geomanist display-5 fw-bold text-center text-white py-4 ">Módulos </h2>

                    <h5 className="font-Geomanist display-6 fw-bold text-center text-white py-2 ">Módulo autoevaluativo </h5>

                    <div className="row mb-4 align-items-md-stretch">
                        <div className="col-lg-12 ">
                            <div className="row h-100 modules_cards card_moduloAutoevaluativo  flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center ">
                                    <h2 className="font-Geomanist">
                                        Módulo autoevaluativo

                                    </h2>
                                    <p className="pt-2">
                                        Este módulo te ayudará a
                                        identificar el estado de
                                        algunos aspectos de tu salud
                                        mental a través de
                                        herramientas validadas.
                                        Recuerda siempre consultar a
                                        un profesional en caso de
                                        puntuaciones altas.

                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItemLarge"
                                        src={imgGanso.escribiendo_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-Geomanist display-6 fw-bold text-center text-white pt-2 pb-2 ">Módulos de promoción </h2>
                    <h4 className='text-white text-center mb-4'>Diferentes módulos que te ayudaran a fortalecer y desarrollar habilidades
                        que contribuyan al mejoramiento de tu calidad de vida.
                    </h4>
                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="row h-100  card_relax modules_cards flex-center">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Relax
                                    </h2>
                                    <p className="pt-2">
                                        Estrategias diseñadas para disminuir los
                                        niveles de estrés.
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.meditando}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row h-100  modules_cards card_misEmociones flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Mis emociones

                                    </h2>
                                    <p className="pt-2">
                                        Desarrollo de habilidades para la
                                        identificación y manejo de las emociones
                                        de forma efectiva.
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.feliz_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="row h-100 card_piensalo modules_cards flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center ">
                                    <h2 className="font-Geomanist">
                                        Piénsalo

                                    </h2>
                                    <p className="pt-2">
                                        Fortalecimiento de habilidades para la
                                        identificación de pensamientos y
                                        conceptos que afectan nuestro bienestar
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.pensando}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row h-100  modules_cards card_misHabilidades flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Mis habilidades

                                    </h2>
                                    <p className="pt-2">
                                        La temática de este modulo fue propuesta por los
                                        estudiantes. En este encontrarás actividades que podrán
                                        ayudarte a mejorar tus habilidades para la vida.

                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.leyendo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Modules
