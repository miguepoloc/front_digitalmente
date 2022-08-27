import grupo1_2 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_1/grupo1_2.jpg"
import grupo1_3 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_1/grupo1_3.jpg"
import grupo1_4 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_1/grupo1_4.jpg"
import grupo2_2 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_2/grupo2_2.jpg"
import grupo2_3 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_2/grupo2_3.jpg"
import grupo2_4 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_2/grupo2_4.jpg"
import grupo2_5 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_2/grupo2_5.jpg"
import grupo3_1 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_3/grupo3_1.jpg"
import grupo3_2 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_3/grupo3_2.jpg"
import grupo3_3 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_3/grupo3_3.jpg"

import grupo4_1 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_4/grupo4_1.jpg"
import grupo4_2 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_4/grupo4_2.jpg"
import grupo4_3 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_4/grupo4_3.jpg"
import grupo4_4 from "../components/Dashboard/mod_estres/assets/img/tecnica_de_relajacion/grupo_4/grupo4_4.jpg"


export const TecnicaEmocional = [
    {
        id_grupo: 1,
        nombre_grupo: "Grupo I: Mano, antebrazo y bíceps",
        texto_grupo:`<h4>Mano y antebrazo dominantes: cerrar el puño y apretarlo fuerte.</h4>
        <p>cerrar el puño y apretarlo fuerte. Sentir cómo la mano, dedos y antebrazo se tensan. Mantener la tensión un momento y luego abrir la mano poco a poco mientras se suelta la tensión </p>
        <h4>Bíceps dominante</h4>
        <p>Se debe empujar el codo contra el brazo de la silla en la que se encuentre sentado y sienta la tensión en el músculo. Mantenga el brazo así durante unos segundos y comience a soltarlo suavemente. Mientras sucede, identifique las diferentes sensaciones. </p>
        <h4>Mano y antebrazo no dominantes</h4>
        <p>(Mismo procedimiento).</p>
        <h4>Bíceps no dominante</h4>
        <p>(Mismo procedimiento).</p>
        `,
        carrusel: [
            {
                id: 1,
                imagen: grupo1_2,
                titulo: 'Bíceps dominante',
                texto: 'Se debe empujar el codo contra el brazo de la silla en la que se encuentre sentado y sienta la tensión en el músculo. Mantenga el brazo así durante unos segundos y comience a soltarlo suavemente. Mientras sucede, identifique las diferentes sensaciones',
            },
            {
                id: 2,
                imagen: grupo1_3,
                titulo: 'Mano y antebrazo no dominantes',
                texto: 'Mismo procedimiento',
            },
            {
                id: 3,
                imagen: grupo1_4,
                titulo: 'Bíceps no dominante',
                texto: 'Mismo procedimiento',
            },
        ]
    },
    {
        id_grupo: 2,
        nombre_grupo: "Grupo II: Cara, cuello, frente, nariz, ojos, mandíbula y labios",
        texto_grupo:`
        <h4>Frente.</h4>
        <p>Arrugar la frente subiendo las cejas identificando la tensión sobre el puente de la nariz y alrededor de cada ceja. Mantener la tensión unos segundos y comenzar a relajar muy despacio, tomando conciencia de estas zonas que antes estaban tensas. Analiza la sensación de relajación.</p>
        <h4>Parte superior de las mejillas y nariz</h4>
        <p>Arrugar la nariz y sintiendo la tensión en las mejillas y en los orificios de la nariz. Relajar gradualmente sintiendo la disminución de la tensión en el área.</p>
        <h4>Parte superior de las mejillas y mandíbula</h4>
        <p>Apretar los dientes y las muelas como si estuviera mordiendo algo con fuerza y siente la tensión de los músculos que están a los lados de la cara. Relajar poco a poco. Ahora haga el gesto de una sonrisa forzada, estirando los labios y sintiendo cómo se tensan las mejillas. A continuación, relajar lentamente.</p>
        <h4>Cuello</h4>
        <p>Empuje la barbilla hacia abajo, como si deseara tocar el pecho con la misma. Apriete y tense el cuello y posteriormente relaje poco a poco mientras se enfoca en la sensación. </p>
        `,
        carrusel: [
            {
                id: 1,
                imagen: grupo2_2,
                titulo: 'Parte superior de las mejillas y nariz',
                texto: 'Arrugar la nariz y sintiendo la tensión en las mejillas y en los orificios de la nariz. Relajar gradualmente sintiendo la disminución de la tensión en el área.',
            },
            {
                id: 2,
                imagen: grupo2_3,
                titulo: 'Parte superior de las mejillas y mandíbula',
                texto: 'Apretar los dientes y las muelas como si estuviera mordiendo algo con fuerza y siente la tensión de los músculos que están a los lados de la cara. Relajar poco a poco. Ahora haga el gesto de una sonrisa forzada, estirando los labios y sintiendo cómo se tensan las mejillas. A continuación, relajar lentamente.',
            },
            {
                id: 3,
                imagen: grupo2_4,
                titulo: 'Cuello',
                texto: 'Empuje la barbilla hacia abajo, como si deseara tocar el pecho con la misma. Apriete y tense el cuello y posteriormente relaje poco a poco mientras se enfoca en la sensación.',
            },
            {
                id: 4,
                imagen: grupo2_5,
                titulo: 'Cuello',
                texto: 'Empuje la barbilla hacia abajo, como si deseara tocar el pecho con la misma. Apriete y tense el cuello y posteriormente relaje poco a poco mientras se enfoca en la sensación.',
            },
        ]
    },
    {
        id_grupo: 3,
        nombre_grupo: "Grupo III: Tórax y estómago",
        texto_grupo:`
        <h4>Pecho, hombros y espalda</h4>
        <p>Haga una inspiración profunda y sostenida, al mismo tiempo que ubica los hombros hacia atrás, como si intentara que los omóplatos estuvieran juntos. Experimente la tensión en el pecho, en los hombros y en la parte superior de la espalda. Luego, comience a relajar despacio mientras regula el ritmo de su respiración.</p>
        <h4>Abdomen</h4>
        <p>Arrugar la nariz y sintiendo la tensión en las mejillas y en los orificios de la nariz. Relajar gradualmente sintiendo la disminución de la tensión en el área.</p>
        <h4>Parte superior de las mejillas y mandíbula</h4>
        <p>Tome aire profundamente y tense el estómago, poniéndolo tan tenso como pueda. Como cuando se hacen abdominales. Luego suelte el aire suavemente y deje que los músculos se relajen.</p>
        `,
        carrusel: [
            {
                id: 1,
                imagen: grupo3_1,
                titulo: 'Pecho, hombros y espalda',
                texto: 'Haga una inspiración profunda y sostenida, al mismo tiempo que ubica los hombros hacia atrás, como si intentara que los omóplatos estuvieran juntos. Experimente la tensión en el pecho, en los hombros y en la parte superior de la espalda. Luego, comience a relajar despacio mientras regula el ritmo de su respiración',
            },
            {
                id: 2,
                imagen: grupo3_2,
                titulo: 'Abdomen',
                texto: 'Tome aire profundamente y tense el estómago, poniéndolo tan tenso como pueda. Como cuando se hacen abdominales. Luego suelte el aire suavemente y deje que los músculos se relajen.',
            },
            {
                id: 3,
                imagen: grupo3_3,
                titulo: 'Abdomen',
                texto: 'Tome aire profundamente y tense el estómago, poniéndolo tan tenso como pueda. Como cuando se hacen abdominales. Luego suelte el aire suavemente y deje que los músculos se relajen.',
            }
        ]
    },
    {
        id_grupo: 4,
        nombre_grupo: "Grupo IV: Muslos, glúteos y pantorrillas",
        texto_grupo:`
        
        <h4>Parte superior de la pierna y muslo dominantes</h4>
        <p>Tome aire profundamente y ponga el músculo largo de encima de la pierna en contraposición con los de la parte de atrás, como si intentara levantarse de la silla, pero sin hacerlo completamente. Mantenga la tensión unos segundos y suelte progresivamente.</p>
        
        <h4>Pantorrilla dominante</h4>
        <p>Tome aire profundamente y haga que los dedos del pie se ubiquen hacia arriba sintiendo la tensión y después haga volver el pie a su posición original mientras suelta el aire y se concentra en la sensación.</p>
        

        <h4>Parte superior de la pierna y muslo no dominantes</h4>
        <p>Tome aire y estire la punta del pie, girándolo hacia dentro y curvando un poco al mismo tiempo los dedos, luego, relaje los músculos y note poco a poco la ausencia de tensión.</p>
        
        <h4>Pie no dominante</h4>
        <p>(Mismo procedimiento). </p>
        `,
        carrusel: [
            {
                id: 1,
                imagen: grupo4_1,
                titulo: 'Parte superior de la pierna y muslo dominantes',
                texto: 'Tome aire profundamente y ponga el músculo largo de encima de la pierna en contraposición con los de la parte de atrás, como si intentara levantarse de la silla, pero sin hacerlo completamente. Mantenga la tensión unos segundos y suelte progresivamente.',
            },
            {
                id: 2,
                imagen: grupo4_2,
                titulo: 'Pantorrilla dominante',
                texto: 'Tome aire profundamente y haga que los dedos del pie se ubiquen hacia arriba sintiendo la tensión y después haga volver el pie a su posición original mientras suelta el aire y se concentra en la sensación',
            },
            {
                id: 3,
                imagen: grupo4_3,
                titulo: 'Pie dominante',
                texto: 'Tome aire y estire la punta del pie, girándolo hacia dentro y curvando un poco al mismo tiempo los dedos, luego, relaje los músculos y note poco a poco la ausencia de tensión. ',
            },
            {
                id: 4,
                imagen: grupo4_4,
                titulo: 'Parte superior de la pierna y muslo no dominantes',
                texto: 'Mismo procedimiento',
            },
        ]
    }
]
