import React, { useContext, useEffect, useState } from 'react'
// import { InputGroup } from 'react-bootstrap'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
// import { gansoPensandoAlert } from '../../../helpers/helper_Swal_Alerts'
import './assets/css/Modulos_inicio.scss'
import CartaImagen from '../CartaImagen'
import Axios from 'axios'
import {linksRelax} from '../../../helpers/helperRelax'
import { Modulos } from './Modulos'
import { AuthContext } from '../../../context/AuthContext'
// import { Modulo_IconoBloqueo } from './Modulo_IconoBloqueo'
export const ModulosInicio = () => {

    const { authState } = useContext(AuthContext)

    const { userInfo } = authState
    // Obtención de datos
    const [datauser, setDatauser] = useState([])
  

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
            })
            console.log(response)
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
    }, []);

    useEffect(()=>{

    },[datauser])

    const bloqueo_ae = (datauser.autoevaluativo === 2 && !userInfo.is_staff ? true : false)
    //console.log("🚀 ~ file: ModulosInicio.jsx ~ line 13 ~ ModulosInicio ~ datauser.autoevaluativo", datauser.autoevaluativo)
    console.log(linksRelax.length - 1, datauser.estres)
    
    let modulos = {
        modulo_alternativo: {
            col: 'col-8',
            img: imgGanso.escribiendo_250x200,
            classImg: 'imgGanso-modulos',
            moduloClass: 'card_moduloAutoevaluativo',
            text: 'Módulo autoevaluativo',
            bloqueado: bloqueo_ae,
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
                bloqueado: !userInfo.is_staff, //TODO: habilitar luego para grupo intervencion
                href: `/relax${datauser.estres === linksRelax.length?  (linksRelax.length - 1): datauser.estres }`
            },
            {
                col: 'col-3',
                img: imgGanso.feliz_250x200,
                text: 'Mis emociones',
                moduloClass: 'card_misEmociones',
                classImg: 'imgGanso-modulos',
                bloqueado: true,
                href: '/emocional1'
            },
            {
                col: 'col-3',
                img: imgGanso.pensando,
                text: 'Piénsalo',
                moduloClass: 'card_piensalo',
                classImg: 'imgGanso-modulos',
                bloqueado: true,
                href: ''
            },
            {
                col: 'col-3',
                img: imgGanso.leyendo,
                text: 'Mis habilidades',
                moduloClass: 'card_misHabilidades',
                classImg: 'imgGanso-modulos',
                bloqueado: true,
                href: ''
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
