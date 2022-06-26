import React, { useEffect, useContext } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'
import NavBarElement from './NavBarElement'
import './assets/css/NavBar.scss'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import LogoAlargado from '../../assets/img/LogoAlargado.svg'
import { FcImport, FcUnlock } from 'react-icons/fc'

const NavBar = ({ Secciones, PrimeraSeccion, scroll }) => {
  useEffect(() => {
    scroll.eventScroll()
  })
  const auth = useContext(AuthContext)
  const history = useHistory()
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xxl"
        fixed="top"
        bg="transparent"
        id="navBar"
        style={{ paddingTop: 0, paddingBottom: 0 }}

      >
        <Container fluid>
          <Navbar.Brand
            style={{ paddingTop: 0, paddingBottom: 0 }}

          >
            <Nav.Link
              className="nameNav font-Geomanist"
              onClick={() => scroll.scroll(PrimeraSeccion.id)}
              style={{ padding: 2 }}
            >
              <img
                src={LogoAlargado}
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="text-center">
              {
                /*
                Recorro el json. la idea es obtener las keys para poder acceder el value del json y pasarlo al elemento de navegacion.
                */
                Object.keys(Secciones).map((Seccion) => {
                  return (
                    <NavBarElement
                      key={Seccion}
                      Seccion={Secciones[Seccion]}
                      Scroll={(id) => {
                        console.log(scroll)
                        scroll.scroll(id)
                      }}

                    />
                  )
                })
              }

              {auth.isAuthenticated()
                ? <>
                  <NavDropdown title={auth && <b>{auth?.authState?.userInfo?.nombre}</b>} id="basic-nav-dropdown"
                    className='d-flex flex-column align-items-center justify-content-center'
                  >
                    <NavDropdown.Item href="/recover" className='d-flex'>
                      <span className='pe-2 d-flex align-items-center'><FcUnlock size={22} /></span>
                      Cambiar Contraseña
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className='d-flex align-items-center' onClick={() => auth.logout()}>
                      <span className='pe-1 d-flex align-items-center'><FcImport size={22} /></span>
                      Cerrar Sesión
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Button className=" btn-naranja ms-2 btn-sm mb-0 me-3 " onClick={() => history.push('/dashboard')}>
                    Dashboard
                  </Button>
                </>
                : <Button className=" btn-naranja ms-2 btn-sm mb-0 me-3 " onClick={() => history.push('/login')}>
                  Iniciar sesion
                </Button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
