import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'
import { SendAlert, SendOkAlert, SendBadAlert } from "../../../../helpers/helper_Swal_Alerts"
import {
    GET_definiciones_usuario as getDefinicionesUsuario,
    GET_definiciones as getDefiniciones,
    POST_definiciones_usuario as postDefinicionesUsuario,
    POST_definiciones_usuario_bulk_update as postDefinicionesUsuario_bulk_update
} from '../../../../helpers/helperApi'
import { Loading } from '../../../Loading'
import { Actividad } from '../../../Dashboard/Actividad'
import { imgGanso } from '../../../../helpers/helper_imagen_ganso'
import { ErrorGanso } from '../../../ErrorGanso'
import { AuthContext } from '../../../../context/AuthContext'
import { useParams } from 'react-router-dom'
import { BotonContext } from '../../../../context/BotonContext'
import { AvanceContext } from '../../../../context/AvanceContext'

export const Vocabulario = () => {
    // Variable del url
    const { slug } = useParams()
    const { setBotonState } = useContext(BotonContext);
    // Datos del avance que lleva el usuario
    const { AvanceState } = useContext(AvanceContext);

    useEffect(() => {
        if (AvanceState.emocional <= parseInt(slug)) {
            setBotonState(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvanceState])

    const { authState } = useContext(AuthContext)

    const { userInfo, token } = authState

    const [validate, setValidate] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [definiciones, setDefiniciones] = useState(null);
    const [definicionesUsuario, setDefinicionesUsuario] = useState(null);
    const [isThereInformation, setIsThereInformation] = useState(null);
    const [userClickModifyBtn, setUserClickModifyBtn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let definicionesUsuario = await getDefinicionesUsuario(userInfo.id, token);
            let definiciones_Arr = await getDefiniciones(token)

            if (definiciones_Arr !== null && definicionesUsuario !== null) {
                setDefiniciones(definiciones_Arr)

                if (definicionesUsuario?.length > 0) {
                    //console.log(definicionesUsuario);
                    setDefinicionesUsuario(definicionesUsuario);
                    setIsThereInformation(true);
                    setBotonState(false)
                }
            } else {
                setError(true)
            }

            setLoading(false);

        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = () => {

    }

    const handleCancelModify = () => {
        setUserClickModifyBtn(false);
        setIsThereInformation(false);
    }

    const handleModify = () => {
        setIsThereInformation(false);
        setUserClickModifyBtn(true);
    }

    const SendOrUpdateVocabulario = async (isUpdate, jsonToSend) => {
        if (jsonToSend) {
            let response = isUpdate ? await postDefinicionesUsuario_bulk_update(jsonToSend, token) : await postDefinicionesUsuario(jsonToSend, token);

            if (response === null) {
                throw new Error(response.err)
            }

            if (response.errors?.length !== 0) {
                //console.log(response)
                return false
            }

            return true;
        }
        else {
            //console.log("Hay campos vacios.")
            return false;
        }
    }



    const handleBtnClickSendOrUpdate = async (isUpdate, e) => {
        e.preventDefault();

        const jsonToSend = createJsonToSend(userInfo.id);

        if (jsonToSend) {
            //console.log(jsonToSend);
            SendAlert(undefined, 'Tus respuestas estan siendo enviadas y procesadas <b>Espera un momento</b>')
            try {
                let response = await SendOrUpdateVocabulario(isUpdate, jsonToSend);
                //console.log(response)
                if (response) {
                    //TODO: redireccionar Aquí.
                    setBotonState(false)
                    SendOkAlert().then(() => {
                        document.getElementById("btn-main-next").click()
                    })
                } else {
                    SendBadAlert(undefined, "Uhm... parece que ya he anotado tus respuestas anteriormente.");
                    setBotonState(false)
                }
            } catch (e) {
                SendBadAlert(undefined, "Parece que el servidor no pudo procesar la solcitud. por favor, intenta de nuevo.");
            }

        } else {
            //console.log("Hay campos vacios.")
        }

        setValidate(true);
    }

    const handleOnChange = (e, i) => {
        if (definicionesUsuario) {
            let definicionesUsuarioCopy = [...definicionesUsuario];
            definicionesUsuarioCopy[i]["definicion_usuario"] = e.target.value
            setDefinicionesUsuario(definicionesUsuarioCopy)
        }
        if (validate)
            setValidate(false);
    }

    const createJsonToSend = (isUser) => {
        let json = {
            "id_usuario": isUser,
            "respuestas": []
        };
        let element;
        let value;
        let id;
        for (let definicion of definiciones) {
            id = `definicion-${definicion.id}`;
            element = document.getElementById(id);
            if (element) {
                value = element.value;
                if (!!value.trim()) {
                    json["respuestas"].push({ "definicion": definicion.id, "definicion_usuario": value })
                } else {
                    return null;
                }

            }
            else {
                return null;
            }
        }
        return json;
    }



    return (
        <div className="mx-3 mx-md-4">
            {
                loading ? (<Loading />) : (
                    <>
                        {error ? (
                            <ErrorGanso />
                        ) : (<>

                            {isThereInformation ? (
                                <>
                                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
                                        <div className="d-flex flex-column justify-content-center align-items-center" >
                                            <img
                                                src={imgGanso.leyendo}
                                                width="307"
                                                height="307"
                                                alt='Ganso leyendo'
                                            />
                                            <h5 className='my-4 text-center'>Uhm... Parece que ya he personalizado tu vocabulario anteriormente.</h5>
                                        </div>
                                        <div className="w-100 d-flex mx-md-4 my-4 px-md-3 d-flex justify-content-center mb-3">
                                            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                                <Button className="btn btn-naranja w-100 d-flex justify-content-center align-items-center" onClick={handleModify} > <BsGearFill className='me-2' /> <b>Modificar</b> </Button>
                                            </div>

                                        </div>


                                    </div>
                                </>

                            ) : (<>
                                <Actividad src={imgGanso.elegante}
                                    title={"Actividad 2.1"}
                                    text={` Darle nombre a lo que experimentamos es un paso importante para saber gestionar nuestras emociones. En vez de darte una lista de definiciones y conceptos teóricos, queremos que tú nos des tu concepto, nombre o como llamarías a algunas experiencias emocionales.
                <br/>
                <br/>
                Para eso, a continuación, encontraras una lista de definiciones* y queremos que tú le coloques el nombre. ¿Cómo lo llamas tu normalmente o como lo llamarías? Es importante que sea algo breve que te permite identificarlo. Cuack te recuerda que leas muy bien cada definición y recuerdes el nombre que le darás. ¡Sera importante para la siguiente parte!
                <br />
                <small><i><b>*Tomadas de la RAE.</b></i></small>`} />

                                <Form onSubmit={handleSubmit} name="addDefiniciones" className="my-4" validated={validate}>
                                    <div className="row text-center my-3 align-items-center">
                                        <div className='col-6' ><b><h5>Definición</h5></b></div>
                                        <div className='col-6' ><b><h5>¿Qué nombre le darías?</h5></b></div>
                                    </div>

                                    {definiciones?.map(({ id, definicion }, i) =>
                                        <div className="row text-center my-3 align-items-center" key={`definicion-${id}`}>
                                            <div className='col-md-6 mb-1 mb-md-0' >{definicion}</div>
                                            <div className='col-md-6 my-1 my-md-0' >
                                                <Form.Control id={`definicion-${id}`} className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={(event) => handleOnChange(event, i)}
                                                    value={definicionesUsuario?.[i].definicion_usuario}
                                                /></div>
                                        </div>
                                    )
                                    }
                                    <div className="w-100 d-flex mx-md-4 my-4 px-md-3 justify-content-md-end ">
                                        {userClickModifyBtn ? (<>
                                            <div className="col-6 d-flex justify-content-start">
                                                <Button className="btn btn-naranja" onClick={handleCancelModify} > <FaClipboardCheck /> Dejar como estaba</Button>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <Button type="submit" className="btn btn-naranja" onClick={(event) => handleBtnClickSendOrUpdate(true, event)} >Actualizar <FaPaperPlane /></Button>
                                            </div></>) : (
                                            <div className='col-12 col-md-2 me-md-2 justify-content-end'>
                                                <Button type="submit" className="w-100 btn-lg  btn-naranja  d-flex justify-content-center" onClick={(event) => handleBtnClickSendOrUpdate(false, event)} >Guardar</Button>
                                            </div>)}
                                    </div>
                                </Form>
                            </>)}
                        </>)
                        }
                    </>
                )}



        </div>
    )
}
