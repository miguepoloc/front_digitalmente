import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import Avatar from '@mui/material/Avatar'
import LogoPeque from '../../assets/img/logo_peque.svg'

const CartaImagen = (userInfo) => {
  console.log(userInfo.userInfo)
  return (
    <>
      <div className="col-lg-5">
        <div className="card h-100 p-3">
          <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100 carta-dashboard2">
            <span className="mask bg-gradient-dark"></span>
            <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
              <Avatar
                // alt={userInfo.userInfo.nombre}
                alt="Hola"
                src={LogoPeque}
                sx={{ width: 80, height: 80 }}
              />
              <h3 className="text-white font-weight-bolder mb-4 pt-2">"Hola"</h3>
              <p className="text-white">"Hola"</p>
              <p className="text-white">"Hola"</p>
              <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="#">
                <FaUserCog size="2em" />
                Editar perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartaImagen
