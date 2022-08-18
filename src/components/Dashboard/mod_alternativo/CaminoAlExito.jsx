import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AvanceContext } from '../../../context/AvanceContext';
import { BotonContext } from '../../../context/BotonContext';
import { paradas } from '../../../helpers/helper_alternativo_act_max';
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { setColorSelect } from '../../../helpers/helper_Reg_Emoc_act_1';
import { Correct_Alert, RetroalimentacionAlert, SendOkAlert, Warning_Alert } from '../../../helpers/helper_Swal_Alerts';
import Answer from '../../Surveys/Answer';
import { Actividad } from '../Actividad';
import { ActividadConDesc } from '../ActividadConDesc';
import { Descripcion } from '../Descripcion';
import mapa from './assets/img/1Mapa.jpeg'


export const CaminoAlExito = () => {
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
    
        useEffect(() => { setColorSelect(color) }, [])
        const [optionIndex, setOptionIndex] = useState(-1)
        const [activityIndex, setActivityIndex] = useState(0)
        
        const handleButtonOption = () => {
            if (optionIndex >= 0) {
                if (
                    optionIndex === paradas.activities[activityIndex].correctAnswerIndex
                ) {

                    let afterThenFunction =  () => {
                        //setOptionIndex(-1)
                        if (activityIndex + 1 < paradas.activities.length) {
                            setActivityIndex(activityIndex + 1)
                        } 
                        else {
                            setBotonState(false)
                            // TODO: redireccionar a algun lugar.
                        }
                    }

                    if(activityIndex + 1 != paradas.activities.length){
                        RetroalimentacionAlert("Capsula Psicoeducativa ", paradas.activities[activityIndex].messagePill).then(afterThenFunction)
                    }else{
                        RetroalimentacionAlert("Capsula Psicoeducativa", paradas.activities[activityIndex].messagePill)
                       .then( ()=>SendOkAlert("¡Enhorabuena", paradas.activities[activityIndex].messagePill))
                        .then(()=>afterThenFunction)
                    }
                   
                } else {
                    Warning_Alert('¿Seguro que es la respuesta?', '¿Porque no intentas otra vez?')
                }
            }
        }
  return (
    <div className="mx-3 mx-md-4">
    <Actividad
        title={"Actividad 3. Camino al exito"}
        text={`La presente actividad es de carácter psicoeducativo, contextualizada en nuestra vida cotidiana ya que presenta de forma creativa nuestras vivencias sobre la procrastinación de una forma inusual a través de un personaje llamado Max.`}
        src={imgGanso.lupa_celular}

    />
    <div className='text-center mt-3'>

        <img className='rounded-3' src={mapa} style={{maxWidth:"700px",width:"100%"}}/>
        <p>Instrucciones: A continuación, debes seleccionar (Dar click a) la respuesta correcta para que Max pueda Avanzar en el recorrido</p>
    </div>


    <Descripcion title={paradas.activities[activityIndex].name}
    text={paradas.activities[activityIndex].text}
    />
    
    <div className='d-flex justify-content-center align-items-center'>
        <div className="row " style={{maxWidth:"1200px",width:"100%"}}>
            <div className="col-md-4">
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
</div>
  )
}
