import React from "react";
//import { Link } from 'react-router-dom'

// Estilos
import './NotFound.css';

const NotFound = () => (
    <div className="error">
        <h1>Página no encontrada</h1>
        <h2 className="e404">Error 404</h2>
        <button><a href="/">Ir al inicio</a></button>
    </div>
);

export default NotFound;