import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const CartaImagen = () => {
  return (
    <>
      <div className="col-6 col-lg-6 mt-2 px-1">
        <div className="card items_modulos_inicio" style={{ backgroundColor: "#9FE5ED" }}>
          <div className="card-body p-1 p-md-3">
            <div className="row justify-content-center align-items-center">

              <div className=" col-4   col-lg-3 text-center ">
                <img className="imgGanso_caminoFortaleza"
                  src={imgGanso.explicando} alt="ganso" />
              </div>
              <div className="col-7 col-lg-9">
                <div className="d-flex flex-column pt-2 justify-content-center">
                  <p className='text-break titleModulo font-Geomanist ' >Estudiante, sigue el camino para fortalecer tu bienestar en estos módulos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartaImagen
