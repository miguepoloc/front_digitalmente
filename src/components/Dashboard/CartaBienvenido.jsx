import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const CartaBienvenido = () => {
  return (
    <>
      <div className="col-12 mx-auto mt-2 px-1">
        <div className="card items_modulos_inicio" style={{ backgroundColor: 'antiquewhite' }}>
          <div className="card-body p-3 w-lg-50  mx-auto">
            <div className="row justify-content-center align-items-center">

              <div className=" col-4 col-sm-4 text-center">
                <img className="imgGanso_Bienvenida "
                  src={imgGanso.celular} alt="ganso" />
              </div>
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-column pt-2 justify-content-center">
                  <h5 className=" titleBienvenida font-Geomanist">Bienvenido a tu Dashboard</h5>
                  <p className='textBienvenida'>Este es un espacio para manejar tu
                    información, registrar y evaluar lo que
                    has realizado y seguir practicando los
                    puntos importantes en los que
                    DigitalMente te quiere apoyar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartaBienvenido
