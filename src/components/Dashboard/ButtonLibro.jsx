import React, { useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import '../../assets/css/ButtonFixed.scss'
import { Button, Modal } from 'react-bootstrap'

const ButtonLibro = ({ text, title }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div>

            <div
                className="buttonFixed topRight text-white"
                onClick={handleShow}
            >
                <FaBookOpen size="1.8em" />
            </div>
            <Modal show={show} size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header  closeButton={true} closeVariant={"white"}>
                    <Modal.Title className='text-center w-100'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body  dangerouslySetInnerHTML={{ __html: text }}>

                </Modal.Body>
                <Modal.Footer style={styleCenter}>
                    <Button className="btn btn-naranja" size="lg" onClick={handleClose}>
                        Cerrar
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ButtonLibro
