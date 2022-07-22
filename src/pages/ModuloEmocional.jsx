/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/soft-ui-dashboard.scss'
import '../components/Dashboard/assets/css/Dashboard.scss'
import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/ModuloEmocional.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useHistory, useParams } from 'react-router-dom'
import { PUT_avance_modulos } from '../helpers/helperApi'
import { AuthContext } from '../context/AuthContext'
import { linksEmocional } from '../helpers/helper_emocional'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import { AiFillHome, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BotonContext } from '../context/BotonContext'
import { Correct_Alert } from '../helpers/helper_Swal_Alerts'

const ModuloEmocional = () => {
    const { slug } = useParams()

    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo, token } = authState
    // Datos del usuario
    const [datauser, setDatauser] = useState(false)

    const [BotonAtrasState, setBotonAtrasState] = useState(false)

    const { BotonState, setBotonState } = useContext(BotonContext)

    // Obtiene los datos de avance que lleva el usuario


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

            }
            )
            if (response) {
                //console.log(response.data)
                // Y lo coloca en el estado de datos del usuario
                setDatauser(response.data)

                if (response.data.emocional < parseInt(slug) && parseInt(slug) !== 15) {
                    history.push(`/dashboard`)
                } else {
                    if (response.data.emocional === 15 && parseInt(slug) === 15) {
                        const jsonx = {
                            emocional: (parseInt(slug) + 1),
                            usuario: userInfo.id
                        }
                        await PUT_avance_modulos(userInfo.id, jsonx, token);
                        setControl(control + 1);
                    }
                    //cambioBotonAdelante()
                }

            } else {
                //console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [control]);

    useEffect(() => {
        if (parseInt(slug) === 1) {
            setBotonAtrasState(true)
        }
        else {
            setBotonAtrasState(false)
        }
        if (parseInt(slug) !== linksEmocional.length - 1) {
            setBotonState(false)
        }
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [slug])

    // Cuando se presione el botón de siguiente
    async function cambioBotonAdelante() {
        //console.log(userInfo)

        const jsonx = {
            emocional: (parseInt(slug) + 1),
            usuario: userInfo.id
        }

        if (parseInt(slug) === linksEmocional.length - 2 && datauser.emocional === linksEmocional.length - 2) {
            Correct_Alert("Felicidades!", "Terminaste el módulo Relax")
        }

        if (parseInt(slug) === datauser.emocional) {
            await PUT_avance_modulos(userInfo.id, jsonx, token)
            setControl(control + 1);

        }
        if ((linksEmocional.length - 1) === parseInt(slug)) {
            history.push(`/dashboard`)
        }
        else {
            history.push(`/emocional${parseInt(slug) + 1}`)
        }

    }


    useEffect(() => {
        window.scroll(0, 0)
    }, [slug])

    // Cuando se presione el botón de Atrás
    async function cambioBotonAtras() {
        history.push(`/emocional${parseInt(slug) - 1}`)
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
                        <div className='d-flex justify-content-center justify-content-sm-between  flex-wrap'>

                            <button
                                type="button"
                                className='botoncentrado mx-2 btn-backNext-relax btn-radius btn-lg  d-flex justify-content-center align-items-center'
                                onClick={cambioBotonAtras}
                                disabled={datauser.emocional < 8 && parseInt(slug) === 8 ? true : BotonAtrasState}
                            >
                                <AiOutlineArrowLeft color='white' size={18} className='me-2' /> Atrás
                            </button>
                            {parseInt(slug) === 8 ? (
                                <button
                                    type="button"
                                    className='botoncentrado mx-2 btn-naranja btn-radius btn-lg d-flex justify-content-center align-items-center'
                                    onClick={() => { if (datauser.emocional < 8 && parseInt(slug) === 8) { history.push(`/dashboard`) } else { ; history.push(`/dashboard`) } }}
                                    disabled={false}
                                >
                                    Regresar  <AiFillHome
                                        color='white' size={18} className='ms-2' />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className='botoncentrado btn-backNext-relax btn-radius btn-lg d-flex justify-content-center align-items-center'
                                    onClick={cambioBotonAdelante}
                                    disabled={BotonState}
                                >
                                    Siguiente <AiOutlineArrowRight color='white' size={18} className='ms-2' />
                                </button>

                            )}
                        </div>

                        <FooterDashboard />
                        <ButtonLibro text={'Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación emocional. Coordinación Educativa y Cultural Centroamericana.'} title={'Referencia'} />

                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloEmocional
