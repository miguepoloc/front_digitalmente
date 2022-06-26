import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { FetchProvider } from './context/FetchContext'
import AppRoutes from './Routes'

const App = () => (

  <BrowserRouter>
    <AuthProvider>
      <FetchProvider>
        <AppRoutes />
      </FetchProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
