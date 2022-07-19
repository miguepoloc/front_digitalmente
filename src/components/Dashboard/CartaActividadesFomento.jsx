import React from 'react'

export const CartaActividadesFomento = () => {
    return (
        <>
            <div className="col-7 col-md-7 col-lg-4 d-flex pb-lg-0 pb-3 order-lg-3 order-2">

                <div className="card w-100  d-flex align-items-center justify-content-center ">
                    <div className="text-center py-4 ">
                        <h6 className='font-Geomanist'>Actividades de fomento</h6>
                    </div>
                    <div className=" pb-2 w-100  text-center d-flex  flex-column justify-items-center">
                        <div className="">
                            <a href="/relax8"><button type="submit" className="btn btn-verde w-75  mx-4 " ><span className='textCard'>Módlulo relax</span></button></a>
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
