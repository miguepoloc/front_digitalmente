import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

const FetchContext = createContext()
const { Provider } = FetchContext

const FetchProvider = ({ children }) => {
  const authContext = useContext(AuthContext)

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  authAxios.interceptors.request.use(
    config => {
      const token = authContext.authState?.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error)
  )

  authAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = error?.response?.status
      if (code === 401 || code === 403) {
        console.log('error code', code)
      }
      return Promise.reject(error)
    }
  )

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  )
}

export { FetchContext, FetchProvider }
