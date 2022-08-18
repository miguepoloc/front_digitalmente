import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

export const CartaTexto = ({ title, text }) => {
    const [Show, setShow] = useState(false);

    return (
        <div className='col-lg-4 mb-3'>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    {Show &&
                        <Card.Text dangerouslySetInnerHTML={{ __html: text }} >
                        </Card.Text>
                    }
                    {!Show &&
                        <button className='w-50 search-buttons card-buttons text-center'
                            onClick={() => setShow(true)}>
                            Cómo aplicarlo
                        </button>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

