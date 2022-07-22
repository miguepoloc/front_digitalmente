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
import { Loading } from '../components/Loading'

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
                                datauser ?
                                    (linksEmocional[slug - 1].tipoCapsula
                                        ? < img src={linksEmocional[slug - 1].imagen} alt="capsula" className='img-capsula' />
                                        : linksEmocional[slug - 1].actividad)
                                    :
                                    <Loading />
                            }

                        </div>
                        <hr />
                        <div className='d-flex justify-content-center justify-content-sm-between  flex-wrap'>

                            <button
                                type="button"
                                className='botoncentrado mx-2 btn-backNext-relax btn-radius btn-lg  d-flex justify-content-center align-items-center'
                                onClick={cambioBotonAtras}
                                disabled={datauser.emocional < linksEmocional.length - 1 && parseInt(slug) === linksEmocional.length - 1 ? true : BotonAtrasState}
                            >
                                <AiOutlineArrowLeft color='white' size={18} className='me-2' /> Atrás
                            </button>
                            {parseInt(slug) === linksEmocional.length - 1 ? (
                                <button
                                    type="button"
                                    className=' mx-2 btn-naranja btn-radius btn-lg d-flex justify-content-center align-items-center'
                                    onClick={() => { if (datauser.emocional < linksEmocional.length - 1 && parseInt(slug) === linksEmocional.length - 1) { history.push(`/dashboard`) } else { ; history.push(`/dashboard`) } }}
                                    disabled={false}
                                >
                                    Regresar  <AiFillHome
                                        color='white' size={18} className='ms-2' />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className=' btn-backNext-relax btn-radius btn-lg d-flex justify-content-center align-items-center'
                                    onClick={cambioBotonAdelante}
                                    disabled={BotonState}
                                >
                                    Siguiente <AiOutlineArrowRight color='white' size={18} className='ms-2' />
                                </button>

                            )}
                        </div>

                        <FooterDashboard />
                        <ButtonLibro text={`
                        <ul>
                        <h5>Principales fuentes de apoyo:</h5>
                        <h6 class="mx-0">Sobre el semáforo emocional:</h6>
                        <li class="objLista_referencias">	Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). <i>Aprendiendo sobre las emociones: manual de educación emocional.</i> Coordinación Educativa y Cultural Centroamericana.	</li>
                        <h6>Sobre emociones, afrontamiento e inteligencia emocional:</h6>
                        <li class="objLista_referencias">	Extremera, N. y Fernández-Berrocal, P. (2006). Emotional intelligence as predictor of mental, social, and physical health in university students [La inteligencia emocional como predictor de la salud mental, social y física en estudiantes universitarios]. <i>The Spanish journal of psychology, 9</i>(1), 45-51	</li>
                        <li class="objLista_referencias">	Fernandéz-Abascal, E. G., García Rodríguez, B. G., Jiménez Sánchez, M.P., Martín Díaz, M. D. y Domínguez Sánchez, F. J. (2010). <i>Psicología de la Emoción </i>. UNED.	</li>
                        <li class="objLista_referencias">	Fernández-Berrocal, P., y Extremera Pacheco, N. (2005). La Inteligencia Emocional y la educación de las emociones desde el Modelo de Mayer y Salovey.  <i>Revista Interuniversitaria de Formación del profesorado, 19 </i>(3), 63-93.	</li>
                        <li class="objLista_referencias">	González, R.C., Gualda, R. C., Gallego, P. R., y Fernández-Berrocal, P. (2016). Programa INTEMO +: <i>Mejorar la inteligencia emocional de los adolescentes</i>. Ediciones Pirámide.	</li>
                        <li class="objLista_referencias">	Jaramillo, C. (s.f.).<i> "Aplanando la curva del malestar emocional" -más allá de la clinica tradicional-</i>.<a target="_blank" class="text-naranja"  href='https://www.psicologos.org.uy/aplanando-la-curva.pdf'>Link URL</a> 	</li>
                        <li class="objLista_referencias">	Mayer, J. D., Salovey, P., y Caruso, D. R. (2008). Emotional intelligence: New ability or eclectic traits? [La inteligencia emocional: ¿Nueva capacidad o rasgos eclécticos?] <i>American Psychologist, 63</i>(6), 503–517. <a target="_blank" class="text-naranja"  href='https://doi.org/10.1037/0003-066X.63.6.503'>DOI</a>	</li>
                        <li class="objLista_referencias">	Valverde, C. V., López, M. C. y Ring, J. M. (2003). Estrategias de afrontamiento. En A. Bulbena Vilarrasa, G. E. Barrios y P. F. De Larrinoa Palacios (Eds.), <i>Medicina Clínica en Psiquiatría y Psicología </i>(425-435). Editorial Masson.	</li>
                        <h6>Inspiración para diario emocional:</h6>
                        <li class="objLista_referencias">	Hervas, G. y Moral, G. (2017). <i>Regulación emocional aplicada al campo clínico</i>. FOCAD para División de Psicoterapia. Universidad Complutense de Madrid.	</li>
                        
                        </ul>`} title={'Referencia'} />
                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloEmocional
