/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuAdulto2.css'

const MenuAdulto2 = ({ Menu, scrollMenu2, setscrollMenu2 }) => {

  const menuVisible = useRef();
  const menuRef = useRef();
  const { enviandoPedido, precioTotal, precioFinal } = useContext(CarritoContext);
  let idDate

  const arregloC = [];
  let menu = {
    carta: "carta",
    nombre: Menu.nombre,
    id: Menu.id,
    img: Menu.img,
    precio: Menu.precio,
    cantidad: 1,
    idUnica: idDate = Math.random() * (1000 - 1) + 1
  };

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
      menuRef.current.className = "btn-Agregar2 active"
      setTimeout(() => {
        menuRef.current.className = "btn-Agregar2"
      }, 500);
    }, 500);
  }

  useEffect(() => {
    if (scrollMenu2) menuVisible.current.className = "menu-Adulto-2 active"
  }, [])

  return (
    <section className={`menu-Adulto-2`} ref={menuVisible} >
      <div className="info-Platillo2">
        <h1 style={{ color: "rgb(0, 179, 0)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
        <p className="borde-divisor-verde"></p>
        <p style={{ color: "#494949" }}>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
      <div className="platillo-2">
        <img
          src={Menu ? Menu.img : "cargando"}
          style={{ boxShadow: "-5px 5px 7px 1px rgb(0 0 0 / 20%)" }}
          alt=""
        />
        <section className="compra2">
          <button className="btn-Agregar2" onClick={agregarCarrito} ref={menuRef}>
            <p className="btn-Compra2">Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio2">${Menu ? Menu.precio : "cargando"}.00</div>
        </section>
      </div>
    </section>
  );
};

export default MenuAdulto2;
