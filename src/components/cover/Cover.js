import React from "react";
import logo from "../../assets/images/Logo.png";
import abajo from "../../assets/images/Abajo.png";
import Nav from "../Nav/Nav";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="Cover">
      <header>
        <img src={logo} className="Logo" alt="logo" />
        <h1>Budines Foxy</h1>
        <img src={abajo} className="Abajo" alt="abajo" />
      </header>
      <h2>Aplicación web en construcción, por favor regrese luego.</h2>
      <Nav />
    </div>
  );
};

export default Cover;
