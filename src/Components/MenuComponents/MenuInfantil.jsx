import React, { useContext, useEffect, useRef, useState } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuInfantil.css'

const MenuInfantil = ({ Menu }) => {

  const menuVisible = useRef()
  const menuRef = useRef();
  const { enviandoPedido } = useContext(CarritoContext);
  const [Scroll, setScroll] = useState(false);
  const w = window

  const arregloC = [];
  let menu = {
    id: Menu.id,
    nombre: Menu.nombre,
    precio: Menu.precio,
    img: Menu.img,
    carta: "carta"
  };

  const agregarCarrito = () => {
    arregloC.push(menu)
    enviandoPedido(arregloC)
    setTimeout(() => {
      menuRef.current.className = "btn-Agregar2 active"
      setTimeout(() => {
        menuRef.current.className = "btn-Agregar2"
      }, 500);
    }, 500);
  }

  w.addEventListener("scroll", e => {
    const scroll = w.pageYOffset
    if (scroll > 900 && scroll < 1100 && Scroll === false) {
      setScroll(true)
    }
  })

  useEffect(() => {
    if (Scroll) menuVisible.current.className = "menu-Infantil active"
    return () => {
      setScroll(false)
    }
  }, [Scroll])

  return (
    <section className={`menu-Infantil`} ref={menuVisible}>
      <div className="platillo">
        <img
          src={Menu ? Menu.img : "cargando"}
          style={{ height: "415px", boxShadow: "5px 1px 7px 1px rgb(0 0 0 / 20%)" }}
          alt=""
        />
        <section className="compra-Infantil">
          <button className="btn-Agregar" onClick={agregarCarrito} ref={menuRef}>
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio">${Menu ? Menu.precio : "cargando"}.00</div>
        </section>
      </div>
      <div className="info-Platillo-I">
        <h1 style={{ color: "rgb(0, 162, 255)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
        <p>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
    </section>
  );
};

export default MenuInfantil;
