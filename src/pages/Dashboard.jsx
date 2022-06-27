import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/Dashboard.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import CartaSeguimiento from '../components/Dashboard/CartaSeguimiento'
import { AuthContext } from '../context/AuthContext'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import '../assets/css/soft-ui-dashboard.scss'
import { ModulosInicio } from '../components/Dashboard/modulos_inicio/ModulosInicio'
import CartaBienvenido from '../components/Dashboard/CartaBienvenido'
import { CartaResultados } from '../components/Dashboard/CartaResultados'
import { CartaActividadesFomento } from '../components/Dashboard/CartaActividadesFomento'
import '../assets/css/index.scss'

const Dashboard = () => {
    const { authState } = useContext(AuthContext)

    const { userInfo } = authState

    // Obtención de datos
    const [datauser, setDatauser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
            })
            if (response) {
                console.log(response.data)
                // Y lo coloca en el estado de datos del usuario
                setDatauser(response.data)
            } else {
                console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <CartaResultados />
                            <CartaActividadesFomento />
                        </div>

                        <FooterDashboard />
                    </div>

                </main>
            </div>
        </>
    )
}

export default Dashboard
