import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home(props) {
    return (
        <div className="home-container">
            {/* Jumbotron */}
            <div className="jumbotron">
                <h1 className=' '>Te damos la bienvenida a Los Mafiosos Pizzas, donde la pasión por la pizza se encuentra con la tradición italiana.</h1>
                {/* Carrusel de imágenes */}
                <Carousel showArrows={true} showStatus={false} showThumbs={false} interval={5000}>
                    <div>
                        <img src="https://www.comedera.com/wp-content/uploads/2014/04/como-hacer-pizza-facil-en-casa.jpg" alt="Imagen 1" />
                        <p className="legend">Pizza casera</p>
                        <p className="description">Preparación de pizza fácil en casa.</p>
                    </div>

                    <div>
                        <img src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg" alt="Imagen 2" />
                        <p className="legend">Pizza gourmet</p>
                        <p className="description">Deliciosa pizza gourmet recién horneada.</p>
                    </div>
                </Carousel>
            </div>

            {/* Sección "Acerca de nosotros" */}
            <div className="about-us">
                <h2>Acerca de Nosotros</h2>
                <p>Bienvenido a Los Mafiosos Pizzas, el lugar donde la tradición se encuentra con la innovación para ofrecerte una experiencia única en cada bocado. Nos apasiona la auténtica cocina italiana y hemos perfeccionado el arte de hacer pizzas para llevar cada porción directamente a tu paladar.</p>
            </div>

        </div>
    );
}

export default Home;
