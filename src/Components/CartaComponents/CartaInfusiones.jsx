import React from 'react'

const CartaInfusiones = ({Infusiones}) => {
    return (
        <div className="Card">
      <section className="contenido">
        <h1 className="titulo">{Infusiones ? Infusiones.nombre : "cargando"}</h1>
        <img
          className="img-Card"
          style={{ width: "300px", height: "300px" }}
          src={Infusiones ? Infusiones.img : "cargando"}
          alt={Infusiones ? Infusiones.nombre : "cargando"}
        />
      </section>
      <section className="info-Card">
        <p className="precio-Card">{Infusiones ? Infusiones.precio : "cargando"}</p>
        <button className="btn-Card">
          <p style={{ margin: "10%" }}>Agregar</p>
          <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
        </button>
      </section>
    </div>
    )
}

export default CartaInfusiones
