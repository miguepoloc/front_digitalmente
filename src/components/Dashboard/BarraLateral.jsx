import React from 'react'
import Logo from '../../assets/img/logo_circulo.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import ItemCapsula from './ItemCapsula'
import { FaLock, FaRocket, FaTachometerAlt } from 'react-icons/fa'
import { BsClipboardData } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import BotonFlecha from './BotonFlecha'
import { linksEmocional } from '../../helpers/helper_emocional'

const BarraLateral = ({ datauser }) => {
  const history = useHistory()

  // assigning location variable
  const location = useLocation()

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
        id="sidenav-main" data-color="info">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0 aclick" onClick={() => history.push('')}
            target="_blank">
            <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold">DigitalMente</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <ItemCapsula
              clase={splitLocation[1] === 'dashboard' ? 'active nav-link' : 'nav-link'}
              link={'/dashboard'}
              titulo={'Dashboard'}
              imgsvg={<FaTachometerAlt color={splitLocation[1] === 'dashboard' ? 'white' : ''} />}
            />
            <ItemCapsula
              clase={splitLocation[1] === 'graficas' ? 'active nav-link' : 'nav-link'}
              link={'/graficas'}
              titulo={'graficas'}
              imgsvg={<GoGraph color={splitLocation[1] === 'graficas' ? 'white' : ''} />}
            />

            {/* División */}
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Módulos</h6>
            </li>

            <li className="nav-item">
              <Accordion defaultActiveKey={(splitLocation[1].slice(0, 9) === 'emocional') ? '1' : ''}>
                <BotonFlecha eventKey="0" >Autodiagnóstico</BotonFlecha>
                <Accordion.Collapse eventKey="0">
                  <ul>

                    <ItemCapsula
                      clase={splitLocation[1] === 'diagnostico' ? 'active nav-link' : 'nav-link'}
                      link={'/autoevaluativo'}
                      titulo={'Encuesta'}
                      habilitado={!(datauser.diagnostico >= 1)}
                      imgsvg={!(datauser.diagnostico >= 1)
                        ? <FaLock />
                        : <FaRocket color={splitLocation[1] === 'diagnostico' ? 'white' : ''} />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'resultados' ? 'active nav-link' : 'nav-link'}
                      link={'/resultados'}
                      titulo={'Resultados'}
                      habilitado={!(datauser.diagnostico >= 2)}
                      imgsvg={!(datauser.diagnostico >= 2)
                        ? <FaLock />
                        : <BsClipboardData color={splitLocation[1] === 'resultados' ? 'white' : ''} />}
                    />
                  </ul>
                </Accordion.Collapse>
                <BotonFlecha eventKey="1">Emocional</BotonFlecha>
                <Accordion.Collapse eventKey="1">
                  <ul>
                    {linksEmocional.map((capsula, capsulaIndex) => (
                      <>
                        <ItemCapsula
                          key={capsulaIndex}
                          clase={splitLocation[1] === capsula.link ? 'active nav-link' : 'nav-link'}
                          link={`/${capsula.link}`}
                          titulo={capsula.nombre}
                          habilitado={!(datauser.emocional >= capsula.id)}
                          imgsvg={!(datauser.emocional >= capsula.id)
                            ? <FaLock />
                            : <FaRocket color={splitLocation[1] === capsula.link ? 'white' : ''} />}
                        />
                      </>
                    ))}
                  </ul>
                </Accordion.Collapse>
                <BotonFlecha eventKey="2" >Estrés</BotonFlecha>
                <Accordion.Collapse eventKey="2">
                  <ul>
                    <ItemCapsula
                      clase={splitLocation[1] === 'estrescap1' ? 'active nav-link' : 'nav-link'}
                      link={'estrescap1'}
                      titulo={'Cápsula 1'}
                      habilitado={!(datauser.estres >= 1)}
                      imgsvg={!(datauser.estres >= 1)
                        ? <FaLock />
                        : <FaRocket />}
                    />

                    <ItemCapsula
                      clase={splitLocation[1] === 'estrescap2' ? 'active nav-link' : 'nav-link'}
                      link={'/estrescap2'}
                      titulo={'Cápsula 2'}
                      habilitado={!(datauser.estres >= 2)}
                      imgsvg={!(datauser.estres >= 2)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                  </ul>
                </Accordion.Collapse>
              </Accordion>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default BarraLateral
