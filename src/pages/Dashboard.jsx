import React, { useEffect, useState } from 'react'
import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../components/Dashboard/assets/css/Dashboard.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import CartaSeguimiento from '../components/Dashboard/CartaSeguimiento'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import '../assets/css/soft-ui-dashboard.scss'
import { ModulosInicio } from '../components/Dashboard/modulos_inicio/ModulosInicio'
import CartaBienvenido from '../components/Dashboard/CartaBienvenido'
import { CartaResultados } from '../components/Dashboard/CartaResultados'
import { CartaActividadesFomento } from '../components/Dashboard/CartaActividadesFomento'
import '../assets/css/index.scss'
import { Loading } from '../components/Loading'

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? <Loading /> : (
                <div
                    className="g-sidenav-show  bg-gray-100 "
                >
                    <main className="main-content position-relative h-100 border-radius-lg ">
                        <NavBarDashboard />
                        <div className="container-fluid py-4">
                            <div className="row my-1">
                                <CartaBienvenido />
                            </div>
                            <div className="row mt-1">
                                <ModulosInicio />
                            </div>
                            <div className="row my-4">
                                <CartaSeguimiento />
                                <CartaResultados />
                                <CartaActividadesFomento />
                            </div>

                            <FooterDashboard />
                        </div>

                    </main>
                </div>
            )}
        </>
    )
}

export default Dashboard
