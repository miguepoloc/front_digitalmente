/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useHistory, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { PUT_avance_modulos } from '../helpers/helperApi'
import { AuthContext } from '../context/AuthContext'
import { linksEmocional } from '../helpers/helper_emocional'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
// import ControlUser from '../components/Dashboard/ControlUser'

const ModuloEmocional = () => {
  const { slug } = useParams()

  // Trae los datos del usuario
  const { authState } = useContext(AuthContext)
  // Se guardan en userInfo
  const { userInfo } = authState
  // Datos del usuario
  const [datauser, setDatauser] = useState([])

  // Obtiene los datos de avance que lleva el usuario
  const getAvance = async () => {
    const avance = await Axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
    })
    return (avance.data)
  }

  // Para el control de la ubicación
  const history = useHistory()

  // Estado de control de ubicación, se utiliza para actualizar la barra lateral
  const [control, setControl] = useState(1)

  useEffect(async function () {
    // Guarda en response el avance que lleva el usuario
    const response = await getAvance()
    if (response) {
      console.log(response)
      // Y lo coloca en el estado de datos del usuario
      setDatauser(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, [control]) // Se controla el cambio a partir del estado control

  // Cuando se presione el botón de siguiente
  const cambioBoton = async () => {
    console.log(userInfo)
    console.log(datauser)
    const jsonx = {
      emocional: (parseInt(slug) + 1),
      usuario: userInfo.id
    }
    if (parseInt(slug) === datauser.emocional) {
      PUT_avance_modulos(userInfo.id, jsonx)
      setControl(control + 1)
    }

    history.push(`/emocional${parseInt(slug) + 1}`)
  }
  return (
    <>
      <div
        className="g-sidenav-show bg-gray-100 "
      >

        <main className="main-content position-relative h-100 border-radius-lg ">
          <NavBarDashboard datauser={datauser} userInfo={userInfo} />

          <div className="container-fluid py-4">

            <div >

              {

                (linksEmocional[slug - 1].tipoCapsula
                  ? < img src={linksEmocional[slug - 1].imagen} alt="capsula" className='img-capsula' />
                  : linksEmocional[slug - 1].actividad)

              }

            </div>
            <hr />
            <Button
              className='botoncentrado'
              variant="info"
              size="lg"
              onClick={cambioBoton}
            >
              Siguiente
            </Button>

            <FooterDashboard />
            <ButtonLibro text={'Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación emocional. Coordinación Educativa y Cultural Centroamericana.'} title={'Referencia'} />

          </div>
        </main>
      </div>

    </>
  )
}

export default ModuloEmocional
