import Axios from 'axios'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

const AvanceContext = createContext()
const { Provider } = AvanceContext

const AvanceProvider = ({ children }) => {
    // Trae el contexto de los usuarios
    const { authState } = useContext(AuthContext)
    // Guarda los datos del usuarios en una variable
    const { userInfo } = authState
    // Crea un estado para guardar los datos del avance
    const [AvanceState, setAvanceState] = useState(false)

    const [controladora, setControladora] = useState(0)

    // Se usa un useEffect para que se ejecute una sola vez al cargar la pagina
    useEffect(() => {
        // Se crea una funcion para traer los datos del avance
        if (userInfo !== undefined) {
            if (userInfo.id !== undefined) {
                // Variable que guarda el url de la api con el id del usuario
                const url = `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
                const fetchData = async () => {
                    const response = await Axios({
                        method: 'get',
                        url: url
                        // headers: {
                        //     'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
                        // }
                    })
                    if (response) {
                        // Coloca el avance en la variable de estado
                        setAvanceState(response.data)
                    } else {
                        //console.log('No se pudieron traer los datos...')
                    }
                };

                // Se llama a la función
                fetchData();
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controladora, userInfo]);

    return (
        <Provider
            value={{ AvanceState, setAvanceState, setControladora }}
        >
            {children}
        </Provider>
    )
}

export { AvanceContext, AvanceProvider }
