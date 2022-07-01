import React,{ useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { GET_vista_pregunta_respuesta as getSurveys} from '../../../helpers/helperApi'
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { Resultado } from './Resultado'
import './assets/css/Resultados.scss'
import { Surveysx as model_surveys } from '../../Surveys/assets/js/Surveysx'

export const Resultados = () => {
    const { authState } = useContext(AuthContext)
    const { userInfo } = authState
    const id_user = 17
    const id_sexo_user = 1
    const [resultados, setResultados] =  useState(null);
    const [renderResultados, setRenderResultados] =  useState(null);
    const [surveys, setSurveys] = useState(new model_surveys(null, id_user, id_sexo_user, false))

   

    //const id_user = userInfo.id;
  
    //console.log("hola")
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSurveys()
            console.log(response)
            if (response) {
                setSurveys(new model_surveys(response, id_user, id_sexo_user));
            }
            else{
                //TODO: lanzar error
            }
        }
        /*
        const traerResultados = async()=>{
            const getData = await  GET_vista_usuario_respuestas(id_user);
            if(getData){
                if(getData.length){
                    setResultados(getData);
                }
            }
        }
        traerResultados()*/
        fetchData();
        setResultados([
            {
              "fecha":"22/05/2022",
              "respuestas":[
                {
                  "id_encuesta":"3",
                  "respuestas":[62,66,71,75,80,81,86,89,94,97,101,105,111,114,120]
                },
                {
                  "id_encuesta":"4",
                  "respuestas":[24,26,31,33,37,44,48,52,55,58]
                },
                {
                    "id_encuesta":"5",
                    "respuestas":[124,129,134,140,145,146,151,158,164,168,174,179,183,189,195,198,201,208,212,219,222,230,232,238]
                },
                {
                    "id_encuesta":"6",
                    "respuestas":[241,249,253,260,265,266,272,277,283,290,294,300,305,310]
                },
                {
                    "id_encuesta":"7",
                    "respuestas":[311,316,320,326,327,333,338,340,346,350,353,355,362,365,369,374,375,382,386,388,392,396,401,403,407,413,418,422,425,429,433,438,441,444,450,453,457,462,465,467,473,478,482,484,487]
                }
              ]
            },
            {
                "fecha":"29/06/2022",
                "respuestas":[
                  {
                    "id_encuesta":"3",
                    "respuestas": [63,67,70,73,78,84,87,89,93,100,104,106,109,116,120]                  },
                  {
                    "id_encuesta":"4",
                    "respuestas": [24,26,31,33,38,41,46,51,55,59]
                  },
                  {
                      "id_encuesta":"5",
                      "respuestas": [125,127,131,136,143,148,153,157,162,167,172,178,183,188,195,199,205,210,215,216,221,228,231,239]                  },
                  {
                      "id_encuesta":"6",
                      "respuestas": [245,247,255,257,263,267,273,277,285,290,291,297,304,310]                  },
                  {
                      "id_encuesta":"7",
                      "respuestas": [314,315,322,324,329,334,337,342,344,350,354,357,360,363,367,371,375,379,385,388,393,395,402,404,409,414,417,422,425,427,432,438,442,444,447,453,456,460,464,468,471,478,480,485,488]                  }
                ]
              }
          ])
        
    }, [])
    


  return (
    <>
    {
    renderResultados!==null?(<>{renderResultados}</>)
    :(
    resultados != null && surveys.arrSurvey?(     
        <>
        <div className='text-center'>
            <img src={imgGanso.leyendo} className="imgGanso_AutoEvaluativo_resultados mt-2" alt=""/>
            <h3 className='font-Geomanist mt-3'>Hola, estos son los text que has hecho hasta el momento</h3>
        </div>
    <div className='d-flex my-4  justify-content-evenly flex-wrap '>
        {
            resultados.map((resultado,i)=>{
                console.log(surveys)
                return(<Resultado number={i+1} resultado={resultado} surveys={surveys} setRenderResultados={setRenderResultados} />)
                
            })
        }
        
      </div>
      </>
      ):(<></>))}
    </>
  )
}
