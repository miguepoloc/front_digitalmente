import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form, Field, useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import {
  FaUser, FaVirusSlash, FaUniversity,
  FaUserFriends, FaRegAddressCard, FaIdCardAlt,
  FaAccessibleIcon, FaSyringe, FaEnvelopeOpenText,
  FaUnlockAlt, FaChild, FaVenusMars, FaBlind,
  FaMapMarkedAlt, FaBirthdayCake, FaTools,
  FaVirus, FaViruses, FaPhoneAlt, FaToolbox, FaShieldVirus
} from 'react-icons/fa'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val)
      }}
    />
  )
}

const Schema = Yup.object().shape({
  document: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  password: Yup.string().required('No se ha introducido una contraseña'),
  nombre: Yup.string().required('Requerido'),
  edad: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  tipo_documento: Yup.string().required('Requerido'),
  sexo: Yup.string().required('Requerido'),
  departamento_nacimiento: Yup.string().required('Requerido'),
  ciudad_nacimiento: Yup.string().required('Requerido'),
  fecha_nacimiento: Yup.date().required('Requerido'),
  estado_civil: Yup.string().required('Requerido'),
  programa: Yup.string().required('Requerido'),
  semestre: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  covid_positivo: Yup.boolean(),
  covid_familiar: Yup.boolean(),
  covid_vacuna: Yup.boolean(),
  covid_tipo_vacuna: Yup.string(),
  covid_dosis: Yup.boolean(),
  discapacidad: Yup.boolean(),
  discapacidad_tipo: Yup.string(),
  telefono: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  ocupacion: Yup.string().required('Requerido')
})

