import React, { useRef, useState } from 'react'

const CartaInfusiones = ({ Infusiones, setalmacen }) => {

  const refListo = useRef()
  const [Add_Food, setAdd_Food] = useState(0);

  let DatosInfusiones = []
  let Producto = {
    nombre: Infusiones.nombre,
    id: Infusiones.id,
    img: Infusiones.img,
    precio: Infusiones.precio,
    carta: "Infusion",
    cantidad: Add_Food
  }


  const validarDatos = () => {
    if (Add_Food > 0) {
      DatosInfusiones.push(Producto)
      setalmacen(DatosInfusiones)
    }
    setTimeout(() => {
      refListo.current.className = "btn_Card active"
      setTimeout(() => {
        refListo.current.className = "btn_Card"
        setAdd_Food(0)
      }, 500);
    }, 500);
  }

  const agregar = () => {
    if (Add_Food < 5) {
      setAdd_Food(Add_Food + 1);
    }
    return
  }

  const disminuir = () => {
    if (Add_Food > 0) {
      setAdd_Food(Add_Food - 1);
    }
    return;
  }


  return (
    <div className="Card">
      <section className="contenido">
        <div className="Marco_Titulo">
          <h1 className="titulo">{Infusiones ? Infusiones.nombre : "cargando"}</h1>
        </div>
        <img
          className="img-Card"
          src={Infusiones ? Infusiones.img : "cargando"}
          alt={Infusiones ? Infusiones.nombre : "cargando"}
        />
      </section>
      <section className="info-Card">
        <p className="precio-Card">${Infusiones ? Infusiones.precio : "cargando"}.00</p>
        <div className="seccion-Botones-C">
          <section className="agregar-Disminuir">
            <button className="agregar-C" onClick={agregar}>
              <p className="p-agregar-C">+</p>
            </button>
            <button className="disminuir-C" onClick={disminuir}>
              <p className="p-disminuir-C">-</p>
            </button>
          </section>
          <button className="btn_Card" ref={refListo} onClick={validarDatos}>
            <p style={{ margin: "0" }}>Agregar:</p>
            <p style={{ margin: "0" }}>{Add_Food}</p>
          </button>
        </div>
      </section>
    </div>
  )
}

export default CartaInfusiones