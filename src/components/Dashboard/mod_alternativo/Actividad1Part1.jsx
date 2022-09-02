import React, { useContext, useEffect, useState} from 'react'
import { Actividad } from "../Actividad"
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import Chart from "react-apexcharts";
import './assets/css/form.scss'
import { BotonContext } from '../../../context/BotonContext';
import { AvanceContext } from '../../../context/AvanceContext';
import { AuthContext } from '../../../context/AuthContext';
import { useParams } from 'react-router-dom'

export const Actividad1Part1 = () => {
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext)

    const [respuesta, setRespuesta] = useState({
        familia: 0,
        estudio: 0,
        amigos: 0,
        pareja: 0,
        trabajo: 0,
        ocio: 0,
        salud: 0
    })

    const { AvanceState } = useContext(AvanceContext);
    const [mostrarGrafico, setMostrarGrafico] = useState(false)
    const { authState } = useContext(AuthContext)


    useEffect(() => {
        console.log(AvanceState.habilidades,AvanceState.habilidades == 1 && !mostrarGrafico)
        if (AvanceState.habilidades <= parseInt(slug) && !mostrarGrafico ){
            setBotonState(true)
        }
        else{
            setBotonState(false)
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState,mostrarGrafico])
    

    const capitalice = (array) => {
        return array.map(function (str) {
            return str[0].toUpperCase() + str.substring(1, str.length);
        });
    }
    const verificarValores = () => {
        let maximoPermitido = 24;
        for (let key of Object.keys(respuesta)) {
            maximoPermitido -= respuesta[key];
        }
        return maximoPermitido;
    }

    const extraerValores = () => {
        let valores = []
        for (let key of Object.keys(respuesta)) {
            valores.push(respuesta[key]);
        }
        return valores
    }

    const moveToGrafico = () => {
        setTimeout(()=>{
        var cuackAyuda = document.getElementById("chart");
        cuackAyuda?.scrollIntoView({behavior: 'smooth'}, true);
        },300)
    }


    const handleChange = (e) => {
        setRespuesta({ ...respuesta, [e.target.name]: parseInt(e.target.value) });

    }

    const handleSubmit = () => {
        setMostrarGrafico(true)
        moveToGrafico()
        //TODO: activar boton
        if (verificarValores() >= 0) {
            //setMostrarGrafico(!mostrarGrafico)
        } else {
            console.log("Las horas agregadas superan las horas del día (24h)")
        }
    }

    /*const options = {
        series: extraerValores(),
        labels: Object.keys(respuesta),
        size: 200
    }*/
    const options = {
        series: extraerValores(),
        labels: capitalice(Object.keys(respuesta)),
        width: "100%",

        plotOptions: {
            pie: {
                donut: {
                    size: "50px",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: "1em"
                        }
                    }
                }
            }
        },
        colors:['#E5BEDD', '#FFA8B8', '#DCD9F7','#F8D9C3','#FFC8C4','#A9E5E3','#BBCEF3']

    }

    return (
        <>
            <h2 className='text-center'>Planear&Actuar Vs Procrastinar</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-5'>
                    <Actividad src={imgGanso.elegante} title=""
                        text={`Hola, Soy Cuack y quiero hablarte un poco sobre la procrastinación `} showIcon={false} />
                </div>
                <div className='col-lg-7'>
                    <Actividad src={imgGanso.leyendo} title="Procrastinación"
                        text={`La “procrastinación” deriva del latín procrastinare, cuyo significado es “dejar las cosas o posponerlas para otro día” 
                        `
                        } showIcon={false} />
                    <Actividad src={imgGanso.durmiendo} title="Seguramente te suena, ¿cierto?"
                        text={`Esta procrastinación es la tendencia a posponer o retrasar la finalización de una labor o tarea evitando la responsabilidad, decisiones y tarea que requieren ser desarrolladas (Ruiz y Cuzcano, 2017)
                        <br/>
                        Algunos consideran que la procrastinación es en gran medida un tema de poca organización del tiempo y autorregulación, pero más adelante profundizaremos sobre el origen de esta
                        `
                        } showIcon={false} />
                </div>
            </div>
            <p className="baseintro__para">Es por eso que en esta actividad abordaremos la planeación y organización del tiempo. Para este punto es necesario que identifiques la forma en que distribuyes tu tiempo de forma cotidiana para saber, así como trabajar.</p>

            <Actividad imageRight={true} src={imgGanso.lupa_celular} title="¿Sabias qué?"
                text={`Mientras avanzamos me gustaría preguntarte si ¿Sabías que el día tiene 1440 minutos aproximadamente, ¿En que los estas distribuyendo?`
                } showIcon={false} />

            {!mostrarGrafico ? (<>
                <div className='d-flex justify-content-center my-4'>
                    <div className="baseintro rounded-3">
                        <header className="baseintro__header rounded-top ">
                            <h1 className="baseintro__title">Actividad - distribución de tiempo</h1>
                            <p className="baseintro__para">Es por eso que en esta actividad abordaremos la planeación y organización del tiempo. Para este punto es necesario que identifiques la forma en que distribuyes tu tiempo de forma cotidiana para saber, así como trabajar.</p>
                        </header>
                        <form className="baseform">

                            <div className="baseform__set baseform__set--shrinkinglabels">
                                <h2 className="baseform__title--subset">01. Familia</h2>
                                <label className="baseform__label">
                                    <input step={1} onWheel={handleChange} onChange={handleChange} className="baseform__txtinput" name="familia" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuántas horas pasas con tu familia?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">02. Estudio</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="estudio" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas al estudio?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">03. Amigos</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="amigos" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas a tus amigos?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">04. Pareja</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="pareja" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas a tu pareja?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">04. Trabajo</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="trabajo" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas a tu trabajo?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">05. Ocio</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="ocio" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas al ocio?</div>
                                </label>
                            </div>

                            <div className="baseform__set baseform__set--shrinkinglabels baseform__set--validpositive">
                                <h2 className="baseform__title--subset">06. Salud</h2>
                                <label className="baseform__label">
                                    <input onChange={handleChange} className="baseform__txtinput" name="salud" type="number" max={24} min={0} required="required" />
                                    <div className="baseform__txtlabel">¿Cuánto horas le dedicas a tu salud?</div>
                                </label>
                            </div>
                            <div className='text-center'>
                                <button type='button' className='btn btn-info btn-lg btn-block' onClick={handleSubmit}> Siguiente </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>) : <>
                <div className="my-4" id="chart">
                    <Chart
                        options={options}
                        series={extraerValores()}
                        type="donut"
                        width={"100%"}
                        style={{ maxWidth: "500px", margin: "0 auto" }}
                    />
                    <Actividad src={imgGanso.pensando} title="Piensa en el resultado anterior y responde las siguientes preguntas"
                        text={`¿Qué es lo que más te sorprende de lo que has escrito?<br/>
                        ¿Hay algo para lo que aún no encuentras tiempo?
                        
                        `
                        } showIcon={false} />
                    
                    <Actividad src={imgGanso.explicando} title="Tip"
                        text={`Independientemente del resultado anterior, te recomendamos que para una mejor organización del tiempo hagas una agenda o una lista de cosas por hacer, esto te ayudará a tener los compromisos en orden, ahorrar tiempo, cumplir fechas y establecer prioridades
                        `
                        } showIcon={false}  imageRight={true}/>

                </div></>}



        </>
    )
}
