import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import {
    FaUser, FaVirusSlash, FaUniversity,
    FaUserFriends, FaRegAddressCard, FaIdCardAlt,
    FaAccessibleIcon, FaSyringe, FaEnvelopeOpenText,
    FaChild, FaVenusMars, FaBlind, FaMapSigns,
    FaMapMarkedAlt, FaBirthdayCake, FaTools, FaLock,
    FaVirus, FaViruses, FaPhoneAlt, FaToolbox, FaShieldVirus
} from 'react-icons/fa'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Checkbox, FormControl, FormControlLabel, InputLabel } from '@mui/material'

const Schema = Yup.object().shape({
    document: Yup.number()
        .typeError('Debe ser un número')
        .required('Documento requerido')
        .positive('Debe ser un número positivo')
        .integer('No debe tener puntos'),
    password: Yup.string()
        .required('No se ha introducido una contraseña'),
    email: Yup.string()
        .email('Correo inválido')
        .required('Requerido'),
    nombre: Yup.string()
        .required('Requerido'),
    edad: Yup.number()
        .typeError('Debe ser un número')
        .required('Requerido')
        .positive('Debe ser un número positivo')
        .integer('No debe tener puntos'),
    tipo_documento: Yup.string()
        .required('Requerido'),
    sexo: Yup.string()
        .required('Requerido'),
    departamento_nacimiento: Yup.string()
        .required('Requerido'),
    ciudad_nacimiento: Yup.string()
        .required('Requerido'),
    fecha_nacimiento: Yup.date()
        .required('Requerido'),
    estado_civil: Yup.string()
        .required('Requerido'),
    programa: Yup.string()
        .required('Requerido'),
    semestre: Yup.number()
        .typeError('Debe ser un número')
        .required('Requerido')
        .positive('Debe ser un número positivo')
        .integer('No debe tener puntos'),
    covid_positivo: Yup.boolean(),
    covid_familiar: Yup.boolean(),
    covid_vacuna: Yup.boolean(),
    covid_tipo_vacuna: Yup.string(),
    covid_dosis: Yup.boolean(),
    discapacidad: Yup.boolean(),
    discapacidad_tipo: Yup.string(),
    telefono: Yup.number()
        .typeError('Debe ser un número')
        .required('Requerido')
        .positive('Debe ser un número positivo')
        .integer('No debe tener puntos'),
    ocupacion: Yup.string()
        .required('Requerido')
})

// eslint-disable-next-line no-unused-vars
const ValoresInicialesPrueba = {
    document: '',
    password: '',
    email: '',
    nombre: '',
    edad: '20',
    tipo_documento: '',
    sexo: '',
    departamento_nacimiento: '',
    ciudad_nacimiento: '',
    fecha_nacimiento: '1996-08-20',
    estado_civil: '1',
    programa: 'Ing Pruefsadba',
    semestre: '2',
    covid_positivo: false,
    covid_familiar: false,
    covid_vacuna: false,
    covid_tipo_vacuna: '',
    covid_dosis: false,
    discapacidad: false,
    discapacidad_tipo: '',
    telefono: '3003859853',
    ocupacion: 'Contratista'
}

const ValoresIniciales = {
    document: '1234',
    password: '123444444',
    email: 'as@as.com',
    nombre: 'migue',
    edad: '20',
    tipo_documento: '',
    sexo: '',
    departamento_nacimiento: '',
    ciudad_nacimiento: '',
    fecha_nacimiento: '1996-08-20',
    estado_civil: '1',
    programa: 'Ing Pruefsadba',
    semestre: '2',
    covid_positivo: false,
    covid_familiar: false,
    covid_vacuna: false,
    covid_tipo_vacuna: '',
    covid_dosis: false,
    discapacidad: false,
    discapacidad_tipo: '',
    telefono: '3003859853',
    ocupacion: 'Contratista'
}

