import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'
import * as Yup from 'yup'
import { Correct_Alert, Warning_Alert } from '../../../helpers/helper_Swal_Alerts';
import { useParams } from 'react-router-dom';
import { BotonContext } from '../../../context/BotonContext';
import { AvanceContext } from '../../../context/AvanceContext';

const informacion = [
    {
        tipo: '¿De qué modo es el supuesto o creencia no razonable?',
        ejercicio: `No es solo formular preguntas que nos permitan llegar a identificar argumentos que contradigan el supuesto o creencia, sino de hallar recursos internos que persuadan, por ejemplo, identificar una creencia o supuesto adecuado: <i>“Hacer siempre todas las cosas buscando el mayor nivel de perfección consume mucho tiempo y no deja espacio para poder hacer cosas que me diviertan”</i>`,
    },
    {
        tipo: '¿De qué modo es el supuesto o creencia poco útil? ',
        ejercicio: `Podemos realizar un listado de las ventajas y desventajas del supuesto o creencia, por ejemplo:
        <br/>
        <b>Ventajas:</b> Se entrega un buen trabajo.
        <br/>
        <b>Desventajas:</b> No puedo dormir bien, descuido mi salud, me siento ansioso, evito situaciones.
        <br/>
        Una vez realizado el listado, debemos cuestionar las ventajas, <i>¿Es esta la única forma de entregar un buen trabajo?</i>`
    },
    {
        tipo: '¿Cuál sería una alternativa más moderada que proporcionaría las ventajas del supuesto o creencia disfuncional sin sus desventajas?',
        ejercicio: `Estos supuestos o creencias disfuncionales muchas veces se encuentran en extremos, es importante encontrar puntos medios. Por ejemplo, en este caso se podría reformular de la siguiente manera: <i>“Es bueno buscar realizar una actividad de manera correcta, pero no tiene que ser perfecta, soy humano y lo importante es ir aprendiendo”</i>`
    },
    {
        tipo: '¿De dónde proviene la creencia?',
        ejercicio: `Estas creencias se han ido formando en diferentes etapas de nuestra vida, encontrándose la mayoría de estas en la niñez. Lograr identificar como se creó permite generar distancia. <i>Por ejemplo: Cuando era niño debía hacer todo perfecto porque si no mis padres me castigaban.</i>`
    },
    {
        tipo: 'Emplear continuos',
        ejercicio: `Otra forma de encontrar los puntos medios es generar continuos, podemos definir puntos intermedios como 2,4,6,8 en un continuo del 0 al 10 para analizar un supuesto o creencia.`
    },
]

const Schema = Yup.object().shape({
    Texto1: Yup.string()
        .min(1, 'Demasiado corto')
        .required('Es necesario llenar esta información'),
    Texto2: Yup.string()
        .min(1, 'Demasiado corto')
        .required('Es necesario llenar esta información'),
    Texto3: Yup.string()
        .min(1, 'Demasiado corto')
        .required('Es necesario llenar esta información'),
    Texto4: Yup.string()
        .min(1, 'Demasiado corto')
        .required('Es necesario llenar esta información'),
    Texto5: Yup.string()
        .min(1, 'Demasiado corto')
        .required('Es necesario llenar esta información'),
})


