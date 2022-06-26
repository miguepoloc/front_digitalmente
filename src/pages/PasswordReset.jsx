import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory, useLocation } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Schema = Yup.object().shape({
  password: Yup
    .string()
    .required('No se ha introducido una contraseña'),
  password_confirm: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben ser iguales')

})

const PasswordReset = () => {
  const history = useHistory()
  const location = useLocation()
  console.log('🚀 ~ file: PasswordReset.jsx ~ line 65 ~ PasswordReset ~ location', location)

  const token = location.search.split('?token=')[1]
  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')

  return (
    <>
      <img src={Ola} id="Ola" alt="" className="wave" />
      <div className="container-login">
        <div className="img-login">
          <img src={Cel} id="Cel" alt="" />
        </div>
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={Logo}
              style={{ height: '150px' }}
              alt="Logo" />

            <h2
              style={{ color: '#00659D', textAlign: 'center' }}
            >
              Ingresa tu nueva contraseña
            </h2>
            <Formik
              initialValues={{
                password: '',
                password_confirm: ''
              }}

              validationSchema={Schema}

              onSubmit={async (values) => {
                try {
                  const respuesta = await Axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}/accounts/reset`,
                    data: { password: values.password, token: token }
                  })

                  const { data } = respuesta
                  console.log('🚀 ~ file: PasswordReset.jsx ~ line 126 ~ onSubmit={ ~ data', data)
                  setAuthState(data)

                  history.push('/dashboard')
                } catch (error) {
                  setMessLogin({ data: { message: error.response.data.errors } })
                }
              }}
            >

              {
                ({
                  touched,
                  errors,
                  values,
                  handleSubmit,
                  handleChange
                }) => (
                  <Form onSubmit={handleSubmit} className="form-login">

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password_confirm"
                      label="Confirmar Contraseña"
                      type="password"
                      id="password_confirm"
                      value={values.password_confirm}
                      onChange={handleChange}
                      error={touched.password_confirm && Boolean(errors.password_confirm)}
                      helperText={touched.password_confirm && errors.password_confirm}
                    />
                    <button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      className="btn-login btn-primary btn-block"
                    >
                      Cambiar contraseña
                    </button>
                  </Form>
                )
              }

            </Formik>
          </Box>
        </Grid>
      </div>
    </>
  )
}

export default PasswordReset
