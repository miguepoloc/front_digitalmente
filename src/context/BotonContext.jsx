import React, { createContext, useState } from 'react'

const BotonContext = createContext()
const { Provider } = BotonContext

const BotonProvider = ({ children }) => {

    const [BotonState, setBotonState] = useState(false)

    return (
        <Provider
            value={{ BotonState, setBotonState }}
        >
            {children}
        </Provider>
    )
}

export { BotonContext, BotonProvider }
