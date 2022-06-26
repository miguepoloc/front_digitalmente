import alegria from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Alegria.jpg"
import asco from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Asco.jpg"
import ira from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Ira.jpg"
import miedo from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Miedo.jpg"
import sorpresa from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Sorpresa.jpg"
import tristeza from "../assets/img/modulo_emocional/Actividad_1.1/seccion2/Tristeza.jpg"

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
  };

export const section1 = {
    name: "Seccion1",
    options: ["Sorpresa", "Asco", "Miedo", "Alegría", "Tristeza", "Ira"],
    activities: [
        {
            name: "Actividad 1",
            correctAnswerIndex: 1, //Hace referencia al indice del vector opcions.
            correctAnswerText: "Asco",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wOC8yNS8yMS80NC9zaG9ja2VkLTI2ODE0ODhfOTYwXzcyMC5qcGdfKG5vX3ByZXZpZXdfNClfKG5vcD0xMik~`,
            text: `El asco comprende un rechazo o repugnancia hacia algo desagradable o repugnante. Es una respuesta emocional cuya función es prepararte ante el rechazo a situaciones (ya sea físicas, psicológicas u otras) que podrían ser dañinas, dirigiendo la acción hacia el alejamiento de lo que lo provoca. Principalmente potencia los hábitos saludables <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
        {
            name: "Actividad 2",
            correctAnswerIndex: 2,
            correctAnswerText: "Miedo",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8wNS8xMS8wNi9wZW9wbGUtMzE0NDgxXzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MTUp`,
            text: `El miedo implica un estado emocional producido por un peligro presente e inminente, que tiende a estar muy ligada al factor que lo genera. Su función está orientada a la adaptación, avisándote de un riesgo vital, facilitando de este modo respuestas de escape o evitación. Su motivación corresponde más a la supervivencia <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
        {
            name: "Actividad 3",
            correctAnswerIndex: 4,
            correctAnswerText: "Tristeza",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wNy8wMS8yMi8zNC9wZW9wbGUtMTQ5MjA1Ml85NjBfNzIwLmpwZ18obm9fcHJldmlld180KV8obm9wPTE1KQ~~`,
            text: `La tristeza comprende un sentimiento negativo producto de una bajada en el estado de ánimo, acompañada de una reducción de tu actividad en cuanto a pensamientos y acciones. Es una respuesta emocional que te induce a funcionar lentamente a nivel general, buscando ahorrar energía y permitiendo concentrar tu atención en ti, promoviendo la reflexión de situaciones y aspectos que antes podrías haber omitido <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
        {
            name: "Actividad 4",
            correctAnswerIndex: 5,
            correctAnswerText: "Ira",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMS8xOS8wNy8zNS9zdHJlbmd0aC0xMTQ4MDI5Xzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MjAp`,
            text: `La ira comprende un sentimiento vigorizador que aparece cuando te ves sometido a situaciones frustrantes o que te resultan increíblemente molestas. Se dice que es vigorizador porque urge a la acción, centrando la atención en el factor que produce la emoción e interrumpiendo los pensamientos que se encuentren en el momento. Es una respuesta emocional que te permite desarrollar rápidamente acciones de defensa o ataque ante situaciones desagradables <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
        {
            name: "Actividad 5",
            correctAnswerIndex: 3,
            correctAnswerText: "Alegría",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wOC8wNS8xNC8yMS9wZW9wbGUtMjU4Mzk0M185NjBfNzIwLmpwZ18obm9fcHJldmlld180KV8obm9wPTIwKQ~~`,
            text: `La alegría comprende un sentimiento positivo producto de conseguir una meta, objetivo o eliminar elementos negativos que influyan. Es una respuesta emocional que te ayuda a regular tus sistemas biológicos y psicológicos disminuyendo factores negativos. También promueve el contacto social <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
        {
            name: "Actividad 6",
            correctAnswerIndex: 0,
            correctAnswerText: "Sorpresa",
            url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxMi8wMi8yOS8xMi8xMi9jdXRlLTE4OTI3Xzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MjUp`,
            text: `La sorpresa es una emoción neutra, es decir, no está orientada hacia una clasificación especifica positiva, negativa, agradable o desagradable. Su función está orientada a prepararte para afrontar situaciones repentinas o inesperadas y lo que venga con ellas, es decir, hace una limpieza general de cualquier cosa que podría distraerte para lo que sea que viene con ese acontecimiento <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
        },
    ],
};
export const seccion2 = {
    ejercicios: [{
        name: "Ejercicio 1",
        image: asco,
        text: "Cuando experimentas asco, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Identificar, por ejemplo, como experimentamos en nuestro cuerpo las emociones es un paso esencial para la gestión emocional. ",
        sensaciones: [
            { option: "Erizamiento de la piel.", isCorrect: false },
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: true },
            { option: "Prolongación de la pausa entre inspiraciones.", isCorrect: true },
            { option: "Bajo tono muscular.", isCorrect: false },
            { option: "Nauseas.", isCorrect: true },
            { option: "Interrupción puntual de la respiración.", isCorrect: false }
        ],
        pensamientos: [
            { option: "Pensamientos de rechazo.", isCorrect: true },
            { option: "Pensamientos optimistas.", isCorrect: false },
            { option: "Percepción de que algo no es como debería ser.", isCorrect: true },
            { option: "¡Importante!", isCorrect: false },
            { option: "¡Ugh!", isCorrect: true }
        ],
        acciones: [
            { option: "Correr.", isCorrect: false },
            { option: "Salta.", isCorrect: false },
            { option: "Distanciarse.", isCorrect: true },
            { option: "Cantar.", isCorrect: false },
            { option: "Inmovilización.", isCorrect: false },
            { option: "Evitación.", isCorrect: true },
            { option: "Retirar la atención.", isCorrect: true },
        ]
    },
    {
        name: "Ejercicio 2",
        image: miedo,
        text: "Cuando experimentas miedo, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Recuerda que, por ejemplo, las acciones tienden a ser respuestas impulsivas que debemos saber identificar para gestionar.",
        sensaciones: [
            { option: "Aumento de la tensión muscular.", isCorrect: true },
            { option: "Aumento de la frecuencia respiratoria.", isCorrect: true },
            { option: "Prolongación de la pausa entre inspiraciones.", isCorrect: false },
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: true },
            { option: "Erizamiento de la piel.", isCorrect: false },
        ],
        pensamientos: [
            { option: "Pensamientos de preocupación.", isCorrect: true },
            { option: "Percepción de daño.", isCorrect: true },
            { option: "Pensamientos optimistas.", isCorrect: false },
            { option: "Percepción de peligro.", isCorrect: true },
            { option: "Reflexión sobre la vida.", isCorrect: false },

        ],
        acciones: [
            { option: "Retirarse.", isCorrect: true },
            { option: "Acercarse.", isCorrect: false },
            { option: "Atacar.", isCorrect: true },
            { option: "Inmovilizarse.", isCorrect: true },
            { option: "Correr.", isCorrect: false },
            { option: "Buscar en los bolsillos.", isCorrect: false },
        ]
    },
    {
        name: "Ejercicio 3",
        image: tristeza,
        text: "Cuando experimentas tristeza, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Los pensamientos que tienden a surgir cuando se experimenta una emoción pueden ser distorsionados o exagerados con respecto a la situación. ¡Por eso es importante reconocerlos!",
        sensaciones: [
            { option: "Aumento de la presión sanguínea.", isCorrect: true },
            { option: "Aumento de la frecuencia respiratoria.", isCorrect: false },
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: false },
            { option: "Prolongación de la pausa entre inspiraciones.", isCorrect: false },
            { option: "Aumento de las inhalaciones (respiración).", isCorrect: true },
            { option: "Aumento del tono muscular.", isCorrect: true },
        ],
        pensamientos: [
            { option: "Pensamientos de aflicción.", isCorrect: true },
            { option: "Percepción de daño.", isCorrect: false },
            { option: "Percepción de peligro.", isCorrect: false },
            { option: "“¡Esto es lo peor!”", isCorrect: true },
            { option: "Pensamientos de preocupación.", isCorrect: false },
            { option: "Pensamiento enfocado en lo negativo.", isCorrect: true }
        ],
        acciones: [
            { option: "Ritmo acelerado.", isCorrect: false },
            { option: "Ritmo pausado en acciones.", isCorrect: true },
            { option: "Retraimiento.", isCorrect: true },
            { option: "Cocinar.", isCorrect: false },
            { option: "Leer.", isCorrect: false },
            { option: "Evitar interacción con otros.", isCorrect: true },
        ]
    },
    {
        name: "Ejercicio 4",
        image: ira,
        text: "Cuando experimentas ira, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¿Te han dicho cuando estás muy molesto y has tomado una decisión que mejor lo pienses “con cabeza fría”? Precisamente, de aquí parte el saber identificar y aceptar nuestras emociones. Esto no significa que todos se lanzan a la acción de agredir o se irritan internamente, dado que depende de muchos factores tanto de la persona como de la situación y el ambiente para una reacción u otra.",
        sensaciones: [
            { option: "Aumento de la presión sanguínea.", isCorrect: false },
            { option: "Aumento del ritmo respiratorio", isCorrect: true },
            { option: "Prolongación de la pausa entre inspiraciones.", isCorrect: false },
            { option: "Aumento del tono muscular.", isCorrect: true },
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: true },
        ],
        pensamientos: [
            { option: "Percepción en torno a la aflicción.", isCorrect: false },
            { option: "Pensamientos impulsivos.", isCorrect: true },
            { option: "Acción antes que consideración de la situación.", isCorrect: true },
            { option: "Poca reflexión sobre situaciones.", isCorrect: true },
            { option: "“¡Esto es lo peor!”", isCorrect: false },

        ],
        acciones: [
            { option: "Agredir verbalmente.", isCorrect: true },
            { option: "Inmovilizarse.", isCorrect: false },
            { option: "Acción violenta.", isCorrect: false },
            { option: "Pegar a algo o alguien.", isCorrect: true },
            { option: "Desgana.", isCorrect: false },
            { option: "Irritarse internamente.", isCorrect: true },
        ]
    },
    {
        name: "Ejercicio 5",
        image: alegria,
        text: "Cuando experimentas alegría, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¡Recuerda valorar todas las emociones y aceptarlas, son parte de tu vida y te permiten adaptarte a tu entorno!",
        sensaciones: [
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: true },
            { option: "Alto tono muscular.", isCorrect: false },
            { option: "Interrupción puntual de la respiración.", isCorrect: false },
            { option: "Erizamiento de la piel.", isCorrect: false },
            { option: "Bajo tono muscular.", isCorrect: true },
            { option: "Aumento de las inhalaciones (respiración).", isCorrect: true },
        ],
        pensamientos: [
            { option: "“¿Qué pasó?”", isCorrect: false },
            { option: "Pensamientos impulsivos.", isCorrect: true },
            { option: "Acción antes que consideración de la situación.", isCorrect: true },
            { option: "Poca reflexión sobre situaciones.", isCorrect: true },
            { option: "“¡Esto es lo peor!”", isCorrect: false },

        ],
        SinAcciones: "La alegría facilita la interacción social, mejora el rendimiento cognitivo y la actitud frente a las situaciones, entre otros puntos. De aquí se pueden derivar muchas acciones dependiendo de tu personalidad, puede que estés más propenso a hablar con otras personas, o a prestar atención a lo que te comentan o a compartir algo determinado. La importancia de identificar las emociones nos permite observar su impacto (Fernández-Abascal et al., 2010)"
    },
    {
        name: "Ejercicio 6",
        image: sorpresa,
        text: "Cuando experimentas sorpresa, ¿cómo has sentido que lo expresas?",
        //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
        successMsg: "¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¡Ejercita la identificación de tus emociones como paso fundamental para tu gestión emocional!",
        sensaciones: [
            { option: "Temblor en los brazos.", isCorrect: false },
            { option: "Disminución de la frecuencia cardiaca.", isCorrect: true },
            { option: "Aumento de la frecuencia cardiaca.", isCorrect: false },
            { option: "Interrupción puntual de la respiración.", isCorrect: true },
            { option: "Erizamiento de la piel.", isCorrect: true },
            { option: "Respiración normal.", isCorrect: false },
        ],
        pensamientos: [
            { option: "“¿¡Qué!? ¿Qué pasó?”", isCorrect: true },
            { option: "Pensamientos de incertidumbre.", isCorrect: true },
            { option: "Pensamientos positivos.", isCorrect: false },
            { option: "Pensamientos negativos.", isCorrect: false },
            { option: "“¿Qué hora es?”", isCorrect: false },
            { option: "Mente en blanco.", isCorrect: true },
        ],
        SinAcciones: "La sorpresa facilita que aparezcan acciones relacionadas a explorar, investigar. Es decir, en torno al interés o curiosidad por la situación. Siempre dependerá del tipo de factor al que te enfrentas, lo que hará que después determine uno u otro tipo de acción (Fernández-Abascal et al., 2010)"
    },
    ]
}

/* 
      utilidades 
*/
export const setColorSelect = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--colorCheck", color);
}

export const countElementInArray = (array, value) => {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

export const areUniqueValue = (arr) => {
    for (const value of arr) {
        if (countElementInArray(arr, value) > 1) {
            return false;
        }
    }
    return true;
}

export const areValidValues = (arr) => {
    for (const value of arr) {
        if (value == -1) {
            return false;
        }
    }
    return true;
}

export const areCorrectAnswers = (arr, column,activityIndex) => {
    for (const value of arr) {
        if (!seccion2.ejercicios[activityIndex][column][value].isCorrect) {
            return false;
        }
    }
    return true;
}
