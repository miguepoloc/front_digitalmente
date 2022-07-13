/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/index.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../components/Dashboard/assets/css/Dashboard.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useHistory, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { PUT_avance_modulos } from '../helpers/helperApi'
import { AuthContext } from '../context/AuthContext'
import { linksRelax } from '../helpers/helperRelax'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import { BotonContext } from '../context/BotonContext'

// import ControlUser from '../components/Dashboard/ControlUser'

const ModuloRelax = () => {
    const { slug } = useParams()

    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo, token } = authState
    // Datos del usuario
    const [datauser, setDatauser] = useState([])

    const { BotonState } = useContext(BotonContext)

    // Para el control de la ubicación
    const history = useHistory()

    // Estado de control de ubicación, se utiliza para actualizar la barra lateral
    const [control, setControl] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`,
                // headers: {
                //     'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
                // }
            })
            if (response) {
                //console.log(response.data)
                // Y lo coloca en el estado de datos del usuario
                setDatauser(response.data)
            } else {
                //console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [control]);

    // Cuando se presione el botón de siguiente
    async function cambioBoton() {
        //console.log(userInfo)
        console.log(datauser)
        const jsonx = {
            estres: (parseInt(slug) + 1),
            usuario: userInfo.id
        }

        if (parseInt(slug) === datauser.estres) {
            PUT_avance_modulos(userInfo.id, jsonx, token)
            setControl(control + 1)
        }
        if ((linksRelax.length - 1) === parseInt(slug)) {
            history.push(`/dashboard`)
        }
        else {
            history.push(`/relax${parseInt(slug) + 1}`)
        }

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
                                linksRelax[slug - 1].actividad
                            }

                        </div>
                        <hr />
                        <Button
                            className='botoncentrado'
                            variant="info"
                            size="lg"
                            onClick={cambioBoton}
                            disabled={BotonState}
                        >
                            Siguiente
                        </Button>

                        <FooterDashboard />
                        <ButtonLibro text={`Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación relax. Coordinación Educativa y Cultural Centroamericana.`} title={'Referencia'} />

                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloRelax
