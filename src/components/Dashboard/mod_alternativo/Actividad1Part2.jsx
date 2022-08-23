import React from 'react'
import { Actividad } from "../Actividad"
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import Iframe from 'react-iframe'
import './assets/css/googleApp.scss'
import imgCalendar from './assets/img/calendar.png'
import imgSchool from './assets/img/school.png'

export const Actividad1Part2 = () => {
    return (
        <>
            <h2 className='text-center'></h2>

            <div className='row justify-content-center align-items-center mx-3'>

                <Actividad src={imgGanso.elegante} title="¿Ya tienes tu agenda y te cuesta seguirla?"
                    text={`<br>A continuación, te brindamos unos pequeños tips.
                        <ol>
                        <li><b>Comprométete</b> a cumplir los plazos importantes, ya que luego te acostumbrarás a aplazar y también tendrás muchas cosas acumuladas. “No dejes para mañana lo que puedes hacer hoy”</li>
                        <li><b>Realiza Pasos Progresivos</b> : Puedes iniciar con las tareas que tengan una dificultad baja, luego media y posteriormente las actividades que más te cuestan. “Divide y reinarás”</li>
                        <li>Ten tiempos de <b>Descanso</b>. “Recarga tus baterías”</li>
                        <li>Date <b>Recompensas</b> a ti mismo luego de realizar un trabajo o meta. ¿Un dulce? ¿un descanso? ¿una canción? ¡se creativo!</li>
                        <li>Desarrolla momentos de <b>Retroalimentación</b> sobre tu proceso: ¿Está siendo efectiva la forma en que distribuyes el tiempo?</li>
                        </ol>
                        <span class="">Marchena, E.; Hervías, F.; Galo, C. y Rapp, C. (2017)</span>
                        `} showIcon={false} />
                <Actividad src={imgGanso.celular} title=""
                    text={`Si no tienes agenda y te gustaría iniciar una, puedes personalizar una libreta o también usar aplicaciones para organizarla (en digital). Nuestras recomendadas:`} showIcon={false} />

            </div>


            <div className='row my-4 mx-2 '>
            <div className='col col-md-6 '>
                <a target={"_blank"} class="app w-100 d-flex rounded-2" href="https://play.google.com/store/apps/details?id=com.google.android.calendar ">
                   
                        <div class="app-image">
                            <img src={imgCalendar} />
                        </div>
                        <div class="app-content w-100">
                            <div class="app-title">Google Calendar</div>
                            <div class="app-rating app-rating--4"></div>
                            <div class="app-publisher">Google LLC</div>
                            <div class="app-price">FREE</div>
                        </div>
                  
                </a>
            </div>
            <div className='col col-md-6 '>
                <a  target={"_blank"} class="app w-100 d-flex rounded-2" href="https://play.google.com/store/apps/details?id=daldev.android.gradehelper">
               
                        <div class="app-image">
                            <img src={imgSchool} />
                        </div>
                        <div class="app-content w-100">
                            <div class="app-title">Agenda Escolar</div>
                            <div class="app-publisher">Andrea Del Cin</div>
                            <div class="app-rating app-rating--4"></div>
                            <div class="app-price">FREE</div>
                        </div>
                    
                </a>
            </div>
            </div>
        </>
    )
}
