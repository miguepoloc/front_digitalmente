import React from 'react'
import { BiLockOpen, BiLock } from 'react-icons/bi'
export const ModuloIconoBloqueo = ({
  bloqueado
  // className = 'icon_blocked_modulo_inicio'
}) => {
  return (
    <div className="content_blocked_modulos_inicio">
      <div className="icon_blocked_modulo_inicio">
        {bloqueado ? <BiLock size={20} /> : <BiLockOpen size={20} />}
      </div>
    </div>
  )
}
