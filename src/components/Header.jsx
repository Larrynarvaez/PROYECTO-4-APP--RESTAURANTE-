import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <nav className="navbar">

                <div className="logo">
                    <a href='#'>Los Mafiosos Pizza</a>   
                </div>

                <div className="nav-links">
                    <Link to="/" className='link'>Inicio</Link>
                    <Link to="/menu" className='link'>Menu</Link>
                    <Link to="/reservaciones" className='link'>Reservaciones</Link>
                </div>

            </nav>

        </div>
    );
}

export default Header;