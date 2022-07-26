import React, { useContext, useEffect, useState } from 'react'

import '../assets/css/soft-ui-dashboard.scss'
import '../components/Dashboard/assets/css/Dashboard.scss'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'
import { useHistory, useParams } from 'react-router-dom'
import { PUT_avance_modulos } from '../helpers/helperApi'
import { AuthContext } from '../context/AuthContext'
import { linksRelax } from '../helpers/helperRelax'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import { BotonContext } from '../context/BotonContext'
import { Correct_Alert } from '../helpers/helper_Swal_Alerts'
import { Loading } from '../components/Loading'
import { AiFillHome, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { AvanceContext } from '../context/AvanceContext'


const ModuloRelax = () => {
    //TODO: La logica del boton de siguiente funciona, pero, se debe analizar cuando no se tenga tanto sueño.
    // Variable del url
    let { slug } = useParams()
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
    // Para el control de la ubicación
    const history = useHistory()
    // Control de cargando en la página
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controlData = async () => {
            if (!AvanceState) {
                setLoading(false)
            }
            else {
                // Si una persona intenta ingresar a una sección que no le corresponde desde el url colocando un slug superior al avance que tiene
                if (parseInt(slug) > AvanceState.estres && parseInt(slug) !== linksRelax.length - 1) {
                    history.push(`/dashboard`)
                } else {
                    if (AvanceState.estres === linksRelax.length - 1 && parseInt(slug) === linksRelax.length - 1) {
                        const jsonx = {
                            estres: (parseInt(slug) + 1),
                            usuario: userInfo.id
                        }
                        await PUT_avance_modulos(userInfo.id, jsonx, token);
                        setControladora(slug)
                    }
                }
            }
        };

        controlData();
        setLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState]);

    useEffect(() => {
        if (parseInt(slug) === 1) {
            setBotonAtrasState(true)
        }
        else {
            setBotonAtrasState(false)
        }
        if (parseInt(slug) !== linksRelax.length - 1) {
            setBotonState(false)
        }
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [slug])

    // Cuando se presione el botón de siguiente
    async function cambioBotonAdelante() {
        const jsonx = {
            estres: (parseInt(slug) + 1),
            usuario: userInfo.id
        }

        if (parseInt(slug) === linksRelax.length - 2 && AvanceState.estres === linksRelax.length - 2) {
            Correct_Alert("Felicidades!", "Terminaste el módulo Relax")
        }

        if (parseInt(slug) === AvanceState.estres) {
            await PUT_avance_modulos(userInfo.id, jsonx, token)
            setControladora(slug)
        }
        if ((linksRelax.length - 1) === parseInt(slug)) {
            history.push(`/dashboard`)
        }
        else {
            history.push(`/relax${parseInt(slug) + 1}`)
        }

    }


    useEffect(() => {
        window.scroll(0, 0)
    }, [slug])


    // Cuando se presione el botón de Atrás
    async function cambioBotonAtras() {
        history.push(`/relax${parseInt(slug) - 1}`)
    }

    return (
        <>
            {loading ?
                <div
                    className="g-sidenav-show bg-gray-100 "
                >

                    <main className="main-content position-relative h-100 border-radius-lg ">
                        <NavBarDashboard userInfo={userInfo} />

                        <div className="container-fluid py-4">

                            <div>

                                {
                                    AvanceState ? linksRelax[slug - 1].actividad : <Loading />
                                }

                            </div>
                            <hr />

                            <div className='d-flex justify-content-center justify-content-sm-between  flex-wrap'>

                                <button
                                    type="button"
                                    className='botoncentrado mx-2 btn-backNext-relax btn-radius btn-lg  d-flex justify-content-center align-items-center'
                                    onClick={cambioBotonAtras}
                                    disabled={AvanceState.estres < linksRelax.length - 1 && parseInt(slug) === linksRelax.length - 1 ? true : BotonAtrasState}
                                >
                                    <AiOutlineArrowLeft color='white' size={18} className='me-2' /> Atrás
                                </button>
                                {parseInt(slug) === linksRelax.length - 1 ? (
                                    <button
                                        type="button"
                                        className='botoncentrado mx-2 btn-naranja btn-radius btn-lg d-flex justify-content-center align-items-center'
                                        onClick={() => { if (AvanceState.estres < linksRelax.length - 1 && parseInt(slug) === linksRelax.length - 1) { history.push(`/dashboard`) } else { ; history.push(`/dashboard`) } }}
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
                            <ButtonLibro text={`
                        <ol>
                        <li>	Aguilar, G. y Musso, A. (2008). La meditación como proceso cognitivo-conductual. <i>Suma Psicológica, 15</i>(1), 241-258.	</li> 	<br/>
<li>	Ávila, J. (2014). El estrés un problema de salud del mundo actual. <i>Revista Con-Ciencia, 2</i>(1), 117-125. <a target='_blank'class="text-naranja" href='http://farbio.edu.bo/csegc/conciencia/index.php/ojs/article/view/110'>Link URL</a> 	</li> 	<br/>
<li>	Daza, F. (1992). <i>Prevención del estrés: intervención sobre el individuo </i>(Guías de buenas prácticas, NTP 349). <a target='_blank'class="text-naranja" href='https://www.insst.es/documents/94886/326853/ntp_349.pdf'>Link URL</a> 	</li> 	<br/>
<li>	El Espectador. (Productor). (2020-presente). <i>Meditación guiada para reducir el estrés </i>[Podcast de audio]. Spotify. <a target='_blank'class="text-naranja" href='https://open.spotify.com/show/2TWGZoOiMS9jchA5vqSVL3'>Link URL</a> 	</li> 	<br/>
<li>	Godoy, D., Eberhard, A., Abarca, F., Acuña, B. y Muñoz, R. (2020). Psicoeducación en salud mental: una herramienta para pacientes y familiares. <i>Revista Médica Clínica Las Condes, 31</i>(2), 169-173. <a target='_blank'class="text-naranja" href='https://doi.org/10.1016/j.rmclc.2020.01.005'>DOI</a> 	</li> 	<br/>
<li>	Guo, Y., Wang, S. y Johnson, V. (2011). College student's stress under current economic downturn [El estrés de los estudiantes universitarios en la recesión económica actual]. <i>Revista College Student Journal</i>, 45(3), 536-543.	</li> 	<br/>
<li>	Hernández, M. R. (2011). Caminar 10000 pasos al día para mantener una buena salud y calidad de vida. <i>InterSedes</i>, 12(24), 137-145. <a target='_blank'class="text-naranja" href='https://doi.org/10.15517/isucr.v12i24.969'>DOI</a> 	</li> 	<br/>
<li>	Jakovcevic, A., Franco, P., Dalla Pozza, M. V. y Ledesma, R. (2016). Percepción de los beneficios individuales del uso de la bicicleta compartida como modo de transporte. <i>Suma Psicológica, 23</i>(1), 33-41.	</li> 	<br/>
<li>	Lazarus, R. (2000). <i>Estrés y emoción. Manejo e implicaciones en nuestra salud</i>. Editorial Desclée Brouwer.	</li> 	<br/>
<li>	Lisboa, C. y Spadoti, R. (2004). Estressores em uma unidade pós-operatória de cirugia torácica: Avaliaçao da enfermagem [Estresores en una unidad de cirugía postoperatoria Torácico: orácico: evaluación de enfermería]. <i>Revista Latino-Americana de Enfermagem, 12</i>(1), 22-27.	</li> 	<br/>
<li>	Lumowell-Fitness-ES. (2016, 2 de diciembre). <i>Ejercicios para principiantes en casa </i>[Video]. YouTube <a target='_blank'class="text-naranja" href='https://www.youtube.com/watch?v=wXC2EXuXoIc'>Link URL</a> 	</li> 	<br/>
<li>	Mosconi, S., Correche, M., Rivarola, M. y Penna, F. (2007). Aplicación de la técnica de relajación en deportistas para mejorar su rendimiento. <i>Fundamentos en Humanidades</i>, (16), 183-198.	</li> 	<br/>
<li>	Muñoz, T. (Anfitrión) (2009-presente). <i>Meditación guiada: Reducir el estrés por la respiración</i> [Podcast de audio]. Spotify. <a target='_blank'class="text-naranja" href='https://open.spotify.com/album/6VZR59Ap5Fes7QuDbDgTj9'>Link URL</a> 	</li> 	<br/>
<li>	Namalyongo, A., Achón, Z. y Ábalo, R. (2013). Factores de riesgo y vulnerabilidad al estrés en estudiantes universitarios. <i>Psicogente, 16</i>(29), 143-154. <a target='_blank'class="text-naranja" href='http://revistas.unisimon.edu.co/index.php/psicogente/article/view/1947'>Link URL</a> 	</li> 	<br/>
<li>	Nezu, A., Maguth ,C. y D’Zurilla, T. (2014). <i>Terapia de solución de problemas</i>. Editorial Desclée de Brouwer.	</li> 	<br/>
<li>	Oman, D., Shapiro, S. L., Thoresen, C. E., Plante, T. G. y Flinders, T. (2008). Meditation lowers stress and supports forgiveness among college students: A randomized controlled trial. <i>Journal of American College Health</i>, 56(5), 569-578. <a target='_blank'class="text-naranja" href='https://doi.org/10.3200/jach.56.5.569-578'>DOI</a> 	</li> 	<br/>
<li>	Pereira, M. (2009). Una revisión teórica sobre el estrés y algunos aspectos relevantes de éste en el ámbito educativo. <i>Revista Educación, 33</i>(2), 171-190.	</li> 	<br/>
<li>	Pérez, J., García, R. y Pérez F. (s.f.). <i>Guía para el manejo del estrés académico</i>. <a target='_blank'class="text-naranja" href='https://www.uv.es/iqdocent/guias/estres.pdf>Link URL</a> 	</li> 	<br/>
<li>	Santos, A., Fernández, M., Reig, A., Riquelme, L., Montero, E. y Peralta, M. (2019). Valoración del estrés percibido y de las necesidades y demandas de intervención psicoeducativa para su manejo eficaz en estudiantes universitarios. En R. Roig-Vila (Ed.), <i>Investigación e innovación en la Enseñanza Superior. Nuevos contextos, nuevas ideas </i>(pp. 409-416). Editorial Octaedro.	</li> 	<br/>
<li>	Shapiro, S.L., Brown, K.W. y Biegel, G.M. (2007). Teaching self-care to caregivers: Effects of mindfulness based stress reduction on the mental health of therapists in training [Efectos de la reducción del estrés basada en la atención plena en la salud mental de los terapeutas en formación]. <i>Training and Education in Professional Psychology</i>, 1(2), 105-115. <a target='_blank'class="text-naranja" href='https://psycnet.apa.org/doi/10.1037/1931-3918.1.2.105'>DOI</a> 	</li> 	<br/>
<li>	Tenelanda, D., Castelo, M., Cando, I., Fierro, S. y Asqui, J. (2017). <i>Las técnicas de respiración, relajación y visualización para el manejo del estrés académico en el proceso de aprendizaje del idioma inglés</i>. <a target='_blank'class="text-naranja" href='https://eventos.uho.edu.cu/index.php/ccm/cci8/paper/viewPaper/1952'>Link URL</a> 	</li> 	<br/>
<li>	Treviño, J. y Ramírez, M. (2012). Estrategias cognitivo-conductuales para el manejo del estrés en alumnos mexicanos de bachillerato internacional. <i>Alternativas en Psicología, 16</i>(26), 26-38.	</li> 	<br/>
<li>	Valenzuela, M., Gallegos, L., Baca, L., López, H. y Rico, F. (2021). Estrés académico en universitarios y la práctica de ejercicio físico-deportivo. <i>Revista Publicando, 8</i>(28), 1-8. <a target='_blank'class="text-naranja" href='https://doi.org/10.51528/rp.vol8.id2175'>DOI</a> 	</li> 	<br/>
<li>	Valverde, C. V., López, M. C. y Ring, J. M. (2003). Estrategias de afrontamiento. En A. Bulbena Vilarrasa, G. E. Barrios y P. F. De Larrinoa Palacios (Eds.), <i>Medicina Clínica en Psiquiatría y Psicología</i> (425-435). Editorial Masson.	</li> 	<br/>
<li>	Villarroel, A. (2015). <i>Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios </i>[Tesis de maestría, Universidad Autónoma de Nuevo León]. Recursos Digitales Abiertos (REDIAB) de la Universidad Autónoma de Nuevo León. <a target='_blank'class="text-naranja" href='http://eprints.uanl.mx/9644/1/1080215011.pdf'>Link URL</a>	</li> 	<br/>
<li>	Villen, J. (2016). <i>Técnicas cognitivo-conductuales para afrontar el estrés de los exámenes</i>. <a target='_blank'class="text-naranja" href='https://www.elsevier.com/es-es/connect/estudiantes-de-ciencias-de-la-salud/tecnicas-cognitivo-conductuales-para-afrontar-el-estres-de-los-examenes' >Link URL</a>	</li> 	<br/>
<li>	Zuazua, A. L. V. y Ramírez, M. T. G. (2017). Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios. <i>Revista Electrónica de Psicología Iztacala, 18</i>(4), 1363-1387. <a target='_blank'class="text-naranja" href='http://www.revistas.unam.mx/index.php/repi/article/view/53434/47526'>Link URL</a> 	</li> 


                        </ol>
                        `} title={'Referencia'} />

                        </div>
                    </main>
                </div>
                : <Loading />}

        </>
    )
}

export default ModuloRelax
