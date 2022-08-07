/* eslint-disable camelcase */
import React, { useContext } from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../components/Dashboard/assets/css/Dashboard.scss'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'

import { AuthContext } from '../context/AuthContext'
import Surveys from '../components/Surveys/Surveys'

const ModuloAutoevaluativo = () => {
    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo } = authState

    return (
        <>
            <div
                className="g-sidenav-show bg-gray-100 "
            >

                <main className="main-content position-relative h-100 border-radius-lg ">
                    <NavBarDashboard userInfo={userInfo} />

                    <div className="container-fluid py-4">

                        <div >
                            <Surveys />
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
