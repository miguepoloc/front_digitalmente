import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ItemCapsula = ({ clase, link, titulo, imgsvg, habilitado }) => {
  const history = useHistory()

  const linkeo = () => {
    history.push(link)
  }

  return (
        <>
            <li className="nav-item">
                <Button variant="link"
                    className={clase}
                    disabled={habilitado}
                    onClick={linkeo}
                >

                    <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-3 d-flex align-items-center justify-content-center">
                        {imgsvg}
                    </div>
                    <span className="nav-link-text ms-1">{titulo}</span>
                </Button>
            </li>
        </>
  )
}

export default ItemCapsula
