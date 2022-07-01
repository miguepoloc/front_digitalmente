import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { GET_vista_pregunta_respuesta as getSurveys } from '../../../helpers/helperApi'
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { Resultado } from './Resultado'
import './assets/css/Resultados.scss'
import { Surveysx as model_surveys } from '../../Surveys/assets/js/Surveysx'
import Axios from 'axios'

export const Resultados = () => {

    const { authState } = useContext(AuthContext)
    const { userInfo, token } = authState
    const id_user = userInfo.id;

    const id_sexo_user = 1
    const [resultados, setResultados] = useState(null);
    const [renderResultados, setRenderResultados] = useState(null);
    const [surveys, setSurveys] = useState(new model_surveys(null, id_user, id_sexo_user, false))


    useEffect(() => {
        const fetchData = async () => {
            const response = await getSurveys()
            console.log(response)
            if (response) {
                setSurveys(new model_surveys(response, id_user, id_sexo_user));
            }
            else {
                //TODO: lanzar error
                console.log('No se pudieron traer los datos...')
            }
        }
        const traerResultados = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/vista_usuario_respuestas`,
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            if (response) {
                console.log("🚀 ~ file: Resultados.jsx ~ line 44 ~ traerResultados ~ response", response)
                setResultados(response.data)
                // Y lo coloca en el estado de datos del usuario
            } else {
                console.log('No se pudieron traer los datos...')
            }
        };

        traerResultados();
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])



    return (
        <>
            {
                renderResultados !== null ? (<>{renderResultados}</>) : (
                    resultados != null && surveys.arrSurvey ? (
                        <>
                            <div className='text-center'>
                                <img src={imgGanso.leyendo} className="imgGanso_AutoEvaluativo_resultados mt-2" alt="" />
                                <h3 className='font-Geomanist mt-3'>Hola {userInfo.nombre}, estos son los test que has hecho hasta el momento</h3>
                            </div>
                            <div className='d-flex my-4  justify-content-evenly flex-wrap '>
                                {
                                    resultados.map((resultado, i) => {
                                        return (<Resultado key={i} number={i + 1} resultado={resultado} surveys={surveys} setRenderResultados={setRenderResultados} />)

                                    })
                                }

                            </div>
                        </>
                    ) :
                        (<></>)
                )
            }
        </>
    )
}
