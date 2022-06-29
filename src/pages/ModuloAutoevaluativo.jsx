/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'

import { AuthContext } from '../context/AuthContext'
// import Surveys from '../components/Surveys/Surveys'

const ModuloAutoevaluativo = () => {
    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo } = authState
    // Datos del usuario
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
                className="g-sidenav-show bg-gray-100 "
            >

                <main className="main-content position-relative h-100 border-radius-lg ">
                    <NavBarDashboard datauser={datauser} userInfo={userInfo} />

                    <div className="container-fluid py-4">

                        <div >
                            {/* <Surveys /> */}
                        </div>
                        <hr />

                        <FooterDashboard />

                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloAutoevaluativo
