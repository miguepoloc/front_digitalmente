/* eslint-disable camelcase */

/*
La idea es que los alerts para que sea facil hacerle cambio a las imagenes.
*/

import Swal from 'sweetalert2'
import { imgGanso } from './helper_imagen_ganso'

const colorTheme = '#4cbeff'

window.Swal = Swal

// Se utiliza en la parte 1 de la actividad 1 del módulo de david.
export const Warning_Alert = (
  title = '',
  htmlText = '',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.stop_250x200,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: '¿Seguro que esa era la respuesta?',
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const Correct_Alert = (
  title = '<strong>¡Correcto!</strong>',
  htmlText = '',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.elegante_250x200,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: '¡Correcto!',
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const ErrorAlert = (
  title = '<strong>Uhm.. algo ha salido mal</strong>',
  htmlText = '¿Porque no intentas otra vez?',
  alt = 'Algo ha salido mal',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.stop_250x200, // Corregir xd
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const SendAlert = (
  title = '<strong>Enviando...</strong>',
  htmlText = '',
  alt = 'Espera un momento',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.escribiendo_250x200, // Corregir xd
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false
  })
}

export const SendOkAlert = (
  title = '<strong>¡Se ha enviado con exito!</strong>',
  htmlText = '',
  alt = 'Espera un momento',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.feliz_250x200,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const SendBadAlert = (
  title = '<strong>¡Ups!</strong>',
  htmlText = 'Parece que algo salió mal',
  alt = 'Espera un momento',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.triste_250x200,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const RetroalimentacionAlert = (
  title = '<strong>¡Importante!</strong>',
  htmlText = '',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.explicando,
    imageWidth: 250,
    // imageHeight: 200,
    imageAlt: '¡Importante!',
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}

export const gansoPensandoAlert = (
  title = '<h5><strong>¡Importante!</strong></h5>',
  htmlText = '',
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: imgGanso.pensando,
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: '¡Importante!',
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: 'Aceptar',
    focusConfirm: true
  })
}
