import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { GET_vista_pregunta_respuesta as getSurveys } from '../../../helpers/helperApi'
import { imgGanso } from '../../../helpers/helper_imagen_ganso';
import { Resultado } from './Resultado'
import './assets/css/Resultados.scss'
import { Surveysx as model_surveys } from '../../Surveys/assets/js/Surveysx'
import Axios from 'axios'
import { Loading } from '../../Loading'
import { ErrorGanso } from '../../ErrorGanso';


export const Resultados = () => {

    const { authState } = useContext(AuthContext)
    const { userInfo, token } = authState
    const id_user = userInfo.id;

    const id_sexo_user = userInfo.sexo;
    const [resultados, setResultados] = useState(null);
    const [renderResultados, setRenderResultados] = useState(null);
    const [surveys, setSurveys] = useState(new model_surveys(null, id_user, id_sexo_user, false))
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const response = await getSurveys(token)
            //console.log(response)
            if (response) {
                setSurveys(new model_surveys(response, id_user, id_sexo_user));
            }
            else {
                //TODO: lanzar error
                setError(true);
                //console.log('No se pudieron traer los datos...')
            }
        }
        const traerResultados = async () => {
            let response
            try {
                response = await Axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}/api/vista_usuario_respuestas`,
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                })

            } catch {
                setError(true);
            }


            if (response) {
                //console.log("🚀 ~ file: Resultados.jsx ~ line 44 ~ traerResultados ~ response", response)
                setResultados(response.data)
                // Y lo coloca en el estado de datos del usuario
            } else {

                //console.log('No se pudieron traer los datos...')
            }
            setLoading(false);
        };

        traerResultados();
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])



    return (


        <>
            {loading ? <Loading /> : (
                renderResultados !== null ? (<>{renderResultados}</>) : (
                    error ? (<ErrorGanso text={"Ups, parece que ha ocurrido un inconveniente."} />) : (
                        resultados != null && surveys.arrSurvey ? (
                            <>

                                <div className='text-center'>
                                    {resultados.length === 0 ? (<>
                                        <img src={imgGanso.sorprendido} className="imgGanso_AutoEvaluativo_resultados mt-2" alt="" />
                                        <h3 className='font-Geomanist mt-3'>Hola {userInfo.nombre.split(" ")[0]}, Parece que no has hecho ningun test.</h3>
                                    </>) : (<>
                                        <img src={imgGanso.leyendo} className="imgGanso_AutoEvaluativo_resultados mt-2" alt="" />
                                        <h3 className='font-Geomanist mt-3'>Hola {userInfo.nombre.split(" ")[0]}, estos son los test que has hecho hasta el momento</h3></>)
                                    }

                                </div>
                                <div className='d-flex my-4  justify-content-evenly flex-wrap '>
                                    {
                                        resultados.map((resultado, i) => {
                                            //console.log(resultado)
                                            return (<Resultado key={i} number={i + 1} resultado={resultado} surveys={surveys} setRenderResultados={setRenderResultados} />)

                                        })
                                    }

                                </div>
                            </>
                        ) :
                            (<></>)
                    )
                )
            )}
        </>
    )
}
