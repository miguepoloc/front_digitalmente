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
            Correct_Alert("Felicidades!", "Terminaste el módulo Alternativo")
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
                        <li>	Beck, J. (2000). <i>Terapia Cognitiva: Conceptos Básicos y Profundización </i>(Trad. A. Ruiz).  Editorial Gedisa. (Libro original publicado en 1995).	</li>
<li>	Demeter, D. y Davis, S. (2013). Procrastination as a Tool: Exploring Unconventional Components of Academic Success [La procrastinación como herramienta: Explorando los componentes no convencionales del éxito académico].<i> Revista: Scientific Research,4</i>(7A2), 144-149. <a target="_blank" class="text-naranja"  href='http://dx.doi.org/10.4236/ce.2013.47A2018'>DOI</a> 	</li>
<li>	Marchena, E., Hervías, F., Galo, C. y Rapp, C.  (2017). <i>Organiza tu tiempo de forma eficaz</i>. Servicio de Atención Psicológica y Pedagógica, Departamento de Psicología de la Universidad de Cádiz. <a target="_blank" class="text-naranja"  href='https://sap.uca.es/wp-content/uploads/2017/03/Gu%C3%ADa-de-organizaci%C3%B3n-del-tiempo.pdf?u'>Link URL</a>	</li>
<li>	Sirois, F. y Pychyl, T. (2013). Procrastination and the Priority of Short-Term Mood Regulation: Consequences for Future Self [La procrastinación y la prioridad de la regulación del estado de ánimo a corto plazo: Consecuencias para el futuro de uno mismo]. <i>Social and Personality Psychology Compass</i>,7(2), 115 – 127. <a target="_blank" class="text-naranja"  href='https://doi.org/10.1111/spc3.12011'>DOI</a>	</li>
<li>	Universidad del País Vasco. (s.f). <i>Yo procrastino, tú procrastinas</i> [Diapositivas de Power Point]. UPV/EHU Documents. <a target="_blank" class="text-naranja"  href='https://www.ehu.eus/documents/2632144/2634184/Yo+procrastino.pdf'>Link URL</a>  	</li>
<li>	Zarate, D. (2022, 30 de junio). Matriz de Eisenhower: que es, cómo usarla y ejemplos. <i>Hubspot</i>. <a target="_blank" class="text-naranja"  href='https://blog.hubspot.es/sales/matriz-eisenhower'>Link URL</a> 	</li>


                        </ol>
                        `} title={'Referencia'} />
                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloAlternativo
