import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import { FaUser, FaLock } from 'react-icons/fa'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
const Schema = Yup.object().shape({
    document: Yup
        .number()
        .typeError('Debe ser un número')
        .required('Documento requerido')
        .positive('Debe ser un número positivo')
        .integer('No debe tener puntos'),
    password: Yup
        .string()
        .required('No se ha introducido una contraseña')
})

const Login = () => {
    const history = useHistory()

    const { setAuthState } = useContext(AuthContext)
    const [messLogin, setMessLogin] = useState('')
    const [loading, setLoading] = useState(false)
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

                        <h1
                            style={{ color: '#00659D' }}
                        >
                            Bienvenido
                        </h1>
                        <Formik
                            initialValues={{
                                document: '',
                                password: ''
                            }}

                            validationSchema={Schema}

                            onSubmit={async (values) => {
                                setLoading(true);
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
                                setLoading(false)
                            }}
                        >

                            {({
                                touched,
                                errors,
                                values,
                                handleSubmit,
                                handleChange
                            }) => (
                                <Form onSubmit={handleSubmit} className="form-login">
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaUser
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={touched.document && Boolean(errors.document) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="document"
                                                label="Documento"
                                                name="document"
                                                autoComplete="document"
                                                value={values.document}
                                                onChange={handleChange}
                                                error={touched.document && Boolean(errors.document)}
                                                helperText={touched.document && errors.document} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaLock
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={touched.password && Boolean(errors.password) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                autoComplete="password"
                                                name="password"
                                                label="Contraseña"
                                                type="password"
                                                id="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                error={touched.password && Boolean(errors.password)}
                                                helperText={touched.password && errors.password} />
                                        </Box>
                                    </Box>
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
                                        {loading ? (<>Cargando...</>) : (

                                            <>Iniciar Sesión</>)
                                        }
                                    </button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/recover" variant="body2">
                                                Olvidé mi contraseña
                                            </Link>
                                        </Grid>
                                        {/* <Grid item xs>
                                            <Link href="/login" variant="body2">
                                                ¿No tienes cuenta? ¡RegÍstrate!
                                            </Link>
                                        </Grid> */}
                                    </Grid>
                                </Form>
                            )}

                        </Formik>
                    </Box>
                </Grid>
            </div>

        </>
    )
}

export default Login
