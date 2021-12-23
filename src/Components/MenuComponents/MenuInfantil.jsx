/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuInfantil.css'
import { Spinner } from "react-bootstrap";

const MenuInfantil = ({ Menu, scrollMenuI,setscrollMenu2 }) => {

  const menuVisible = useRef()
  const menuRef = useRef();
  const { enviandoPedido, precioTotal, precioFinal } = useContext(CarritoContext);
  const w = window
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
    if (scrollMenuI) menuVisible.current.className = "menu-Infantil active"
  }, [])

  return (
    <>
      {
        scrollMenuI
        ? <section className={`menu-Infantil`} ref={menuVisible}>
        <div className="platillo">
          <img
            src={Menu ? Menu.img : "cargando"}
            style={{ boxShadow: "5px 1px 7px 1px rgb(0 0 0 / 20%)" }}
            alt=""
          />
          <section className="compra-Infantil">
            <button className="btn-Agregar-Infantil" onClick={agregarCarrito} ref={menuRef}>
              <p className="btn-CompraI">Agregar</p>
              <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
            </button>
            <div className="precio">${Menu ? Menu.precio : "cargando"}.00</div>
          </section>
        </div>
        <div className="info-Platillo-I">
          <h1 style={{ color: "rgb(0, 162, 255)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
          <p className="borde-divisor-azul"></p>
          <p style={{ color: "#494949" }}>{Menu ? Menu.descripcion : "cargando"}</p>
        </div>
      </section>
      : <Spinner style={{ width: "5rem", height: "5rem", marginTop:"10%", marginBottom:"10%" }} animation="border" variant="warning" />
      }
    </>
  );
};

export default MenuInfantil;
