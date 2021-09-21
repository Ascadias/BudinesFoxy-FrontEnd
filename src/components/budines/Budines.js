import React from 'react'
import './Budines.css';

import logo from '../../assets/images/Logo.png';
import abajo from '../../assets/images/Abajo.png';

const Budines = () => {
    return (
        <div className="Content">
            <header>
                <img src={logo} className="Logo" alt="logo" />
                <h1>Dulces Foxy</h1>
                <img src={abajo} className="Abajo" alt="abajo" />
            </header>
            
            <div className="Contenido">
                    <div className="Titulo">
                        <h2>Budines</h2>
                    </div>
                    <div className="Detalles">
                        <h3>Opciones</h3>
                        <h3>Clasicos</h3>
                        <h3>XXL</h3>
                </div>
                <div className="Productos">
                    <div className="Items">
                        <p>Vainilla</p>
                        <p>$150</p>
                        <p>$430</p>
                    </div>
                    <div className="Items">
                        <p>Limón</p>
                        <p>$160</p>
                        <p>$450</p>
                    </div>
                    <div className="Items">
                        <p>Naranja</p>
                        <p>$160</p>
                        <p>$450</p>
                    </div>
                    <div className="Items">
                        <p>Banana</p>
                        <p>$170</p>
                        <p>$470</p>
                    </div>
                    <div className="Items">
                        <p>Chocolate</p>
                        <p>$180</p>
                        <p>$490</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budines
