import React from "react";
import { NavLink } from "react-router-dom";
import './BodyFooter.css'

const BodyFooter = () => {
  return (
    <div className="div-Footer">
      <NavLink className="nav-Footer" exact to={"/privacidad"}>Aviso de Privacidad</NavLink>
      <p className="p-Footer">
        Ninguna de las imagenes aqui vistas son de mi propiedad, el material
        usado es meramente para maquetado, no se monetiza de ninguna manera
      </p>
    </div>
  );
};

export default BodyFooter;
