import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = (carrusel) => {
    carrusel = carrusel.carrusel;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3  ">
            <div className="card-body d-flex flex-column align-items-start justify-content-center w-100">
                <div>
                    <h3 className='text-center mb-4'>{carrusel.nombre_grupo}</h3>

                    <div dangerouslySetInnerHTML={{__html:carrusel.texto_grupo}}></div>

                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>

                        {carrusel.carrusel.map((item, index_map) => (
                            <Carousel.Item
                                key={index_map}
                                interval={null}
                            >
                                <img
                                    className="d-block w-100"
                                    src={item.imagen}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        ))}

                    </Carousel>

                    
                </div>
            </div>
        </div>
    );
}

export default Carrusel