import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import carritoVector from '../assets/carrito-transparente.png'
import CarritoContext from "../Context/CarritoContext";
import './EstilosPublicos.css'

const CarritoDeCompras = () => {
  const { contadorProductos } = useContext(CarritoContext)
  return (
    <div className="carrito-De-Compras">
      <NavLink exact to="/carrito" className="navLink-Carrito">
        <div className="btn-Carrito-Header">
          <p>{contadorProductos}</p>
        </div>
        <h2>Carrito: </h2>
        <img width="75px" height="60px" src={carritoVector} alt="carrito-de-compras" />
      </NavLink>
    </div>
  );
};

export default CarritoDeCompras;