export const YaLosIdentifico = () => {
    // Variable del url
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext);
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);

    useEffect(() => {
        if (AvanceState.piensalo <= parseInt(slug)) {
            setBotonState(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState])

    var contador = 0;
    const CartaTexto = ({ title, text }) => {
        const [Show, setShow] = useState(false);
        const handleValidar = () => {
            setShow(true);
            contador = contador + 1;
        }
        return (
            <div className='col-lg-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        {Show &&
                            <Card.Text dangerouslySetInnerHTML={{ __html: text }} >
                            </Card.Text>
                        }
                        {!Show &&
                            <button className='w-50 search-buttons card-buttons text-center'
                                onClick={handleValidar}>
                                Cómo aplicarlo
                            </button>
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }

    const [Siguiente, setSiguiente] = useState(false);
    const color = '#4cbeff'


    const handleSiguiente = () => {
        console.log(contador)

        if (contador === informacion.length) {
            setSiguiente(true)
        }
        else {
            Warning_Alert('Debes descubrir cómo aplicar todos los supuestos o creencias')
        }
    }
    return (
        <>
            <h2 className='text-center'>Ya los identifico, ahora ¿qué hago? </h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.meditando} title="Supuesto o creencia"
                        text={`Si voy a realizar esta actividad debe quedar perfecta, sino es así no vale para nada la pena.
                        </br></br>
                        ¿Podemos cuestionar este tipo de supuesto o creencia?
                        `} showIcon={false} />
                </div>

            </div>



            {
                Siguiente
                    ?
                    <>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-12'>
                                <Actividad siImange={true} src={imgGanso.explicando} title="Instrucciones"
                                    text={`Hemos hecho un recorrido que nos ha permitido identificar algunas distorsiones, también hemos logrado ver diferentes formas de poder emplear la lógica para cuestionarnos sobre estos, es por esto que te invito en este apartado a escribir un supuesto y cuestionarlo empleando las diferentes formas que se mostraron anteriormente, es muy importante que utilices todas para poder identificar cual se ajusta más a ti`
                                    } showIcon={false} />
                            </div>
                        </div>
                        <h2 className='text-center'>Supuesto o creencia</h2>
                        <Formik
                            initialValues={{
                                Texto1: '',
                                Texto2: '',
                                Texto3: '',
                                Texto4: '',
                                Texto5: '',
                            }}
                            validationSchema={Schema}
                            onSubmit={(values) => {
                                console.log(values)
                                Correct_Alert('¡Bien hecho!')
                                setBotonState(false)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-4 mb-4">
                                            <div
                                                className="card-header  d-flex align-items-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                <h5 className="my-0 font-weight-normal text-white centrado">
                                                    ¿De qué modo es el supuesto o creencia no razonable?
                                                </h5>
                                            </div>
                                            <div className="border shadow w-100 card-body float-left pt-0">
                                                <div className="float-left d-flex flex-column">
                                                    <Field name="Texto1" as="textarea" rows="3" />
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
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div
                                                className="card-header  d-flex align-items-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                <h5 className="my-0 font-weight-normal text-white centrado">
                                                    ¿De qué modo es el supuesto o creencia poco útil?
                                                </h5>
                                            </div>
                                            <div className="border shadow w-100 card-body float-left pt-0">
                                                <div className="float-left d-flex flex-column">
                                                    <Field name="Texto2" as="textarea" rows="3" />
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
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div
                                                className="card-header  d-flex align-items-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                <h5 className="my-0 font-weight-normal text-white centrado">
                                                    ¿Cuál sería una alternativa más moderada que proporcionaría las ventajas del supuesto o creencia disfuncional sin sus desventajas?
                                                </h5>
                                            </div>
                                            <div className="border shadow w-100 card-body float-left pt-0">
                                                <div className="float-left d-flex flex-column">
                                                    <Field name="Texto3" as="textarea" rows="3" />
                                                    {errors.Texto3 && touched.Texto3
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Texto3}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div
                                                className="card-header  d-flex align-items-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                <h5 className="my-0 font-weight-normal text-white centrado">
                                                    ¿De dónde proviene la creencia?
                                                </h5>
                                            </div>
                                            <div className="border shadow w-100 card-body float-left pt-0">
                                                <div className="float-left d-flex flex-column">
                                                    <Field name="Texto4" as="textarea" rows="3" />
                                                    {errors.Texto4 && touched.Texto4
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Texto4}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div
                                                className="card-header  d-flex align-items-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                <h5 className="my-0 font-weight-normal text-white centrado">
                                                    Emplear continuos
                                                </h5>
                                            </div>
                                            <div className="border shadow w-100 card-body float-left pt-0">
                                                <div className="float-left d-flex flex-column">
                                                    <Field name="Texto5" as="textarea" rows="3" />
                                                    {errors.Texto5 && touched.Texto5
                                                        ? (
                                                            <div
                                                                style={{ color: 'red' }}
                                                            >
                                                                {errors.Texto5}
                                                            </div>
                                                        )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        <div className="mt-4 mb-4 text-center">
                                            <button
                                                type="submit"
                                                className="text-white btn btn-info "
                                            >
                                                Validar
                                            </button>
                                        </div>
                                    }
                                </Form>
                            )}

                        </Formik>

                    </>
                    :
                    <>

                        <div className='row justify-content-center align-items-center'>
                            {informacion.map((info, index) => (
                                <CartaTexto key={index} title={info.tipo} text={info.ejercicio} />
                            ))}
                        </div>
                        <div className="mt-4 mb-4 text-center">
                            <button
                                type="submit"
                                className="text-white btn btn-info "
                                onClick={handleSiguiente}
                            >
                                Validar
                            </button>
                        </div>
                    </>
            }
        </>
    )
}
