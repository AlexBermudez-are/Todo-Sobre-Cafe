import React from "react";
import './CartaPostres.css'

const CartaPostres = ({ Postres }) => {
  return (
    <div className="Card">
      <section className="contenido">
        <h1 className="titulo">{Postres ? Postres.nombre : "cargando"}</h1>
        <img
          className="img-Card"
          style={{ width: "300px", height: "300px" }}
          src={Postres ? Postres.img : "cargando"}
          alt={Postres ? Postres.nombre : "cargando"}
        />
      </section>
      <section className="info-Card">
        <p className="precio-Card">{Postres ? Postres.precio : "cargando"}</p>
        <button className="btn-Card">
          <p style={{ margin: "10%" }}>Agregar</p>
          <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
        </button>
      </section>
    </div>
  );
};

export default CartaPostres;
