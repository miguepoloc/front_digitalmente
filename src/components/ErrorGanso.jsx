/* eslint-disable camelcase */
import React from 'react'
import ganso_pensando from '../assets/img/ganso/ganso_pensando.png'
export const ErrorGanso = ({ text }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <img src={ganso_pensando} width="307" height="307"></img>
        <h5 className='my-4 text-center'>{text || 'Algo salio mal... no se pudieron obtener los datos'}</h5>
      </div>
    </div>
  )
}
