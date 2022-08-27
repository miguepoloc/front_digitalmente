import React, { useContext, useEffect, useState } from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { Actividad } from '../Actividad';
import { useParams } from 'react-router-dom';
import { BotonContext } from '../../../context/BotonContext';
import { AvanceContext } from '../../../context/AvanceContext';
import { Field, Form, Formik } from 'formik';
import { Correct_Alert, RetroalimentacionAlert, Warning_Alert } from '../../../helpers/helper_Swal_Alerts';

const material = [
    {
        id: 1,
        distorsion: 'Sobregeneralización',
        pensamientos: 'Me fue mal en el examen de lectura, sé que nunca seré útil a la sociedad',
        puntos_basicos: 'Esta distorsión se basa en el supuesto, en el cual, si es cierto en una situación, se puede aplicar a cualquier otro',
        retroaimentacion: 'Debemos identificar los errores de lógica, podemos preguntarnos: ¿Son similares las situaciones? ¿Lo que me paso o hice aplica para todo lo que hago?',
    },
    {
        id: 2,
        distorsion: 'Abstracción selectiva',
        pensamientos: 'Entre al salón y Juan no me saludó, nadie se interesa por mí.',
        puntos_basicos: 'Esta distorsión se basa en el supuesto, en cual, la persona solo se centra en los fracasos, se evalúa en función de estos e ignora aspectos que puedan contradecirlo.',
        retroaimentacion: 'Debemos emplear la lógica para identificar los éxitos que se ignoran. En la situación presentada en el ejercicio, podríamos indagar cuantas personas si la saludaron cuando entró en el salón.',
    },
    {
        id: 3,
        distorsion: 'Pensamiento absolutista, dicotómico',
        pensamientos: 'Saque un 7/10 en el examen, siempre seré un perdedor',
        puntos_basicos: 'En esta distorsión el sujeto clasifica sus experiencias entre dos extremos, no existen matices. El individuo elegirá el extremo negativo.',
        retroaimentacion: 'Debemos emplear la lógica para identificar que las situaciones no se clasifican entre dos extremos.',
    },
    {
        id: 4,
        distorsion: 'Personalización',
        pensamientos: 'En el salón todos están riendo, seguramente se ríen de mí.',
        puntos_basicos: 'En esta distorsión el sujeto se atribuye fenómenos externos sin que exista evidencia que lo soporte',
        retroaimentacion: 'Debemos emplear la lógica para encontrar elementos que no soporten la atribución que se realiza.',
    },
    {
        id: 5,
        distorsion: 'Maximización y minimización',
        pensamientos: '1.	He hecho una exposición tan mala que es imposible hacer algo peor. 2.	Saque un 10/10 en el examen, seguramente solo fue suerte',
        puntos_basicos: 'En esta distorsión se cometen dos errores al evaluar una situación, maximizarla o minimizarla.',
        retroaimentacion: 'Debemos emplear la lógica para encontrar elementos que permitan realizar una nueva evaluación de la situación.',
    },
    {
        id: 6,
        distorsion: 'Inferencia arbitraria',
        pensamientos: 'Tengo un promedio de 9/10, sé que soy una mala estudiante',
        puntos_basicos: 'En esta distorsión, el sujeto desarrolla una conclusión sin que exista evidencia que la soporte.',
        retroaimentacion: 'Debemos emplear la lógica para encontrar elementos que permitan identificar que no existen elementos que validen la conclusión que se elaboró',
    },
]


export const UneLasCorrespondencias = () => {
    // Variable del url
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext);
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);
    const [Continuacion, setContinuacion] = useState(1);
    const [Intentos, setIntentos] = useState(0);

    useEffect(() => {
        if (AvanceState.piensalo <= parseInt(slug)) {
            setBotonState(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState])

    return (
        <>
            <h2 className='text-center'>Selecciona las correspondencias  </h2>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.escribiendo_250x200} title="Identifica las principales distorsiones cognitivas y los pensamientos automáticos negativos asociados a estas. "
                        text={`Debes elegir la opción correcta.`} showIcon={false} />
                </div>
            </div>

            <Formik
                initialValues={{
                    select1: '',
                    select2: '',
                    select3: '',
                    select4: '',
                    select5: '',
                    select6: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    console.log(Continuacion)

                    if (values[`select${Continuacion}`] === "") {
                        Warning_Alert('Debes seeccionar una distorsión cognitiva')
                    }
                    else {
                        if (Continuacion === parseInt(values[`select${Continuacion}`])) {
                            Correct_Alert('¡Bien hecho!')
                            if (Continuacion === material.length) {
                                setBotonState(false)
                            }
                            else {
                                setContinuacion(Continuacion + 1)
                                setIntentos(0)
                                resetForm()
                            }
                        }
                        else {
                            setIntentos(Intentos + 1)
                            if (Intentos > 0) {
                                RetroalimentacionAlert("Cuack te ayuda", "Revisa el mensaje de ayuda debajo")
                                values[`select${Continuacion}`] = Continuacion
                            }
                            else {
                                Warning_Alert('Debes descubrir cómo identificar todos los supuestos o creencias')
                            }
                        }
                    }
                }}
            >
                {({ errors, values, touched, handleChange }) => (
                    <Form>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >

                            <div className="col-sm-3 mb-4">
                                <h4>Distorsión cognitiva</h4>
                                <Field name={`select${Continuacion}`} as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorsión cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors[`select${Continuacion}`] && touched[`select${Continuacion}`]
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors[`select${Continuacion}`]}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"> Pensamientos automáticos</h5>
                                        <p className="card-text text-justify">{material[Continuacion - 1].pensamientos}</p>
                                    </div>
                                </div>
                            </div>

                            {parseInt(values[`select${Continuacion}`]) === material[Continuacion - 1].id ?
                                <>
                                    <div className='col-sm-3 mb-4 '>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Puntos básicos</h5>
                                                <p className="card-text text-justify">{material[Continuacion - 1].puntos_basicos}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-3 mb-4 '>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Retroalimentación- ¿Cómo intervengo en la distorsión?</h5>
                                                <p className="card-text text-justify">{material[Continuacion - 1].retroaimentacion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                        {Intentos > 1 && (

                            <Actividad src={imgGanso.explicando} title="¡Cuack te ayuda!"
                                text={`En el pensamiento automático "<b>${material[Continuacion - 1].pensamientos}</b>", hace referencia a la distorsión cognitiva de <b>${material[Continuacion - 1].distorsion}</b>.
                            <br>
                            <b>Nota importante: </b> Vuelve a darle “validar” para continuar.
                            `}
                                showIcon={false} />)
                        }
                        <div className="mt-4 mb-4 text-center">
                            <button
                                type="submit"
                                className="text-white btn btn-info "
                            >
                                Validar
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    );
}
