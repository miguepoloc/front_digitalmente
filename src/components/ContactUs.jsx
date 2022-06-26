import React from 'react'
import DigitalmenteProyectoImg from '../assets/img/digitalmente.jpg'
import '../assets/css/ContactUs.scss'
import { FaInstagram, FaFacebook, FaEnvelopeOpenText, FaGlobe, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const ContactUs = ({ section }) => {
  return (
        <>
            <section id={section.id}>

                <div className="ContactUs">
                    <section className="contact-page-section">
                        <div className="container">
                            <div className="sec-title">
                                <h2>Contáctanos</h2>
                            </div>
                            <div className="inner-container">
                                <div className="row clearfix">

                                    {/* <!--Form Column--> */}
                                    <div className="form-column col-md-8 col-sm-12 col-xs-12">
                                        <div className="inner-column">

                                            {/* <!--Contact Form--> */}
                                            <div className="contact-form">
                                                <form method="post" action="sendemail.php" id="contact-form">
                                                    <div className="row clearfix">
                                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                            <input type="text" name="name" value="" placeholder="Nombre" required />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                            <input type="email" name="email" value="" placeholder="Correo" required />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                            <input type="text" name="subject" value="" placeholder="Asunto" required />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                            <input type="text" name="phone" value="" placeholder="Teléfono" required />
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                            <textarea name="message" placeholder="Mensaje"></textarea>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                            <button type="submit" className="theme-btn btn-style-one">Enviar mensaje</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <!--End Contact Form--> */}

                                        </div>
                                    </div>

                                    {/* <!--Info Column--> */}
                                    <div className="info-column col-md-4 col-sm-12 col-xs-12">
                                        <div className="inner-column">
                                            <h2>Información para contactarnos</h2>
                                            <ul className="list-info">
                                                <li><FaGlobe></FaGlobe>Universidad del Magdalena</li>
                                                <li><FaEnvelopeOpenText></FaEnvelopeOpenText>digitalmente@unimagdalena.edu.co</li>
                                                <li><FaPhoneAlt></FaPhoneAlt>+57 300 123 45 67</li>
                                            </ul>
                                            <ul className="social-icon-four">
                                                <li className="follow">Síguenos en: </li>
                                                <li><a href="https://www.instagram.com/proyecto.dimente.unimag/" target="_blank" rel="noreferrer"><FaInstagram></FaInstagram></a></li>
                                                <li><a href="https://www.facebook.com/DigitalMenteUnimagdalena/" target="_blank" rel="noreferrer"><FaFacebook></FaFacebook></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>
  )
}

export default ContactUs
