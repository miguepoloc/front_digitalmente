import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory, Link } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import { FaUser, FaLock } from 'react-icons/fa'

const Schema = Yup.object().shape({
  document: Yup.number().typeError('Debe ser un número')
    .required('Documento requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  password: Yup.string().required(
    'No se ha introducido una contraseña'
  )
})

const LoginForm = () => {
  const history = useHistory()

  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')

  return (
    <>
      <img src={Ola} id="Ola" alt="" className="wave" />
      <div className="container-login">
        <div className="img-login">
          <img src={Cel} id="Cel" alt="" />
        </div>
        <div className="login-container">

          <Formik
            initialValues={{
              document: '',
              password: ''
            }}

            validationSchema={Schema}

            onSubmit={async (values) => {
              try {
                const respuesta = await Axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_URL}/accounts/login`,
                  data: values
                })

                const { data } = respuesta
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
                handleSubmit
              }) => (
                <Form onSubmit={handleSubmit} className="form-login">

                  <img src={Logo} id="Icono" alt="" className="avatar" />
                  <h2>Bienvenido</h2>

                  <div className="input-div my-0">
                    <div className="i">
                      <FaUser />
                    </div>
                    <div>
                      <Field
                        name="document"
                        placeholder="Documento de identidad"
                        className='input'
                      />
                    </div>
                  </div>
                  {errors.document && touched.document && (
                    <div className="input-feedback">{errors.document}</div>
                  )}
                  <div className="input-div my-0">
                    <div className="i">
                      <FaLock />
                    </div>
                    <div>
                      <Field
                        name="password"
                        placeholder="Contraseña"
                        className='input'
                        type="password"
                      />
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                  {messLogin?.data && (
                    <div className="input-feedback">
                      {messLogin?.data?.message}
                    </div>
                  )}

                  <Link to="/forgot">
                    <small id="emailHelp" className="olvidado form-text text-primary">
                      ¿Olvidaste tu contraseña?
                    </small>
                  </Link>
                  <button type="submit" className="btn-login btn-primary btn-block">
                    Iniciar Sesión
                  </button>
                </Form>
              )
            }

          </Formik>

        </div>
      </div>
    </>
  )
}

export default LoginForm
