import React, { useState } from 'react'
import { Actividad } from "../Actividad"
import { imgGanso } from '../../../helpers/helper_imagen_ganso'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form } from 'formik'
import { Correct_Alert, ErrorAlert } from '../../../helpers/helper_Swal_Alerts';

const ValoresIniciales = {
    pregunta1: false,
    pregunta2: false,
    pregunta3: false,
    pregunta4: false,
    pregunta5: false,
    pregunta6: false,
    pregunta7: false,
    pregunta8: false,
}


export const ResolucionProblemas = () => {

    const [CartaColor, setCartaColor] = useState(0)
    const [Siguiente, setSiguiente] = useState(0)

    return (
        <>
            <h2 className='text-center'>Resolución de problemas</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`<br>La solución de problemas está enfocada en mejorar la capacidad para enfrentarse a estresores o acontecimientos traumáticos, problemas cotidianos crónicos y a reducir los problemas de salud mental y física. Con esta se buscaría la adopción de una visión adaptativa hacia los problemas presentes en la vida, con una perspectiva optimista que admita a los problemas como sucesos vitales normales y la implantación eficaz de conductas concretas de solución de problemas, con regulación y gestión emocional y planificación de estrategias para enfrentar problemas. (Nezu, Nezu y D’Zurilla 2014).`

                        }
                        showIcon={false} />
                </div>
                <div className='col-lg-6'>
                    <Actividad
                        siImange={true}
                        src={imgGanso.explicando}
                        title="Para la solución de problemas es necesario tener en cuenta aspectos como: "
                        text={`<ul class="ms-4">
                                <li>	La orientación hacia el problema, tomándola como la habilidad con que una persona afronta una situación problemática o estresante. 	</li>
                                <li>	La definición y formulación del problema, que consiste en el grado de destreza con que una persona define un problema y plantea metas realistas. </li>
                                <li>	El planteamiento de soluciones alternativas a un problema	</li>
                                <li>	La toma de decisiones, enfocada en elegir aquella alternativa que resuelve en mejor manera el problema. 	</li>
                                <li>	Poner en práctica la solución y evaluar la eficacia de la misma.	</li>
                            </ul>`}
                        showIcon={false} />
                </div>
            </div>


            <div className="col">
                <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
                    <img
                        style={{ width: '150px', height: '150px' }}
                        className="card-img-left flex-auto d-block "
                        src={imgGanso.lupa_celular}
                        alt="ganso_lupa_celular"
                    />
                    <div className="card-body d-flex flex-column align-items-start justify-content-center">
                        <h5 className="card-title">Lee la situación problema de Cristopher y elige las posibles alternativas de solución para él</h5>
                        <p className="card-text">
                            Cristopher es un estudiante de cuarto semestre de la carrera de ingeniería industrial de la universidad del Magdalena y se encuentra muy estresado debido a que en una de sus materias más complejas el docente expresó que la totalidad de la nota del semestre se dividiría en un trabajo final y el parcial final,
                            sin embargo Cristopher no está comprendiendo bien las temáticas y siente que no le queda el tiempo suficiente para estudiar debido a que tiene más materias, además de esto vive lejos de la universidad, gasta mucho tiempo transportándose a casa a almorzar y regresando a la universidad a clases o a pasar tiempo en la biblioteca para estudiar,
                            también siente que en su casa no se puede concentrar debido a que su hermano menor hace mucho ruido y  tampoco cuenta con un espacio para hacerlo como le gustaría. Cristopher está convencido de que perderá la materia porque no encuentra alternativas de solución, ha llegado a pensar que no es para nada inteligente ya que otros compañeros si comprenden las temáticas y él sigue sintiéndose incapaz, estresado y frustrado.

                        </p>
                    </div>
                </div>
            </div>



            <Formik
                initialValues={ValoresIniciales}

                // validationSchema={Schema}

                onSubmit={async (values) => {

                    if (Siguiente === 0) {
                        if (CartaColor === 3) {
                            console.log('Está correcto')
                            Correct_Alert("¡Excelente!", "Me agrada que estés conectado con Cristopher, ahora puedes continuar con las siguientes actividades.")
                            setSiguiente(1)

                        } else {
                            ErrorAlert("¡Estás cerca!", "Revisa algunas de las opciones seleccionadas e intenta de nuevo.")
                            console.log('Equivocado')
                        }
                    }
                    else if (Siguiente === 1) {
                        if (
                            values.pregunta1 && values.pregunta3 && values.pregunta4 && values.pregunta7 && !values.pregunta2 && !values.pregunta5 && !values.pregunta6 && !values.pregunta8
                        ) {
                            console.log('Está correcto')
                            Correct_Alert("¡Excelente!", "Me agrada que estés conectado con Cristopher, ahora puedes continuar con las siguientes actividades.")
                            //   TODO REDIRECCIÓN

                        } else {
                            ErrorAlert("¡Estás cerca!", "Revisa algunas de las opciones seleccionadas e intenta de nuevo.")
                            console.log('Equivocado')
                        }

                    }
                }}
            >

                {({
                    values,
                    handleSubmit,
                    handleChange
                }) => (
                    <Form onSubmit={handleSubmit} className="form-login">

                        {Siguiente === 0 ?
                            <>
                                <div className="col">
                                    <div
                                        className="callout mb-5  h-md-250 "
                                        style={{ borderLeftColor: "#07adbe" }}
                                    >
                                        <h5 style={{ color: "#07adbe" }}>
                                            Actividad 1
                                        </h5>

                                        <p>
                                            Elige la solución que debería tomar en cuenta Cristopher atacar su problema dando click sobre la que consideres correcta.
                                        </p>
                                    </div>
                                </div>

                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-lg-6 mt-3'>
                                        <Card onClick={() => {
                                            setCartaColor(1)
                                        }}
                                            {...(CartaColor === 1 ? { className: 'card-text text-primary' } : { className: 'card-text' })}
                                        >
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Solución 1
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 1 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debe decirle a su hermano menor que se vaya a jugar donde sus vecinos en los horarios en los cuales él estudia en casa.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className='col-lg-6 mt-3'>
                                        <Card onClick={() => {
                                            setCartaColor(2)
                                        }}
                                            {...(CartaColor === 2 ? { className: 'card-text text-primary' } : { className: 'card-text' })}
                                        >
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Solución 2
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 2 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debería decirle a un compañero que le explique los temas de la clase y enfocarse en aprenderlos, ahorrando tiempo de almuerzo comiendo algo de la cafetería y planeando su tiempo enfocándose en la asignatura.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </div>

                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-lg-6 mt-3'>
                                        <Card onClick={() => {
                                            setCartaColor(3)
                                        }}
                                            {...(CartaColor === 3 ? { className: 'card-text text-primary' } : { className: 'card-text' })}
                                        >
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Solución 3
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 3 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debería analizar la situación identificando qué cosas de la materia no está comprendiendo, planificar sus horarios y reunirse con compañeros que le podrían explicar, ahorrar tiempo en transporte llevando su almuerzo a la universidad e invirtiendo el mismo en estudiar en la biblioteca, además de verse a sí mismo desde una perspectiva centrada en la realidad notando que en otras asignaturas le va mucho mejor y que con esfuerzos individuales y apoyo de sus compañeros puede ganar el parcial y hacer un muy buen trabajo final.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                    <div className='col-lg-6 mt-3'>
                                        <Card onClick={() => {
                                            setCartaColor(4)
                                        }}
                                            {...(CartaColor === 4 ? { className: 'card-text text-primary' } : { className: 'card-text' })}
                                        >
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Solución 4
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 4 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debe usar todo su tiempo en estudiar para esa asignatura, evitar ir a almorzar y faltar a otras clases si es necesario.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="col">
                                    <div
                                        className="callout mb-5  h-md-250 "
                                        style={{ borderLeftColor: "#07adbe" }}
                                    >
                                        <h5 style={{ color: "#07adbe" }}>
                                            Actividad 2
                                        </h5>

                                        <p>
                                            Elige los aspectos que debería tomar en cuenta Cristopher para dar solución a su situación problema:
                                        </p>
                                    </div>
                                </div>
                                <div className='row justify-content-center align-items-center'>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta1}
                                                checked={values.pregunta1}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Gestión de tiempo"
                                                id="pregunta1"
                                                name="pregunta1"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta2}
                                                checked={values.pregunta2}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Relación con su hermano "
                                                id="pregunta2"
                                                name="pregunta2"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta3}
                                                checked={values.pregunta3}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Técnicas de estudio "
                                                id="pregunta3"
                                                name="pregunta3"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta4}
                                                checked={values.pregunta4}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Autoconfianza "
                                                id="pregunta4"
                                                name="pregunta4"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                </div>

                                <div className='row justify-content-center align-items-center'>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta5}
                                                checked={values.pregunta5}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Grado de dificultad de la asignatura "
                                                id="pregunta5"
                                                name="pregunta5"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta6}
                                                checked={values.pregunta6}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Medio de transporte "
                                                id="pregunta6"
                                                name="pregunta6"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta7}
                                                checked={values.pregunta7}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Pautas de autocuidado  "
                                                id="pregunta7"
                                                name="pregunta7"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }} className="col-lg-3">
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FormControlLabel
                                                value={values.pregunta8}
                                                checked={values.pregunta8}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="Facilidad de otros para aprender "
                                                id="pregunta8"
                                                name="pregunta8"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                </div>
                            </>
                        }



                        <div className="mt-4 mb-4 text-center">
                            <button
                                type="submit"
                                className="text-white btn btn-info "
                            >
                                Siguiente
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}
