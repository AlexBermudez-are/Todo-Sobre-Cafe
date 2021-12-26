import React, {  useEffect, useState } from "react";
import CartaInfusiones from "./CartaInfusiones";
import CartaPostres from "./CartaPostres";
import BtnScrollUp from "../BtnScrollUp";
import axios from "axios";
import "./CartaBody.css";
import { Spinner } from "react-bootstrap";

const CartaBody = () => {
  const url = "http://localhost:3005/carta",
    w = window;

  const [Postres, setPostres] = useState([]);
  const [Infusiones, setInfusiones] = useState([]);
  const [Scroll, setScroll] = useState(false)
  const [btn, setbtn] = useState()


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
    if (scrollUp > 1050 && Scroll === true) {
      setbtn(true)
    }
    if (scrollUp === 0) {
      setbtn(false)
    }
  })

  return (
    <>
      {
        Postres.length > 0 && Infusiones.length > 0
          ? <div>
            <section className="Padre-P">
              <section className="seleccion-P">
                <h1 className="switch-P">Postres</h1>
              </section>
              <div className="postres">
                {
                  Postres.map((el) => {
                    return <CartaPostres Postres={el} key={el.id} />;
                  })}
              </div>
            </section>
            <section className="Padre-I">
              <section className="seleccion-I">
                <h1 className="switch-I">Bebidas</h1>
              </section>
              <div className="infusiones">
                {
                  Infusiones.map((el) => {
                    return <CartaInfusiones Infusiones={el} key={el.id}/>;
                  })}
              </div>
            </section>
            {btn ? <BtnScrollUp btn={btn} /> : false}
          </div>
          : <div style={{ display: "flex", justifyContent: "center", paddingBottom:"4rem" }}>
            <Spinner style={{ width: "5rem", height: "5rem", marginTop:"10%", marginBottom:"10%" }} animation="border" variant="warning" />
          </div>
      }
    </>
  );
};

export default CartaBody;
