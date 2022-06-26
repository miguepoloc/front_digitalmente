import React from 'react'

import { imgGanso } from '../../helpers/helper_imagen_ganso'
import { linksEmocional } from '../../helpers/helper_emocional'
import { linksEstres } from '../../helpers/helperEstres'

const CartaSeguimiento = ({ datauser }) => {
  const pAutoevaluativo = '100'
  const pEmocional = datauser.emocional === 1
    ? '0'
    : parseInt(datauser.emocional / linksEmocional.length * 100).toString()
  const pRelax = datauser.estres === 1
    ? '0'
    : parseInt(datauser.estres / linksEstres.length * 100).toString()
  const pPiensalo = '0'
  const pHabilidades = '0'
  return (
    <>
      <div className="col mb-md-0 mb-4">
        <div className="card">
          <div className="card-header text-center pb-0">
            <h3>Progreso de módulos</h3>
          </div>
          <div className="px-0 pb-2">
            <div className="table-responsive">
              <table className="table m mb-0">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Módulo
                    </th>

                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Avance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src={imgGanso.escribiendo_250x200} className="avatar avatar-sm me-3" alt="xd" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Autoevaluativo</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-100 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {pAutoevaluativo}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${pAutoevaluativo === '100' ? 'bg-gradient-success' : 'bg-gradient-info'}`}
                            style={{ width: `${pAutoevaluativo}%` }}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={pAutoevaluativo}
                          >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src={imgGanso.meditando} className="avatar avatar-sm me-3"
                            alt="atlassian" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Relax</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-100 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {pRelax}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${pRelax === '100' ? 'bg-gradient-success' : 'bg-gradient-info'}`}
                            style={{ width: `${pRelax}%` }}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={pRelax}
                          >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src={imgGanso.feliz_250x200} className="avatar avatar-sm me-3" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Mis Emociones</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-100 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {pEmocional}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${pEmocional === '100' ? 'bg-gradient-success' : 'bg-gradient-info'}`}
                            style={{ width: `${pEmocional}%` }}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={pEmocional}
                          >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src={imgGanso.pensando} className="avatar avatar-sm me-3"
                            alt="spotify" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Piénsalo</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-100 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {pPiensalo}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${pPiensalo === '100' ? 'bg-gradient-success' : 'bg-gradient-info'}`}
                            style={{ width: `${pPiensalo}%` }}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={pPiensalo}
                          >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src={imgGanso.leyendo} className="avatar avatar-sm me-3"
                            alt="jira" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Mis habilidades</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-100 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {pHabilidades}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${pHabilidades === '100' ? 'bg-gradient-success' : 'bg-gradient-info'}`}
                            style={{ width: `${pHabilidades}%` }}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={pHabilidades}
                          >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartaSeguimiento
