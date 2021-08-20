import React from "react";
import { NavLink } from "react-router-dom";

const InicioDeSesion = () => {
  return (
    <NavLink to="/usuario" className="sesion-Con-Nav">
      <div className="btn-De-Sesion">Inicia Sesión</div>
    </NavLink>
  );
};

export default InicioDeSesion;
