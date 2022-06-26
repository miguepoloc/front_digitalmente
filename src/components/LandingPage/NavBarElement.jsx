import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
const NavBarElement = ({ Seccion, Scroll }) => {
  return (
    <Nav.Link
      // className="text-black font-weight-bold"
      id={`Nav-${Seccion.id}`}
      onClick={() => Scroll(Seccion.id)}
      className='d-flex align-items-center justify-content-center'
    >
      {Seccion.txt}
    </Nav.Link>
  )
}
NavBarElement.propTypes = {
  Seccion: PropTypes.object,
  Scroll: PropTypes.func
}

export default NavBarElement
