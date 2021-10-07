import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import carritoVector from '../assets/carrito-transparente.png'
import CarritoContext from "../Context/CarritoContext";

const CarritoDeCompras = () => {
  const { contadorProductos } = useContext(CarritoContext)
  return (
    <div className="carrito-De-Compras">
      <NavLink exact to="/carrito" style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "center",
        textDecoration: "none",
        color: "white"
      }}>
        <div style={{
          backgroundColor: "rgb(97 97 97 / 50%)",
          width: "30px",
          height: "30px",
          position: "absolute",
          left: "16%",
          borderRadius: "50%"
        }}>
          <p style={{ color: "white", margin: "0", fontSize: "1.5rem", marginTop: "-9%", paddingLeft: "29%" }}>{contadorProductos}</p>
        </div>
        <h2 style={{ fontSize: "2rem", paddingBottom: "2%", margin: "0" }}>Carrito: </h2>
        <img width="75px" height="60px" src={carritoVector} alt="carrito-de-compras" />
      </NavLink>
    </div>
  );
};

export default CarritoDeCompras;
