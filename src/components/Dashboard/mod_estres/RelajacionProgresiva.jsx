import React from 'react'
import { Actividad } from "../Actividad"
import { Descripcion } from '../Descripcion'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import { FcSurvey } from 'react-icons/fc'
import Carrusel from '../Carrusel'

export const RelajacionProgresiva = () => {

    return (
        <>

            <h2 className='text-center'>Técnica de Relajación Progresiva de Jacobson</h2>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-9'>
                    <Actividad src={imgGanso.meditando} title="¿Para qué me servirá esta actividad?"
                        text={`En la imagen a continuación se muestra la forma en la que se realizará ésta actividad, puedes hacerlo si te encuentras en una situación de estrés en este momento, si tienes tiempo puedes realizar todos los grupos musculares, sin embargo si realizas solo uno también tendrás una sensación de relajación muscular que querrás repetir. Te recomendamos estar sentado en una posición cómoda. `} showIcon={false} />
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <Carrusel />
                </div>
                <div className='col-lg-6'>
                    <Carrusel />
                </div>
            </div>

            <Actividad src={imgGanso.ganso_ejercicio} title="Grupo muscular I: Mano, antebrazo y bíceps.  "
                text={`<ul class="ms-4">
        <li>	<b>Mano y antebrazo dominantes:</b> cerrar el puño y apretarlo fuerte. Sentir cómo la mano, dedos y antebrazo se tensan. Mantener la tensión un momento y luego abrir la mano poco a poco mientras se suelta la tensión. 	</li>
        <li>	<b>Bíceps dominante:</b> Se debe empujar el codo contra el brazo de la silla en la que se encuentre sentado y sienta la tensión en el músculo. Mantenga el brazo así durante unos segundos y comience a soltarlo suavemente. Mientras sucede, identifique las diferentes sensaciones. 	</li>
        <li>	<b>Mano y antebrazo no dominantes:</b> (Mismo procedimiento). 	</li>
        <li>	<b>Bíceps no dominante:</b> (Mismo procedimiento). 	</li>
      </ul>`} showIcon={false} />

            <Actividad src={imgGanso.ganso_ejercicio} title="Grupo muscular II: Cara, cuello, frente, nariz, ojos, mandíbula y labios.   "
                text={`<ul class="ms-4">
        <li>	<b>Frente:</b> Arrugar la frente subiendo las cejas identificando la tensión sobre el puente de la nariz y alrededor de cada ceja. Mantener la tensión unos segundos y comenzar a relajar muy despacio, tomando conciencia de estas zonas que antes estaban tensas. Analiza la sensación de relajación. 	</li>
        <li>	<b>Parte superior de las mejillas y nariz:</b> Arrugar la nariz y sintiendo la tensión en las mejillas y en los orificios de la nariz. Relajar gradualmente sintiendo la disminución de la tensión en el área. 	</li>
        <li>	<b>Parte superior de las mejillas y mandíbula:</b> Apretar los dientes y las muelas como si estuviera mordiendo algo con fuerza y siente la tensión de los músculos que están a los lados de la cara. Relajar poco a poco. Ahora haga el gesto de una sonrisa forzada, estirando los labios y sintiendo cómo se tensan las mejillas. A continuación, relajar lentamente. 	</li>
        <li>	<b>Cuello:</b> Empuje la barbilla hacia abajo, como si deseara tocar el pecho con la misma. Apriete y tense el cuello y posteriormente relaje poco a poco mientras se enfoca en la sensación. 	</li>
      </ul>`} showIcon={false} />

            <Actividad src={imgGanso.ganso_ejercicio} title="Grupo muscular III: Tórax y estómago.   "
                text={`<ul class="ms-4">
        <li>	<b>Pecho, hombros y espalda:</b> Haga una inspiración profunda y sostenida, al mismo tiempo que ubica los hombros hacia atrás, como si intentara que los omóplatos estuvieran juntos. Experimente la tensión en el pecho, en los hombros y en la parte superior de la espalda. Luego, comience a relajar despacio mientras regula el ritmo de su respiración. </li>
        <li>	<b>Abdomen:</b> Tome aire profundamente y tense el estómago, poniéndolo tan tenso como pueda. Como cuando se hacen abdominales. Luego suelte el aire suavemente y deje que los músculos se relajen.	</li>
      </ul>`} showIcon={false} />

            <Actividad src={imgGanso.ganso_ejercicio} title="Grupo muscular IV: Muslos, glúteos, pantorrillas y pies. "
                text={`<ul class="ms-4">
        <li>	<b>Parte superior de la pierna y muslo dominantes:</b>Tome aire profundamente y ponga el músculo largo de encima de la pierna en contraposición con los de la parte de atrás, como si intentara levantarse de la silla, pero sin hacerlo completamente. Mantenga la tensión unos segundos y suelte progresivamente.	</li>
        <li>	<b>Pantorrilla dominante:</b> Tome aire profundamente y haga que los dedos del pie se ubiquen hacia arriba sintiendo la tensión y después haga volver el pie a su posición original mientras suelta el aire y se concentra en la sensación.	</li>
        <li>	<b>Pie dominante:</b> Tome aire y estire la punta del pie, girándolo hacia dentro y curvando un poco al mismo tiempo los dedos, luego, relaje los músculos y note poco a poco la ausencia de tensión. 	</li>
        <li>	<b>Parte superior de la pierna y muslo no dominantes:</b> (Mismo procedimiento). </li>
        <li>	<b>Pantorrilla no dominante:</b> (Mismo procedimiento). </li>
        <li>	<b>Pie no dominante:</b> (Mismo procedimiento). </li>
      </ul>`} showIcon={false} />



            <Descripcion title={"Finalmente"}
                text={`Es necesario tener en cuenta que este ejercicio permite tener los músculos trabajados en estado de relajación, de tal manera que cada vez que se sienta tensión en estas áreas se podrá evocar a la sensación de relajación del mismo y relajar automáticamente el mismo. Al terminar los ejercicios permanezca unos minutos disfrutando la sensación de relajación centrando la atención en las sensaciones agradables que propició el ejercicio.`} icon={<FcSurvey style={{ fontSize: '2rem' }} />} color="#03A9F4" />

        </>
    )
}
