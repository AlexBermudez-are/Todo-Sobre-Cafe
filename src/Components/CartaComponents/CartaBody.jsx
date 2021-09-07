import React, { useContext, useEffect, useState } from "react";
import CartaInfusiones from "./CartaInfusiones";
import CarritoContext from "../../Context/CarritoContext";
import CartaPostres from "./CartaPostres";
import BtnScrollUp from "../BtnScrollUp";
import axios from "axios";
import "./CartaBody.css";

const CartaBody = () => {
  const url = "http://localhost:3005/carta",
    w = window;

  const { enviandoPedido } = useContext(CarritoContext);
  const [Postres, setPostres] = useState([]);
  const [Infusiones, setInfusiones] = useState([]);
  const [almacen, setalmacen] = useState([]);
  const [Scroll, setScroll] = useState(false)
  const [btn, setbtn] = useState()

  useEffect(() => {
    enviandoPedido(almacen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [almacen])

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await axios.get(url),
        res = await datos.data,
        { postres, infusiones } = await res;
      setInfusiones(infusiones);
      setPostres(postres);
    };
    obtenerDatos();
    setScroll(true)
    return () => {
      setScroll(false)
    }
  }, []);

  w.addEventListener("scroll", e => {
    let scrollUp = w.pageYOffset
    if (scrollUp > 1050 && Scroll===true) {
      setbtn(true)
    }
    if(scrollUp===0){
      setbtn(false)
    }
  })

  return (
    <div>
      <section className="Padre-P">
        <section className="seleccion-P">
          <h1 className="switch-P">Postres</h1>
        </section>
        <div className="postres">
          {Postres
            ? Postres.map((el) => {
              return <CartaPostres Postres={el} key={el.id} almacen={almacen} setalmacen={setalmacen} />;
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
              return <CartaInfusiones Infusiones={el} key={el.id} almacen={almacen} setalmacen={setalmacen} />;
            })
            : "cargando"}
        </div>
      </section>
      {btn ? <BtnScrollUp btn={btn}/> : false}
    </div>
  );
};

export default CartaBody;
