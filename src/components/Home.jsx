import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home(props) {
    return (
        <div className="home-container">
            {/* Jumbotron */}
            <div className="jumbotron">
                <h1>Bienvenidos a nuestra página</h1>
                <p>Una breve descripción de tu empresa o proyecto.</p>
                {/* Carrusel de imágenes */}
                <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                    <div>
                        <img src="https://www.comedera.com/wp-content/uploads/2014/04/como-hacer-pizza-facil-en-casa.jpg" alt="Imagen 1" />
                        <p className="legend">Descripción de la imagen 1</p>
                    </div>

                    <div>
                        <img src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg" alt="Imagen 2" />
                        <p className="legend">Descripción de la imagen 2</p>
                    </div>
                </Carousel>
            </div>

            {/* Sección "Acerca de nosotros" */}
            <div className="about-us">
                <h2>Acerca de Nosotros</h2>
                <p>Información sobre tu empresa o proyecto.</p>
                {/* Agrega más contenido acerca de tu empresa */}
            </div>

        </div>
    );
}

export default Home;
