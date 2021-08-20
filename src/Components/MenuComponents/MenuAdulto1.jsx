import React from "react";
import './MenuAdulto1.css'

const MenuAdulto1 = ({Menu}) => {
  return (
    <section className="menu-Adulto-1">
      <div className="platillo-1">
        <img
          src={Menu ? Menu.img : "cargando"}
          alt=""
        />
        <section className="compra">
          <button className="btn-Agregar">
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio">{Menu ? Menu.precio : "cargando"}</div>
        </section>
      </div>
      <div className="info-Platillo">
        <h1>{Menu ? Menu.nombre : "cargando"}</h1>
        <p>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
    </section>
  );
};

export default MenuAdulto1;
