import buenasIntenciones from '../components/Dashboard/mod_alternativo/assets/img/2_C_Buenas_intenciones.png'
import arbol from '../components/Dashboard/mod_alternativo/assets/img/3_Arbol_insegur.png'
import montana from '../components/Dashboard/mod_alternativo/assets/img/4_Montaña.png'
import lago from '../components/Dashboard/mod_alternativo/assets/img/5_lago.png'
import zona from '../components/Dashboard/mod_alternativo/assets/img/6_zona_de_confort.png'
// import mapa from '../components/Dashboard/mod_alternativo/assets/img/1Mapa.jpeg'

//import exito from '../components/Dashboard/mod_alternativo/assets/img/#7 C. del exito.png'

export const paradas = {
    activities: [
        {
            isActivity: true,
            name: "Parada 1: Ciudad de las buenas intenciones",
            img: buenasIntenciones,
            correctAnswerIndex: 1, //Hace referencia al indice del vector opcions.
            correctAnswerText: "B-	Disponerse desde ya y dejar de aplazarlo",
            text: `Max desde hace mucho tiempo tiene la intención de realizar su viaje hacia la Ciudad del Éxito, pero siempre encuentra una excusa para aplazarlo. Teniendo en cuenta tu experiencia`,
            question: '¿Qué le aconsejarías?',
            options: ["A- Esperar hasta que tenga ganas de hacer el viaje", "B-	Disponerse desde ya y dejar de aplazarlo"],
            messagePill: "Una de las formas de vencer la procrastinación es encontrando una motivación o recompensa para nuestro esfuerzo. En el caso de Max es llegar a la Ciudad del Éxito ¿Cuál es el tuyo para realizar determinadas actividades?"
        },
        {
            isActivity: true,
            name: "Parada 2: Árbol de las inseguridades ",
            img: arbol,
            correctAnswerIndex: 1,
            correctAnswerText: "B-	Analizar sus capacidades, recursos y luego rectificar su plan",
            text: `Max ha comenzado su viaje, pero al llegar al árbol de las inseguridades dice no sentirse capaz para seguir.`,
            question: '¿Qué le recomendarías?',
            options: ["A- Refugiarse en el árbol de las inseguridades", "B-	Analizar sus capacidades, recursos y luego rectificar su plan"],
            messagePill: "Cuando sentimos que la tarea a desarrollar es muy difícil, tendemos a aplazarla, por eso es bueno reconocer nuestras fortalezas e identificar qué es lo que necesitamos para lograrlo."

        },
        {
            isActivity: true,
            name: "Parada 3: La montaña de la distracción.",
            img: montana,
            correctAnswerIndex: 0,
            correctAnswerText: "A- Ir por una ruta más segura que evite la montaña de la distracción",
            text: `¡Oh nooo! Acá esta todo lo que a Max le gusta: Computador, teléfono, televisor, redes sociales, juegos y más. <br/> Max ya cruzó el árbol de las inseguridades, pero ahora se acerca a la Montaña de la distracción. ADVERTENCIA: esta es la que en ocasiones hace que Max no haga su viaje, por favor aconséjale bien:`,
            question: '¿Qué le aconsejarías?',
            options: ["A- Ir por una ruta más segura que evite la montaña de la distracción ", "B- Quedarse en la montaña por TODO el tiempo que él quiera "],
            messagePill: "Cuando hay una falta de organización y objetivos claros es más fácil inclinarse a la procrastinación. En ocasiones es preferible huir de las distracciones, y saber equilibrar los momentos de descanso y actividad."
        },
        {
            isActivity: true,
            name: "Parada 4: Lago de la flojera",
            img: lago,
            correctAnswerIndex: 0,
            correctAnswerText: "A- Alejarte a toda costa, ya has caído antes Max",
            text: `<b>¡ALERTA!</b> <br/> Parece que Max decidió ir a la montaña de la distracción y realizo actividades en exceso, no hizo nada para tener un buen descanso y ahora dice estar cansado y está pensando visitar “los peligros” que te hemos mencionado anteriormente: menciona querer saludar a las Hadas del sueño, ir al “Lago de la flojera” donde viven los animales que se infectaron con la enfermedad de la flojera. <br/>
                    Él dice que es lo suficientemente fuerte como para evitar que ellos impidan su viaje, pero parece que es solo una excusa para abandonarlo.`,
            question: '¿Qué le recomendarías?',
            options: ["A- Alejarte a toda costa, ya has caído antes Max", "B- Visitemoslosss ¿Qué es lo peor que puede pasar?"],
            messagePill: `Como queremos obtener una gratificación –recompenza- inmediata, nos vemos inclinados a abandonar el plan original e ir tras aquellas tareas que nos hacen bien momentáneamente. Aquí es importante la autorregulación y encontrar una gratificación mayor al cumplir la tarea inicial.
            <br/>
            También es importante saber equilibrar los tiempos de trabajo y descanso, en este último hay que hacer un verdadero descanso y no solo llenarse de distracciones que impiden el mismo 
           `

        },
        {
            isActivity: true,
            name: "Parada 5: Zona de Confort",
            img: zona,
            correctAnswerIndex: 1,
            correctAnswerText: "B- Indagar las razones, ventajas y desventajas que le traería la decisión",
            text: `Max ha avanzado un largo trayecto y parece haber aprendido bastante en el camino, pero al llegar a la zona de confort siente que fue suficiente, la comodidad que le brinda la misma le hace sentir satisfecho y cree que no es necesario llegar a la Ciudad del Éxito, sin embargo, está a solo unos pasos de lograr su meta.`,
            question: '¿Qué le recomendarías?',
            options: ["A- Quedarse con el sentimiento del momento y abandonar la meta", "B- Indagar las razones, ventajas y desventajas que le traería la decisión"],
            messagePill: `Muchas veces las personas que son muy indecisas al no saber qué decisión tomar la postergan, ya que piensan que ninguna opción les dejará satisfecho. ¡Recuerda nuevamente tus objetivos y fortalezas!   `
        },
    ],
};