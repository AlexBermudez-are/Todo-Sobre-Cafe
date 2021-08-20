import axios from "axios";
import React, { useEffect, useState } from "react";
import CartaInfusiones from "./CartaInfusiones";
import CartaPostres from "./CartaPostres";
import "./CartaBody.css";

const CartaBody = () => {
  const url = "http://localhost:3005/carta";

  const [Postres, setPostres] = useState([]);
  const [Infusiones, setInfusiones] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await axios.get(url),
        res = await datos.data,
        { postres, infusiones } = await res;

      setInfusiones(infusiones);
      setPostres(postres);
      console.log(postres, infusiones);
    };
    obtenerDatos();
  }, [url]);

  return (
    <div>
      <section className="Padre-P">
        <section className="seleccion-P">
          <h1 className="switch-P">Postres</h1>
        </section>
        <div className="postres">
          {Postres
            ? Postres.map((el) => {
                return <CartaPostres Postres={el} key={el.id} />;
              })
            : "cargando"}
        </div>
      </section>
      <section className="Padre-I">
        <section className="seleccion-I">
          <h1 className="switch-I">Bebidas</h1>
        </section>
        <div className="infusiones">
          {Infusiones
            ? Infusiones.map((el) => {
                return <CartaInfusiones Infusiones={el} key={el.id} />;
              })
            : "cargando"}
        </div>
      </section>
    </div>
  );
};

export default CartaBody;
