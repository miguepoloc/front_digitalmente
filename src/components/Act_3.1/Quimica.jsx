import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import ganso_celular from "../../assets/img/ganso/ganso_celular.png"

import situacion1 from "../../assets/img/situaciones/situacion_1.png"
import situacion2 from "../../assets/img/situaciones/situacion_2.png"

import situacion3 from "../../assets/img/situaciones/situacion_3.png"

import ReactSpeedometer from "react-d3-speedometer"
import * as Yup from 'yup'
import { FetchContext } from '../../context/FetchContext'
import { AuthContext } from '../../context/AuthContext'
import { AvanceContext } from '../../context/AvanceContext'
import { BotonContext } from '../../context/BotonContext'

const Quimica = () => {
    const { setBotonState } = useContext(BotonContext);
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);

    useEffect(() => {
        if (AvanceState.emocional <= 3) {
            setBotonState(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState])
    const { authAxios } = useContext(FetchContext)

    const [retroPrimera, setRetroPrimera] = useState(null)
    const [retroSegunda, setRetroSegunda] = useState(null)
    const [retroTercera, setRetroTercera] = useState(null)
    const [validate, setValidate] = useState(false);
    const [emociones, setEmociones] = useState(null);

    const Schema = Yup.object().shape({

        Emocion1: Yup.string()
            .required('Es necesario escojer dos emociones'),
        Emocion12: Yup.string()
            .required('Es necesario escojer dos emociones'),
        Nivel1: Yup.string()
            .required('Es necesario escojer dos niveles'),
        Nivel12: Yup.string()
            .required('Es necesario escojer dos niveles'),
        Respuesta1: Yup.string().min(2, 'Demasiado corto')
            .max(50, 'Demasiado largo')
            .required('Es necesario llenar esta información'),
        Emocion2: Yup.string()
            .required('Es necesario llenar esta información'),
        Nivel2: Yup.string()
            .required('Es necesario llenar esta información'),
        Accion2: Yup.string()
            .required('Es necesario llenar esta información'),
        Respuesta2: Yup.string().min(2, 'Demasiado corto')
            .max(50, 'Demasiado largo')
            .required('Es necesario llenar esta información'),
        Emocion3: Yup.string()
            .required('Es necesario llenar esta información'),
        Nivel3: Yup.string()
            .required('Es necesario llenar esta información'),
        Respuesta3: Yup.string().min(2, 'Demasiado corto')
            .max(50, 'Demasiado largo')
            .required('Es necesario llenar esta información'),
    })

    const respuestas = {
        "situacion1": {
            "emocion1": '2', //optimismo
            "nivel1": "medio",
            "emocion2": '8',//miedo
            "nivel2": "bajo",
            "no_ambas": "¡Uf! Ya estas casi cerca. Revisa una de las definiciones que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece.",
            "ok_ambas": "¡Excelente! Si eres demasiado optimista, puedes terminar pensando que puedes estudiar después o no lo necesitas y luego descubrir luego que no te queda tiempo, causándote estrés. Al mismo tiempo, demasiado miedo podría terminar inmovilizándote, percibiendo el peligro como inmanejable para intentar algo, pero un nivel bajo te permite tener presente lo que debes hacer y mantenerte al tanto."
        },
        "situacion2": {
            "emocion2": '3',//Entusiasmo
            "nivel2": "medio",
            "nivel22": "alto",
            "no_ambas": "¡Uf! Ya estas casi cerca. Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ",
            "ok_ambas": "¡Excelente! Las expresiones emocionales asociadas a la alegría pueden potenciar la creatividad y una mayor disposición a resolver problemas. Un buen nivel de entusiasmo puede darte lo necesario para ideas para el regalo de tu amigo/a."
        },
        "situacion3": {
            "emocion3": '4', //frustracion
            "nivel3": "medio",
            "accion3": '2',
            "no_nivel_emocion": "¡Uf! Ya estas casi cerca. Revisa la definición que colocaste o en el nivel en que lo pusiste. Recuerda las manifestaciones asociadas a la emoción general a la que pertenece. ",
            "no_accion": "¡Uf! Ya estas casi cerca. Revisa esa acción que decidiste. ¿No crees que te traería más impacto para ti o las consecuencias alrededor?",
            "ok_ambas": "¡Muy bien! Si te frustras demasiado, la activación podría provocarte no solo malestar, sino que, dependiendo de tu carácter, situación y otros factores, puede que llegue la situación a un punto bastante negativo. Un nivel de activación medio, que te permite movilizarte y ser asertivo (expresarte de manera firme y con respeto) terminan siendo factores importantes para ayudarte a manejar esas situaciones sin que termine teniendo un impacto negativo para ti ni para otros."

        }
    }

    const handleBtnClickSend = (name, values) => {
        //console.log(respuestas[name])
        //console.log(values)

        if (name === "situacion1") {

            if (values.Emocion1 === respuestas[name].emocion1 && values.Nivel1 === respuestas[name].nivel1 && values.Emocion12 === respuestas[name].emocion2 && values.Nivel12 === respuestas[name].nivel2) {
                //console.log(respuestas[name].ok_ambas)
                setRetroPrimera(respuestas[name].ok_ambas)
            }
            else if (values.Emocion12 === respuestas[name].emocion1 && values.Nivel12 === respuestas[name].nivel1 && values.Emocion1 === respuestas[name].emocion2 && values.Nivel1 === respuestas[name].nivel2) {
                setRetroPrimera(respuestas[name].ok_ambas)
            }
            else {
                setRetroPrimera(respuestas[name].no_ambas)
            }
        }
        else if (name === "situacion2") {
            if (values.Emocion2 === respuestas[name].emocion2 && (values.Nivel2 === respuestas[name].nivel2 || values.Nivel2 === respuestas[name].nivel22)) {
                setRetroSegunda(respuestas[name].ok_ambas)
            }
            else {
                setRetroSegunda(respuestas[name].no_ambas)
            }
        }
        else if (name === "situacion3") {
            if (values.Emocion3 === respuestas[name].emocion3 && values.Nivel3 === respuestas[name].nivel3) {
                if (values.Accion3 === respuestas[name].accion3) {
                    setRetroTercera(respuestas[name].ok_ambas)
                }
                else {
                    setRetroTercera(respuestas[name].no_accion)
                }
            }
            else {
                setRetroTercera(respuestas[name].no_nivel_emocion)
            }
        }
    }

    // const handleOnChange = () => {
    //     if (validate)
    //         setValidate(false);
    // }


    const { authState } = useContext(AuthContext)

    const { userInfo } = authState

    const getEmociones = async () => {
        const response = await authAxios.get(`/definiciones_usuario/?id_usuario=${userInfo.id}`)
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
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const color = '#fc8890'
    return (
        <div className="container">
            <div className="row">
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
                                A continuación, veras un cuadro describiendo una situación. El objetivo del ejercicio es que selecciones de la lista de emociones, las mismas que ya nombraste, cual consideras que podrían ayudarte en esa situación. Puede ser una o dos emociones máximo que elijas, pero, aquí un punto importante: debajo de esto debes indicar en qué nivel consideras que podría ayudar. No es lo mismo a que tengas ira en un nivel bajo a un nivel alto. Luego, escribe brevemente porque crees que esa emoción o emociones podrían ayudar. ¡Adelante!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col">
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
                    Emocion2: '',
                    Nivel2: '',
                    Respuesta2: '',
                    Emocion3: '',
                    Nivel3: '',
                    Accion3: '',
                    Respuesta3: '',
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log(values)
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
                                                        <option value="" disabled>Escoje una emocion</option>

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
                                                        <option value="" disabled>Escoje una emocion</option>

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
                                                    currentValueText={"Selecciona un nivel"}
                                                    maxSegmentLabels={0}
                                                    ringWidth={47}
                                                    needleTransitionDuration={1500}
                                                    needleTransition="easeElastic"
                                                    needleColor={'#333333'}
                                                    textColor={'#000000'}
                                                    style={{ marginBottom: '-50px' }}
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
                                                    currentValueText={"Selecciona un nivel"}
                                                    maxSegmentLabels={0}
                                                    ringWidth={47}
                                                    needleTransitionDuration={1500}
                                                    needleTransition="easeElastic"
                                                    needleColor={'#333333'}
                                                    textColor={'#000000'}


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
                                        </div>
                                        <div className="row mt-4">
                                            <Button name="situacion1" className="mx-auto btn btn-naranja" onClick={(e) => { handleBtnClickSend(e.target.name, values) }} >Guardar </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {retroPrimera && <div>
                                    <p>{retroPrimera}</p>
                                </div>
                                }
                            </div>

                        </div>

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
                                                    <option value="" disabled>Escoje una emocion</option>

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
                                        </div>
                                        <div className="row mt-4">
                                            <Button name="situacion2" className="mx-auto btn btn-naranja" onClick={(e) => { handleBtnClickSend(e.target.name, values) }}>Guardar </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {retroSegunda && <div>
                                    <p>{retroSegunda}</p>
                                </div>
                                }
                            </div>

                        </div>

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
                                                    <option value="" disabled>Escoje una emocion</option>

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
                                                        <option value="" disabled>Escoje una accion</option>
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
                                        </div>
                                        <div className="row mt-4">
                                            <Button name="situacion3" className="mx-auto btn btn-naranja" onClick={(e) => { handleBtnClickSend(e.target.name, values) }} >Enviar </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {retroTercera && <div>
                                    <p>{retroTercera}</p>
                                </div>
                                }
                            </div>

                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export { Quimica }