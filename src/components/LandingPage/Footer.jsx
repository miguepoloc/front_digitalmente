import React from 'react'
import './assets/css/Footer.scss'
import Escudo from '../../assets/img/escudo_monocromatico.png'
import Minciencias from '../../assets/img/minciencias_logo.png'
import Grupo from '../../assets/img/logo_grupo2.svg'
//TODO: ARREGLAR LOGO
// import Logo from '../../assets/img/Logo_Monocromatico.svg'

import { FaInstagram, FaFacebook } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>

            <div className="footer-basic footer pb-5">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <img src={Escudo} id="Escudo" alt="" style={{ width: '150px', padding: '10px' }} />
                    </li>
                    <li className="list-inline-item">
                        <img src={Grupo} id="Grupo" alt="" style={{ width: '300px', padding: '10px' }} />
                    </li>
                    <li className="list-inline-item">
                        {/* <img src={Logo} id="Logo" alt="" style={{ width: '300px', padding: '10px' }} /> */}
                    </li>
                    <li className="list-inline-item">
                        <img src={Minciencias} id="Minciencias" alt="" style={{ width: '300px', padding: '10px' }} />
                    </li>
                </ul>
                <div className="social mt-5 mt-md-0">
                    <p>Síguenos en nuestás redes sociales</p>
                    <a href="https://www.instagram.com/proyecto.dimente.unimag/" target="_blank" rel="noreferrer">
                        <FaInstagram></FaInstagram>
                    </a>
                    <a href="https://www.facebook.com/DigitalMenteUnimagdalena/" target="_blank" rel="noreferrer">
                        <FaFacebook></FaFacebook>
                    </a>
                </div>
                <p className="copyright">Universidad del Magdalena © 2022</p>
            </div>
        </footer>
    )
}

export default Footer
