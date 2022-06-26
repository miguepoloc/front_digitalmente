import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const ControlUser = () => {
  const { slug } = useParams()

  // Trae los datos del usuario
  const { authState } = useContext(AuthContext)
  // Se guardan en userInfo
  const { userInfo } = authState
  // Datos del usuario
  const [datauser, setDatauser] = useState([])

  // Obtiene los datos de avance que lleva el usuario
  const getAvance = async () => {
    const avance = await Axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/avance_modulos/${userInfo.id}`
    })
    return (avance.data)
  }

  // Para el control de la ubicación
  const history = useHistory()

  // Estado de control de ubicación, se utiliza para actualizar la barra lateral
  const [control, setControl] = useState(1)

  useEffect(async function () {
    // Guarda en response el avance que lleva el usuario
    const response = await getAvance()
    if (response) {
      console.log(response)
      // Y lo coloca en el estado de datos del usuario
      setDatauser(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, [control]) // Se controla el cambio a partir del estado control

  return [userInfo, datauser]
}

export default ControlUser
