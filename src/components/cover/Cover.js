import React from 'react'
import logo from '../../assets/images/Logo.png';
import abajo from '../../assets/images/Abajo.png';
import './Cover.css';

const Cover = () => {
    return (
        <div className="Cover">
            <div>
                <img src={logo} className="Logo" alt="logo" />
                <h1>Budines Foxy</h1>
                <h2>Proximamente...</h2>
            </div>
            <div className="Abajo">
            <img src={abajo} className="Abajo" alt="abajo" />
            </div>
        </div>
    )
}

export default Cover
