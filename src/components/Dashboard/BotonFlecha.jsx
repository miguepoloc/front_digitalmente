import React, { useContext } from 'react'
import { AccordionContext, Button, useAccordionButton } from 'react-bootstrap'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

const BotonFlecha = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext)

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  )

  const isCurrentEventKey = activeEventKey === eventKey
  return (
        <>
            <Button
                variant="link"
                className={isCurrentEventKey ? 'nav-link active' : 'nav-link '}
                style={{ backgroundColor: isCurrentEventKey ? 'lavender' : '' }}
                onClick={decoratedOnClick}
            >
                <div
                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    {isCurrentEventKey
                      ? <FaArrowDown color="white" />
                      : <FaArrowRight />}
                </div>
                <span className="nav-link-text ms-1">{children}</span>

            </Button>
        </>
  )
}

export default BotonFlecha
