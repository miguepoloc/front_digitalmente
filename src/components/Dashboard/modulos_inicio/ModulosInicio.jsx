import React, { useContext } from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import './assets/css/Modulos_inicio.scss'
import CartaImagen from '../CartaImagen'
import { linksRelax } from '../../../helpers/helperRelax'
import { linksEmocional } from '../../../helpers/helper_emocional'
import { linksPiensalo } from '../../../helpers/helperPiensalo'
import { Modulos } from './Modulos'
import { AuthContext } from '../../../context/AuthContext'
import { AvanceContext } from '../../../context/AvanceContext'
import { linksAlternativo } from '../../../helpers/helperAlternativo'

// import { Modulo_IconoBloqueo } from './Modulo_IconoBloqueo'
export const ModulosInicio = () => {
    const { authState } = useContext(AuthContext)
    const { userInfo } = authState
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);
    const pEmocional = AvanceState.emocional === 1
        ? '0'
        : parseInt(AvanceState.emocional / linksEmocional.length)
    const pRelax = AvanceState.estres === 1
        ? '0'
        : parseInt(AvanceState.estres / linksRelax.length)
    const pPiensalo = AvanceState.piensalo === 1
        ? '0'
        : parseInt(AvanceState.piensalo / linksPiensalo.length)
    const pHabilidades = AvanceState.habilidades === 1
        ? '0'
        : parseInt(AvanceState.habilidades / linksAlternativo.length)

    const completado = pEmocional * pRelax * pPiensalo * pHabilidades

    const bloqueo_ae = (AvanceState.autoevaluativo === 2 && !userInfo.is_staff ? true : false)
    const bloqueo_control = (AvanceState.autoevaluativo === 3 && !userInfo.is_staff ? true : false)

    let modulos = {
        modulo_alternativo: {
            col: 'col-8',
            img: imgGanso.escribiendo_250x200,
            classImg: 'imgGanso-modulos',
            moduloClass: 'card_moduloAutoevaluativo',
            text: 'Módulo autoevaluativo',
            bloqueado: (userInfo.is_controlgroup || completado === 1 ? bloqueo_control : bloqueo_ae),
            href: '/autoevaluativo'
        },
        // TODO: data user
        otros_modulos: [
            {
                col: 'col-3',
                img: imgGanso.meditando,
                text: 'Relax',
                classImg: 'imgGanso-modulos',
                moduloClass: 'card_relax',
                bloqueado: !(userInfo.is_staff || (!userInfo.is_controlgroup && AvanceState.autoevaluativo > 1)), //TODO: habilitar luego para grupo intervencion
                href: `/relax${AvanceState.estres === linksRelax.length ? (linksRelax.length - 1) : AvanceState.estres}`
            },
            {
                col: 'col-3',
                img: imgGanso.feliz_250x200,
                text: 'Mis emociones',
                moduloClass: 'card_misEmociones',
                classImg: 'imgGanso-modulos',
                bloqueado: !(userInfo.is_staff || (!userInfo.is_controlgroup && AvanceState.autoevaluativo > 1)),
                href: `/emocional${AvanceState.emocional === linksEmocional.length ? (linksEmocional.length - 1) : AvanceState.emocional}`
            },
            {
                col: 'col-3',
                img: imgGanso.pensando,
                text: 'Piénsalo',
                moduloClass: 'card_piensalo',
                classImg: 'imgGanso-modulos',
                bloqueado: !(userInfo.is_staff || (!userInfo.is_controlgroup && AvanceState.autoevaluativo > 1)),
                href: `/piensalo${AvanceState.piensalo === linksPiensalo.length ? (linksPiensalo.length - 1) : AvanceState.piensalo}`
            },
            {
                col: 'col-3',
                img: imgGanso.leyendo,
                text: 'Mis habilidades',
                moduloClass: 'card_misHabilidades',
                classImg: 'imgGanso-modulos',
                bloqueado: !(userInfo.is_staff || (!userInfo.is_controlgroup && AvanceState.autoevaluativo > 1)),
                href: `/alternativo${AvanceState.habilidades === linksAlternativo.length ? (linksAlternativo.length - 1) : AvanceState.habilidades}`
            }
        ]
    }

    // const estado = modulos.modulo_alternativo.bloqueado ? 'modulo_bloqueado' : 'modulo_desbloqueado'
    // const classDiv = `${modulos.modulo_alternativo.col}  rounded-3 justify-content-center cards_modulos_inicio ${estado}`

    return (
        <>
            <div className="container">
                <div className="row align-items-md-stretch justify-content-center mt-2 ">
                    {/* <Modulos col={"col-6"} quitarIconoBloqueo={true} classImg={"imgAyuda_modulos_inicio"} img={imgGanso.stop_250x200} text={"¿Necesitas ayuda?"} bloqueado={false} href={"ayuda.com"} moduloClass={"card_ayuda"} /> */}
                    <CartaImagen />

                    <Modulos col={'col-6 col-lg-6'}
                        img={modulos.modulo_alternativo.img}
                        text={modulos.modulo_alternativo.text}
                        bloqueado={modulos.modulo_alternativo.bloqueado}
                        href={modulos.modulo_alternativo.href}
                        moduloClass={modulos.modulo_alternativo.moduloClass}
                        classImg={'img-moduloAutoEvaluativo'}
                    />

                </div>

                <div className="row mb-1 align-items-md-stretch justify-content-center">
                    {modulos.otros_modulos.map(({ col, img, text, classImg, bloqueado, moduloClass, href }) => {
                        return (
                            <Modulos
                                key={text}
                                col={col}
                                img={img}
                                text={text}
                                bloqueado={bloqueado}
                                classImg={classImg}
                                moduloClass={moduloClass}
                                href={href}
                            />
                        )
                    })}
                </div>
            </div>

        </>
    )
}
