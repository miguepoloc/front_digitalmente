import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AvanceContext } from '../../../context/AvanceContext';
import { BotonContext } from '../../../context/BotonContext';
import { paradas } from '../../../helpers/helper_alternativo_act_max';
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { setColorSelect } from '../../../helpers/helper_Reg_Emoc_act_1';
import { RetroalimentacionAlert, SendOkAlert, Warning_Alert } from '../../../helpers/helper_Swal_Alerts';
import Answer from '../../Surveys/Answer';
import { Actividad } from '../Actividad';
import { Descripcion } from '../Descripcion';
import mapa from './assets/img/1Mapa.jpeg'
import Imgfinal from './assets/img/7C.del_exito.png'

export const CaminoAlExito = () => {
        // Variable del url
        const { slug } = useParams()
        const { setBotonState } = useContext(BotonContext);
        // Datos del avance que lleva el usuario
        const { AvanceState } = useContext(AvanceContext);
        const [optionIndex, setOptionIndex] = useState(-1)
        const [activityIndex, setActivityIndex] = useState(0)
        useEffect(() => {
            if (AvanceState.emocional <= parseInt(slug) && paradas.activities.length >= activityIndex) {
                setBotonState(true)
            }else{
                setBotonState(true)
            }
    
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [AvanceState,optionIndex])

        const moveToAgradecimientos = () => {
            setTimeout(()=>{
                var cuackAyuda = document.getElementById("agradecimientos");
                cuackAyuda?.scrollIntoView({behavior: 'smooth'}, true);
            },300)
            
        }
        const moveToDescripcion = () => {
            setTimeout(()=>{
            var cuackAyuda = document.getElementById("descripcion");
            cuackAyuda?.scrollIntoView({behavior: 'smooth'}, true);
            },300)
        }
    
        const color = '#4cbeff'
    
        useEffect(() => { setColorSelect(color) }, [])
        
        
        const handleButtonOption = () => {
            if (optionIndex >= 0) {
                if (
                    optionIndex === paradas.activities[activityIndex].correctAnswerIndex
                ) {

                    let afterThenFunction =  () => {
                        //setOptionIndex(-1)
                        setActivityIndex(activityIndex + 1)
                    }

                    if(activityIndex +1 < paradas.activities.length){
                        RetroalimentacionAlert("Capsula Psicoeducativa ", paradas.activities[activityIndex].messagePill)
                        .then(afterThenFunction)
                        .then(moveToDescripcion)
                    }else{
                        RetroalimentacionAlert("Capsula Psicoeducativa", paradas.activities[activityIndex ].messagePill)
                        .then(()=>SendOkAlert("¡Enhorabuena!", paradas.activities[activityIndex ].messagePill))
                        .then(()=>setActivityIndex(activityIndex + 1))
                        .then(moveToAgradecimientos)

                        console.log(activityIndex)
                        setBotonState(false)
                    }
                   
                } else {
                    Warning_Alert('¿Seguro que es la respuesta?', '¿Porque no intentas otra vez?')
                }
            }
        }
  return (
    <div className="mx-3 mx-md-4">
    {/* <Actividad
        title={"Actividad 3. Camino al exito"}
        text={`La presente actividad es de carácter psicoeducativo, contextualizada en nuestra vida cotidiana ya que presenta de forma creativa nuestras vivencias sobre la procrastinación de una forma inusual a través de un personaje llamado Max.`}
        src={imgGanso.lupa_celular}
    /> */}

    <Actividad
        title={"Actividad 3. Toma de decisiones"}
        text={`Max se encuentra en la <b>Ciudad de las Buenas Intenciones</b> y está rodeado por el Mar de la Procrastinación, para llegar a la <b>Ciudad del Éxito</b>, él debe pasar por varios obstáculos por lo que requiere de tu ayuda para lograrlo. A continuación, te mostraremos un mapa del recorrido, tu misión es ayudarle a tomar las decisiones para que pueda llegar hasta su META. ¡Ten cuidado!, a Max le gusta dejar para después sus tareas y en el Mar de la Procrastinación pueden encontrarse muchos peligros como: <b>El árbol de las inseguridades</b>, el cual conoce tus mayores secretos y hará todo lo posible por hacerte sentir inferior; <b>la montaña de la distracción</b>, cuenta la leyenda que se albergan criaturas hipnotizantes que no puedes dejar de apreciar; <b>la zona de confort</b>, la cual posee la mayor comodidad existente del MUNDO, es tan agradable que no te querrás ir; tampoco podemos olvidar la <b>cueva del rey teléfono</b>, el cual es todo un parlanchín, un experto en conversar; mucho menos de los tenebrosos animales que se han infectado de la enfermedad de “la flojera”, los ladrones de tiempo, y las hadas del sueño que en cualquier momento te lanzan un hechizo de sueño profundo. <br> 
        <br/>
        <div class="text-center"><b>¡COMENCEMOS!</b></div>`}
        src={imgGanso.elegante}
        showIcon={true}
    />

    {/* Si la persona aun no ha terminado las actividades */}
    {activityIndex  < paradas.activities.length && <>
    <div className='text-center mt-3'>

        <img className='rounded-3' src={mapa} style={{maxWidth:"700px",width:"100%"}}/>
        <p>Instrucciones: A continuación, debes seleccionar (Dar click a) la respuesta correcta para que Max pueda Avanzar en el recorrido</p>
    </div>

        <Descripcion title={paradas.activities[activityIndex].name}
    text={paradas.activities[activityIndex].text}
    centerTitle={true}
    centerText={true}
     id={"descripcion"}
    />
    
    <div className='d-flex justify-content-center align-items-center'>
        <div className="row " style={{maxWidth:"1200px",width:"100%"}}>
                <div className="col-md-4 mb-4">
            <img className='rounded-3' style={{maxWidth:"372px",width:"100%"}} src={paradas.activities[activityIndex].img}/>
            </div>
            <div  className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="mb-4">
                    <div
                        className="card-header  d-flex align-items-center"
                        style={{ backgroundColor: color }}
                    >
                        <h5 className="my-0 font-weight-normal text-white text-center ">
                            {paradas.activities[activityIndex].question}
                        </h5>
                    </div>
                    <div className="border shadow w-100 card-body float-left pt-0">
                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                            {paradas.activities[activityIndex].options.map((opcion, index) => {
                                return (
                                    <Answer
                                        _name={paradas.activities[activityIndex].question}
                                        _text_answer={opcion}
                                        _id={`option_${activityIndex}_${index}`}
                                        key={`option_${index}_${activityIndex}`}
                                        handleClickAnswer={() => setOptionIndex(index)}
                                    />
                                )
                            })}
                            {
                                <div className="mt-4 text-center">
                                    <button
                                        type="button"
                                        className="text-white btn btn-info "
                                        // disabled={optionIndex === -1}
                                        onClick={handleButtonOption}
                                    >
                                        Validar
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    </>}
    {/* Si la persona terminó sus actividades */}
    {activityIndex >= paradas.activities.length && <>
        <div className='text-center mt-3' >

            <img id="agradecimientos" className='rounded-3 mb-3' src={Imgfinal} style={{maxWidth:"500px",width:"100%"}}/>
            <p>Seguramente en el camino te sentiste identificado con muchas cosas, ¡no lo hubiéramos podido hacer sin tu ayuda! </p>
            <p><b>Max espera que puedas poner en práctica todos los tips, ¡chaooo!</b></p>
        </div>
    </>}
</div>
  )
}
