import React from 'react'
import { Button } from 'react-bootstrap'
import Scroll from '../../helpers/helperScroll'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import { gansoPensandoAlert, SendAlert } from '../../helpers/helper_Swal_Alerts'

export const Resultados = ({ objResultados }) => {
  console.log(objResultados)

  const text_justify = {
    textAlign: "justify",
    textJustify: "inter-word"
  }
const mensajeDeAlerta = ()=>{
  let mensaje = "";
  if(objResultados.depresion.points >= 31 && objResultados.ansiedad.points >= 46 ){
    mensaje = "ansiedad y depresión";
  }
  else if(objResultados.depresion.points >= 31){
    mensaje = "depresión";
  }
  else if(objResultados.ansiedad.points >= 46){
    mensaje = "ansiedad";
  }
  if(mensaje != ""){
    gansoPensandoAlert(undefined,`<p style="text-align: justify;">¡Hola! Tus resultados parecen ser altos con respecto a ${mensaje}. ¿Deseas contactarte con algún apoyo psicológico? A través de nuestro proyecto hermano SaludMental-SGR Unimagdalena puedes acceder a orientación psicológica gratuita a través de su chat virtual. Están siempre dispuestos a apoyar cualquier necesidad. Pero esto solo es una recomendación y depende de tu decisión.
    <br/>
    <br/>
    Si quieres acceder a este servicio gratuito, ve al botón del chat que aparece en la parte inferior derecha de la página del proyecto: <a href= "https://sgrsaludmental.unimagdalena.edu.co/" style='color:#FC8890;'>¡Click aquí!</a>
    <br/>
    <br/>
    Si no deseas contactarte, solo cierra este cuadro.
    </p>
    `,"#FC8890").then(()=>Scroll.scroll("resultados",true))
  }
  
}
   
mensajeDeAlerta();

  return (
    <div className='container' id="resultados">
      <div className='mx-4 my-4 px-4 py-4' style={{ backgroundColor: "#F0F0F0", borderRadius: "25px" }} >
        <div className='text-center' >
          <img src={imgGanso.escribiendo_250x200} style={{ width: "200px", height: "200px" }} />
          <h5 className='my-2'><b>¡Resultados!</b></h5>
          <p className='lh-base' style={text_justify}>
            ¡Hola! Parece que ya tenemos tus resultados. Recuerda que estas interpretaciones se dan a partir de tus respuestas y no se consideran un diagnóstico clínico si no se acompañan de una evaluación personalizada por un profesional. Solo es una forma de orientar como podrías estar percibiendo tu estado general.
          </p>
          <p className='lh-base' style={text_justify}>
            En lo que se refiere a tus emociones, en cuanto a la capacidad de atender tus sentimientos parece que <b>{objResultados.inteligenciaEmocional.result.atencion.text}</b>. En cuanto a tu capacidad de comprender bien tus estados emocionales parece que <b>{objResultados.inteligenciaEmocional.result.claridad.text}</b>. Finalmente, lo que respecta a tu capacidad para regular tus estados emocionales de forma adecuada parece que <b>{objResultados.inteligenciaEmocional.result.reparacion.text}</b>.
          </p>
          <p className='lh-base' style={text_justify}>
            Ahora, en cuanto a tu estrés percibido, parece que te encuentras en un nivel <b>{objResultados.escalaDeEstresPercibido.result}</b>. Recuerda que esto se evalúa en cuanto al último mes y depende de tu autoinforme.
          </p>
          <p className='lh-base' style={text_justify}>
            Por otro lado, en cuanto a otros factores importantes relacionados a tu salud mental, parece que te percibes con un nivel de ansiedad <b>{objResultados.ansiedad.result}</b>, <b>{objResultados.depresion.points <= 14 ? "sin" : "con"} </b> aparentes síntomas depresivos <b>{objResultados.depresion.result}</b>.
          </p>
          <p className='lh-base' style={text_justify}>
            Finalmente, en lo que trata en torno a los pensamientos automáticos, estos son los niveles que pareces presentar en este tipo de pensamientos:
          </p>
          <ul className='mt-2 ms-2 text-left' style={text_justify}>
            <li className='my-2'>Filtraje o abstracción selectiva: <b>{objResultados.inventarioDePensamientos.result.filtraje_o_abstracción_selectiva.text}</b></li>
            <li className='my-2'>Pensamiento polarizado:  <b>{objResultados.inventarioDePensamientos.result.pensamiento_polarizado.text}</b></li>
            <li className='my-2'>Sobregeneralización: <b>{objResultados.inventarioDePensamientos.result.sobregeneralizacion.text}</b></li>
            <li className='my-2'>Interpretación del pensamiento:<b>{objResultados.inventarioDePensamientos.result.interpretacion_del_pensamiento.text}</b></li>
            <li className='my-2'>Visión catastrófica: <b>{objResultados.inventarioDePensamientos.result.vision_catastrofica.text}</b></li>
            <li className='my-2'>Personalización: <b>{objResultados.inventarioDePensamientos.result.personalizacion.text}</b></li>
            <li className='my-2'>Falacia de control: <b>{objResultados.inventarioDePensamientos.result.falacia_de_control.text}</b></li>
            <li className='my-2'>Falacia de justicia: <b>{objResultados.inventarioDePensamientos.result.falacia_de_justicia.text}</b></li>
            <li className='my-2'>Razonamiento emocional: <b>{objResultados.inventarioDePensamientos.result.razonamiento_emocional.text}</b></li>
            <li className='my-2'>Falacia de cambio: <b>{objResultados.inventarioDePensamientos.result.falacia_de_cambio.text}</b></li>
            <li className='my-2'>Etiquetas globales: <b>{objResultados.inventarioDePensamientos.result.etiquetas_globales.text}</b></li>
            <li className='my-2'>Culpabilidad: <b>{objResultados.inventarioDePensamientos.result.culpabilidad.text}</b></li>
            <li className='my-2'>Los deberías: <b>{objResultados.inventarioDePensamientos.result.los_deberias.text}</b></li>
            <li className='my-2'>Tener razón: <b>{objResultados.inventarioDePensamientos.result.tener_razon.text}</b></li>
            <li className='my-2'>Falacia de recompensa divina: <b>{objResultados.inventarioDePensamientos.result.falacia_de_recompensa_divina.text}</b></li>
          </ul>

          <p className='lh-base text-center my-4' style={text_justify}>
            ¿Qué significa toda esa clasificación? Si quieres saber más de esto, así como de los otros factores, ¡DigitalMente te ayudará a conocer más!
          </p>
        </div>
      </div>
    </div>
  )
}
