import React, { useContext, useEffect, useState } from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/Dashboard.scss'
// import MiniCarta from '../components/Dashboard/MiniCarta'
import CartaImagen from '../components/Dashboard/CartaImagen'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import CartaSeguimiento from '../components/Dashboard/CartaSeguimiento'
import { AuthContext } from '../context/AuthContext'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import '../assets/css/soft-ui-dashboard.scss'
import { ModulosInicio } from '../components/Dashboard/modulos_inicio/ModulosInicio'
import { SeccionInicial } from '../components/Dashboard/mod_estres/SeccionInicial'
import CartaBienvenido from '../components/Dashboard/CartaBienvenido'

const Dashboard = () => {
  const { authState } = useContext(AuthContext)

  const { userInfo } = authState

  const getData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`

    const response = await fetch(url)
      .then((datos) => datos.json())
      .then((datos) => {
        console.log(datos)
        return datos
      })
      .catch((err) => {
        console.log(err)
        return null
      })

    console.log(response)

    return response
  }

  // Obtención de datos
  const [datauser, setDatauser] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getData()
      if (response) {
        console.log(response)
        setDatauser(response)
      } else {
        console.log('No se pudieron traer los datos...')
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div
        className="g-sidenav-show  bg-gray-100 "
      >
        <main className="main-content position-relative h-100 border-radius-lg ">
          <NavBarDashboard datauser={datauser} userInfo={userInfo} />
          <div className="container-fluid py-4">
            <div className="row my-1">
              <CartaBienvenido />
            </div>
            <div className="row mt-1">
              <ModulosInicio />
            </div>
            <div className="row my-4">
              <CartaSeguimiento datauser={datauser} />
              {/* <CartaLineaTiempo /> */}
            </div>
            <div className="row mt-4">
              <SeccionInicial />
            </div>
            {/* <div className="row">
              <MiniCarta />
              <MiniCarta />
              <MiniCarta />
              <MiniCarta />
            </div> */}

            <FooterDashboard />
          </div>

        </main>
      </div>
    </>
  )
}

export default Dashboard
