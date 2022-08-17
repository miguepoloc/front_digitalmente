import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import ganso_celular from "../../../../assets/img/ganso/ganso_celular.png"

import situacion1 from "../../../../assets/img/situaciones/situacion_1.png"
import situacion2 from "../../../../assets/img/situaciones/situacion_2.png"

import situacion3 from "../../../../assets/img/situaciones/situacion_3.png"

import ReactSpeedometer from "react-d3-speedometer"
import * as Yup from 'yup'
import { FetchContext } from '../../../../context/FetchContext'
import { AuthContext } from '../../../../context/AuthContext'
import { AvanceContext } from '../../../../context/AvanceContext'
import { BotonContext } from '../../../../context/BotonContext'
import { Actividad } from '../../../Dashboard/Actividad'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'
import { Loading } from '../../../Loading'
import { useParams } from 'react-router-dom'
import { ErrorAlert, RetroalimentacionAlert } from '../../../../helpers/helper_Swal_Alerts'

const Quimica = () => {
    // Variable del url
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext);
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);

    useEffect(() => {
        if (AvanceState.emocional <= parseInt(slug)) {
            setBotonState(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState])

    const { authAxios } = useContext(FetchContext)
    const [Intentos1, setIntentos1] = useState(0)
    const [Intentos2, setIntentos2] = useState(0)
    const [Intentos3, setIntentos3] = useState(0)
    const [loading, setLoading] = useState(true);
    const [retroPrimera, setRetroPrimera] = useState("Revisa una de las definiciones que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece.")
    const [retroSegunda, setRetroSegunda] = useState("Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ")
    const [retroTercera, setRetroTercera] = useState("Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ")
    const [emociones, setEmociones] = useState(null);

    const Schema1 = Yup.object().shape({
        Emocion1: Yup.string()
            .required('Es necesario escoger dos emociones'),
        Emocion12: Yup.string()
            .required('Es necesario escoger dos emociones'),
        Nivel1: Yup.string()
            .required('Es necesario escoger dos niveles'),
        Nivel12: Yup.string()
            .required('Es necesario escoger dos niveles'),
        Respuesta1: Yup.string().min(2, 'Demasiado corto')
            .required('Es necesario llenar esta información'),
    })

    const Schema2 = Yup.object().shape({
        Emocion2: Yup.string()
            .required('Es necesario llenar esta información'),
        Nivel2: Yup.string()
            .required('Es necesario llenar esta información'),

        Respuesta2: Yup.string().min(2, 'Demasiado corto')
            .required('Es necesario llenar esta información'),
    })

    const Schema3 = Yup.object().shape({
        Emocion3: Yup.string()
            .required('Es necesario llenar esta información'),
        Nivel3: Yup.string()
            .required('Es necesario llenar esta información'),
        Respuesta3: Yup.string().min(2, 'Demasiado corto')
            .required('Es necesario llenar esta información'),
        Accion3: Yup.string()
            .required('Es necesario llenar esta información'),
    })

    const respuestas = {
        "situacion1": {
            "emocion1": '2', //optimismo
            "nivel1": "medio",
            "emocion2": '8',//miedo
            "nivel2": "bajo",
            "no_ambas": "Revisa una de las definiciones que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece.",
            "ok_ambas": "¡Excelente! Si eres demasiado optimista, puedes terminar pensando que puedes estudiar después o no lo necesitas y luego descubrir luego que no te queda tiempo, causándote estrés. Al mismo tiempo, demasiado miedo podría terminar inmovilizándote, percibiendo el peligro como inmanejable para intentar algo, pero un nivel bajo te permite tener presente lo que debes hacer y mantenerte al tanto.",
            "mensaje": "si eres demasiado optimista, puedes terminar pensando que puedes estudiar después o no lo necesitas y luego descubrir luego que no te queda tiempo, causándote estrés. Al mismo tiempo, demasiado miedo podría terminar inmovilizándote, percibiendo el peligro como inmanejable para intentar algo, pero un nivel bajo te permite tener presente lo que debes hacer y mantenerte al tanto."
        },
        "situacion2": {
            "emocion2": '3',//Entusiasmo
            "nivel2": "medio",
            "nivel22": "alto",
            "no_ambas": "Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ",
            "ok_ambas": "¡Excelente! Las expresiones emocionales asociadas a la alegría pueden potenciar la creatividad y una mayor disposición a resolver problemas. Un buen nivel de entusiasmo puede darte lo necesario para ideas para el regalo de tu amigo/a.",
            "mensaje": "las expresiones emocionales asociadas a la alegría pueden potenciar la creatividad y una mayor disposición a resolver problemas. Un buen nivel de entusiasmo puede darte lo necesario para ideas para el regalo de tu amigo/a.",
        },
        "situacion3": {
            "emocion3": '4', //frustracion
            "nivel3": "medio",
            "accion3": '2',
            "accionValid": "Expresar tu opinión de manera firme y con respeto.",
            "no_nivel_emocion": "Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ",
            "no_accion": "Revisa esa acción que decidiste. ¿No crees que te traería más impacto para ti o las consecuencias alrededor?",
            "ok_ambas": "¡Muy bien! Si te frustras demasiado, la activación podría provocarte no solo malestar, sino que, dependiendo de tu carácter, situación y otros factores, puede que llegue la situación a un punto bastante negativo. Un nivel de activación medio, que te permite movilizarte y ser asertivo (expresarte de manera firme y con respeto) terminan siendo factores importantes para ayudarte a manejar esas situaciones sin que termine teniendo un impacto negativo para ti ni para otros.",
            "mensaje": "si te frustras demasiado, la activación podría provocarte no solo malestar, sino que, dependiendo de tu carácter, situación y otros factores, puede que llegue la situación a un punto bastante negativo. Un nivel de activación medio, que te permite movilizarte y ser asertivo (expresarte de manera firme y con respeto) terminan siendo factores importantes para ayudarte a manejar esas situaciones sin que termine teniendo un impacto negativo para ti ni para otros.",

        }
    }

    const { authState } = useContext(AuthContext)

    const { userInfo } = authState

    const getEmociones = async () => {
        const response = await authAxios.get(`/api/definiciones_usuario/?id_usuario=${userInfo.id}`)
        if (response.data) {
            return response.data
        } else {
            //console.log('No se pudieron traer los datos de las Definiciones...')
            return null
        }
    }

    const getNivel = (nivel) => {
        if (nivel === "alto") return 166
        if (nivel === "medio") return 500
        if (nivel === "bajo") return 832
        return 0
    }

    useEffect(() => {
        const fetchData = async () => {
            let response = await getEmociones()
            //console.log(response)
            if (response !== null) {
                setEmociones(response)
            }
            setLoading(false)
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // console.log(emociones)

    useEffect(() => {
        if (
            retroPrimera === respuestas.situacion1.ok_ambas
            && retroSegunda === respuestas.situacion2.ok_ambas
            && retroTercera === respuestas.situacion3.ok_ambas
        ) {

            setBotonState(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [retroPrimera, retroSegunda, retroTercera])

    useEffect(() => {
        console.log(Intentos2)
    }, [Intentos2])

    const color = '#fc8890'
    return (
        <div className="mx-md-4">
            {loading ? (<Loading />) : (
                <>
                    <div className="mx-2 row">
                        <div className="col">
                            <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
                                <img
                                    style={{ width: '150px', height: '150px' }}
                                    className="card-img-left flex-auto d-block "
                                    src={ganso_celular}
                                    alt="ganso celular"
                                />
                                <div className="card-body d-flex flex-column align-items-start justify-content-center">
                                    <h5 className="card-title">Actividad 3.1</h5>
                                    <p className="card-text">
                                        ¡Ya tenemos las bases para la identificación de las emociones y su comprensión a partir de darles nombre de acuerdo a lo que vivimos! Ahora hay que analizar cómo nos impactan en nuestro día a día. ¿Las emociones en determinados niveles pueden influir en nuestras acciones? ¡Claro que sí! Y es justo lo que nos pondrá a pensar el siguiente ejercicio.
                                    </p>
                                    <p className="card-text">
                                        A continuación, verás un cuadro describiendo una situación. El objetivo del ejercicio es que selecciones de la lista de emociones, las mismas que ya nombraste, cual consideras que podrían ayudarte en esa situación. Puede ser una o dos emociones máximo que elijas, pero, aquí un punto importante: debajo de esto debes indicar en qué nivel consideras que podría ayudar. No es lo mismo a que tengas ira en un nivel bajo a un nivel alto. Luego, escribe brevemente porque crees que esa emoción o emociones podrían ayudar. ¡Adelante!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="col my-2">
                            <div
                                className="callout mb-5  h-md-250 "
                                style={{ borderLeftColor: color }}
                            >
                                <h5 style={{ color: color }}>
                                    Tip importante:
                                </h5>

                                <p>
                                    Cada ejercicio te indicara si es así si debes usar una o dos emociones.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            Emocion1: '',
                            Emocion12: '',
                            Nivel1: '',
                            Nivel12: '',
                            Respuesta1: '',
                        }}
                        validationSchema={Schema1}
                        onSubmit={(values) => {
                            let name = "situacion1"
                            if (values.Emocion1 === respuestas[name].emocion1 && values.Nivel1 === respuestas[name].nivel1 && values.Emocion12 === respuestas[name].emocion2 && values.Nivel12 === respuestas[name].nivel2) {
                                setRetroPrimera(respuestas[name].ok_ambas)
                                setIntentos1(0)
                            }
                            else if (values.Emocion12 === respuestas[name].emocion1 && values.Nivel12 === respuestas[name].nivel1 && values.Emocion1 === respuestas[name].emocion2 && values.Nivel1 === respuestas[name].nivel2) {
                                setRetroPrimera(respuestas[name].ok_ambas)
                                setIntentos1(0)
                            }
                            else {
                                setIntentos1(Intentos1 + 1)
                                if (Intentos1 < 1) {
                                    setRetroPrimera(respuestas[name].no_ambas)
                                    ErrorAlert("¡Uf! Ya estas casi cerca", respuestas[name].no_ambas)
                                }
                                else {
                                    RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                    values.Emocion1 = respuestas[name].emocion1
                                    values.Emocion12 = respuestas[name].emocion2
                                    values.Nivel1 = respuestas[name].nivel1
                                    values.Nivel12 = respuestas[name].nivel2
                                }

                            }
                        }}
                    >
                        {({ errors, values, touched, handleChange, setFieldValue }) => (
                            <Form>
                                <div className="row m-4">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12 my-auto my-auto">
                                                <div className="d-flex align-middle">
                                                    <img
                                                        style={{ width: "100%" }}
                                                        className="card-img-left  justify-content-center align-self-center "
                                                        src={situacion1}
                                                        alt="situacion1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row text-center my-3 align-items-center">
                                                    <b>Coloca las emociones</b>
                                                </div>

                                                <div className="row text-center align-items-center">
                                                    <div className='col-md-6 mb-1 mb-md-0' >
                                                        <div>
                                                            <Field as='select' name="Emocion1" className="form-select" value={values.Emocion1 || ''}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="" disabled>Escoge una emoción para A</option>

                                                                {emociones && emociones.map(({ definicion, definicion_usuario }, i) =>

                                                                    <option key={definicion} value={definicion}>{definicion_usuario}</option>

                                                                )}
                                                            </Field>
                                                            {errors.Emocion1 && touched.Emocion1
                                                                ? (
                                                                    <div
                                                                        style={{ color: 'red' }}
                                                                    >
                                                                        {errors.Emocion1}
                                                                    </div>
                                                                )
                                                                : null}
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 mb-1 mb-md-0' >
                                                        <div>
                                                            <Field name="Emocion12" as="select" className="form-select" value={values.Emocion12 || ''}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="" disabled>Escoge una emoción para B</option>

                                                                {emociones && emociones.map(({ definicion, definicion_usuario }, i) =>

                                                                    <option key={definicion} value={definicion}>{definicion_usuario}</option>

                                                                )}
                                                            </Field>
                                                            {errors.Emocion12 && touched.Emocion12
                                                                ? (
                                                                    <div
                                                                        style={{ color: 'red' }}
                                                                    >
                                                                        {errors.Emocion12}
                                                                    </div>
                                                                )
                                                                : null}
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="row text-center mt-3 align-items-center">
                                                    <b>*Se requieren dos Emociones</b>
                                                </div>


                                                <div className="row text-center align-items-center">
                                                    <div className='col-md-6 mb-md-0' >
                                                        <ReactSpeedometer
                                                            width={200}
                                                            height={160}
                                                            needleHeightRatio={0.7}
                                                            value={getNivel(values.Nivel1)}
                                                            segments={3}
                                                            segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                                                            currentValueText={"Selecciona un nivel para A"}
                                                            maxSegmentLabels={0}
                                                            ringWidth={47}
                                                            needleTransitionDuration={1500}
                                                            needleTransition="easeElastic"
                                                            needleColor={'#333333'}
                                                            textColor={'#000000'}
                                                            style={{ marginBottom: '-50px' }}
                                                            valueTextFontSize={15}
                                                        />
                                                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "alto")} >Alto </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "medio")} >Medio </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "bajo")} >Bajo </Button>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 mb-md-0' >
                                                        <ReactSpeedometer
                                                            width={200}
                                                            height={160}
                                                            needleHeightRatio={0.7}
                                                            value={getNivel(values.Nivel12)}
                                                            segments={3}
                                                            segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                                                            currentValueText={"Selecciona un nivel para B"}
                                                            maxSegmentLabels={0}
                                                            ringWidth={47}
                                                            needleTransitionDuration={1500}
                                                            needleTransition="easeElastic"
                                                            needleColor={'#333333'}
                                                            textColor={'#000000'}
                                                            valueTextFontSize={15}

                                                        />

                                                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "alto")} >Alto </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "medio")} >Medio </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "bajo")} >Bajo </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-center align-items-center">
                                                    <p>¿Porque considera que estas  emociones te serian de ayuda?</p>
                                                    <Field name="Respuesta1" as="textarea" rows="3" className="form-control" />
                                                    {errors.Respuesta1 && touched.Respuesta1
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Respuesta1}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>

                                                <div className="mt-4 mb-4 text-center">
                                                    <button
                                                        type="submit"
                                                        className="text-white btn btn-info "
                                                    >
                                                        Validar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {Intentos1 > 1 && (
                                            <Actividad src={imgGanso.explicando} title="¡Cuack te ayuda!"
                                                text={`La respuesta es tener un <b>${emociones.filter((fl) => fl.definicion === parseInt(respuestas.situacion1.emocion1))[0].definicion_usuario} - Nivel ${respuestas.situacion1.nivel1}</b> y un <b>${emociones.filter((fl) => fl.definicion === parseInt(respuestas.situacion1.emocion2))[0].definicion_usuario} - Nivel ${respuestas.situacion1.nivel2}.</b> ¿Por qué? Verás, ${respuestas.situacion1.mensaje}
                                                <br>
                                                <b>Nota importante: </b> Vuelve a darle “validar” para continuar.
                                                `}
                                                showIcon={false} />
                                        )}
                                        {retroPrimera === respuestas.situacion1.ok_ambas && <div>
                                            <Actividad text={retroPrimera} title="" src={imgGanso.feliz_250x200} showIcon={false} />
                                        </div>
                                        }

                                    </div>

                                </div>
                            </Form>
                        )}
                    </Formik>

                    {/* Segundo Formik */}
                    <Formik
                        initialValues={{
                            Emocion2: '',
                            Nivel2: '',
                            Respuesta2: '',
                        }}
                        validationSchema={Schema2}
                        onSubmit={(values) => {
                            let name = "situacion2"
                            if (values.Emocion2 === respuestas[name].emocion2 && (values.Nivel2 === respuestas[name].nivel2 || values.Nivel2 === respuestas[name].nivel22)) {
                                setRetroSegunda(respuestas[name].ok_ambas)
                                setIntentos2(0)
                            }
                            else {
                                setIntentos2(Intentos2 + 1)
                                if (Intentos2 < 1) {
                                    setRetroSegunda(respuestas[name].no_ambas)
                                    ErrorAlert("¡Uf! Ya estas casi cerca", respuestas[name].no_ambas)
                                }
                                else {
                                    RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                    values.Emocion2 = respuestas[name].emocion2
                                    values.Nivel2 = respuestas[name].nivel2
                                }
                            }
                        }}
                    >
                        {({ errors, values, touched, handleChange, setFieldValue }) => (
                            <Form>
                                <div className="row m-4">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12 my-auto">
                                                <div className="d-flex align-middle">
                                                    <img
                                                        style={{ width: "100%" }}
                                                        className="card-img-left  justify-content-center align-self-center "
                                                        src={situacion2}
                                                        alt="situacion2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row text-center my-3 align-items-center">
                                                    <b>Coloca la emocion</b>
                                                </div>

                                                <div className="row text-center align-items-center">
                                                    <div >
                                                        <Field as='select' name="Emocion2" className="form-select" value={values.Emocion2 || ''}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="" disabled>Escoge una emocion</option>

                                                            {emociones && emociones.map(({ definicion, definicion_usuario }, i) =>

                                                                <option key={definicion} value={definicion}>{definicion_usuario}</option>

                                                            )}
                                                        </Field>
                                                        {errors.Emocion2 && touched.Emocion2
                                                            ? (
                                                                <div
                                                                    style={{ color: 'red' }}
                                                                >
                                                                    {errors.Emocion2}
                                                                </div>
                                                            )
                                                            : null}
                                                    </div>


                                                </div>

                                                <div className="row text-center mt-3 align-items-center">
                                                    <b>*Se requiere una Emocion</b>
                                                </div>


                                                <div className="row text-center align-items-center">
                                                    <div className='col' >
                                                        <ReactSpeedometer
                                                            width={200}
                                                            height={160}
                                                            needleHeightRatio={0.7}
                                                            value={getNivel(values.Nivel2)}
                                                            segments={3}
                                                            segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                                                            currentValueText={"Selecciona un nivel"}
                                                            maxSegmentLabels={0}
                                                            ringWidth={47}
                                                            needleTransitionDuration={1500}
                                                            needleTransition="easeElastic"
                                                            needleColor={'#333333'}
                                                            textColor={'#000000'}
                                                            valueTextFontSize={15}
                                                        />
                                                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "alto")} >Alto </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "medio")} >Medio </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "bajo")} >Bajo </Button>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="row text-center mt-4 align-items-center">
                                                    <p>¿Porque considera que estas emocion te seria de ayuda?</p>
                                                    <Field name="Respuesta2" as="textarea" rows="3" className="form-control" />
                                                    {errors.Respuesta2 && touched.Respuesta2
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Respuesta2}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>
                                                <div className="mt-4 mb-4 text-center">
                                                    <button
                                                        type="submit"
                                                        className="text-white btn btn-info "
                                                    >
                                                        Validar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {Intentos2 > 1 && (
                                            <Actividad src={imgGanso.explicando} title="¡Cuack te ayuda!"
                                                text={`La respuesta es tener un <b>${emociones.filter((fl) => fl.definicion === parseInt(respuestas.situacion2.emocion2))[0].definicion_usuario} - Nivel ${respuestas.situacion2.nivel2}.</b> ¿Por qué? Verás, ${respuestas.situacion2.mensaje}
                                                <br>
                                                <b>Nota importante: </b> Vuelve a darle “validar” para continuar.
                                                `}
                                                showIcon={false} />

                                        )}

                                        {retroSegunda === respuestas.situacion2.ok_ambas && <div>
                                            <Actividad text={retroSegunda} title="" src={imgGanso.feliz_250x200} showIcon={false} />
                                        </div>
                                        }
                                    </div>

                                </div>
                            </Form>
                        )}
                    </Formik>

                    {/* Tercer Formik */}
                    <Formik
                        initialValues={{
                            Emocion3: '',
                            Nivel3: '',
                            Accion3: '',
                            Respuesta3: '',
                        }}
                        validationSchema={Schema3}
                        onSubmit={(values) => {
                            console.log(values)
                            let name = "situacion3"
                            if (values.Emocion3 === respuestas[name].emocion3 && values.Nivel3 === respuestas[name].nivel3) {
                                if (values.Accion3 === respuestas[name].accion3) {
                                    setRetroTercera(respuestas[name].ok_ambas)
                                    setIntentos3(0)
                                }
                                else {
                                    setIntentos3(Intentos3 + 1)
                                    if (Intentos3 < 1) {
                                        setRetroTercera(respuestas[name].no_accion)
                                        ErrorAlert("¡Uf! Ya estas casi cerca", respuestas[name].no_accion)
                                    }
                                    else {
                                        RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                        values.Emocion3 = respuestas[name].emocion3
                                        values.Nivel3 = respuestas[name].nivel3
                                        values.Accion3 = respuestas[name].accion3
                                    }
                                }
                            }
                            else {
                                setRetroTercera(respuestas[name].no_nivel_emocion)
                                ErrorAlert("¡Uf! Ya estas casi cerca", respuestas[name].no_nivel_emocion)
                                setIntentos3(Intentos3 + 1)
                                if (Intentos3 < 1) {
                                    setRetroTercera(respuestas[name].no_nivel_emocion)
                                    ErrorAlert("¡Uf! Ya estas casi cerca", respuestas[name].no_nivel_emocion)
                                }
                                else {
                                    RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                    values.Emocion3 = respuestas[name].emocion3
                                    values.Nivel3 = respuestas[name].nivel3
                                    values.Accion3 = respuestas[name].accion3
                                }
                            }
                        }}
                    >
                        {({ errors, values, touched, handleChange, setFieldValue }) => (
                            <Form>
                                <div className='row my-5 text-center'>
                                    <b>Una pequeña adición: para esta situación es importante que analices que acción complementa la influencia de esa emoción que elijas. ¡Piénsalo bien!</b>
                                </div>

                                <div className="row m-4">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12 my-auto">
                                                <div className="d-flex align-middle">
                                                    <img
                                                        style={{ width: "100%" }}
                                                        className="card-img-left  justify-content-center align-self-center "
                                                        src={situacion3}
                                                        alt="situacion3"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row text-center my-3 align-items-center">
                                                    <b>Coloca la emocion</b>
                                                </div>

                                                <div className="row text-center align-items-center">
                                                    <div >
                                                        <Field as='select' name="Emocion3" className="form-select" value={values.Emocion3 || ''}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="" disabled>Escoge una emocion</option>

                                                            {emociones && emociones.map(({ definicion, definicion_usuario }, i) =>

                                                                <option key={definicion} value={definicion}>{definicion_usuario}</option>

                                                            )}
                                                        </Field>
                                                        {errors.Emocion3 && touched.Emocion3
                                                            ? (
                                                                <div
                                                                    style={{ color: 'red' }}
                                                                >
                                                                    {errors.Emocion3}
                                                                </div>
                                                            )
                                                            : null}
                                                    </div>

                                                </div>

                                                <div className="row text-center mt-3 align-items-center">
                                                    <b>*Se requiere una Emocion</b>
                                                </div>


                                                <div className="row text-center align-items-center">
                                                    <div className='col-md-6 mb-md-0' >
                                                        <ReactSpeedometer
                                                            width={200}
                                                            height={160}
                                                            needleHeightRatio={0.7}
                                                            value={getNivel(values.Nivel3)}
                                                            segments={3}
                                                            segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                                                            currentValueText={"Selecciona un nivel"}
                                                            maxSegmentLabels={0}
                                                            ringWidth={47}
                                                            needleTransitionDuration={1500}
                                                            needleTransition="easeElastic"
                                                            needleColor={'#333333'}
                                                            textColor={'#000000'}
                                                            valueTextFontSize={15}
                                                        />
                                                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "alto")} >Alto </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "medio")} >Medio </Button>
                                                            <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "bajo")} >Bajo </Button>
                                                        </div>

                                                    </div>
                                                    <div className='col-md-6 mb-md-0' >
                                                        <div>
                                                            <b>¿Qué acción crees que
                                                                deba acompañar esta emoción?</b>
                                                            <Field as='select' name="Accion3" className="form-select" value={values.Accion3 || ''}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="" disabled>Escoge una accion</option>
                                                                <option value="1" > Tumbar a la persona y sacarla de la fila.</option>
                                                                <option value="2" > Expresar tu opinión de manera firme y con respeto.</option>
                                                                <option value="3" > No decir nada y esperar que salga de la fila.</option>
                                                            </Field>
                                                            {errors.Accion3 && touched.Accion3
                                                                ? (
                                                                    <div
                                                                        style={{ color: 'red' }}
                                                                    >
                                                                        {errors.Accion3}
                                                                    </div>
                                                                )
                                                                : null}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row text-center mt-4 align-items-center">
                                                    <p>¿Porque considera que estas  emociones te serian de ayuda?</p>
                                                    <Field name="Respuesta3" as="textarea" rows="3" className="form-control" />
                                                    {errors.Respuesta3 && touched.Respuesta3
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Respuesta3}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>
                                                <div className="mt-4 mb-4 text-center">
                                                    <button
                                                        type="submit"
                                                        className="text-white btn btn-info "
                                                    >
                                                        Validar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {Intentos3 > 1 && (
                                            <Actividad src={imgGanso.explicando} title="¡Cuack te ayuda!"
                                                text={`La respuesta es tener un <b>${emociones.filter((fl) => fl.definicion === parseInt(respuestas.situacion3.emocion3))[0].definicion_usuario} - Nivel ${respuestas.situacion3.nivel3},</b> acompañado de la acción <b>${respuestas.situacion3.accionValid}</b> ¿Por qué? Verás, ${respuestas.situacion2.mensaje}
                                                <br>
                                                <b>Nota importante: </b> Vuelve a darle “validar” para continuar.
                                                `}
                                                showIcon={false} />
                                        )}

                                        {retroTercera === respuestas.situacion3.ok_ambas && <div>
                                            <Actividad text={retroTercera} title="" src={imgGanso.feliz_250x200} showIcon={false} />
                                        </div>
                                        }

                                    </div>

                                </div>

                            </Form>
                        )}
                    </Formik>
                </>)}
        </div>
    )
}

export { Quimica }