const SignUp = () => {
    const history = useHistory()

    const { setAuthState } = useContext(AuthContext)
    const [messLogin, setMessLogin] = useState('')
    const [loading, setLoading] = useState(false)
    const [dataColombia, setdataColombia] = useState([])
    const [dataSexo, setdataSexo] = useState([])

    const getColombia = async () => {
        const colombia = await Axios({
            method: 'get',
            url: 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json'
        })
        return (colombia.data)
    }

    const getSexo = async () => {
        const sexo = await Axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/api/sexo`
        })
        return (sexo.data)
    }

    useEffect(() => {
        const fetchData = async () => {
            // Guarda en response el avance que lleva el usuario
            const response = await getColombia()
            const responseSexo = await getSexo()

            if (responseSexo) {
                // Y lo coloca en el estado de datos del usuario
                setdataSexo(responseSexo)
                console.log(dataSexo)
            } else {
                console.log('No se pudieron traer los datos del sexo...')
            }
            if (response) {
                // Y lo coloca en el estado de datos del usuario
                setdataColombia(response)
                console.log(dataColombia)
            } else {
                console.log('No se pudieron traer los datos...')
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // Se controla el cambio a partir del estado control

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
                            initialValues={ValoresIniciales}

                            validationSchema={Schema}

                            onSubmit={async (values) => {
                                console.log(values)
                                setLoading(true);
                                try {
                                    const respuesta = await Axios({
                                        method: 'post',
                                        url: `${process.env.REACT_APP_API_URL}/accounts/register`,
                                        data: values
                                    })

                                    const { data } = respuesta
                                    console.log(data)
                                    setAuthState(data)
                                    history.push('/dashboard')
                                } catch (error) {
                                    console.log(error.response.data)
                                    setMessLogin(error.response.data.errors)
                                    console.log(messLogin.document)

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
                                    {/* Aquí empieza el formulario */}
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaUser
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.nombre) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="nombre"
                                                label="Nombre"
                                                name="nombre"
                                                autoComplete="nombre"
                                                value={values.nombre}
                                                onChange={handleChange}
                                                error={Boolean(errors.nombre)}
                                                helperText={errors.nombre} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaIdCardAlt
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="tipo_documento-label">Tipo de documento</InputLabel>
                                                    <Select
                                                        labelId="tipo_documento-label"
                                                        id="tipo_documento"
                                                        name='tipo_documento'
                                                        label="Tipo de documento"
                                                        value={values.tipo_documento}
                                                        required
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"PA"}>PA</MenuItem>
                                                        <MenuItem value={"CE"}>CÉDULA DE EXTRANJERÍA</MenuItem>
                                                        <MenuItem value={"CC"}>CÉDULA DE CIUDADANÍA</MenuItem>
                                                        <MenuItem value={"TI"}>TARJETA DE IDENTIDAD</MenuItem>
                                                        <MenuItem value={"RC"}>REGISTRO CIVIL</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaRegAddressCard
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.document) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="document"
                                                label="Número de documento"
                                                name="document"
                                                autoComplete="document"
                                                value={values.document}
                                                onChange={handleChange}
                                                error={Boolean(errors.document)}
                                                helperText={errors.document} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaEnvelopeOpenText
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.email) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Correo electrónico"
                                                name="email"
                                                autoComplete="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                error={Boolean(errors.email)}
                                                helperText={errors.email} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaLock
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.password) ? 'error' : 'primary'}
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
                                                error={Boolean(errors.password)}
                                                helperText={errors.password} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1, minWidth: 120 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaVenusMars
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="sexo-label">Sexo</InputLabel>
                                                    <Select
                                                        color={Boolean(errors.sexo) ? 'error' : 'primary'}
                                                        labelId="sexo-label"
                                                        id="sexo"
                                                        name='sexo'
                                                        fullWidth
                                                        label="Sexo"
                                                        value={values.sexo}
                                                        onChange={handleChange}
                                                        error={Boolean(errors.sexo)}
                                                    >
                                                        {
                                                            dataSexo.map((sexo, index) => (
                                                                <MenuItem value={sexo.id} key={index}>{sexo.sexo}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaChild
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.edad) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="edad"
                                                label="Edad"
                                                name="edad"
                                                autoComplete="edad"
                                                value={values.edad}
                                                onChange={handleChange}
                                                error={Boolean(errors.edad)}
                                                helperText={errors.edad} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1, minWidth: 120 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaMapMarkedAlt
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="departamento_nacimiento-label">Departamento de nacimiento</InputLabel>
                                                    <Select
                                                        labelId="departamento_nacimiento-label"
                                                        id="departamento_nacimiento"
                                                        name='departamento_nacimiento'
                                                        label="Departamento de nacimiento"
                                                        value={values.departamento_nacimiento}
                                                        onChange={handleChange}
                                                    >
                                                        {
                                                            dataColombia.map((answer, index) => (
                                                                <MenuItem value={answer.departamento} key={index}>{answer.departamento}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box sx={{ '& > :not(style)': { m: 1, minWidth: 120 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaMapSigns
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="ciudad_nacimiento-label">Ciudad de nacimiento</InputLabel>
                                                    <Select
                                                        labelId="ciudad_nacimiento-label"
                                                        id="ciudad_nacimiento"
                                                        name='ciudad_nacimiento'
                                                        label="Ciudad de nacimiento"
                                                        value={values.ciudad_nacimiento}
                                                        onChange={handleChange}
                                                    >
                                                        {dataColombia.find((dept) => { return dept.departamento === values.departamento_nacimiento })?.ciudades?.map((answer, i) => {
                                                            return (
                                                                <MenuItem
                                                                    key={i}
                                                                    value={answer}
                                                                >
                                                                    {answer}
                                                                </MenuItem>
                                                            )
                                                        })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaBirthdayCake
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.fecha_nacimiento) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="fecha_nacimiento"
                                                label="Fecha de nacimieento"
                                                name="fecha_nacimiento"
                                                autoComplete="fecha_nacimiento"
                                                value={values.fecha_nacimiento}
                                                onChange={handleChange}
                                                error={Boolean(errors.fecha_nacimiento)}
                                                helperText={errors.fecha_nacimiento} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaUserFriends
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.estado_civil) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="estado_civil"
                                                label="Estado civil"
                                                name="estado_civil"
                                                autoComplete="estado_civil"
                                                value={values.estado_civil}
                                                onChange={handleChange}
                                                error={Boolean(errors.estado_civil)}
                                                helperText={errors.estado_civil} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaTools
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.programa) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="programa"
                                                label="Programa"
                                                name="programa"
                                                autoComplete="programa"
                                                value={values.programa}
                                                onChange={handleChange}
                                                error={Boolean(errors.programa)}
                                                helperText={errors.programa} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaUniversity
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.semestre) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="semestre"
                                                label="Semestre"
                                                name="semestre"
                                                autoComplete="semestre"
                                                value={values.semestre}
                                                onChange={handleChange}
                                                error={Boolean(errors.semestre)}
                                                helperText={errors.semestre} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaVirus
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <FormControlLabel
                                                value={values.covid_positivo}
                                                checked={values.covid_positivo}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="¿Te enfermaste por Covid-19?"
                                                id="covid_positivo"
                                                name="covid_positivo"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaViruses
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <FormControlLabel
                                                value={values.covid_familiar}
                                                checked={values.covid_familiar}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="¿Tienes o tuviste algún familiar cercano enfermo por Covid-19? "
                                                id="covid_familiar"
                                                name="covid_familiar"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaSyringe
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <FormControlLabel
                                                value={values.covid_vacuna}
                                                checked={values.covid_vacuna}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="¿Has sido vacunado contra el Covid-19? "
                                                id="covid_vacuna"
                                                name="covid_vacuna"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaVirusSlash
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="covid_tipo_vacuna-label">¿Qué vacuna le aplicaron?</InputLabel>
                                                    <Select
                                                        labelId="covid_tipo_vacuna-label"
                                                        id="covid_tipo_vacuna"
                                                        name='covid_tipo_vacuna'
                                                        label="¿Qué vacuna le aplicaron?"
                                                        value={values.covid_tipo_vacuna}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"P"}>Pfizer</MenuItem>
                                                        <MenuItem value={"M"}>Moderna</MenuItem>
                                                        <MenuItem value={"S"}>Sinovac</MenuItem>
                                                        <MenuItem value={"A"}>Astrazeneca</MenuItem>
                                                        <MenuItem value={"J"}>Janssen</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaShieldVirus
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <FormControlLabel
                                                value={values.covid_dosis}
                                                checked={values.covid_dosis}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="¿Tiene usted la dosis completa?"
                                                id="covid_dosis"
                                                name="covid_dosis"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaAccessibleIcon
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <FormControlLabel
                                                value={values.discapacidad}
                                                checked={values.discapacidad}
                                                onChange={handleChange}
                                                control={<Checkbox />}
                                                label="¿Presenta usted alguna discapacidad?"
                                                id="discapacidad"
                                                name="discapacidad"
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaBlind
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="discapacidad_tipo-label">¿Qué tipo de discapacidad?</InputLabel>
                                                    <Select
                                                        labelId="discapacidad_tipo-label"
                                                        id="discapacidad_tipo"
                                                        name='discapacidad_tipo'
                                                        label="¿Qué tipo de discapacidad?"
                                                        value={values.discapacidad_tipo}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"P"}>Auditiva</MenuItem>
                                                        <MenuItem value={"V"}>Visual</MenuItem>
                                                        <MenuItem value={"S"}>Sordoceguera</MenuItem>
                                                        <MenuItem value={"I"}>Intelectual</MenuItem>
                                                        <MenuItem value={"P"}>Psicosocial (mental)</MenuItem>
                                                        <MenuItem value={"M"}>Múltiple</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaPhoneAlt
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.telefono) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="telefono"
                                                label="Número de eléfono"
                                                name="telefono"
                                                autoComplete="telefono"
                                                value={values.telefono}
                                                onChange={handleChange}
                                                error={Boolean(errors.telefono)}
                                                helperText={errors.telefono} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <FaToolbox
                                                style={{ color: '#00659D', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }} />
                                            <TextField
                                                color={Boolean(errors.ocupacion) ? 'error' : 'primary'}
                                                variant="standard"
                                                required
                                                fullWidth
                                                id="ocupacion"
                                                label="Ocupación"
                                                name="ocupacion"
                                                autoComplete="ocupacion"
                                                value={values.ocupacion}
                                                onChange={handleChange}
                                                error={Boolean(errors.ocupacion)}
                                                helperText={errors.ocupacion} />
                                        </Box>
                                    </Box>


                                    {messLogin?.document && (
                                        <div className="input-feedback">
                                            {messLogin?.document[0] ? <>Ya existe un usuario con ese documento</> : null}
                                        </div>
                                    )}
                                    {messLogin?.email && (
                                        <div className="input-feedback">
                                            {messLogin?.email[0] ? <>Ya existe un usuario con ese correo</> : null}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        className="btn-login btn-primary btn-block"
                                    >
                                        {loading ? (<>Cargando...</>) : (
                                            <>Registrarse</>)
                                        }
                                    </button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/recover" variant="body2">
                                                Olvidé mi contraseña
                                            </Link>
                                        </Grid>
                                        <Grid item xs>
                                            <Link href="/login" variant="body2">
                                                ¡Ya tengo cuenta!
                                                Vamos al login
                                            </Link>
                                        </Grid>
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

export default SignUp
