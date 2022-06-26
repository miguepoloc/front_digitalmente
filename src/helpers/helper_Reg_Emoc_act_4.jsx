/* eslint-disable camelcase */
import alegria from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Alegria.jpg'
import asco from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Asco.jpg'
import ira from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Ira.jpg'
import miedo from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Miedo.jpg'
import sorpresa from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Sorpresa.jpg'
import tristeza from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Tristeza.jpg'
import situacion1 from '../components/Act_4.1/img/Situacion1.png'
import situacion2 from '../components/Act_4.1/img/Situacion2.png'
import situacion3 from '../components/Act_4.1/img/Situacion3.png'
import situacion4 from '../components/Act_4.1/img/Situacion4.png'
export const initialOptions = {
  select_sensaciones_0: -1,
  select_sensaciones_1: -1,
  select_sensaciones_2: -1,
  select_pensamientos_0: -1,
  select_pensamientos_1: -1,
  select_pensamientos_2: -1,
  select_acciones_0: -1,
  select_acciones_1: -1,
  select_acciones_2: -1
}

export const section4_1 = {
  name: 'Seccion4',
  activities: [
    {
      name: 'Ejercicio 1',
      imagen: situacion1,
      text: 'Es importante recordar que, en este tipo de situaciones, si bien las emociones pueden llevarnos a actuar de forma impulsiva y a veces de forma espontanean, el ejercicio de detenerse, reconocer lo que experimentamos y reflexionar se vuelve un punto clave que tendrá un impacto en nuestra salud mental y en las consecuencias en nuestro entorno ¡Gestionar nuestras emociones es posible!'
    },
    {
      name: 'Ejercicio 2',
      imagen: situacion2,
      text: 'Recordar la función e importancia que tienen las emociones es un punto clave al reconocer como gestionarlas. Los niveles en que una emoción puede estar influyen también, como se ha visto. ¡No despreciemos el valor de las emociones negativas!'
    },
    {
      name: 'Ejercicio 3',
      imagen: situacion3,
      text: 'Recordar que gestionar no solo es saber manejar las emociones negativas sino darle un buen uso y potencialización a las positivas es un punto importante a tener en cuenta. ¡Acepta la experiencia emocional y gestiónala adecuadamente!'
    },
    {
      name: 'Ejercicio 4',
      imagen: situacion4,
      text: 'Las estrategias que utilizamos en si no son buenas o malas, es algo importante a tener en cuenta. Siempre dependerá de los diferentes factores que rodean tanto a la situación como a ti como persona. Lo importante es sabes comprender y aceptar las emociones para poder manejarlas de la mejor forma posible, y, siempre que lo necesites, saber pedir ayuda a los demás cuando sientes que todo se desborda.'
    }
  ]
}

