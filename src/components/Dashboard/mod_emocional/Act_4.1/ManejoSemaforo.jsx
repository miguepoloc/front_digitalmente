/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'
import '../../../../assets/css/Act4.scss'
import ganso_lupa_celular from '../../../../assets/img/ganso/ganso_lupa_celular.png'
import { ErrorAlert, Correct_Alert, RetroalimentacionAlert } from '../../../../helpers/helper_Swal_Alerts'
import { section4_2, setColorSelect } from '../../../../helpers/helper_Reg_Emoc_act_4'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom'
import { BotonContext } from '../../../../context/BotonContext'
import { AvanceContext } from '../../../../context/AvanceContext'
import { Actividad } from '../../../Dashboard/Actividad'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'

const Schema = Yup.object().shape({
    // Texto1: Yup.string()
    //     .min(2, 'Demasiado corto')
    //     .required('Es necesario llenar esta información'),
    // Texto2: Yup.string()
    //     .min(2, 'Demasiado corto')
    //     .required('Es necesario llenar esta información'),
    color1: Yup.string()
        .required('Es necesario seleccionar un color'),
    color2: Yup.string()
        .required('Es necesario seleccionar un color'),
    color3: Yup.string()
        .required('Es necesario seleccionar un color'),
    situacion: Yup.string()
        .required('Es necesario seleccionar una situación'),
    emocion: Yup.string()
        .required('Es necesario seleccionar una emoción')
})

