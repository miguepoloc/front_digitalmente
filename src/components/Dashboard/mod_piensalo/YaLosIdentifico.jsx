import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { Actividad } from '../Actividad'

export const YaLosIdentifico = () => {
    const [Siguiente, setSiguiente] = useState(false);

    const handleSiguiente = () => setSiguiente(true)
    return (
        <>
            <h2 className='text-center'>Ya los identifico, ahora ¿qué hago? </h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-12'>
                    <Actividad src={imgGanso.meditando} title="Objetivo"
                        text={`Fomentar el desarrollo de habilidades que favorezcan el cuestionamiento de supuestos y creencias`} showIcon={false} />
                </div>

            </div>
            {
                Siguiente
                    ?
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-12'>
                            <Actividad siImange={true} src={imgGanso.explicando} title="Instrucciones"
                                text={`Hemos hecho un recorrido que nos ha permitido identificar algunas distorsiones, también hemos logrado ver diferentes formas de poder emplear la lógica para cuestionarnos sobre estos, es por esto que te invito en este apartado a escribir un supuesto y cuestionarlo empleando las diferentes formas que se mostraron anteriormente, es muy importante que utilices todas para poder identificar cual se ajusta más a ti`
                                } showIcon={false} />
                        </div>
                    </div>
                    :
                    <div className="mt-4 mb-4 text-center">
                        <button
                            type="submit"
                            className="text-white btn btn-info "
                            onClick={handleSiguiente}
                        >
                            Validar
                        </button>
                    </div>
            }

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-2'>
                    <img
                        // style={{ width: "150px", height: "150px" }}
                        className="card-img-left  justify-content-center align-self-center"
                        src={imgGanso.explicando}
                        alt="ganso_lupa_celular"
                    />
                </div>
                <div className='col-lg-10'>
                    <Table
                        // striped="columns"
                        // bordered
                        striped
                        // size="sm"
                        hover
                        responsive
                    >
                        <thead>
                            <tr>
                                <th width="18px">Supuesto o creencia</th>
                                <th width="18px">Tipo de cuestionamiento</th>
                                <th width="18px">Ejercicio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={6}>Si voy a realizar esta actividad debe quedar perfecta, sino es así no vale para nada la pena</td>
                            </tr>
                            <tr>
                                <td>¿De qué modo es el supuesto o creencia no razonable?</td>
                                <td>No es solo formular preguntas que nos permitan llegar a identificar argumentos que contradigan el supuesto o creencia, sino de hallar recursos internos que persuadan, por ejemplo, identificar una creencia o supuesto adecuado: “hacer siempre todas las cosas buscando el mayor nivel de perfección consume mucho tiempo y no deja espacio para poder hacer cosas que me diviertan”</td>

                            </tr>
                            <tr>
                                <td>¿De qué modo es el supuesto o creencia poco útil? </td>
                                <td>Podemos realizar un listado de las ventajas y desventajas del supuesto o creencia, por ejemplo:
                                    Ventajas: Se entrega un buen trabajo.
                                    Desventajas: No puedo dormir bien, descuido mi salud, me siento ansioso, evito situaciones.

                                    Una vez realizado el listado, debemos cuestionar las ventajas, ¿Es esta la única forma de entregar un buen trabajo?
                                </td>
                            </tr>
                            <tr>
                                <td>¿Cuál sería una alternativa más moderada que proporcionaría las ventajas del supuesto o creencia disfuncional sin sus desventajas?</td>
                                <td>Estos supuestos o creencias disfuncionales muchas veces se encuentran en extremos, es importante encontrar puntos medios. Por ejemplo, en este caso se podría reformular de la siguiente manera: “Es bueno buscar realizar una actividad de manera correcta, pero no tiene que ser perfecta, soy humano y lo importante es ir aprendiendo”
                                </td>
                            </tr>
                            <tr>
                                <td>¿De dónde proviene la creencia?</td>
                                <td>Estas creencias se han ido formando en diferentes etapas de nuestra vida, encontrándose la mayoría de estas en la niñez. Lograr identificar como se creó permite generar distancia. Por ejemplo: Cuando era niño debía hacer todo perfecto porque si no mis padres me castigaban.
                                </td>
                            </tr>
                            <tr>
                                <td>Emplear continuos </td>
                                <td>Otra forma de encontrar los puntos medios es generar continuos, podemos definir puntos intermedios como 2,4,6,8 en un continuo del 0 al 10 para analizar un supuesto o creencia.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
