import React, { useState, useContext, useEffect } from 'react'
import { Actividad } from "../Actividad"
import { imgGanso } from '../../../helpers/helper_imagen_ganso'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form } from 'formik'
import { Correct_Alert, ErrorAlert, ErrorAlertSiNo, SendOkAlert } from '../../../helpers/helper_Swal_Alerts';
import { BotonContext } from '../../../context/BotonContext'
import Axios from 'axios'

import { AuthContext } from '../../../context/AuthContext'
import { useParams } from 'react-router-dom';


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
    // Variable del url
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext);
    const { authState } = useContext(AuthContext)
    const { userInfo } = authState
    const [dataAvance, setdataAvance] = useState(false);
    //const [intentos, setIntentos] = useState(1);

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
                setdataAvance(response.data)
            } else {
                //console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (dataAvance.estres <= parseInt(slug))
            setBotonState(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataAvance])


    const [CartaColor, setCartaColor] = useState(0)
    const [Siguiente, setSiguiente] = useState(0)

    return (
        <>
            <h2 className='text-center'>Resoluci??n de problemas</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Actividad src={imgGanso.meditando} title="??Para qu?? me servir?? esta actividad?"
                        text={`<br>La soluci??n de problemas est?? enfocada en mejorar la capacidad para enfrentarse a estresores o acontecimientos traum??ticos, problemas cotidianos cr??nicos y a reducir los problemas de salud mental y f??sica. Con esta se buscar??a la adopci??n de una visi??n adaptativa hacia los problemas presentes en la vida, con una perspectiva optimista que admita a los problemas como sucesos vitales normales y la implantaci??n eficaz de conductas concretas de soluci??n de problemas, con regulaci??n y gesti??n emocional y planificaci??n de estrategias para enfrentar problemas. (Nezu, Nezu y D???Zurilla 2014).`

                        }
                        showIcon={false} />
                </div>
                <div className='col-lg-6'>
                    <Actividad
                        siImange={true}
                        src={imgGanso.explicando}
                        title="Para la soluci??n de problemas es necesario tener en cuenta aspectos como: "
                        text={`<ul class="ms-4">
                                <li>	La orientaci??n hacia el problema, tom??ndola como la habilidad con que una persona afronta una situaci??n problem??tica o estresante. 	</li>
                                <li>	La definici??n y formulaci??n del problema, que consiste en el grado de destreza con que una persona define un problema y plantea metas realistas. </li>
                                <li>	El planteamiento de soluciones alternativas a un problema	</li>
                                <li>	La toma de decisiones, enfocada en elegir aquella alternativa que resuelve en mejor manera el problema. 	</li>
                                <li>	Poner en pr??ctica la soluci??n y evaluar la eficacia de la misma.	</li>
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
                        <h5 className="card-title">Lee la situaci??n problema de Cristopher y elige las posibles alternativas de soluci??n para ??l</h5>
                        <p className="card-text">
                            Cristopher es un estudiante de cuarto semestre de la carrera de ingenier??a industrial de la universidad del Magdalena y se encuentra muy estresado debido a que en una de sus materias m??s complejas el docente expres?? que la totalidad de la nota del semestre se dividir??a en un trabajo final y el parcial final,
                            sin embargo Cristopher no est?? comprendiendo bien las tem??ticas y siente que no le queda el tiempo suficiente para estudiar debido a que tiene m??s materias, adem??s de esto vive lejos de la universidad, gasta mucho tiempo transport??ndose a casa a almorzar y regresando a la universidad a clases o a pasar tiempo en la biblioteca para estudiar,
                            tambi??n siente que en su casa no se puede concentrar debido a que su hermano menor hace mucho ruido y  tampoco cuenta con un espacio para hacerlo como le gustar??a. Cristopher est?? convencido de que perder?? la materia porque no encuentra alternativas de soluci??n, ha llegado a pensar que no es para nada inteligente ya que otros compa??eros si comprenden las tem??ticas y ??l sigue sinti??ndose incapaz, estresado y frustrado.

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
                            console.log('Est?? correcto')
                            Correct_Alert("??Excelente!", "Me agrada que est??s conectado con Cristopher, ahora puedes continuar con las siguientes actividades.")
                            setSiguiente(1)


                        } else {
                            ErrorAlert("??Est??s cerca!", "Revisa algunas de las opciones seleccionadas e intenta de nuevo.")
                            console.log('Equivocado')
                        }
                    }
                    else if (Siguiente === 1) {
                        if (
                            values.pregunta1 && values.pregunta3 && values.pregunta4 && values.pregunta7 && !values.pregunta2 && !values.pregunta5 && !values.pregunta6 && !values.pregunta8
                        ) {
                            console.log('Est?? correcto')
                            Correct_Alert("??Excelente!", "Me agrada que est??s conectado con Cristopher, ahora puedes continuar con las siguientes actividades.")
                            setBotonState(false)
                        } else {
                            let respuestasCorrectas = "";
                            respuestasCorrectas += values.pregunta1? `<span style="color:#42ab49;">*Gesti??n de tiempo</span><br/>`:"";
                            respuestasCorrectas += values.pregunta3? `<span style="color:#42ab49;">*T??cnicas de estudio</span><br/>`:"";
                            respuestasCorrectas += values.pregunta4? `<span style="color:#42ab49;">*Autoconfianza</span><br/>`:"";
                            respuestasCorrectas += values.pregunta7? `<span style="color:#42ab49;">*Mejorar su alimentaci??n</span><br/>`:"";
                            
                            respuestasCorrectas = respuestasCorrectas ===""?`<span style="color:#5086c1;">*No has seleccionado ninguna respuesta correcta</span><br/>` : `Estas son tus respuestas correctas
                            <br/>
                            <br/> ${respuestasCorrectas}`;

                            ErrorAlertSiNo("??Est??s cerca!", `
                            ${respuestasCorrectas}
                            </br>
                            ??Quieres intentarlo nuevamente?
                            `).then(({isDismissed})=>{

                                if(isDismissed){
                                    SendOkAlert("Estas son las respuestas correctas",
                                    `
                                    <span style="color:#42ab49;">*Gesti??n de tiempo</span><br/>
                                    <span style="color:#42ab49;">*T??cnicas de estudio</span><br/>
                                    <span style="color:#42ab49;">*Autoconfianza</span><br/>
                                    <span style="color:#42ab49;">*Mejorar su alimentaci??n</span><br/>
                                    <br/>
                                    Si no pudiste descifrarlas no te preocupes, la idea es que podamos aprender de este ejercicio!
                                    `
                                    )
                                }
                            })
                            setBotonState(false)
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
                                            Elige la soluci??n que deber??a tomar en cuenta Cristopher atacar su problema dando click sobre la que consideres correcta.
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
                                                        Soluci??n 1
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 1 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debe decirle a su hermano menor que se vaya a jugar donde sus vecinos en los horarios en los cuales ??l estudia en casa, con el fin de aplicar habilidades comunicativas con su entorno familiar que lo lleven a soluciones c??modas para s?? mismo.                                                    </Typography>
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
                                                        Soluci??n 2
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 2 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher deber??a decirle a un compa??ero que le explique los temas de la clase y enfocarse en aprenderlos, ahorrando tiempo de almuerzo comiendo algo de la cafeter??a y planeando su tiempo enfoc??ndose en la asignatura, formulando adem??s estrategias que le permitir?? tener redes sociales de apoyo s??lidas y cuidar de su salud f??sica y mental, mientras adquiere conocimientos vitales para la carrera.                                                    </Typography>
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
                                                        Soluci??n 3
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 3 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher deber??a analizar la situaci??n identificando qu?? cosas de la materia no est?? comprendiendo, planificar sus horarios y reunirse con compa??eros que le podr??an explicar, ahorrar tiempo en transporte llevando su almuerzo a la universidad e invirtiendo el mismo en estudiar en la biblioteca, adem??s de verse a s?? mismo desde una perspectiva centrada en la realidad notando que en otras asignaturas le va mucho mejor y que con esfuerzos individuales y apoyo de sus compa??eros puede ganar el parcial y hacer un muy buen trabajo final.                                                    </Typography>
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
                                                        Soluci??n 4
                                                    </Typography>
                                                    <Typography variant="body2" {...(CartaColor === 4 ? { className: 'card-text text-primary' } : { className: 'card-text' })}>
                                                        Cristopher debe usar todo su tiempo en estudiar para esa asignatura, evitar ir a almorzar y faltar a otras clases si es necesario ya que mientras m??s tiempo y esfuerzos le dedique a tener horarios de estudio, tendr?? mayores posibilidades de aprender para los parciales, adem??s no se distraer?? con nada que no sea relacionado a lo acad??mico y eso ser?? muy necesario durante toda la vida acad??mica.                                                    </Typography>
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
                                            Elige los 4 aspectos que deber??a tomar en cuenta Cristopher para dar soluci??n a su situaci??n problema:
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
                                                label="Gesti??n de tiempo"
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
                                                label="Relaci??n con su hermano "
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
                                                label="T??cnicas de estudio "
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
                                                label="Mejorar su alimentaci??n"
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
                                Validar
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}
