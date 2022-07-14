/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

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
    //TODO: La logica del boton de siguiente funciona, pero, se debe analizar cuando no se tenga tanto sueño.
    const { slug } = useParams()

    // Trae los datos del usuario
    const { authState } = useContext(AuthContext)
    // Se guardan en userInfo
    const { userInfo, token } = authState
    // Datos del usuario
    const [datauser, setDatauser] = useState([])

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
        if(parseInt(slug) !== linksRelax.length - 1 ){
            setBotonState(false)
        }
    }
        , [slug])

    // Cuando se presione el botón de siguiente
    async function cambioBotonAdelante() {
        
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

    useEffect(()=>{window.scroll(0, 0)},[linksRelax[slug - 1].nombre])


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
                                linksRelax[slug - 1].actividad
                            }

                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <button
                            type="button"
   
                                className='botoncentrado btn-backNext-relax btn-radius btn-lg'
                                onClick={cambioBotonAtras}
                                disabled={BotonAtrasState}
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
                        <li>	Ávila, J. (2014). El estrés un problema de salud del mundo actual. Revista Con-Ciencia. 2(1), 117-125.	</li>	<br/>
<li>	Aguilar, G., & Musso, A. (2008). La meditación como proceso cognitivo-conductual. Suma Psicológica. 15(1), 241-258.	</li>	<br/>
<li>	Daza, F. (1992). Prevención del estrés: intervención sobre el individuo. Guías de buenas prácticas. NTP 349: Prevención del estrés: intervención sobre el individuo (saludlaboral.org)	</li>	<br/>
<li>	El Espectador. (2020-2022). Meditación guiada para reducir el estrés [Pódcast]. Meditación guiada para reducir el estrés - Shala | Podcast en Spotify	</li>	<br/>
<li>	Guo, Y., Wang, S., & Johnson, V. (2011). College student's stress under current economic downturn [El estrés de los estudiantes universitarios en la recesión económica actual]. Revista College Student Journal, 45 (3), 536-543.	</li>	<br/>
<li>	Godoy, D., Eberhard, A., Abarca, F., Acuña, B., & Muñoz, R. (2020). Psicoeducación en salud mental: una herramienta para pacientes y familiares. Revista Médica Clínica Las Condes. 31(2), 169-173. 	</li>	<br/>
<li>	Hernández, M. R. (2011). Caminar 10000 pasos al día para mantener una buena salud y calidad de vida. InterSedes. 12(24).	</li>	<br/>
<li>	Jakovcevic, A., Franco, P., Dalla Pozza, M. V., & Ledesma, R. (2016). Percepción de los beneficios individuales del uso de la bicicleta compartida como modo de transporte. suma psicológica, 23(1), 33-41.	</li>	<br/>
<li>	Lazarus, R. (2000). Estrés y emoción. Manejo e implicaciones en nuestra salud. Editorial Desclée Brouwer.	</li>	<br/>
<li>	Lisboa, C., & Spadoti, R. (2004). Estressores em uma unidade pós-operatória de cirugia torácica: Avaliaçao da enfermagem [Estresores en una unidad de cirugía postoperatoria Torácico: orácico: evaluación de enfermería]. Revista Latino-Americana de Enfermagem, 12 (1), 22-27. 	</li>	<br/>
<li>	Lumowell-Fitness-ES. (2016, 2 de diciembre). Ejercicios para principiantes en casa [Video]. You tube https://www.youtube.com/watch?v=wXC2EXuXoIc	</li>	<br/>
<li>	Mosconi, S., Correche, M., Rivarola, M., & Penna, F. (2007). Aplicación de la técnica de relajación en deportistas para mejorar su rendimiento. Fundamentos en humanidades. (16), 183-198.	</li>	<br/>
<li>	Muñoz, T. (2009-2022). Meditación guiada: Reducir el estrés por la respiración [Pódcast]. Spotify Spotify – Meditación guiada: Reducir el estrés por la respiración - Pad - song by Teresa Muñoz	</li>	<br/>
<li>	Nezu, A., Maguth ,C., & D’Zurilla, T. (2014). Terapia de solución de problemas. Editorial Desclée de Brouwer.	</li>	<br/>
<li>	Namalyongo, A; Achón, Z; & Ábalo, R. (2013). Factores de riesgo y vulnerabilidad al estrés en estudiantes universitarios. Psicogente. 16(29), 143-154.	</li>	<br/>
<li>	Oman, D., Shapiro, S. L., Thoresen, C. E., Plante, T. G., y Flinders, T. (2008). Meditation lowers stress and supports forgiveness among college students: A randomized controlled trial. Journal of American College Health. 56(5), 569-578	</li>	<br/>
<li>	Pereira, M. (2009). Una revisión teórica sobre el estrés y algunos aspectos relevantes de éste en el ámbito educativo. Revista educación, 33(2), 171-190.	</li>	<br/>
<li>	Pérez, J., García, R., & Pérez F. (s.f.). Guía para el mármol del estrés académico. estres.pdf (uv.es)	</li>	<br/>
<li>	Santos, A., Fernández, M., Reig, A., Riquelme, L., Montero, E., & Peralta, M. (2019). Valoración del estrés percibido y de las necesidades y demandas de intervención psicoeducativa para su manejo eficaz en estudiantes universitarios.[DAC2] 	</li>	<br/>
<li>	Shapiro, S.L., Brown, K.W., y Biegel, G.M. (2007). Teaching self-care to caregivers: Effects of mindfulness based stress reduction on the mental health of therapists in training. Training and Education in Professional Psychology, 1(2), 105-115.	</li>	<br/>
<li>	Tenelanda, D. Castelo, M. Cando, I.  Fierro, S & Asqui, J. (2017). Las técnicas de respiración, relajación y visualización para el manejo del estrés académico en el proceso de aprendizaje del idioma inglés. In 8va Edición de la Conferencia Científica Internacional de la Universidad de Holguín.[DAC1] 	</li>	<br/>
<li>	Treviño, J., & Ramírez, M. (2012). Estrategias cognitivo-conductuales para el manejo del estrés en alumnos mexicanos de bachillerato internacional. Alternativas en psicología. 16(26), 26-38.	</li>	<br/>
<li>	Valenzuela, M., Gallegos, L., Baca, L., López, H., & Rico, F. (2021). Estrés académico en universitarios y la práctica de ejercicio físico-deportivo. Revista Publicando, 8(28), 1-8.	</li>	<br/>
<li>	Valverde, C., Crespo, M., & Ring, J. (2003). Estrategias de afrontamiento.  Medicina Clínica en Psiquiatría y Psicología.[DAC3] 	</li>	<br/>
<li>	Villen, J., 2016. Técnicas cognitivo-conductuales para afrontar el estrés de los exámenes. Técnicas cognitivo-conductuales para afrontar el estrés de los exámenes (elsevier.com)	</li>	<br/>
<li>	Villarroel, A. (2015). Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios. [Tesis maestría, Universidad Autónoma de Nuevo León]. http://eprints.uanl.mx/9644/1/1080215011.pdf	</li>	<br/>
<li>	Zuazua, A. L. V., & Ramírez, M. T. G. (2017). Intervención cognitivo-conductual y centrada en soluciones para disminuir el estrés académico en estudiantes universitarios. Revista Electrónica de Psicología Iztacala. 18(4), 1363-1387.	</li>	<br/>

                        </ol>
                        `} title={'Referencia'} />

                    </div>
                </main>
            </div>

        </>
    )
}

export default ModuloRelax
