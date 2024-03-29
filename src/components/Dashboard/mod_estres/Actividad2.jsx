import React from 'react'
import Iframe from 'react-iframe'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'

export const Actividad2 = () => {
    return (
        <>
            <h2 className='text-center'>Técnicas de Meditación</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`<br>La meditación es una alternativa práctica para relajar el cuerpo, la mente y el espíritu. Ofrece una sensación de bienestar y salud mental, por lo cual termina siendo una buena opción para disminuir los síntomas asociados al estrés para las personas que disfrutan de este tipo de actividades <small>(Aguilar y Musso 2008).</small>`

                        }
                        showIcon={false} />
                </div>
                <div className='col-lg-6'>
                    <Actividad
                        siImange={true}
                        src={imgGanso.explicando}
                        style={{ width: "110px", height: "110px" }}
                        title="¿Cómo realizar esta actividad?"
                        text={`Para realizarla se pueden encontrar diversos materiales que permitan conocer con cuál tipo de meditación te sientes identificado y si resulta ser funcional para ti. Recuerda que puede funcionar una estrategia diferente en cada persona y no está mal. Aquí te recomendamos algunas opciones que podrías tomar en cuenta si estás interesad@:`}
                        showIcon={false} />
                </div>
            </div>

            <div className='card p-4 my-4'>
                <h4 className='mt-2 mb-3 text-center'> Meditación guiada para reducir el estrés, Podcast</h4>
                <p className='text-center'>Este podcast <small>(El Espectador, 2020-presente)</small> ofrece una opción auditiva para meditar, relajarse y reducir las sensaciones de estrés del día a día con diferentes capítulos y de manera gratuita accediendo a Spotify.</p>
                <Iframe url="https://open.spotify.com/embed/episode/686IzXbrSYYnMYe4d1ZTmu?utm_source=generator"
                    width="100%"
                    height="152px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
                <p className='text-center mb-0'><small><i><b>Nota:</b> Para escuchar completamente este podcast deberás darle <a rel="noreferrer" href="https://open.spotify.com/episode/686IzXbrSYYnMYe4d1ZTmu?go=1&sp_cid=0b8781ab5942a3f9240b00f3999531ef&utm_source=embed_player_p&utm_medium=desktop&nd=1" target={"_blank"} style={{ color: "#282888" }}><b><u>click aquí</u></b></a> para escucharlo en spotify</i></small></p>

            </div>
            <div className='card p-4 my-4'>
                <h4 className='mt-2 mb-3 text-center'> Meditación guiada</h4>
                <p className='text-center'>Este podcast <small>(Muñoz, 2009-presente)</small> permite realizar meditación, brindando una guía clara del paso a paso para realizarla en situaciones de ansiedad y estrés o cuando se busca un momento de tranquilidad en el cual se propicie paz y sensaciones de bienestar. Inténtalo.</p>
                <Iframe url="https://open.spotify.com/embed/track/1AOkl6s50A2PgqY2qMamko?utm_source=generator"
                    width="100%"
                    height="80px"
                    id="myId"
                    className="myClassname rounded-3"
                    display="initial"
                    position="relative"

                    style={{ borderRadius: "100px !important" }} />
                <p className='text-center mb-0'><small><i><b>Nota:</b> Para escuchar completamente este audio deberás darle <a rel="noreferrer" href="https://open.spotify.com/track/1AOkl6s50A2PgqY2qMamko?go=1&sp_cid=0b8781ab5942a3f9240b00f3999531ef&utm_source=embed_player_m&utm_medium=desktop&nd=1" target={"_blank"} style={{ color: "#534A4D" }}><b><u>click aquí</u></b></a> para escucharlo en spotify</i></small></p>
            </div>
        </>
    )
}
