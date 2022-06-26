/* eslint-disable camelcase */
/****************************************************************************
 *                   Funciones/constantes más usadas.                       *
 ****************************************************************************/
export const URL_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8002'
/**
 *
 * @param {String} url
 * @param {String} myMethod
 * @param {Array<JSON>| JSON} dataToSend
 * @returns {Any | Null}
 */
const createRequest = async (url, myMethod, dataToSend = null) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  // TODO: Colocar token del usuario.
  const requestOptions = {
    method: myMethod,
    headers: myHeaders,
    body: dataToSend ? JSON.stringify(dataToSend) : null
  }

  const response = await fetch(url, requestOptions)
    .then(response => response.json())
    .catch(() => { return { err: 'Ha ocurrido un error con la conexion' } })
  // console.log(response);
  return isResponseValid(response)
}

const method = {
  get: 'GET',
  post: 'POST',
  put: 'PUT'
}

/**
 *
 * @param {Array<JSON> | JSON | null } response
 * @returns Array<JSON> | JSON | null
 */

const isResponseValid = (response) => {
  if (!response?.err) {
    return response
  } else {
    console.log('No se pudieron traer los datos de los datos...')
    return null
  }
}

/**
     *
     * @param {Array<Promise>} promesas
     * @returns Boolean
     */
const wasSentWithoutError = async (promesas) => {
  const respuestas = await Promise.all(promesas)
    .catch(() => { return { err: 'Ha ocurrido un error con la conexion' } })

  if (respuestas.err) {
    return false
  }

  const isAllPostOk = respuestas.some((element) => element.respuestas.errors.length) // Verifico que no hayan errores
  if (isAllPostOk) {
    return false
  }
  return true
}

/****************************************************************************
 *                 Fin funciones/constantes más usadas.                     *
 ****************************************************************************/

/**
 *
 * @returns Array<JSON> | null
 */
export const GET_vista_pregunta_respuesta = async () => {
  const url = `${URL_BASE}/api/vista_pregunta_respuesta`
  return await createRequest(url, method.get)
}

/**
*
* @param {Array<JSON>} userId
* @returns Boolean
*/
export const POST_usuario_encuesta = async (arrDataToSend) => {
  const countSurveys = arrDataToSend.length
  const url = `${URL_BASE}/api/usuario_encuesta/`
  const ArrPromesas = []

  for (let i = 0; i < countSurveys; i++) {
    ArrPromesas.push(createRequest(url, method.post, arrDataToSend[i]))
  }

  return await wasSentWithoutError(ArrPromesas)
}

export const GET_emocion = async () => {
  const url = `${URL_BASE}/api/emocion`
  return await createRequest(url, method.get)
}

export const GET_definiciones_usuario = async (idUser) => {
  const url = `${URL_BASE}/api/definiciones_usuario/?id_usuario=${idUser}`
  return await createRequest(url, method.get)
}

export const POST_definiciones_usuario = async (dataToSend) => {
  const url = `${URL_BASE}/api/definiciones_usuario/`
  return createRequest(url, method.post, dataToSend)
}

export const POST_definiciones_usuario_bulk_update = async (dataToSend) => {
  const url = `${URL_BASE}/api/definiciones_usuario/bulk_update/`
  return createRequest(url, method.post, dataToSend)
}

export const GET_definiciones = async () => {
  const url = `${URL_BASE}/api/definiciones`
  return await createRequest(url, method.get)
}

export const PUT_avance_modulos = async (id, dataToSend) => {
  const url = `${process.env.REACT_APP_API_URL}/api/avance_modulos/${id}/`
  return createRequest(url, method.put, dataToSend)
}
