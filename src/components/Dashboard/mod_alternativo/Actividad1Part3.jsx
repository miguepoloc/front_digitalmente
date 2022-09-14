import React from 'react'
import { Actividad } from "../Actividad"
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import './assets/css/googleApp.scss'
import imgMatriz from './assets/img/urgente-no urgente.png'


export const Actividad1Part3 = () => {
    return (
        <>
            <h2 className='text-center'></h2>

            <div className='row justify-content-center align-items-center mx-1 mx-md-4'>

                <Actividad src={imgGanso.pensando} title="¿Tu problema es sobre organización de prioridades?"
                    text={`<br>Entendemos que en ocasiones sucede que tienes un montón de actividades por realizar y no sabes por donde comenzar o en qué momento realizarlas, ¡A nosotros también nos ha pasado! Por eso te presentamos la matriz de Eisenhower (denominada así por el nombre de su autor), la cual podrás descargar para facilitar la priorización y organización de actividades, esperemos pueda funcionarte
                    <br>
                        `} showIcon={false} />
                <Actividad src={imgGanso.leyendo} title="¿Qué es la matriz de Eisenhower?"
                    text={`Es una herramienta que nos permite identificar cuáles son las actividades que deben realizarse de manera urgente, las que pueden aplazarse e incluso eliminarse (Zarate, 2022)
                        `} showIcon={false} />
                <Actividad src={imgGanso.explicando} title="¿Cómo se usa?"
                    text={`Es muy fácil, a continuación, te explicamos que se coloca en cada casilla. Eso sí, es muy importante que examines bien tus actividades antes de ubicarlas en cada una.
                    <br/>
                    <br/>
                    Cuadro #1 <b>Urgente-Importante</b> (Azul claro): Aquí debe colocarse todo lo que debe realizarse lo antes posible y no puede delegarse.   <br/><small>  <b>Nota</b>: Lo ideal es que no se te acumulen muchas actividades aquí, ya que luego tendremos dificultades </small>
                    <br/>
                    <br/>
                    Cuadro #2 <b>No urgente- Importante</b> (verde): Aquello que debe cumplirse, pero no tiene fecha inmediata
                    <br/>
                    <br/>
                    Cuadro #3 <b>No importante-Urgente </b>(Azul oscuro): Actividades que no son tan importantes pero que deben realizarse de forma inmediata y se pueden delegar
                    <br/>
                    <br/>
                    Cuadro #4 <b>No importante-No urgente</b> (Rojo): Aquellas cosas que nos distraen demasiado o hace que pospongamos demasiado actividades más relevantes, las que se coloquen en esta casilla podrían eliminarse
                    <br/>
                    <div class="justify-content-end">Zarate (2022)</div>
                    `} showIcon={false} />

            </div>
            <div className='d-flex justify-content-center my-3'>
                <img className='rounded-3' style={{ maxWidth: "372px", width: "100%" }} src={imgMatriz} />
            </div>

            <Actividad src={imgGanso.feliz_250x200} title="Tips extra"
                text={`<br>Organizar tu tiempo y hacer seguimiento te permite:
                   <ul>
                   <li>Reconocer que es lo que has alcanzado</li>
                   <li>Ahorrar tiempo y energía </li>
                   <li>Ser decidido y realista</li>
                   <li>Conocer fechas limites y mantener el nivel de trabajo</li>
                   <li>Emplear el tiempo adecuado para le trabajo/estudio y el descanso</li>

                   </ul>
                    <br/>
                    Marchena et al. (2017).
                        `} showIcon={false} />

        </>
    )
}
