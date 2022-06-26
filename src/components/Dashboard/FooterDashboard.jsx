import React from 'react'

const BarraLateral = () => {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                Realizado por la
                <a href="https://www.unimagdalena.edu.co/" className="font-weight-bold" target="_blank" rel="noreferrer"> Universidad del Magdalena</a>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="/" className="nav-link text-muted" target="_blank" rel="noreferrer">Página Inicial</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.unimagdalena.edu.co/" className="nav-link text-muted"
                    target="_blank" rel="noreferrer">Universidad del Magdalena</a>
                </li>
                <li className="nav-item">
                  <a href="https://investigacion.unimagdalena.edu.co/unidadesOrganizativas/14" className="nav-link text-muted" target="_blank" rel="noreferrer">Cognied</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link pe-0 text-muted"
                    target="_blank" rel="noreferrer">Licencia</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BarraLateral
