/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuAdulto1.css'

const MenuAdulto1 = ({ Menu }) => {

  const { enviandoPedido, precioTotal, precioFinal } = useContext(CarritoContext);
  const menuRef = useRef()
  const arregloC = []
  let idDate

  let menu = {
    carta: "carta",
    nombre: Menu.nombre,
    id: Menu.id,
    img: Menu.img,
    precio: Menu.precio,
    cantidad: 1,
    idUnica: idDate = Math.random() * (1000 - 1) + 1
  }


  const agregarCarrito = () => {

    arregloC.push(menu)
    enviandoPedido(arregloC)

    let precioF = precioFinal,
      precio = menu.precio;

    for (let index = 0; index < menu.cantidad; index++) {
      precioF += precio // Actualiza el precio total del carrito
    }

    precioTotal(precioF) //Suma el monto del producto a al monto del precio total

    setTimeout(() => {
      menuRef.current.className = "btn-Agregar active"
      setTimeout(() => {
        menuRef.current.className = "btn-Agregar"
      }, 500);
    }, 500);
  }

  return (
    <>
      <section className="titulo_Menu">
        <div className="menuContainer">
          <h1 className="switch-D">Menú del Día</h1>
        </div>
      </section>
      <section className="menu-Adulto-1">
        <div className="platillo-1">
          <img
            style={{ boxShadow: "5px 1px 7px 1px rgb(0 0 0 / 20%)" }}
            src={Menu ? Menu.img : "cargando"}
            alt=""
          />
          <section className="compra">
            <button className="btn-Agregar" onClick={agregarCarrito} ref={menuRef}>
              <p className="btn-Compra1">Agregar</p>
              <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
            </button>
            <div className="precio">${Menu ? Menu.precio : "cargando"}.00</div>
          </section>
        </div>
        <div className="info-Platillo-Adulto1">
          <h1 style={{ color: "rgb(255, 123, 0)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
          <p className="borde-divisor-naranja"></p>
          <p style={{ color: "#494949" }}>{Menu ? Menu.descripcion : "cargando"}</p>
        </div>
      </section>
    </>
  );
};

export default MenuAdulto1;