const ValoresIniciales = {
  document: '1',
  password: 'Contrasena1!',
  email: 'prueba@gmail.com',
  nombre: 'Prueba',
  edad: '20',
  tipo_documento: 'CC',
  sexo: '1',
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

const SignUpForm = () => {
  const history = useHistory()

  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')
  const [dataColombia, setdataColombia] = useState([])

  const getColombia = async () => {
    const colombia = await Axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json'
    })
    return (colombia.data)
  }

  useEffect(async function () {
    // Guarda en response el avance que lleva el usuario
    const response = await getColombia()

    if (response) {
      console.log(response)
      // Y lo coloca en el estado de datos del usuario
      setdataColombia(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, []) // Se controla el cambio a partir del estado control

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <>

      <img src={Ola} id="Ola" alt="" className="wave" />

      <div className="container-login">
        <div className="img-login">
          <img src={Cel} id="Cel" alt="" />
        </div>
        <div className="login-container">

          <Formik
            initialValues={ValoresIniciales}

            validationSchema={Schema}

            onSubmit={async (values) => {
              console.log(JSON.stringify(values, null, 2))
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
              }
            }}
          >

            {({
              touched,
              errors,
              values,
              handleSubmit,
              handleChange,
              setFieldValue
            }) => (
              <Form onSubmit={handleSubmit} className="form-login">

                <img src={Logo} id="Icono" alt="" className="avatar" />
                <h2>Bienvenido</h2>
                {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl> */}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUser></FaUser>
                  </div>
                  <div>
                    <Field
                      name="nombre"
                      placeholder="Nombre completo"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.nombre && touched.nombre && (
                  <div className="input-feedback">
                    {errors.nombre}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaIdCardAlt></FaIdCardAlt>
                  </div>
                  <div>
                    <Field
                      name="tipo_documento"
                      className="form-select"
                      as="select"
                    >
                      <option value="" disabled>Tipo de documento</option>
                      <option value="PA">PA</option>
                      <option value="CE">CÉDULA DE EXTRANJERÍA</option>
                      <option value="CC">CÉDULA DE CIUDADANÍA</option>
                      <option value="TI">TARJETA DE IDENTIDAD</option>
                      <option value="RC">REGISTRO CIVIL</option>
                    </Field>
                  </div>
                </div>
                {errors.tipo_documento && touched.tipo_documento && (
                  <div className="input-feedback">
                    {errors.tipo_documento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaRegAddressCard></FaRegAddressCard>
                  </div>
                  <div>
                    <Field
                      name="document"
                      placeholder="Documento de identidad"
                      className={'input'}
                    />
                  </div>
                </div>
                {(errors.document || messLogin.document) && touched.document && (
                  <div className="input-feedback">
                    {errors.document || messLogin?.document[0]}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaEnvelopeOpenText></FaEnvelopeOpenText>
                  </div>
                  <div>
                    <Field
                      name="email"
                      placeholder="Correo Electrónico"
                      className={'input'}
                    />
                  </div>
                </div>
                {(errors.email || messLogin.email) && touched.email && (
                  <div className="input-feedback">
                    {errors.email || messLogin?.email[0]}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUnlockAlt></FaUnlockAlt>
                  </div>
                  <div>
                    <Field
                      name="password"
                      placeholder="Contraseña"
                      className={'input'}
                      type="password"
                    />
                  </div>
                </div>
                {errors.password && touched.password && (
                  <div className="input-feedback">
                    {errors.password}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaChild></FaChild>
                  </div>
                  <div>
                    <Field
                      name="edad"
                      placeholder="Edad"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.edad && touched.edad && (
                  <div className="input-feedback">
                    {errors.edad}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaVenusMars></FaVenusMars>
                  </div>
                  <div>
                    <Field
                      name="sexo"
                      className="form-select"
                      as="select"
                    >
                      <option value="" disabled>Sexo</option>
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                      <option value="3">Intersex</option>
                    </Field>
                  </div>
                </div>
                {errors.sexo && touched.sexo && (
                  <div className="input-feedback">
                    {errors.sexo}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaMapMarkedAlt></FaMapMarkedAlt>
                  </div>
                  <div>
                    <Field
                      name="departamento_nacimiento"
                      className="form-select"
                      as="select"
                      onChange={handleChange}
                    >
                      <option value="" disabled>Departamento de nacimiento</option>
                      {dataColombia.map((answer, i) => {
                        return (
                          <option
                            key={i}
                            value={answer.departamento}
                          >
                            {answer.departamento}
                          </option>
                        )
                      })}
                    </Field>
                  </div>
                </div>
                {errors.departamento_nacimiento && touched.departamento_nacimiento && (
                  <div className="input-feedback">
                    {errors.departamento_nacimiento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaMapMarkedAlt></FaMapMarkedAlt>
                  </div>
                  <div>
                    <Field
                      name="ciudad_nacimiento"
                      className="form-select"
                      key={`ciudad-${values.departamento_nacimiento}`}
                      as="select"
                      onChange={handleChange}
                    >
                      <option value="" disabled>Ciudad de nacimiento</option>
                      {dataColombia.find((dept) => { return dept.departamento === values.departamento_nacimiento })?.ciudades?.map((answer, i) => {
                        return (
                          <option
                            key={i}
                            value={answer}
                          >
                            {answer}
                          </option>
                        )
                      })
                      }
                    </Field>
                  </div>
                </div>
                {errors.ciudad_nacimiento && touched.ciudad_nacimiento && (
                  <div className="input-feedback">
                    {errors.ciudad_nacimiento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaBirthdayCake></FaBirthdayCake>
                  </div>
                  <div>
                    Fecha de nacimiento
                    <DatePickerField name="fecha_nacimiento" />
                  </div>
                </div>
                {errors.fecha_nacimiento && touched.fecha_nacimiento && (
                  <div className="input-feedback">
                    {errors.fecha_nacimiento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUserFriends></FaUserFriends>
                  </div>
                  <div>
                    <Field
                      name="estado_civil"
                      placeholder="Estado civil"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.estado_civil && touched.estado_civil && (
                  <div className="input-feedback">
                    {errors.estado_civil}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaTools></FaTools>
                  </div>
                  <div>
                    <Field
                      name="programa"
                      placeholder="Programa"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.programa && touched.programa && (
                  <div className="input-feedback">
                    {errors.programa}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUniversity></FaUniversity>
                  </div>
                  <div>
                    <Field
                      name="semestre"
                      placeholder="Semestre"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.semestre && touched.semestre && (
                  <div className="input-feedback">
                    {errors.semestre}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaVirus />
                  </div>

                  <div>
                    {values.covid_positivo && (
                      <p>Hola</p>
                    )}
                    <Field
                      name="covid_positivo"
                      placeholder="Positivo pa covid"
                      className='input-check'
                      type="checkbox"
                      onChange={handleChange}
                    />

                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <FaViruses></FaViruses>
                  </div>
                  <div>
                    <p>Familiar Positivo</p>
                    <Field
                      name="covid_familiar"
                      placeholder="Familiar Positivo pa covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <FaSyringe></FaSyringe>
                  </div>
                  <div>
                    <p>Vacunado contra covid</p>
                    <Field
                      name="covid_vacuna"
                      placeholder="Vacunado contra covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                {values.covid_vacuna && (
                  <div className="input-div my-0">
                    <div className="i">
                      <FaVirusSlash></FaVirusSlash>
                    </div>
                    <div>
                      <Field
                        name="covid_tipo_vacuna"
                        placeholder="Tipo de vacuna covid"
                        className='input'
                      />
                    </div>
                  </div>
                )
                }
                {errors.covid_tipo_vacuna && touched.covid_tipo_vacuna && (
                  <div className="input-feedback">
                    {errors.covid_tipo_vacuna}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaShieldVirus></FaShieldVirus>
                  </div>
                  <div>
                    <p>Dosis completa covid</p>
                    <Field
                      name="covid_dosis"
                      placeholder="Dosis completa contra covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <FaAccessibleIcon></FaAccessibleIcon>
                  </div>
                  <div>
                    <p>Alguna discapacidad</p>
                    <Field
                      name="discapacidad"
                      placeholder="Tiene alguna discapacidad"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <FaBlind></FaBlind>
                  </div>
                  <div>
                    <Field
                      name="discapacidad_tipo"
                      placeholder="Tipo de discapacidad"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.discapacidad_tipo && touched.discapacidad_tipo && (
                  <div className="input-feedback">
                    {errors.discapacidad_tipo}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaPhoneAlt></FaPhoneAlt>
                  </div>
                  <div>
                    <Field
                      name="telefono"
                      placeholder="Teléfono"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.telefono && touched.telefono && (
                  <div className="input-feedback">
                    {errors.telefono}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaToolbox></FaToolbox>
                  </div>
                  <div>
                    <Field
                      name="ocupacion"
                      placeholder="Ocupación"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.ocupacion && touched.ocupacion && (
                  <div className="input-feedback">
                    {errors.ocupacion}
                  </div>
                )}
                <button type="submit" className="btn-login btn-primary btn-block">
                  {messLogin ? 'Hubo un error' : 'Registrarse'}
                </button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default SignUpForm
