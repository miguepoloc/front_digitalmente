import React from 'react'
import PropTypes from 'prop-types'
//  import "../helpers/Bubbles"
import Logo from '../assets/img/logo.svg'
import '../assets/css/Home.scss'

const Home = ({ style, section }) => {
  return (
        <>
            <section id={section.id}>
                <div className="hero">
                    <div id="particles-js" className="burbujas_home">
                        {/* <canvas className="particles-js-canvas-el"></canvas> */}
                    </div>
                    <div className="inner-header text-center  flex text-white logo_home_center">
                        {
                            // Esto es temporal mientras se decide cual es la mejor idea para el inicio.
                            (() => {
                              switch (style) {
                                case 'onlyLogo':
                                  return (
                                            <div className="logo">
                                                <img
                                                    src={Logo}
                                                    id="logo_home"
                                                    alt=""
                                                />
                                            </div>
                                  )
                                case 'onlyText':
                                  return (
                                            <div className="use_home_grid">
                                                <h1 className="title_home">
                                                    Digitalmente
                                                </h1>
                                                <p className="desc_home">
                                                    Plataforma de salud mental
                                                </p>
                                            </div>
                                  )
                                case 'oneCharacter':
                                  return (
                                            <div className="image_home">
                                                <img
                                                    src="img/personajeHome.svg"
                                                    id="logo_home"
                                                    alt="Logotipo del proyecto"
                                                />
                                            </div>
                                  )
                                case 'twoCharacters':
                                  return (
                                            <>
                                                <div className="image_home">
                                                    <img
                                                        src="img/personajeHome.svg"
                                                        id="logo_home"
                                                        alt="Personaje animado"
                                                    />
                                                </div>
                                                <div className="use_home_grid">
                                                    <img
                                                        src="img/logo.svg"
                                                        id="logo_home"
                                                        alt="Personaje animado"
                                                    />
                                                </div>
                                            </>
                                  )
                              }
                            })()
                        }
                        {/* <div className="hero" id="particles-js"> */}
                        <div className="w wave"></div>
                        <div className="w wave2"></div>
                        <div className="w wave3"></div>

                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
  )
}

Home.propTypes = {
  style: PropTypes.string
}

export default Home
