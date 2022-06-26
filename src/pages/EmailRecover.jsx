/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Logo from '../assets/img/logo9.svg'
import Ola from '../assets/img/wave.svg'
import Cel from '../assets/img/pato.svg'
import { Correct_Alert } from '../helpers/helper_Swal_Alerts'

const Schema = Yup.object().shape({
  email: Yup
    .string('Ingresa tu correo')
    .email('Ingresa un correo valido')
    .required('Email es requerido')
})

const EmailRecover = () => {
  const history = useHistory()

  const [messLogin, setMessLogin] = useState('')
  const [carga, setCarga] = useState('Enviar Correo')

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
              Recuperación de contraseña
            </h2>
            <Formik
              initialValues={{
                email: ''
              }}

              validationSchema={Schema}

              onSubmit={async (values) => {
                setCarga('Enviando correo...')
                try {
                  const respuesta = await Axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}/accounts/recover`,
                    data: values
                  })
                  const { data } = respuesta
                  Correct_Alert(undefined, data.message)
                  console.log('🚀 ~ file: EmailRecover.jsx ~ line 106 ~ onSubmit={ ~ data', data)
                  history.push('/dashboard')
                } catch (error) {
                  console.log(error.response.data.message)
                  setMessLogin({ data: { message: error.response.data.message } })
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
                    <Card>
                      <CardContent
                        style={{ textAlign: 'justify' }}
                      >
                        Ingresa el correo que registraste para recuperar o cambiar tu contraseña.
                        Si es correcto se enviara un correo con la informacion necesaria para hacer el cambio de la contraseña
                      </CardContent>
                    </Card>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Correo"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    {messLogin?.data && (
                      <div className="input-feedback">
                        {messLogin?.data?.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      className="btn-login btn-primary btn-block"
                    >
                      {carga}
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

export default EmailRecover