export const section4_2 = {
  name: 'Seccion4',
  titleError: '¡Estás cerca!',
  errorMsg: 'Revisa algunas de las opciones seleccionadas e intenta de nuevo.',
  titleSuccess: '¡Excelente!',
  successMsg: 'Recuerda que cada persona puede aplicar distintas estrategias a las diferentes situaciones que se le presentan. ¡Continua con el siguiente!',
  activities: [
    {
      name: 'Ejercicio 1',
      ejercicio: 'Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias. No alcanzas a terminar el tema, porque al salir de la universidad, ves tu bus pasando y sabes que necesitas alcanzarlo. Ahora vas en el bus pensativo.',
      opcion1: 'Empieza a considerar lo que ocurre. Sabe que ahora mismo se encuentra bastante indispuesto y no quiere hacer algo de lo que se arrepienta después. Aprovecha el viaje en el bus para escuchar su música favorita. No quiere pensar en lo ocurrido mientras se sienta así. Considera las experiencias vividas, la relación con esa persona y lo que ocurrió en ese momento.',
      opcion2: 'Nota que su respiración aumenta, su corazón empieza a palpitar muy rápida y sus brazos y manos se tensan. Empieza a pensar: “¿Quién se cree acaso?” “¿Qué le pasa?” “¡Ni sabe que m(&/%&$ esta hablando!”. Un deseo de empujar a la otra persona casi de forma instantánea lo invade sin otra consideración, pero se detiene un momento y reflexiona lo que está sintiendo.',
      opcion3: 'Llega a casa y se dispone a comer, descambiarse y recostarse un momento. Con la mente más clara, piensa en lo que ha pasado y entonces le escribe a su amigo.',
      color1: 'amarillo',
      color2: 'rojo',
      color3: 'verde',
      situacion: [
        { option: 'Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias.', isCorrect: true },
        { option: 'Es el día de un examen muy importante.', isCorrect: false },
        { option: 'Mientras sales, te llaman para decirte que acabas de ganarte algo por lo que concursaste.', isCorrect: false },
        { option: 'Tienes un amigo(a) que en general es una persona muy alegre. Hoy lo has visto bastante bajo de ánimo.', isCorrect: false }
      ],
      emocion: [
        { option: 'Alegría', isCorrect: false },
        { option: 'Tristeza', isCorrect: false },
        { option: 'Ira', isCorrect: true },
        { option: 'Sorpresa', isCorrect: false },
        { option: 'Miedo', isCorrect: false },
        { option: 'Asco', isCorrect: false }
      ]
    },
    {
      name: 'Ejercicio 2',
      ejercicio: 'Es el día de un examen muy importante. Has fallado ya algunos antes y necesitas la nota de este. Al realizarlo, hay muchas respuestas de las que no estás seguro. Aun te faltan algunas preguntas por resolver cuando miras el reloj y parece que falta poco para recoger el examen.',
      opcion1: 'Siente como se tensan sus brazos y piernas, su respiración aumenta y su corazón late rápidamente. Piensa: “Voy a perder esto. Me va a tocar repetir.” “¿Y si la pregunta 1 y 2 si era como pensaba y no lo que cambié?” “¡Me estoy tirando el semestre!”. De pronto siente como sus pies se mueven y mira hacia la entrada. Un impulso de salir de allí pronto lo invade. Se detiene y trata de reflexionar.',
      opcion2: 'Revisa las preguntas de las que tiene dudas y trata de recordar. Responde lo mejor posible en cada punto y termina. Vuelve a mirar el reloj. Un minuto para que termine el tiempo. Le da tiempo de echarle una última mirada. Cree que todo podría estar bien, justo a tiempo para que el profesor anuncie que recogerá el examen.',
      opcion3: 'Sabe que ahora mismo lo ha invadido todas esas sensaciones, pero trata de respirar profundamente, busca aclarar su mente, dejando de pensar en lo que podría salir mal. Se concentra en ese preciso momento. Luego, empieza a revisar las preguntas y el tiempo. ¿Cuáles son las dudas que tiene y cuantas podría tener certeza de haber respondido? Empieza a pensar “Ok, hay varias que respondí bien. Del resto, he estudiado y sé que puedo. Esto solo me sirve para apurarme un poco. Si fallo, puede pasar. Tengo que darle en la medida de lo que sepa.',
      color1: 'rojo',
      color2: 'verde',
      color3: 'amarillo',
      situacion: [
        { option: 'Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias.', isCorrect: false },
        { option: 'Es el día de un examen muy importante.', isCorrect: true },
        { option: 'Mientras sales, te llaman para decirte que acabas de ganarte algo por lo que concursaste.', isCorrect: false },
        { option: 'Tienes un amigo(a) que en general es una persona muy alegre. Hoy lo has visto bastante bajo de ánimo.', isCorrect: false }
      ],
      emocion: [
        { option: 'Alegría', isCorrect: false },
        { option: 'Tristeza', isCorrect: false },
        { option: 'Ira', isCorrect: false },
        { option: 'Sorpresa', isCorrect: false },
        { option: 'Miedo', isCorrect: true },
        { option: 'Asco', isCorrect: false }
      ]
    },
    {
      name: 'Ejercicio 3',
      ejercicio: 'Vas saliendo de una clase, donde acaban de poner un trabajo donde te piden crear algo por ti mismo. El profesor acaba de dar su hora libre para que lo hagan, pero decides salir. Mientras sales, te llaman para decirte que acabas de ganarte algo por lo que concursaste y pensaste que no tenías posibilidad de llevarte. Es algo que siempre habías querido.',
      opcion1: 'Esta emocionado y alegre pero sinceramente no tiene mucho que hacer en ese momento. La idea de formar el grupo ahora y el tiempo dado por el profesor lo hace pensar. Esta demasiado contento para pensar claramente así que trata de respirar un poco y situarse en el momento. Sabe que la recompensa lo espera y no tiene que apurarse. Tal vez deba aprovechar el buen ánimo para salir de ese trabajo y resolverlo.',
      opcion2: 'Siente como se interrumpe por un momento su respiración, se le eriza la piel y el latido de su corazón aumenta. Empieza entonces a respirar más rápidamente y una sonrisa no puede evitar salir en su rostro.  Piensa: “¡Es increíble! ¡No pensé que lo ganaría!” “¡Joda, lo gané y eso que no me ha ganado ni un bingo!”. Siente la necesidad de compartirlo y se lo comenta a su amigo que salió de clase en ese momento junto con él. Alguien más llega y él lo comparte, empieza a reír y bromear sobre el tema. Una persona le recuerda del trabajo y le dice que si se ponen en grupo.',
      opcion3: 'Junto a su amigo y la otra persona, forman el grupo y se sientan un momento en unas bancas con tablero para pensar que hacer. Revisan el enunciado del trabajo. Al poco tiempo, ya tiene una idea que hacer y le parece tan sencilla y buena para hacer que anima a los demás y acuerdan desarrollarla. Crean un grupo virtual y acuerdan trabajar el tema. Luego va a su casa pensando en lo que ganó.',
      color1: 'amarillo',
      color2: 'rojo',
      color3: 'verde',
      situacion: [
        { option: 'Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias.', isCorrect: false },
        { option: 'Es el día de un examen muy importante.', isCorrect: false },
        { option: 'Mientras sales, te llaman para decirte que acabas de ganarte algo por lo que concursaste.', isCorrect: true },
        { option: 'Tienes un amigo(a) que en general es una persona muy alegre. Hoy lo has visto bastante bajo de ánimo.', isCorrect: false }
      ],
      emocion: [
        { option: 'Alegría', isCorrect: true },
        { option: 'Tristeza', isCorrect: false },
        { option: 'Ira', isCorrect: false },
        { option: 'Sorpresa', isCorrect: false },
        { option: 'Miedo', isCorrect: false },
        { option: 'Asco', isCorrect: false }
      ]
    },
    {
      name: 'Ejercicio 4',
      ejercicio: 'Tienes un amigo(a) que en general es una persona muy alegre. Siempre busca la manera de mejorar el ambiente de quienes lo rodean. Hoy lo has visto bastante bajo de ánimo. Te cuenta que terminó con su novia(o) y no quiere hacer nada. Se siente mal porque no le gusta sentirse así.',
      opcion1: 'Puede ver como su amigo(a) anda caminando lento, respira entrecortado, pero de forma rápida y le comenta que se siente pésimo. No quiere estar así. No es como le gusta estar. Le dice que él ha pensado en que es patético de él mismo por ponerse así por una relación. Le dice que no quiere saber nada de nada.',
      opcion2: 'Piensa en lo que está ocurriendo con esa persona. Lo que dice que piensa, siente y como lo ve que actúa. Entiende que puede sentirse presionado por estar alegre o sentirse bien siempre. Comprende también lo duro de ese tipo de situaciones. Reflexiona y toma una decisión.',
      opcion3: 'Aparta a su amigo(a) a un lado y le habla. Le dice que estar triste en ese tipo de situaciones es normal. No tiene que estar alegre ni contentar a todo el mundo. Se muestra dispuesto a hablar si lo necesita y le propone salir después de clases. Su amigo(a) le agradece, pero le dice que después de clases solo quiere ir a casa y estar solo un rato. Él lo entiende, pero le reitera que, si necesita hablar, puede llamarlo o escribirle en cualquier momento.',
      color1: 'rojo',
      color2: 'amarillo',
      color3: 'verde',
      situacion: [
        { option: 'Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias.', isCorrect: false },
        { option: 'Es el día de un examen muy importante.', isCorrect: false },
        { option: 'Mientras sales, te llaman para decirte que acabas de ganarte algo por lo que concursaste.', isCorrect: false },
        { option: 'Tienes un amigo(a) que en general es una persona muy alegre. Hoy lo has visto bastante bajo de ánimo.', isCorrect: true }
      ],
      emocion: [
        { option: 'Alegría', isCorrect: false },
        { option: 'Tristeza', isCorrect: true },
        { option: 'Ira', isCorrect: false },
        { option: 'Sorpresa', isCorrect: false },
        { option: 'Miedo', isCorrect: false },
        { option: 'Asco', isCorrect: false }
      ]
    }
  ]
}

/*
      utilidades
*/
export const setColorSelect = (color) => {
  const root = document.documentElement
  root.style.setProperty('--colorCheck', color)
}

export const countElementInArray = (array, value) => {
  let count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

export const areUniqueValue = (arr) => {
  for (const value of arr) {
    if (countElementInArray(arr, value) > 1) {
      return false
    }
  }
  return true
}

export const areValidValues = (arr) => {
  for (const value of arr) {
    if (value === -1) {
      return false
    }
  }
  return true
}
