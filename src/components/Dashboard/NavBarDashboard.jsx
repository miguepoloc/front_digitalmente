import React, { useContext } from 'react'
import '../../assets/css/NavBarDashboard.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoAlargado from '../../assets/img/LogoAlargado.svg'
import { linksEmocional } from '../../helpers/helper_emocional'
import { linksRelax } from '../../helpers/helperRelax'
import { FcApproval, FcCancel, FcBiomass, FcHome, FcScatterPlot, FcUnlock, FcImport } from 'react-icons/fc'

const NavBarDashboard = ({ datauser, userInfo }) => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    // assigning location variable
    const location = useLocation()

    // destructuring pathname from location
    const { pathname } = location

    // Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/')


    const grupoControl = false
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                sticky="top"
                variant="light"
                className='color-nav'
                style={{ paddingTop: 0, paddingBottom: 0 }}

            >
                <Container fluid>
                    <Navbar.Brand
                        style={{ paddingTop: 0, paddingBottom: 0 }}
                    >
                        <Nav.Link
                            className="nameNav font-Geomanist"
                            onClick={() => history.push('/')}
                            style={{ padding: 2 }}

                        >
                            <img
                                src={LogoAlargado}
                                // width="130"
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
                        <Nav
                            navbarScroll
                            className="text-center"
                        >
                            <Nav.Link href="/dashboard"
                                className='d-flex align-items-center justify-content-center'>
                                <span className='pe-1 d-flex align-items-center'><FcHome size={20} /></span>
                                Dashboard
                            </Nav.Link>
                            {userInfo.is_staff
                                ? <Nav.Link href="#link" className='d-flex align-items-center  justify-content-center'>
                                    <span className='pe-1 d-flex align-items-center'><FcScatterPlot size={22} /></span>
                                    Gráficas
                                </Nav.Link>
                                : null
                            }
                            <NavDropdown
                                title="Autoevaluativo "
                                id="basic-nav-dropdown"
                                className='d-flex flex-column align-items-center justify-content-center'
                                autoClose="outside"
                            >
                                <NavDropdown.Item href="/autoevaluativo" className='d-flex' disabled={(datauser.autoevaluativo === 2) && !userInfo.is_staff}>
                                    <span className='pe-2 d-flex align-items-center'>
                                        {((datauser.autoevaluativo === 2) && !userInfo.is_staff) ? <FcCancel size={22} /> : <FcApproval size={22} />}
                                    </span>
                                    Prueba
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/autoevaluativo_resultados" className='d-flex align-items-center' >
                                    <span className='pe-1 d-flex align-items-center'><FcBiomass size={22} /></span>
                                    Resultados
                                </NavDropdown.Item>
                            </NavDropdown>

                            {grupoControl || userInfo.is_staff
                                ?
                                <NavDropdown title="Emocional " id="basic-nav-dropdown" className='d-flex flex-column align-items-center justify-content-center'>

                                    {linksEmocional.map((capsula, capsulaIndex) => (

                                        <NavDropdown.Item
                                            href={`/${capsula.link}`}
                                            eventKey={capsulaIndex}
                                            key={`key-${capsulaIndex}`}
                                            disabled={!(datauser.emocional >= capsula.id)}
                                            className="  d-flex align-items-center"
                                        ><span className='pe-2 d-flex align-items-center'>
                                                {!(datauser.emocional >= capsula.id)
                                                    ? <FcCancel size={22} />
                                                    : (datauser.emocional === capsula.id) ? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                                            </span>
                                            {capsula.nombre}
                                        </NavDropdown.Item>

                                    ))}
                                </NavDropdown>
                                : <></>
                            }

                            {grupoControl || userInfo.is_staff
                                ?
                                <NavDropdown
                                    title="Relax "
                                    id="basic-nav-dropdown"
                                    className='d-flex flex-column align-items-center justify-content-center'
                                    align="start"
                                >
                                    <span className='mt-0'></span>
                                    {linksRelax.map((capsula, capsulaIndex) => (

                                        <NavDropdown.Item
                                            href={`/${capsula.link}`}
                                            eventKey={capsulaIndex}
                                            key={`key-${capsulaIndex}`}
                                            disabled={!(datauser.estres >= capsula.id)}
                                            className="d-flex"
                                        ><span className='pe-2 d-flex align-items-center'>
                                                {!(datauser.estres >= capsula.id)
                                                    ? <FcCancel size={22} />
                                                    : (datauser.estres === capsula.id) ? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                                            </span>
                                            {capsula.nombre}
                                        </NavDropdown.Item>

                                    ))}
                                </NavDropdown>
                                : <></>
                            }


                            <NavDropdown
                                title={auth && <b>{auth?.authState?.userInfo?.nombre.split(" ")[0]}</b>}
                                id="basic-nav-dropdown"
                                className='d-flex flex-column align-items-center justify-content-center'
                                align="end"
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarDashboard
