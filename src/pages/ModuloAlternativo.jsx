/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

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
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import { AiFillHome, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BotonContext } from '../context/BotonContext'
import { Correct_Alert } from '../helpers/helper_Swal_Alerts'
import { Loading } from '../components/Loading'
import { AvanceContext } from '../context/AvanceContext'
import { linksAlternativo } from '../helpers/helperAlternativo'

const ModuloAlternativo = () => {
    // Variable del url
    const { slug } = useParams()
    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo, token } = authState
    // Datos del avance que lleva el usuario
    const { AvanceState, setControladora } = useContext(AvanceContext);
    // Botón de atrás
    const [BotonAtrasState, setBotonAtrasState] = useState(false)
    // Botón de control siguiente
    const { BotonState, setBotonState } = useContext(BotonContext)
    // Control de cargando en la página
    const [loading, setLoading] = useState(true);
    // Para el control de la ubicación
    const history = useHistory()

    useEffect(() => {
        setLoading(false);
        const controlData = async () => {

            if (!AvanceState) {
                setLoading(false)
            }
            else {
                // Si una persona intenta ingresar a una sección que no le corresponde desde el url colocando un slug superior al avance que tiene
                if (parseInt(slug) > AvanceState.habilidades
                    &&
                    parseInt(slug) !== linksAlternativo.length - 1
                ) {
                    history.push(`/dashboard`)
                } else {
                    if (AvanceState.habilidades === linksAlternativo.length - 1 && parseInt(slug) === linksAlternativo.length - 1) {
                        const jsonx = {
                            habilidades: (parseInt(slug) + 1),
                            usuario: userInfo.id
                        }
                        await PUT_avance_modulos(userInfo.id, jsonx, token);
                        setControladora(slug)
                    }
                }
            }
        };
        controlData();
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState]);

    useEffect(() => {
        if (parseInt(slug) === 1) {
            setBotonAtrasState(true)
        }
        else {
            setBotonAtrasState(false)
        }
        if (parseInt(slug) !== linksAlternativo.length - 1) {
            setBotonState(false)
        }
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [slug])

    // Cuando se presione el botón de siguiente
    async function cambioBotonAdelante() {
        setLoading(false)
        const jsonx = {
            habilidades: (parseInt(slug) + 1),
            usuario: userInfo.id
        }

        if (parseInt(slug) === linksAlternativo.length - 2 && AvanceState.habilidades === linksAlternativo.length - 2) {
            Correct_Alert("Felicidades!", "Terminaste el módulo Piensalo")
        }

        if (parseInt(slug) === AvanceState.habilidades) {
            await PUT_avance_modulos(userInfo.id, jsonx, token)
            setControladora(slug)
        }
        if ((linksAlternativo.length - 1) === parseInt(slug)) {
            history.push(`/dashboard`)
        }
        else {
            history.push(`/alternativo${parseInt(slug) + 1}`)
            setLoading(true)
        }

    }


    useEffect(() => {
        window.scroll(0, 0)
    }, [slug])

    // Cuando se presione el botón de Atrás
    async function cambioBotonAtras() {
        setLoading(false)
        history.push(`/alternativo${parseInt(slug) - 1}`)
        setLoading(true)

    }

    return (
        <>
            <div
                className="g-sidenav-show bg-gray-100 "
            >

                <main className="main-content position-relative h-100 border-radius-lg ">
                    <NavBarDashboard userInfo={userInfo} />

                    <div className="container-fluid py-4">

                        <div >

                            {
                                loading ?
                                    (linksAlternativo[slug - 1].tipoCapsula
                                        ? <img src={linksAlternativo[slug - 1].imagen} alt="capsula" className='img-capsula' />
                                        : linksAlternativo[slug - 1].actividad)
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
                                disabled={AvanceState.habilidades < linksAlternativo.length - 1 && parseInt(slug) === linksAlternativo.length - 1 ? true : BotonAtrasState}
                            >
                                <AiOutlineArrowLeft color='white' size={18} className='me-2' /> Atrás
                            </button>
                            {parseInt(slug) === linksAlternativo.length - 1 ? (
                                <button
                                    type="button"
                                    className=' mx-2 btn-naranja btn-radius btn-lg d-flex justify-content-center align-items-center'
                                    onClick={() => { if (AvanceState.habilidades < linksAlternativo.length - 1 && parseInt(slug) === linksAlternativo.length - 1) { history.push(`/dashboard`) } else { ; history.push(`/dashboard`) } }}
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
                        <ol>
                        <li>	Arredondo, N., Álvarez, C., López, P., & Posada, S. (2005). Distorsiones cognitivas asociadas al trastorno de ansiedad generalizada. Informes Psicológicos, 7, 123.  <a target='_blank'class="text-naranja" href='https://revistas.upb.edu.co/index.php/informespsicologicos/article/view/694'>Link URL</a>	</li>	<br/>
<li>	Beck, A., Rush, J., Shaw, B. & Emery, G. (1983). Terapia cognitiva de la depresión (19ª edición). Biblioteca De Psicología Descleé De Brouwer	</li>	<br/>
<li>	Beck, J. (2015). Terapia cognitiva: Conceptos básicos y profundización (Vol. 141626). Editorial Gedisa.	</li>	<br/>
<li>	Diaz, Y., y Vallejo, P. (2017). Distorsiones cognitivas y estrés en estudiantes universitarios [Tesis de posgrado, Universidad Técnica De Ambato]. Repositorio digital Universidad Técnica De Ambato. <a target='_blank'class="text-naranja" href='https://repositorio.uta.edu.ec/jspui/handle/123456789/26721'>Link URL</a> 	</li>	<br/>
<li>	Riofrio, J., y Villegas, M. (2016). Distorsiones cognitivas según niveles de dependencia emocional en universitarios–PIMENTEL. Paian, 7(1). <a target='_blank'class="text-naranja" href='http://revistas.uss.edu.pe/index.php/PAIAN/article/view/311/310'>Link URL</a>  	</li>	<br/>
<li>	Pilatti, A., Michelini, Y., & Pautassi, R. M. (2020). Juegos de apuestas en estudiantes universitarios: diferencias en impulsividad rasgo, distorsiones cognitivas y severidad en función del tipo de apuestas. CES Psicología, 13(2), 46–60. <a target='_blank'class="text-naranja" href='https://doi.org/10.21615/cesp.13.2.4'>DOI</a> 	</li>

                        </ol>
                        `} title={'Referencia'} />
                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloAlternativo
