import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../assets/img/logo_home_conLetras.svg'
import Logo2 from '../../assets/img/logo_home_conLetras2.svg'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import './assets/css/Home.scss'

const Home = ({section }) => {
  return (
    <>
      <section id={section.id}>
        <div className="hero justify-content-center  d-flex align-items-center ">
          <div className="container_logo_home text-center">
              <img src={Logo} className="logo_home" alt="" />
              <img src={Logo2} className="logo_home2" alt="" />
              <img className="ganso_home" src={imgGanso.celular} alt="" />
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
