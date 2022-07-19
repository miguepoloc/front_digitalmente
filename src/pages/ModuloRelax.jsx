import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'
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


const ModuloRelax = () => {

    //TODO: La logica del boton de siguiente funciona, pero, se debe analizar cuando no se tenga tanto sueño.
    const { slug } = useParams()

    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo, token } = authState
    // Datos del usuario
    const [datauser, setDatauser] = useState(false)

    const [BotonAtrasState, setBotonAtrasState] = useState(false)

    const { BotonState, setBotonState } = useContext(BotonContext)

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

        //console.log(userInfo)
        console.log(datauser)
        const jsonx = {
            estres: (parseInt(slug) + 1),
            usuario: userInfo.id
        }

        if (parseInt(slug) === linksRelax.length - 2 && datauser.estres === linksRelax.length - 2) {
            Correct_Alert("Felicidades!", "Terminaste el módulo Relax")
        }

        if (parseInt(slug) === datauser.estres) {
            // eslint-disable-next-line no-unused-vars
            const algo = await PUT_avance_modulos(userInfo.id, jsonx, token)
            setControl(control + 1)

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
            <div
                className="g-sidenav-show bg-gray-100 "
            >

                <main className="main-content position-relative h-100 border-radius-lg ">
                    <NavBarDashboard datauser={datauser} userInfo={userInfo} />

                    <div className="container-fluid py-4">

                        <div>

                            {
                                datauser.estres < parseInt(slug) && parseInt(slug) !== 8? history.push(`/dashboard`): linksRelax[slug - 1].actividad
                            }

                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <button
                                type="button"
                                className='botoncentrado btn-backNext-relax btn-radius btn-lg'
                                onClick={cambioBotonAtras}
                                disabled={datauser.estres < 8 && parseInt(slug) === 8 ? true: BotonAtrasState}
                            >
                                Atrás
                            </button>
                            <button
                                type="button"
                                className='botoncentrado btn-backNext-relax btn-radius btn-lg'
                                onClick={cambioBotonAdelante}
                                disabled={BotonState}
                            >
                                Siguiente
                            </button>
                        </div>


                        <FooterDashboard />
                        <ButtonLibro text={`
                        <ol>
                        <li>	Aguilar, G. y Musso, A. (2008). La meditación como proceso cognitivo-conductual. Suma Psicológica, 15(1), 241-258.	</li> 	<br/>
<li>	Ávila, J. (2014). El estrés un problema de salud del mundo actual. Revista Con-Ciencia, 2(1), 117-125. http://farbio.edu.bo/csegc/conciencia/index.php/ojs/article/view/110 	</li> 	<br/>
<li>	Daza, F. (1992). Prevención del estrés: intervención sobre el individuo (Guías de buenas prácticas, NTP 349). https://www.insst.es/documents/94886/326853/ntp_349.pdf 	</li> 	<br/>
<li>	El Espectador. (Productor). (2020-presente). Meditación guiada para reducir el estrés [Podcast de audio]. Spotify. https://open.spotify.com/show/2TWGZoOiMS9jchA5vqSVL3 	</li> 	<br/>
<li>	Godoy, D., Eberhard, A., Abarca, F., Acuña, B. y Muñoz, R. (2020). Psicoeducación en salud mental: una herramienta para pacientes y familiares. Revista Médica Clínica Las Condes, 31(2), 169-173. https://doi.org/10.1016/j.rmclc.2020.01.005 	</li> 	<br/>
<li>	Guo, Y., Wang, S. y Johnson, V. (2011). College student's stress under current economic downturn [El estrés de los estudiantes universitarios en la recesión económica actual]. Revista College Student Journal, 45(3), 536-543.	</li> 	<br/>
<li>	Hernández, M. R. (2011). Caminar 10000 pasos al día para mantener una buena salud y calidad de vida. InterSedes, 12(24), 137-145. https://doi.org/10.15517/isucr.v12i24.969 	</li> 	<br/>
<li>	Jakovcevic, A., Franco, P., Dalla Pozza, M. V. y Ledesma, R. (2016). Percepción de los beneficios individuales del uso de la bicicleta compartida como modo de transporte. Suma Psicológica, 23(1), 33-41.	</li> 	<br/>
<li>	Lazarus, R. (2000). Estrés y emoción. Manejo e implicaciones en nuestra salud. Editorial Desclée Brouwer.	</li> 	<br/>
<li>	Lisboa, C. y Spadoti, R. (2004). Estressores em uma unidade pós-operatória de cirugia torácica: Avaliaçao da enfermagem [Estresores en una unidad de cirugía postoperatoria Torácico: orácico: evaluación de enfermería]. Revista Latino-Americana de Enfermagem, 12(1), 22-27.	</li> 	<br/>
<li>	Lumowell-Fitness-ES. (2016, 2 de diciembre). Ejercicios para principiantes en casa [Video]. YouTube https://www.youtube.com/watch?v=wXC2EXuXoIc 	</li> 	<br/>
<li>	Mosconi, S., Correche, M., Rivarola, M. y Penna, F. (2007). Aplicación de la técnica de relajación en deportistas para mejorar su rendimiento. Fundamentos en Humanidades, (16), 183-198.	</li> 	<br/>
<li>	Muñoz, T. (Anfitrión) (2009-presente). Meditación guiada: Reducir el estrés por la respiración [Podcast de audio]. Spotify. https://open.spotify.com/album/6VZR59Ap5Fes7QuDbDgTj9 	</li> 	<br/>
<li>	Namalyongo, A., Achón, Z. y Ábalo, R. (2013). Factores de riesgo y vulnerabilidad al estrés en estudiantes universitarios. Psicogente, 16(29), 143-154. http://revistas.unisimon.edu.co/index.php/psicogente/article/view/1947 	</li> 	<br/>
<li>	Nezu, A., Maguth ,C. y D’Zurilla, T. (2014). Terapia de solución de problemas. Editorial Desclée de Brouwer.	</li> 	<br/>
<li>	Oman, D., Shapiro, S. L., Thoresen, C. E., Plante, T. G. y Flinders, T. (2008). Meditation lowers stress and supports forgiveness among college students: A randomized controlled trial. Journal of American College Health, 56(5), 569-578. https://doi.org/10.3200/jach.56.5.569-578 	</li> 	<br/>
<li>	Pereira, M. (2009). Una revisión teórica sobre el estrés y algunos aspectos relevantes de éste en el ámbito educativo. Revista Educación, 33(2), 171-190.	</li> 	<br/>
<li>	Pérez, J., García, R. y Pérez F. (s.f.). Guía para el manejo del estrés académico. https://www.uv.es/iqdocent/guias/estres.pdf 	</li> 	<br/>
<li>	Santos, A., Fernández, M., Reig, A., Riquelme, L., Montero, E. y Peralta, M. (2019). Valoración del estrés percibido y de las necesidades y demandas de intervención psicoeducativa para su manejo eficaz en estudiantes universitarios. En R. Roig-Vila (Ed.), Investigación e innovación en la Enseñanza Superior. Nuevos contextos, nuevas ideas (pp. 409-416). Editorial Octaedro.	</li> 	<br/>
<li>	Shapiro, S.L., Brown, K.W. y Biegel, G.M. (2007). Teaching self-care to caregivers: Effects of mindfulness based stress reduction on the mental health of therapists in training [Efectos de la reducción del estrés basada en la atención plena en la salud mental de los terapeutas en formación]. Training and Education in Professional Psychology, 1(2), 105-115. https://psycnet.apa.org/doi/10.1037/1931-3918.1.2.105 	</li> 	<br/>
<li>	Tenelanda, D., Castelo, M., Cando, I., Fierro, S. y Asqui, J. (2017). Las técnicas de respiración, relajación y visualización para el manejo del estrés académico en el proceso de aprendizaje del idioma inglés. https://eventos.uho.edu.cu/index.php/ccm/cci8/paper/viewPaper/1952 	</li> 	<br/>
<li>	Treviño, J. y Ramírez, M. (2012). Estrategias cognitivo-conductuales para el manejo del estrés en alumnos mexicanos de bachillerato internacional. Alternativas en Psicología, 16(26), 26-38.	</li> 	<br/>
<li>	Valenzuela, M., Gallegos, L., Baca, L., López, H. y Rico, F. (2021). Estrés académico en universitarios y la práctica de ejercicio físico-deportivo. Revista Publicando, 8(28), 1-8. https://doi.org/10.51528/rp.vol8.id2175 	</li> 	<br/>
<li>	Valverde, C. V., López, M. C. y Ring, J. M. (2003). Estrategias de afrontamiento. En A. Bulbena Vilarrasa, G. E. Barrios y P. F. De Larrinoa Palacios (Eds.), Medicina Clínica en Psiquiatría y Psicología (425-435). Editorial Masson.	</li> 	<br/>
<li>	Villarroel, A. (2015). Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios [Tesis de maestría, Universidad Autónoma de Nuevo León]. Recursos Digitales Abiertos (REDIAB) de la Universidad Autónoma de Nuevo León. http://eprints.uanl.mx/9644/1/1080215011.pdf	</li> 	<br/>
<li>	Villen, J. (2016). Técnicas cognitivo-conductuales para afrontar el estrés de los exámenes. https://www.elsevier.com/es-es/connect/estudiantes-de-ciencias-de-la-salud/tecnicas-cognitivo-conductuales-para-afrontar-el-estres-de-los-examenes 	</li> 	<br/>
<li>	Zuazua, A. L. V. y Ramírez, M. T. G. (2017). Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios. Revista Electrónica de Psicología Iztacala, 18(4), 1363-1387. http://www.revistas.unam.mx/index.php/repi/article/view/53434/47526 	</li> 


                        </ol>
                        `} title={'Referencia'} />

                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloRelax
