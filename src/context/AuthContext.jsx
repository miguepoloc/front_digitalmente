import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const history = useHistory()

  // Cookies Names
  const CookiesNames = {
    userToken: 'cognied_user_token',
    expiresAt: 'cognied_expires_at',
    userInfo: 'cognied_user_info'
  }

  const token = Cookies.get(CookiesNames.userToken)
  const expiresAt = Cookies.get(CookiesNames.expiresAt)
  const userInfo = Cookies.get(CookiesNames.userInfo)

  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  })

  const setAuthInfo = ({ token, expiresAt, userInfo }) => {
    Cookies.set(CookiesNames.userToken, token)
    Cookies.set(CookiesNames.expiresAt, expiresAt)
    Cookies.set(CookiesNames.userInfo, JSON.stringify(userInfo))

    setAuthState({
      token,
      expiresAt,
      userInfo
    })
  }

  const logout = () => {
    Cookies.remove(CookiesNames.userToken)
    Cookies.remove(CookiesNames.expiresAt)
    Cookies.remove(CookiesNames.userInfo)
    setAuthState({})
    history.push('/')
  }

  const isAuthenticated = () => {
    const fecha = new Date().getTime() / 1000 < authState.expiresAt
    // console.log(authState.token && authState.expiresAt && fecha)
    return authState.token && authState.expiresAt && fecha
  }

  const isAdmin = () => authState.userInfo.role === 'admin'

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => { console.log(authInfo); setAuthInfo(authInfo) },
        logout,
        isAuthenticated,
        isAdmin
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
