/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'

import { AuthContext } from '../context/AuthContext'
import { Resultados } from '../components/Dashboard/mod_autoevaluativo/Resultados'

const AutoevaluativoResultados = () => {
    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo } = authState
    // Datos del usuario
    const [dataAvance, setdataAvance] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
            })
            if (response) {
                //console.log(response.data)
                // Y lo coloca en el estado de datos del usuario
                setdataAvance(response.data)
            } else {
                //console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div
                className="g-sidenav-show bg-gray-100 "
            >

                <main className="main-content position-relative h-100 border-radius-lg ">
                    <NavBarDashboard userInfo={userInfo} />

                    <div className="container-fluid py-4">

                        <div >
                            <Resultados />
                        </div>
                        <hr />

                        <FooterDashboard />

                    </div>
                </main>
            </div>

        </>
    )
}

export default AutoevaluativoResultados
