import React, { useContext, useRef } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuAdulto1.css'

const MenuAdulto1 = ({ Menu }) => {

  const arregloC = []
  let menu = {
    id: Menu.id,
    nombre: Menu.nombre,
    precio: Menu.precio,
    img: Menu.img,
    carta: "carta"
  }

  const menuRef = useRef()
  const { enviandoPedido } = useContext(CarritoContext);

  const agregarCarrito = () => {
    arregloC.push(menu)
    enviandoPedido(arregloC)
    setTimeout(() => {
      menuRef.current.className = "btn-Agregar active"
      setTimeout(() => {
        menuRef.current.className = "btn-Agregar"
      }, 500);
    }, 500);
  }

  return (
    <section className="menu-Adulto-1">
      <div className="platillo-1">
        <img
          style={{ boxShadow: "5px 1px 7px 1px rgb(0 0 0 / 20%)", height:"350px" }}
          src={Menu ? Menu.img : "cargando"}
          alt=""
        />
        <section className="compra">
          <button className="btn-Agregar" onClick={agregarCarrito} ref={menuRef}>
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio">${Menu ? Menu.precio : "cargando"}.00</div>
        </section>
      </div>
      <div className="info-Platillo-Adulto1">
        <h1 style={{ color: "rgb(255, 123, 0)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
        <p className="borde-divisor-naranja"></p>
        <p style={{color:"#494949"}}>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
    </section>
  );
};

export default MenuAdulto1;
