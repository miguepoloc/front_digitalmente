import React from 'react'
import logo_saludablemente from '../../assets/img/logo_saludablemente.png'
import logo_saludMental from '../../assets/img/Logo_saluidMental.png'
import logo_digitalmente from '../../assets/img/logo_digitalmente-cropped.svg'
// import prueba1 from '../../assets/img/prueba1.png'
import otrosPersonajes from '../../assets/img/personajes_ProyectoSGR.svg'
import imagenParaCelularesDigitalYSGR from '../../assets/img/Imagen_general_para_celular_Proyecto_DigitalMente_SGR.svg'
import './assets/css/AboutEstrategy.scss'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
export const AboutEstrategy = ({ section }) => {
    return (
        <section className="">
            <div className="" id={section.id} style={{marginTop: "-3%"}}>
            {/* <img src={prueba1}  className="imgLogo_aboutEstrategy" /> */}

                <div className="container " >
                        <div className="row mb-4" >
                            <h3 className="font-Geomanist display-6 fw-bold text-center text-darkBlue">Somos parte de la estrategia integrada del grupo CogniEd y
                            UniMagdalena para la promoción de la salud mental</h3>
                        </div>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12  col-12 justify-content-center align-self-center text-center mx-auto">
                            <img src={logo_digitalmente} className="imgLogo_aboutEstrategy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12  col-12 justify-content-center align-self-center text-lg-end text-center  mx-auto">
                            <img src={logo_saludablemente} className="imgLogo_aboutEstrategy" />
                        </div>
                        <div className=" col-lg-6 col-md-12  col-12 justify-content-center align-self-center  ps-lg-5 text-lg-start text-center mx-auto">
                            <img src={logo_saludMental} style={{ height: "40%",width: "40%" }} className="imgLogo_aboutEstrategy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12  col-12 justify-content-center align-self-center text-center mx-auto d-block d-lg-none">
                            <img src={imagenParaCelularesDigitalYSGR } className="imgLogo_aboutEstrategy" />
                        </div>
                    </div>
                </div> 
               <div style={{position:"relative"}} className="d-none d-lg-block" >
                <img src={imgGanso.celular} className="ganso_aboutEstrategy" />
            </div> 
            <div style={{position:"relative"}} className="d-none d-lg-block" >
                <img src={otrosPersonajes} className="othersPj_aboutEstrategy" />
            </div> 
            </div>
            

        </section>
    )
}
