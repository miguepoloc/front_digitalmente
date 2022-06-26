/* eslint-disable new-cap */
/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'
import { Surveys as model_surveys } from './assets/js/Surveys'
import '../../assets/css/Surveys.scss'
import Survey from './Survey'
import ganso_pensando from '../../assets/img/ganso/ganso_pensando.png'
import { ErrorAlert, SendAlert, SendOkAlert, SendBadAlert } from '../../helpers/helper_Swal_Alerts'
import { GET_vista_pregunta_respuesta as getSurveys, POST_usuario_encuesta as SendSurveys } from '../../helpers/helperApi'
import { ErrorGanso } from '../ErrorGanso'
import { Loading } from '../Loading'
import { Resultados } from './Resultados'
import { AuthContext } from '../../context/AuthContext'
import { SurveysLocalStorage } from './assets/js/Surveys_localStorage'
const errorFaltaPorResponder = () => {
  ErrorAlert('Ups...', 'Parece que alguna pregunta de esta encuesta ha quedado sin responder. por favor, asegurate de que <b> todas </b> las preguntas tengan respuesta')
}

const Surveys = () => {
  const { authState } = useContext(AuthContext)

  const { userInfo } = authState

  const id_user = userInfo.id
  const id_sexo_user = userInfo.sexo.id

  const [surveys, setSurveys] = useState(new model_surveys(null, id_user, id_sexo_user, false))
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [nextOrPrev, setNextOrPrev] = useState(false) // lo uso para cargar las preguntas si da back.
  const [isBtnSendDisabled, setIsBtnSendDisabled] = useState(false)
  const [showResults, setShowResults] = useState(null)

  const recuperarDatosLocalStorage = () => {
    let datos
    try {
      datos = SurveysLocalStorage.recuperarDatosLocalStorage(id_user)
      if (datos) {
        //  Si los datos fueron recuperados.
        SendOkAlert('¡En horabuena!', '¡He podido recuperar tus respuestas! Intenta terminar de responder las preguntas. Si tienes alguna falla de conexión, solo podre mantenerlas guardadas temporalmente hasta 48 horas. Una vez termines el módulo y envíes tus respuestas completas, se guardaran definitivamente.', undefined, undefined)
      } else {
        SendBadAlert('Ups...', '¡Lo siento! Han pasado mas de 48 horas desde la ultima vez que intentaste responder las preguntas. Inténtalo nuevamente.<br/> Recuerda que si tienes alguna falla de conexión, solo podre mantenerlas guardadas temporalmente hasta 48 horas. Una vez termines el módulo y envíes tus respuestas completas, se guardaran definitivamente', undefined, undefined)
      }
      return datos
    } catch (error) {
      return null //  no se encontraron datos.
    }
  }

  const llenarEncuesta = () => {
    surveys.selectAllOptionRandom()
    surveys.markAllQuestionSelected()
  }

  useEffect(async () => {
    const response = await getSurveys()
    console.log(response)
    if (response) {
      try {
        const data = recuperarDatosLocalStorage()
        console.log(data)
        if (data) {
          console.log(data.datosSurveys)
          setSurveys(new model_surveys(response, id_user, id_sexo_user).loadDataLocalStorage(data.datosSurveys))
        } else {
          setSurveys(new model_surveys(response, id_user, id_sexo_user))
        }
        // setSurveys(surveys.loadDataLocalStorage(recuperarDatosLocalStorage()).clone());
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
        setError(true)
      }
    } else {
      setLoading(false)
      setError(true)
    }
  }, [])

  useEffect(
    function () {
      if (surveys.arrSurvey) {
        moveToStart()
      }
    },
    [nextOrPrev]
  )

  const moveToStart = () => {
    // TODO: activar esto.
    // Scroll.scroll("startSurvey",true);
  }
  /**
     * La funcion se encarga de lanzar la siguiente o anterior encuesta
     * si cumple con los criterios establecidos.
     * @param {boolean} isNext
     */
  const handeButtonNavSurvey = async (isNext = true) => {
    /* bloque de prueba */
    //  surveys.selectAllOptionRandom();
    /* fin bloque de prueba */

    if (!surveys.isAllQuestionsSelected() && isNext) {
      errorFaltaPorResponder()
    }

    const newObjSurveys = isNext ? surveys.nextSurvey() : surveys.prevSurvey()
    if (newObjSurveys) {
      setSurveys(newObjSurveys)
      setNextOrPrev(!nextOrPrev)
    }
  }

  const buildDataToSend = () => {
    const sizeDataSurveys = surveys.getLengthJsonSurvey()
    const dataSurveys = surveys.generateJsonToSend()
    const arrDataToSend = []
    for (let i = 0; i < sizeDataSurveys; i++) {
      arrDataToSend.push(createDataToSend(dataSurveys, i))
    }
    return arrDataToSend
  }

  /**
    *
    * @param {Array<JSON>} answers
    * @param {Number} userId
    * @param {Number} index
    * @returns JSON
    */
  const createDataToSend = (answers, index) => {
    const key = Object.keys(answers)[index]

    const row = {
      id_usuario: '' + id_user,
      id_encuesta: key,
      respuestas: answers[key]
    }
    return row
  }

  const handleButtonSendSurvey = async () => {
    /* Antes de hacer la peticion, rectifica que todas las preguntas
        de las encuestas tengan respuesta.
      */
    if (surveys.isAllSurveysAnswered()) {
      setIsBtnSendDisabled(() => true)
      SendAlert(undefined, 'Tus respuestas estan siendo enviadas y procesadas <b>Espera un momento</b>')
      // Debería esperar una respuesta de todo ok., si la respuesta es negativa el boton vuelve a quedar
      const send = await SendSurveys(buildDataToSend())

      if (send) {
        // TODO: Redireccionar a un lugar....
        console.log(surveys.jsonSurvey)

        SendOkAlert(undefined, '¡Enhorabuena! ¡Tus respuestas han sido procesadas y <b>he traído los resultados</b>!').then(() => { setShowResults(surveys.results()) })
        SurveysLocalStorage.eliminarDatos(id_user)
        window.localStorage.removeItem('data_survey_local') // Borrando el local storage...
      } else {
        console.log(send)
        SendBadAlert()
      }
    } else {
      errorFaltaPorResponder()
    }
  }

  const selectOption = (id_pregunta, id_answer) => {
    surveys.selectOption(id_pregunta, id_answer)
    setSurveys(surveys)
  }

  return (
    <>
      <section id="startSurvey" className="container">
        {
          loading
            ? (<Loading />)
            : (<>
              {error
                ? (<ErrorGanso text={'Uhm... Parece que ha ocurrido un error al obtener las pruebas diagnósticas.'} />)
                : (<>

                  {
                    showResults !== null
                      ? (<Resultados objResultados={showResults} />)
                      : surveys.arrSurvey
                        ? (

                          <>
                            <Survey
                              survey={surveys.jsonSurvey[surveys.indiceActual]}
                              selectOption={selectOption}
                            />

                            <div className="d-flex justify-content-between mx-4">
                              <div id="backSurvey">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => handeButtonNavSurvey(false)}
                                >
                                  Anterior
                                </button>
                              </div>
                              <div id="surveysPage" className="d-block p-2">
                                <p>
                                  {surveys.indiceActual + 1} de {surveys.IndiceMaximo + 1}
                                </p>
                              </div>
                              {surveys.indiceActual < surveys.IndiceMaximo
                                ? (<div id="nextSurvey">
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={handeButtonNavSurvey}
                                  >
                                    Siguiente
                                  </button>
                                </div>)
                                : (<div id="SendSurvey">
                                  <button
                                    id="btnSendSurvey"
                                    type="button"
                                    className="btn btn-info text-white"
                                    onClick={handleButtonSendSurvey}
                                    disabled={isBtnSendDisabled}
                                  >
                                    Enviar
                                  </button>
                                </div>)}
                            </div>
                            {userInfo.is_staff
                              ? <div className="d-flex justify-content-center mx-4">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-danger text-center"
                                    onClick={() => llenarEncuesta()}
                                  >
                                    Test: llenar encuesta
                                  </button>
                                </div>
                              </div>
                              : null}
                          </>)
                        : (
                          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                            <div className="d-flex flex-column justify-content-center align-items-center" >
                              <img src={ganso_pensando} width="307" height="307"></img>
                              <h5 className='my-4 text-center'>Uhm... Parece que no tengo pruebas diagnósticas.</h5>
                            </div>
                          </div>)}

                </>)}
            </>)
        }

      </section>
    </>
  )
}

export default Surveys
