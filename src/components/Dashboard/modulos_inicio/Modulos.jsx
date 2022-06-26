import React from 'react'
import { ModuloIconoBloqueo } from './ModuloIconoBloqueo'

export const Modulos = ({ img, text, bloqueado, col, moduloClass, href, classImg = 'w-50', quitarIconoBloqueo = false, imagenAlLadoIzquierdo = false }) => {
  const estado = bloqueado ? 'modulo_bloqueado' : 'modulo_desbloqueado'
  const classDiv = `${col} cards_modulos_inicio ${estado}`

  const classDivImage = imagenAlLadoIzquierdo ? 'col-5' : 'col-12'
  const classDivText = imagenAlLadoIzquierdo ? 'col-7' : 'col-12'
  // const classText = imagenAlLadoIzquierdo ? '' : 'text-center'

  return (

    <div className={classDiv}>
      <a href={href}
        className="text-reset"
        style={bloqueado ? { pointerEvents: 'none' } : null}
      >
        {quitarIconoBloqueo ? (<></>) : (<ModuloIconoBloqueo bloqueado={bloqueado} />)}

        <div className={`row h-100  card_modulo flex-center items_modulos_inicio ${moduloClass}`}>
          <div className={`${classDivImage} justify-content-center align-self-center text-center`}>
            <img
              className={classImg}
              src={img}
            />
          </div>
          <div className={` ${classDivText} justify-content-center align-self-center`}>
            {imagenAlLadoIzquierdo
              ? (<h5 className={'font-Geomanist text-break text-darkBlue text-center'}>
                {text}
              </h5>)
              : (<h6 className={'font-Geomanist text-break text-center titleModulo'}>
                {text}
              </h6>)}

          </div>

        </div>
      </a>
    </div>

  )
}
