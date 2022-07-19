import React,{useContext, useEffect, useState} from 'react'
import Axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
export const CartaActividadesFomento = () => {
    const [datauser, setDatauser] = useState([])
    const { authState } = useContext(AuthContext)
    const { userInfo } = authState
    const history = useHistory()

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
            })
            console.log(response)
            if (response) {
                //console.log(response.data)
                // Y lo coloca en el estado de datos del usuario
                setDatauser(response.data)
            } else {
                //console.log('No se pudieron traer los datos...')
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className="col-7 col-md-7 col-lg-4 d-flex pb-lg-0 pb-3 order-lg-3 order-2">

                <div className="card w-100  d-flex align-items-center justify-content-center ">
                    <div className="text-center py-4 ">
                        <h6 className='font-Geomanist'>Actividades de fomento</h6>
                    </div>
                    <div className=" pb-2 w-100  text-center d-flex  flex-column justify-items-center">
                        <div className="">
                           <button type="submit" className="btn btn-verde w-75  mx-4 "  onClick={datauser.estres > 2?()=>history.push('/relax8'):""}  disabled={datauser.estres > 2? false: true}><span className='textCard'>Módlulo relax</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-morado w-75  mx-4 " disabled><span className='textCard'>- - - - - - - - - - - - - - - - - - - - - -</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-azul w-75  mx-4 " disabled><span className='textCard'>- - - - - - - - - - - - - - - - - - - - - -</span></button>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-amarillo w-75  mx-4 " disabled><span className='textCard'>- - - - - - - - - - - - - - - - - - - - - -</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
