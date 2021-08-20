import React from "react";
import { NavLink } from "react-router-dom";
import "./EstilosPublicos.css";
import Carrito from "../assets/carrito-transparente.png";

const CarritoDeCompras = () => {
  return (
    <div className="carrito-De-Compras">
      <NavLink exact to="/carrito" className="carrito-Con-Nav">
        <div className="btn-Carrito-Img">
          Carrito:
          <img style={{width:"50px", height:"50px"}} src={Carrito} alt="" />
        </div>
      </NavLink>
    </div>
  );
};

export default CarritoDeCompras;
