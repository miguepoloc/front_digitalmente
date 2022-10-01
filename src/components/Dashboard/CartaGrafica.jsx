import React from 'react'

export const CartaGrafica = ({ titulo, avance }) => {
    return (
        <div className="col-lg-3 mb-2">
            <div className="card z-index-2">
                <div className="card-header pb-0">
                    <h6>{titulo}</h6>
                    <p className="text-sm">
                        {avance}
                    </p>
                </div>
            </div>
        </div>
    )
}
