/* eslint-disable camelcase */
/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaHandSparkles, FaBrain, FaPencilAlt } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import '../../assets/css/Surveys.scss'
import Scroll from '../../helpers/helperScroll'
import { Warning_Alert, Correct_Alert } from '../../helpers/helper_Swal_Alerts'
import { seccion2, initialOptions, areValidValues, areCorrectAnswers } from '../../helpers/helper_Reg_Emoc_act_1'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import { Actividad } from '../Dashboard/Actividad'
import { Tip } from '../Dashboard/Tip'
import { BotonContext } from '../../context/BotonContext'
import { AvanceContext } from '../../context/AvanceContext'
import { useParams } from 'react-router-dom'

const Part2 = () => {
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
    const color = '#4cbeff'
    const [selectOption, setSelectOption] = useState(initialOptions)
    const [activityIndex, setActivityIndex] = useState(0)

    const handleChange = (event) => {
        setSelectOption(() => { return { ...selectOption, [event.target.name]: event.target.value } })
    }

    const isValidOption = (excluirIndexSelect, groupSelect, value) => {
        for (let index = 0; index < 3; index++) {
            if (index !== excluirIndexSelect) {
                if (selectOption[`select_${groupSelect}_${index}`] === value) {
                    return false
                }
            }
        }
        return true
    }

    const handleSubmit = () => {
        const valueSensaciones = [selectOption.select_sensaciones_0, selectOption.select_sensaciones_1, selectOption.select_sensaciones_2]
        const valuePensamientos = [selectOption.select_pensamientos_0, selectOption.select_pensamientos_1, selectOption.select_pensamientos_2]
        const valueAcciones = [selectOption.select_acciones_0, selectOption.select_acciones_1, selectOption.select_acciones_2]
        const SinAcciones = seccion2.ejercicios[activityIndex].SinAcciones

        /*
          Valido que el usuario haya seleccionado una respuesta por select.
        */
        if (!areValidValues(valueSensaciones)) {
            errorAlert('sensaciones')
            return null
        }

        if (!areValidValues(valuePensamientos)) {
            errorAlert('pensamientos')
            return null
        }
        // Si sinacciones es null, entonces valida el lado derecho.
        if (!SinAcciones && !areValidValues(valueAcciones)) {
            errorAlert('acciones')
            return null
        }

        /*
          Valido que el usuario haya seleccionado las respuestas correctas.
        */
        if (!areCorrectAnswers(valueSensaciones, 'sensaciones', activityIndex)) {
            errorAnswer('sensaciones')
            return null
        }
        if (!areCorrectAnswers(valuePensamientos, 'pensamientos', activityIndex)) {
            errorAnswer('pensamientos')
            return null
        }
        if (!SinAcciones && !areCorrectAnswers(valueAcciones, 'acciones', activityIndex)) {
            errorAnswer('acciones')
            return null
        }

        correctAnswer(seccion2.ejercicios[activityIndex].successMsg).then(() => {
            if (activityIndex + 1 < seccion2.ejercicios.length) {
                restartValuesOption()
                setActivityIndex(activityIndex + 1)
                moveToEjercicio() // sube el scroll. muy util en dispositivos moviles.
            } else {
                setBotonState(false)
                // TODO: Se debe redireccionar.
            }
        }

        )
    }

    const moveToEjercicio = () => {
        Scroll.scroll('ejercicio', true)
    }

    const errorAlert = (seccion) => {
        return Warning_Alert('<h5><b>??Seguro que no olvidaste hacer algo?</b></h5>',
            `<p>Parece que en la columna <i><b>${seccion}</b></i> no diste respuesta a alguna(s) opcion(es)</p>`)
    }

    const errorAnswer = (seccion) => {
        return Warning_Alert('<h5><b>??Sigue intentando!</b></h5>',
            `<p> Una o m??s de las opciones de la columna  <i><b>${seccion}</b></i> no corresponde tan precisamente a la emoci??n</p>`)
    }

    const correctAnswer = (msg) => {
        return Correct_Alert(undefined, msg)
    }

    const restartValuesOption = () => {
        setSelectOption(() => { return (initialOptions) })
    }

    const SinAcciones = seccion2.ejercicios[activityIndex].SinAcciones

    return (
        <div className="container">

            <Actividad
                title={'Actividad 1.2'}
                text={`??Fue dif??cil adivinar a que emoci??n se refer??a cada imagen? Apuesto a que lo has hecho muy bien. Y lo mejor, ??ahora conoces las funciones b??sicas de las emociones y un poco de lo que implican! Aunque seguramente dir??s: ???Pues eso pod??a adivinarlo f??cil, ??no????. Bueno, ??qu?? tal si lo ponemos a prueba?
              <br/><br/>
              Ahora que sabes un poco m??s de estas emociones y recordando lo que hablamos sobre como las emociones se relacionan a unas sensaciones, pensamientos y acciones. ??Puedes identificar cu??les son los que identifican a cada emoci??n?               </p>
              <hr />
              A continuaci??n, para cada emoci??n, selecciona las sensaciones, pensamientos y acciones que crees que pueden asociarse a cada una de estas. ??Usa cada uno de los botones de la columna que corresponda y elige las opciones que creas correctas! Para algunos casos, no ser?? necesario que indiques acciones.
              `}
                src={imgGanso.elegante}
            />
       
        <Actividad showIcon={false} src={imgGanso.explicando} title={"Glosario"} color={"#A1B7EF"} text={`  <ul class="mb-0">
            <li class="my-1"><i>Aumento de las inhalaciones:</i> aumento de las aspiraciones al respirar. </li>
            <li class="my-1"><i>Frecuencia cardiaca:</i> n??mero de veces que se contrae el coraz??n en un minuto.</li>
            <li class="my-1"><i>Frecuencia respiratoria:</i> n??mero de veces en respiraciones.</li>
            <li class="my-1"><i>Interrupci??n puntual:</i> Que se detiene en ese momento por un instante.</li>
            <li class="my-1"><i>Presi??n sangu??nea:</i> tensi??n de la sangre.</li>
            <li class="my-1"><i>Tensi??n muscular:</i> rigidez en alg??n o varios grupos de m??sculos.</li>
        </ul>`} />

<Tip text={'En la columna de pensamientos puede que encuentres expresiones como ?????Ugh!???. Trata de identificar si estas pueden relacionarse a la emoci??n. Tambi??n tienes un peque??o glosario arriba por si tienes alguna duda.'}/>


            <div className="row mb-4 text-center" id="ejercicio">
                <p className="text-strong" style={{ color: color }}> <FaPencilAlt /> Ejercicio {activityIndex + 1} de {seccion2.ejercicios.length} </p>
                <div className="text-center">
                    <img className=" justify-content-center align-self-center" src={seccion2.ejercicios[activityIndex].image} alt="" style={{ width: '50%' }} />
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <div className="card px-4  py-1 mt-4 mb-2 text-center w-75">
                        <div className="card-body p-1 d-flex justify-content-center align-items-center">
                            <p className="card-text">
                                {seccion2.ejercicios[activityIndex].text}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4 align-items-center">
                <div className="col-sm-6 col-lg-4">
                    <h5 style={{ color: color }} className="text-center">
                        <FaHandSparkles /> Sensaciones
                    </h5>

                    {[...Array(3)].map((element, indexSelect) => (
                        <Form.Select
                            defaultValue={'-1'}
                            className="mb-4 mt-3"
                            name={`select_sensaciones_${indexSelect}`}
                            onChange={handleChange}
                            key={`sensaciones_${activityIndex}_${indexSelect}`}
                        >
                            <option
                                value="-1"
                                disabled
                                key={indexSelect}
                            >
                                Seleccciona una opcion
                            </option>
                            {seccion2.ejercicios[activityIndex].sensaciones.map((sensacion, index) => (
                                <>
                                    {isValidOption(indexSelect, 'sensaciones', index)
                                        ?
                                        <option
                                            value={index}
                                            key={`${seccion2.ejercicios[activityIndex].name}
                                            _select_sensaciones_${indexSelect}-${index}`}
                                        >
                                            {sensacion.option}
                                        </option>
                                        :
                                        <></>
                                    }
                                </>
                            ))}
                        </Form.Select>

                    ))}

                </div>
                <div className="col-sm-6 col-lg-4">
                    <h5 style={{ color: color }} className="text-center">
                        <FaBrain /> Pensamientos
                    </h5>

                    {[...Array(3)].map((element, indexSelect) => (
                        <Form.Select defaultValue={'-1'} className="mb-4 mt-3" name={`select_pensamientos_${indexSelect}`} onChange={handleChange} key={`pensamientos_${activityIndex}_${indexSelect}`}>
                            <option value="-1" disabled key={indexSelect}>Seleccciona una opcion</option>
                            {seccion2.ejercicios[activityIndex].pensamientos.map((sensacion, index) => (
                                <>
                                    {isValidOption(indexSelect, 'pensamientos', index) ? <option value={index} key={`${seccion2.ejercicios[activityIndex].name}_select_pensamientos_${indexSelect}-${index}`}>{sensacion.option}</option> : <></>}
                                </>
                            ))}
                        </Form.Select>
                    ))}

                </div>
                <div className="col-sm-12 col-lg-4">
                    {SinAcciones
                        ? (<>
                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: seccion2.ejercicios[activityIndex].SinAcciones }}></p>
                        </>)
                        : (<>
                            <h5 style={{ color: color }} className="text-center">
                                <BiCurrentLocation />Acciones
                            </h5>

                            {[...Array(3)].map((element, indexSelect) => (
                                <Form.Select defaultValue={'-1'} className="mb-4 mt-3" name={`select_acciones_${indexSelect}`} onChange={handleChange} key={`acciones_${activityIndex}_${indexSelect}`}>
                                    <option value="-1" disabled key={indexSelect}>Seleccciona una opcion</option>
                                    {seccion2.ejercicios[activityIndex].acciones.map((sensacion, index) => (
                                        <>
                                            {isValidOption(indexSelect, 'acciones', index) ? <option value={index} key={`${seccion2.ejercicios[activityIndex].name}_select_acciones_${indexSelect}-${index}`}>{sensacion.option}</option> : <></>}
                                        </>
                                    ))}
                                </Form.Select>
                            ))}</>)
                    }

                </div>
                <Button variant="info" size="lg" className="my-3" style={{ color: 'white', backgroundColor: color }} onClick={handleSubmit} >
                    Validar
                </Button>
            </div>

        </div>
    )
}

export default Part2
