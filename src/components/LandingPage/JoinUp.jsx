import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import logoInstagram from '../../assets/img/Logos/instagram.png'
import logoFacebook from '../../assets/img/Logos/facebook.png'
import './assets/css/JoinUp.scss'
import { gansoPensandoAlert } from '../../helpers/helper_Swal_Alerts'
export const Unete = ({ section }) => {
  return (
        <>
            <section id={section.id} className="bg-lightBlue" >
                <div className="Team pb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path style={{ fill: 'white' }} d="M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,192C672,213,768,235,864,213.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className="container pb-md-5 mt-5">

                        <div className="row" >
                            <h3 className="font-Geomanist display-6 fw-bold text-center text-darkBlue mb-5 ">ESTUDIANTE, UNÉTE A DIGITALMENTE, DONDE TÚ ERES EL PROTAGONISTA!</h3>
                        </div>

                        <div className="row gx-5 text-center">
                            <div className='w-100'>
                                <a className='w-50 w-md-25 btn-naranja ms-2 me-2 btn btn-primary btn-lg' href="/sign-up">¡Registrate aquí!</a>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-12">
                            <h3 className="font-Geomanist display-8 fw-bold text-center text-darkBlue mt-5 ">Y SÍGUENOS EN NUESTRAS REDES </h3>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-12 text-center">
                            <a href="https://www.instagram.com/proyecto.dimente.unimag/" target="_blank" rel="noreferrer"><img src={logoInstagram} style={{ width: '56px' }}/></a> <a href="https://www.facebook.com/DigitalMenteUnimagdalena/" target="_blank" rel="noreferrer"><img src={logoFacebook} style={{ width: '50px' }}/></a>
                            </div>
                        </div>

                        <div className="row">
                        <div className=" col-lg-6 col-md-12  col-12 justify-content-center align-self-center text-center mx-auto d-block d-lg-none">
                            <img src={imgGanso.escribiendo_250x200 } className="gansoMobil_joinUp" />
                        </div>
                    </div>

                    </div>
                    <div style={{ position: 'relative' }} className="d-none d-lg-block" >
                        <img src={imgGanso.escribiendo_250x200} className="ganso_joinUp" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#00659D"
                    d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            </section>
        </>
  )
}
