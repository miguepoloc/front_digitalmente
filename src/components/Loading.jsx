import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const Loading = ({ height }) => {
    return (
        <div style={{ height: height || '100vh' }} className="d-flex justify-content-center align-items-center">
            <RotatingLines
                width="100"
                strokeColor="#6495ED"
                strokeWidth="3"
                animationDuration=".8"
            />
        </div>
    )
}