const ManejoSemaforo = () => {
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
    const cantidad = section4_2.activities.length
    const color = '#4cbeff'
    const ObjetoColor = {
        rojo: '#ff6961',
        amarillo: '#fdfd96',
        verde: '#77dd77'
    }
    const colorgris = '#f2f1f6'

    useEffect(() => { setColorSelect(color) }, [])

    const [activityIndex, setActivityIndex] = useState(0)
    const [Intentos, setIntentos] = useState(0)

    return (

        <div className="mx-3 mx-md-4">
            <div className="row">
                <div className="col">
                    <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
                        <img
                            style={{ width: '150px', height: '150px' }}
                            className="card-img-left flex-auto d-block "
                            src={ganso_lupa_celular}
                            alt="ganso_lupa_celular"
                        />
                        <div className="card-body d-flex flex-column align-items-start justify-content-center">
                            <h5 className="card-title">Actividad 4.2</h5>
                            <p className="card-text">
                                Ya empezaste a identificar lo que tu harías, pero ¿puede identificarlo desde otra perspectiva? ¿Recuerdas el semáforo? Íbamos de color en color y hacíamos una comparación con la posibilidad que teníamos en nuestro proceso de gestión emocional. ¡Es momento de verlo reflejado!
                            </p>
                            <p>
                                A continuación, encontrarás las fases del semáforo, aplicadas a una situación. Identifica a que color del semáforo correspondería cada una.  Luego, debes elegir a que situación de las que anteriormente viste crees que corresponde esas descripciones y que emoción crees que está pasando la persona. Finalmente, se te plantea una reflexión importante ¡Adelante!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col">
                    <div
                        className="callout mb-3 mt-4 h-md-250 "
                        style={{ borderLeftColor: color }}
                    >
                        <h5 style={{ color: color }}>
                            {section4_2.activities[activityIndex].name}
                        </h5>

                        {/* <p>
                            {section4_2.activities[activityIndex].ejercicio}
                        </p> */}
                    </div>
                </div>
            </div>

            <div className="mx-3">
                <Formik
                    initialValues={{
                        // Texto1: '',
                        // Texto2: '',
                        color1: '',
                        color2: '',
                        color3: '',
                        situacion: '',
                        emocion: ''
                    }}
                    validationSchema={Schema}
                    onSubmit={(values, { resetForm }) => {
                        if (
                            values.color1 === section4_2.activities[activityIndex].color1 &&
                            values.color2 === section4_2.activities[activityIndex].color2 &&
                            values.color3 === section4_2.activities[activityIndex].color3 &&
                            section4_2.activities[activityIndex].situacion[values.situacion - 1].isCorrect &&
                            section4_2.activities[activityIndex].emocion[values.emocion - 1].isCorrect
                        ) {
                            //console.log('Está correcto')
                            resetForm()
                            setIntentos(0)
                            Correct_Alert(section4_2.titleSuccess, section4_2.successMsg).then(function () {
                                if (activityIndex + 1 < cantidad) {
                                    setActivityIndex(activityIndex + 1)
                                } else {
                                    //   TODO REDIRECCIÓN
                                    setBotonState(false)
                                    //console.log('Final')
                                }
                            })
                        } else {
                            // TODO: Intentos
                            setIntentos(Intentos + 1)
                            if (Intentos > 0) {
                                RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                values.color1 = section4_2.activities[activityIndex].color1
                                values.color2 = section4_2.activities[activityIndex].color2
                                values.color3 = section4_2.activities[activityIndex].color3
                                values.situacion = section4_2.activities[activityIndex].situacionok
                                values.emocion = section4_2.activities[activityIndex].emocionok
                            }
                            else {
                                ErrorAlert(section4_2.titleError, section4_2.errorMsg)
                            }
                        }
                    }}
                >
                    {({ errors, values, touched, handleChange }) => (
                        <Form>
                            <div className="row">
                                <div className="col-sm mb-4 card-header d-flex align-items-center"
                                    style={{ backgroundColor: ObjetoColor[values.color1] || colorgris, borderRadius: '10px' }}
                                >
                                    <h5 className="my-auto font-weight-normal centrado mb-2 mt-2">
                                        {section4_2.activities[activityIndex].opcion1}

                                    </h5>
                                </div>
                                <div className="col-sm mb-4 card-header d-flex align-items-center ml-1 margen-izquierdo"
                                    style={{ backgroundColor: ObjetoColor[values.color2] || colorgris, borderRadius: '10px' }}
                                >
                                    <h5 className="my-auto font-weight-normal centrado mb-2 mt-2">
                                        {section4_2.activities[activityIndex].opcion2}
                                    </h5>
                                </div>
                                <div className="col-sm mb-4 card-header d-flex align-items-center margen-izquierdo"
                                    style={{ backgroundColor: ObjetoColor[values.color3] || colorgris, borderRadius: '10px' }}
                                >
                                    <h5 className="my-auto font-weight-normal centrado mb-2 mt-2">
                                        {section4_2.activities[activityIndex].opcion3}
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-4">
                                    <Field name="color1" as="select" className="form-select" value={values.color1 || ''}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Selecciona un color para 1</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color1 && touched.color1
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color1}
                                            </div>
                                        )
                                        : null}
                                </div>
                                <div className="col-sm mb-4">
                                    <Field name="color2" as="select" className="form-select" value={values.color2 || ''}
                                        onChange={handleChange}>
                                        <option value="" disabled>Selecciona un color para 2</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color2 && touched.color2
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color2}
                                            </div>
                                        )
                                        : null}
                                </div>
                                <div className="col-sm mb-4">
                                    <Field name="color3"
                                        as="select"
                                        value={values.color3 || ''}
                                        className="form-select"
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Selecciona un color para 3</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color3 && touched.color3
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color3}
                                            </div>
                                        )
                                        : null}
                                </div>
                            </div>
                            <div className="row mb-4 mt-2">
                                <div className="col-sm">
                                    <div
                                        className="d-flex align-items-center m-auto"
                                    >
                                        <h5 className="my-0 font-weight-normal centrado">
                                            ¿Que situación crees que pudo causar lo anteriormente expuesto?
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm m-auto mb-2 ">
                                    <Field
                                        name="situacion"
                                        as="select"
                                        className="form-select"
                                        value={values.situacion || ''}
                                        onChange={handleChange}>
                                        <option value="" key="Prueba" disabled>Selecciona una situacion</option>

                                        {section4_2.activities[activityIndex].situacion.map((situacion, situacionindex) => (
                                            <option value={situacionindex + 1} key={`Situacion_${situacionindex}`}>{situacion.option}</option>
                                        ))}

                                    </Field>
                                    {errors.situacion && touched.situacion
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.situacion}
                                            </div>
                                        )
                                        : null}
                                </div>

                                <div className="col-sm">
                                    <div
                                        className="d-flex align-items-center m-auto"
                                    >
                                        <h5 className="my-0 font-weight-normal centrado">
                                            ¿Que emoción crees que esta pasando la persona?
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm m-auto ">
                                    <Field
                                        name="emocion"
                                        as="select"
                                        className="form-select"
                                        value={values.emocion || ''}
                                        onChange={handleChange}>
                                        <option value="" key="Prueba" disabled>Selecciona una emocion</option>

                                        {section4_2.activities[activityIndex].emocion.map((emocion, emocionindex) => (
                                            <option value={emocionindex + 1} key={`Emocion_${emocionindex}`}>{emocion.option}</option>
                                        ))}

                                    </Field>
                                    {errors.emocion && touched.emocion
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.emocion}
                                            </div>
                                        )
                                        : null}
                                </div>

                            </div>
                            {/* <div className="row">
                                <div className="col-sm mb-4"
                                    style={{ display: 'flex', alignItems: 'center' }}

                                >
                                    <h5>¿Qué resultados para si mismo y en su ambiente crees que pudo tener la forma como manejo la situación esta persona?</h5>
                                </div>
                                <div className="col-sm mb-4">

                                    <div className="border shadow w-100 float-left pt-0">
                                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>

                                            <Field name="Texto1" as="textarea" rows="3" className="form-control" />

                                        </div>
                                    </div>
                                    {errors.Texto1 && touched.Texto1
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.Texto1}
                                            </div>
                                        )
                                        : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-4"
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <h5>Si hubiera hecho lo que tú, ¿que resultados para si mismo y en su ambiente crees que pudo tener la forma como manejo la situación esta persona ?</h5>
                                </div>
                                <div className="col-sm mb-4">

                                    <div className="border shadow w-100 float-left pt-0">
                                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                                            <Field name="Texto2" as="textarea" rows="3" className="form-control" />
                                        </div>

                                    </div>
                                    {errors.Texto2 && touched.Texto2
                                        ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.Texto2}
                                            </div>
                                        )
                                        : null}
                                </div>
                            </div> */}

                            {Intentos > 1 && (

                                <Actividad src={imgGanso.explicando} title="¡Cuack te ayuda!"
                                    text={`La situación a la que hace referencia el ejercicio es <b>${section4_2.activities[activityIndex].situacion.filter((fl) => fl.isCorrect === true)[0].option}</b> Dado eso el orden del semáforo como lo muestran los cuadros es <b>${section4_2.activities[activityIndex].color1}, ${section4_2.activities[activityIndex].color2} y ${section4_2.activities[activityIndex].color3}.</b> Y la emoción que está pasando la persona es <b>${section4_2.activities[activityIndex].emocion.filter((fl) => fl.isCorrect === true)[0].option}</b>. Revisa un momento los cuadros de situación antes de pasar a la siguiente para ver el sentido de los colores.
                                    <br>
                                    <b>Nota importante: </b> Vuelve a darle “validar” para continuar.
                                    `}
                                    showIcon={false} />)
                            }

                            {
                                <div className="mt-4 mb-4 text-center">
                                    <button
                                        type="submit"
                                        className="text-white btn btn-info "
                                    // disabled={!dirty || !isValid}
                                    >
                                        Validar
                                    </button>
                                </div>
                            }
                        </Form>
                    )}

                </Formik>
            </div>

        </div>
    )
}

export default ManejoSemaforo
