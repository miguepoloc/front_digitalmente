import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Formulario.scss'
import Logo from '../assets/img/logo9.svg'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={props.clase} {...field} {...props} />
      {meta.touched && meta.error
        ? (
        <div className="error">{meta.error}</div>
          )
        : null}
    </>
  )
}

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props htmlFor you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error
        ? (
        <div className="error">{meta.error}</div>
          )
        : null}
    </div>
  )
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className={props.clase} {...field} {...props} />
      {meta.touched && meta.error
        ? (
        <div className="error">{meta.error}</div>
          )
        : null}
    </div>
  )
}

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          email: '',
          acceptedTerms: false, // added htmlFor our checkbox
          jobType: '' // added htmlFor our select
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          apellido: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="nombre"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="numero"
            name="numero"
            type="number"
            placeholder="1"
          />

          <MyTextInput
            label="Last Name"
            name="apellido"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

const PruebaForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          email: '',
          acceptedTerms: false, // added htmlFor our checkbox
          jobType: '' // added htmlFor our select
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .max(15, 'Deben ser 15 caracteres o menos')
            .required('Requerido'),
          apellido: Yup.string()
            .max(20, 'Deben ser 20 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <div className="container">
          <div className="py-5 text-center">
            <img
              src={Logo}
              id="Icono"
              alt=""
              width="72"
              height="72"
              className="d-block mx-auto mb-4"
            />
            <h2>Formulario</h2>
            <p className="lead">Control formulario</p>
          </div>

          <div className="row">
            <div className="order-md-1">
              <h4 className="mb-3">Datos Socioeconómicos</h4>
              <Form className="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="Nombre"
                      name="nombre"
                      type="text"
                      placeholder="Jane"
                      clase="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="Nombre"
                      name="apellido"
                      type="text"
                      placeholder="Doe"
                      clase="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <MySelect
                      label="Job Type"
                      name="jobType"
                      clase="custom-select d-block w-100"
                    >
                      <option value="">Tipo de documento</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </MySelect>
                  </div>
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="Documento"
                      name="apellido"
                      type="number"
                      placeholder="Doe"
                      clase="form-control"
                    />
                  </div>
                </div>

                <div className="mb-3"></div>

                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required=""
                    >
                      <option>Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required=""
                    >
                      <option>Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    Save this information htmlFor next time
                  </label>
                </div>
                <hr className="mb-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required=""
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Continue to checkout
                </button>
              </Form>
            </div>
          </div>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">© 2017-2018 Company Name</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://getbootstrap.com/docs/4.0/examples/checkout/#">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://getbootstrap.com/docs/4.0/examples/checkout/#">
                  Terms
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://getbootstrap.com/docs/4.0/examples/checkout/#">
                  Support
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </Formik>
    </>
  )
}

function Formulario () {
  return (
    <>
      <PruebaForm />;
      <SignupForm />;
    </>
  )
}

export default Formulario
