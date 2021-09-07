import React, { useContext, useEffect, useRef, useState } from "react";
import CarritoContext from "../../Context/CarritoContext";
import './MenuAdulto2.css'

const MenuAdulto2 = ({ Menu }) => {

  const menuVisible = useRef();
  const menuRef = useRef();
  const { enviandoPedido } = useContext(CarritoContext);
  const [Scroll, setScroll] = useState(false);
  const w = window, d = document

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

  d.addEventListener("scroll", e => {
    const scroll = w.pageYOffset
    if (scroll > 400 && scroll < 700 && Scroll === false) {
      setScroll(true)
    }
  })

  useEffect(() => {
    if (Scroll) menuVisible.current.className = "menu-Adulto-2 active"
    return()=>{
      setScroll(false)
    }
  }, [Scroll])

  return (
    <section className={`menu-Adulto-2`} ref={menuVisible} >
      <div className="info-Platillo2">
        <h1 style={{ color: "rgb(0, 179, 0)" }}>{Menu ? Menu.nombre : "cargando"}</h1>
        <p>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
      <div className="platillo-2">
        <img
          src={Menu ? Menu.img : "cargando"}
          style={{ height: "415px", boxShadow: "-5px 5px 7px 1px rgb(0 0 0 / 20%)" }}
          alt=""
        />
        <section className="compra2">
          <button className="btn-Agregar2" onClick={agregarCarrito} ref={menuRef}>
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio2">${Menu ? Menu.precio : "cargando"}.00</div>
        </section>
      </div>
    </section>
  );
};

export default MenuAdulto2;
