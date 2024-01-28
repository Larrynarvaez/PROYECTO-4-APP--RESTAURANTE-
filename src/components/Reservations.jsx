import React from 'react';
import { useState } from 'react';
import {db} from '../assets/firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

function Reservations(props) {
    const [reserva, setReserva] = useState({
        nombre: '',
        fecha: '',
        hora: '',
        detalles: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReserva(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Aquí podrías manejar la lógica para enviar la reserva a tu backend o hacer alguna acción con los datos
        const newdoc = await addDoc(collection(db,"reservaciones"),reserva)
        // Luego podrías reiniciar el estado del formulario
        setReserva({
          nombre: '',
          fecha: '',
          hora: '',
          detalles: ''
        });
    };

    return (
    <div className='reservaciones-body'>    
        <div className="reservaciones-container">
        <h2>Formulario de Reservaciones</h2>
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input value={reserva.nombre} onChange={handleChange} type="text" id="nombre" name="nombre" />
                </div>

                <div className="form-group">
                    <label htmlFor="fecha">Fecha:</label>
                    <input value={reserva.fecha} onChange={handleChange} type="date" id="fecha" name="fecha" />
                </div>

                <div className="form-group">
                    <label htmlFor="hora">Hora:</label>
                    <input value={reserva.hora} onChange={handleChange} type="time" id="hora" name="hora" />
                </div>

                <div className="form-group">
                    <label htmlFor="detalles">Detalles:</label>
                    <textarea value={reserva.detalles} onChange={handleChange} id="detalles" name="detalles" rows="4"></textarea>
                </div>

                <button type="submit">Enviar Reserva</button>
        </form>
        </div>
    </div>   
    );
}

export default Reservations;