import React, { useContext, useEffect } from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { Actividad } from '../Actividad';
import * as Yup from 'yup'
import { useParams } from 'react-router-dom';
import { BotonContext } from '../../../context/BotonContext';
import { AvanceContext } from '../../../context/AvanceContext';
import { Field, Form, Formik } from 'formik';
import { Correct_Alert, Warning_Alert } from '../../../helpers/helper_Swal_Alerts';

const Schema = Yup.object().shape({
    select1: Yup.string()
        .required('Es necesario seleccionar un valor'),
    select2: Yup.string()
        .required('Es necesario seleccionar un valor'),
    select3: Yup.string()
        .required('Es necesario seleccionar un valor'),
    select4: Yup.string()
        .required('Es necesario seleccionar un valor'),
    select5: Yup.string()
        .required('Es necesario seleccionar un valor'),
    select6: Yup.string()
        .required('Es necesario seleccionar un valor'),
})

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
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log(values)
                    if (
                        parseInt(values.select1) === material[0].id
                        && parseInt(values.select2) === material[1].id
                        && parseInt(values.select3) === material[2].id
                        && parseInt(values.select4) === material[3].id
                        && parseInt(values.select5) === material[4].id
                        && parseInt(values.select6) === material[5].id
                    ) {
                        Correct_Alert('¡Bien hecho!')
                        setBotonState(false)
                    }
                    else {
                        Warning_Alert('Debes descubrir cómo aplicar todos los supuestos o creencias')
                    }
                }}
            >
                {({ errors, values, touched, handleChange }) => (
                    <Form>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >

                            <div className='col-sm-3 mb-4 '>
                                <h4>Distorción cognitiva</h4>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <h4>Pensamientos automáticos</h4>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <h4>Puntos básicos</h4>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <h4>Retroalimentación- ¿Cómo intervengo en la distorsión?</h4>
                            </div>
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select1" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select1 && touched.select1
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select1}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[0].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[0].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select1) === material[0].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[0].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select2" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select2 && touched.select2
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select2}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[1].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[1].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select2) === material[1].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[1].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select3" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select3 && touched.select3
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select3}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[2].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[2].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select3) === material[2].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[2].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select4" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select4 && touched.select4
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select4}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[3].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[3].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select4) === material[3].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[3].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select5" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select5 && touched.select5
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select5}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[4].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[4].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select5) === material[4].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[4].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div className="row mt-3 text-center justify-content-center align-items-center" >
                            <div className="col-sm-3 mb-4">
                                <Field name="select6" as="select" className="form-select" onChange={handleChange}>
                                    <option value="" disabled>Selecciona una distorción cognitiva</option>
                                    {material.map((material, index) => (
                                        <option value={material.id} key={`Material${index}`}>{material.distorsion}</option>
                                    ))}
                                </Field>
                                {errors.select6 && touched.select6
                                    ? (
                                        <div
                                            style={{ color: 'red' }}
                                        >
                                            {errors.select6}
                                        </div>
                                    )
                                    : null}
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[5].pensamientos}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3 mb-4 '>
                                <div className="card">
                                    <div className="card-body">
                                        <p>{material[5].puntos_basicos}</p>
                                    </div>
                                </div>
                            </div>
                            {parseInt(values.select6) === material[5].id ?
                                <div className='col-sm-3 mb-4 '>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{material[5].retroaimentacion}</p>
                                        </div>
                                    </div>
                                </div>
                                : null}
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
    );
}
