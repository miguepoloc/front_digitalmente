import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from "../../assets/img/imgprueba1.jpg"
import Imagen2 from "../../assets/img/imgprueba2.jpg"
import Imagen3 from "../../assets/img/imgprueba3.jpg"


const Carrusel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3  ">
            <div className="card-body d-flex flex-column align-items-start justify-content-center w-100">

                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item interval={null}>
                        <img
                            className="d-block w-100"
                            src={Imagen3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Grupo muscular I: Mano, antebrazo y bíceps</h3>
                            <p><b>Mano y antebrazo dominantes:</b> cerrar el puño y apretarlo fuerte. Sentir cómo la mano, dedos y antebrazo se tensan. Mantener la tensión un momento y luego abrir la mano poco a poco mientras se suelta la tensión</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={null}>
                        <img
                            className="d-block w-100"
                            src={Imagen3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Grupo muscular I: Mano, antebrazo y bíceps</h3>
                            <p><b>Bíceps dominante:</b> Se debe empujar el codo contra el brazo de la silla en la que se encuentre sentado y sienta la tensión en el músculo. Mantenga el brazo así durante unos segundos y comience a soltarlo suavemente. Mientras sucede, identifique las diferentes sensaciones</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={null}>
                        <img
                            className="d-block w-100"
                            src={Imagen3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Grupo muscular I: Mano, antebrazo y bíceps</h3>
                            <p>
                                <b>Mano y antebrazo no dominantes:</b> (Mismo procedimiento).
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={null}>
                        <img
                            className="d-block w-100"
                            src={Imagen3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Grupo muscular I: Mano, antebrazo y bíceps</h3>
                            <p>
                                <b>Bíceps no dominante:</b> (Mismo procedimiento).
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Carrusel