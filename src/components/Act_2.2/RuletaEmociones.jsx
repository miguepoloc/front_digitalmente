import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../assets/css/Surveys.scss'

import { imgGanso } from '../../helpers/helper_imagen_ganso'

import { GET_emocion as getEmociones, GET_definiciones_usuario as getDefinicionesUsuario } from '../../helpers/helperApi'
import { ErrorAlert, Correct_Alert } from "../../helpers/helper_Swal_Alerts"

import { ErrorGanso } from '../ErrorGanso'
import { Loading } from '../Loading'
import { ActividadConTip } from '../Dashboard/ActividadConTip'

import { IoMdCheckboxOutline } from "react-icons/io";
const RuletaEmociones = () => {
  const color = "#4cbeff";

  // useEffect(() =>{setColorSelect(color)},[])

  const [definicionesUsuario, setDefinicionesUsuario] = useState(null);
  const [emociones, setEmociones] = useState(null)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [definicionesUsuarioAux, setDefinicionesUsuarioAux] = useState(null);
  // const [emocionesAux, setEmocionesAux] = useState(null)
  const answerDefault = {
    emocionId: -1,
    definicion1Id: -1,
    definicion2Id: -1
  }
  const [answer, setAnswer] = useState(answerDefault)


  const isAnswerCorrect = () => {
    if (answer.emocionId != -1 && answer.definicion1Id != -1 && answer.definicion2Id != -1) {
      const emocion = searchEmocion(answer.emocionId);
      if (emocion) {
        if (validateDefinicion(emocion, answer.definicion1Id) && validateDefinicion(emocion, answer.definicion2Id)) {
          removeSelectedEmocion();
          removeSelectedDefiniciones();
          setAnswer(answerDefault);
          console.log(emociones.length)
          if (emociones.length - 1 == 0) {
            Correct_Alert("¡En horabuena!", "Completaste satisfactoriamente la actividad.");
            //TODO: mandar o redireccionar.
          } else {
            Correct_Alert("¡Excelente!", "Estas experiencias emocionales se relacionan o hacen parte de esta emoción. Si hay más emociones en la rueda, ¡continua! Si no, es hora de pasar a la siguiente fase. ");
          }
        } else if (validateDefinicion(emocion, answer.definicion1Id) || validateDefinicion(emocion, answer.definicion2Id)) {
          ErrorAlert("¡Uf! Ya estas casi cerca", "Revisa una de las definiciones que colocaste. Recuerda a que hacen referencia y conéctalas con la función de las emociones. No olvides presionar el botón azul “Remove” para ir quitando cada emoción a medida que vayas resolviendo.");
        } else {
          ErrorAlert("Lo siento. No parece ser correcto.", "Recuerda a que hacen referencia esas definiciones que colocaste y relaciónalo con la función de la emoción que te ha tocado. No olvides presionar el botón azul “Remove” para ir quitando cada emoción a medida que vayas resolviendo.");
        }
      } else {
        ErrorAlert("Ups algo ha salido mal.", "Parece que has dejado una o varias opcion en blanco");
      }
    } else {
      ErrorAlert("¿Seguro que no olvidaste hacer algo?", "Parece que has dejado una o varias opcion en blanco");
    }
  }

  const searchEmocion = (id, returnIndex = false) => {
    const emocion = emociones.find((emocion) => emocion.id == id);
    return returnIndex ? emociones.indexOf(emocion) : emocion;
  }

  const removeSelectedEmocion = () => {
    setEmociones(emociones.filter(({ id }) => id != answer.emocionId))
  }

  const removeSelectedDefiniciones = () => {
    setDefinicionesUsuario(definicionesUsuario.filter(({ definicion }) => definicion != answer.definicion1Id && definicion != answer.definicion2Id));
  }


  const validateDefinicion = (emocion, definicionId) => {
    return emocion.clasificacion.find((clasificacion) => clasificacion.id == definicionId)
  }

  useEffect(async () => {
    let idUser = 15;
    let definicionesResponse = await getDefinicionesUsuario(idUser);
    let emocionResponse = await getEmociones();
    console.log(definicionesResponse)
    if (emocionResponse !== null && definicionesResponse !== null) {
      console.log(emocionResponse)
      setEmociones(emocionResponse);
      setDefinicionesUsuario(definicionesResponse);
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])

  const handleChange = (e) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  }
  /*
   
    document.querySelector('#iframe_ruleta').addEventListener("load",function() {
      document.querySelector('#iframe_ruleta').contents().querySelector("head")
      .insertAdjacentHTML("beforeend",document.querySelector("<style type='text/css'>  .q-btn{display:none;}  </style>"));
    });*/

  return (
    <div className="container">
      {loading ? (<Loading />) : (
        <>
          {error ? (
            <ErrorGanso />
          ) : (<>

            <ActividadConTip
              actividadTitle={"Actividad 2.2"}
              actividadSText={`¡Le has dado nombre a las experiencias emocionales! Pero… ¿sabes en que familia emocional se ubican? Si recuerdas las funciones de las emociones, como te recomendó Nombre del ganso, no te será difícil la siguiente parte del ejercicio.En la ruleta que ves aquí están los nombres de las emociones básicas. Girala y te aparecerá una emoción. Dale click al botón azul que dice “Remove”. Luego, selecciona la emoción que te salió en “Coloca la emoción”.
                               Ahora, aquí está la tarea, debes ir a las dos barras de abajo y seleccionar en cada una tú definición, sabiendo a que se refieren, que consideres que pertenece o se relacionan con esa emoción. Cada emoción está relacionada con por lo menos dos de las definiciones que has nombrado. Una vez lo selecciones, darle al botón de <b>“Enviar”</b> para comprobar tu respuesta.`}
              actividadSrc={imgGanso.lupa_celular}
              tipText={"Cuando tengas la respuesta correcta de una emoción, vuelve a girar la rueda y repite el ejercicio hasta que no quede ya ninguna emoción en la ruleta. No te preocupes, despues de 5 segundos la opción seleccionada aleatoriamente se eliminará automaticamente."}
            />

            <div className="row">
              <div className="col-md-8">
                <div>
                  <iframe
                    src="https://wheelofnames.com/nz4-k73"
                    width="100%" height="585px" />
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex flex-column justify-content-between">
                <div className="row d-flex align-items-start justify-content-end">
                  <div className="col-xl-7">
                    <Form.Select className="mb-4" name="emocionId" onChange={handleChange}>
                      <option value="-1" >Seleccciona una emocion</option>
                      {emociones?.map(({ id, emocion }) =>
                        <option className='text-capitalize' value={id} key={`${id}-${emocion}`}> {emocion} </option>
                      )
                      }
                    </Form.Select>
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-around">

                    <Form.Select defaultValue={'-1'} className="mb-4 mb-md-0" name="definicion1Id" key={`definicion1_size_${definicionesUsuario.length}`} onChange={handleChange}>
                      <option value="-1" disabled>Definicion 1</option>

                      {definicionesUsuario?.map(({ definicion_usuario, definicion }, i) => {
                        return definicion != answer.definicion2Id ?
                          <option  value={definicion} key={`definicion_usuario1-${i}`}> {definicion_usuario} </option> : <></>
                      }
                      )
                      }
                    </Form.Select>
               

                    <Form.Select defaultValue={'-1'} className="mb-4" name="definicion2Id" key={`definicion2_size_${definicionesUsuario.length}`} onChange={handleChange}>
                      <option value="-1" disabled>Definicion 2</option>
                      {definicionesUsuario?.map(({ definicion_usuario, definicion }, i) => {
                        return definicion != answer.definicion1Id ?
                          <option value={definicion} key={`definicion_usuario2-${i}`} > {definicion_usuario} </option> : <></>
                      }
                      )
                      }
                    </Form.Select>
                    
        
                </div>
                <Button onClick={isAnswerCorrect} className="mt-4 d-flex align-items-center justify-content-center">Validar <IoMdCheckboxOutline className='ms-1'  style={{height:"1.2em", width:"1.2em"}}/></Button>

              </div>
            </div></>)}</>)}
    </div>

  );
}

export default RuletaEmociones
