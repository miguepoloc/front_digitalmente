import React from 'react'
import { ActivityCard } from './ActivityCard'
import "./assets/css/ActivityCard.scss"

export const ActivityCards = () => {

    const actividades = [
        {
            title: "Resolución de problemas",
            desc: "La solución de problemas está enfocada en mejorar la capacidad para enfrentarse a estresores o acontecimientos traumáticos, problemas cotidianos crónicos y a reducir los problemas de salud mental y física. Con esta se buscaría la adopción de una visión adaptativa hacia los problemas presentes en la vida, con una perspectiva optimista que admita a los problemas como sucesos vitales normales y la implantación eficaz de conductas concretas de solución de problemas, con regulación y gestión emocional y planificación de estrategias para enfrentar problemas. (Nezu, Nezu y D’Zurilla 2014).",
            color: "#1452cc",
            icon: "icon xd",
            _class:"activityCard_useRow"
        },
        {
            title: "Manejo adecuado del estrés",
            desc: "En muchas ocasiones de nuestra vida podemos llegar a sentirnos abrumados, preocupados e irritados ante las situaciones estresantes que se presentan en el día a día, generando respuestas fisiológicas que entorpecen la búsqueda de soluciones y la generación de estrategias eficaces para la superación de estos obstáculos que serán comunes a lo largo de la vida",
            color: "#1452cc",
            icon: "icon xd",
        },
        {
            title: "Técnicas de meditación",
            desc: "La meditación es una alternativa práctica para relajar el cuerpo, la mente y el espíritu y que ofrece una sensación de bienestar y salud mental, por lo cual ésta técnica termina siendo una buena opción  para disminuir los síntomas asociados al estrés para las personas que disfrutan de este tipo de actividades. (Aguilar & Musso 2008)",
            color: "#1452cc",
            icon: "icon xd"
        },
        {
            title: "Técnica Manejo respiración",
            desc: "Esta técnica permite ejercer control sobre la sensación de estrés por medio de la respiración, debido a que estimula la activación del sistema nervioso parasimpático enviando reflejos que originan en nosotros una respuesta fisiológica positiva ante la sensación de estrés (Villen 2016). ",
            color: "#1452cc",
            icon: "icon xd"
        },
        {
            title: "Técnica de relajación",
            desc: "Esta actividad la puedes realizar si te encuentras en una situación de estrés en este momento, si tienes tiempo puedes realizar todos los grupos musculares, sin embargo si realizas solo uno también tendrás una sensación de relajación muscular que querrás repetir. Te recomendamos estar sentado en una posición cómoda.",
            color: "#1452cc",
            icon: "icon xd"
        },
        {
            title: "Actividad fisica para el manejo de estrés",
            desc: "Realizar actividad física es una alternativa eficaz en la reducción de los síntomas de estrés puesto que permite que el cuerpo en movimiento realice un gasto importante de energía acumulada, liberando endorfinas y otorgando una sensación de bienestar que permite disminuir la tensión que normalmente genera el estrés (Ávila 2014).",
            color: "#1452cc",
            icon: "icon xd"
        },



    ]

    return (
        <div class="">

            <div class="activityCard-cards">
                {
                    actividades.map(({ title, desc, color, icon, _class }) => {
                        return <ActivityCard title={title} desc={desc} _class={_class}  />
                    })
                }

            </div>

        </div>
    )
}
