/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Terraza from "../../assets/Terraza-Cafetería.mp4";
import Logo from "../../assets/todo-sobre-café.png";
import BodyCarruselCafe from "./BodyCarruselCafe";
import BodyCarruselPostre from "./BodyCarruselPostre";
import "./BodyHome.css";

const BodyHome = () => {

  const [state, setstate] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setstate(true)
    }, 1000);
    return()=>{
      setstate(false)
    }
  }, [])

  return (
    <>
      <div className="body-Video">
        <video className="video-Home" loop muted autoPlay>
          <source src={Terraza} type="video/mp4" />
        </video>
      </div>
      <div className="body-Contenido">
        <section className="body-Img-Logo">
          <img
            style={{ width: "400px", height: "400px" }}
            src={Logo}
            alt="todo-sobre-café"
          />
        </section>
      </div>
      <div className="carrusel-Div">
        {
          state
            ? <>
              <section className="carrusel-Postres">
                <section className="body-Postres">
                  <div className="icono-Postre">
                    <p style={{ margin: "0" }}>Postres</p>
                  </div>
                </section>
                <BodyCarruselPostre />
              </section>
              <section className="body-Texto">
                <p className="texto-body-info">
                  Somos una cafetería dedicada a brindar no solo un buen café. Sino
                  una experiencia única y que antes de irte te lleves un buen sabor de
                  boca con la mejor compañia y un dulce postre para endulzarte la
                  vida.
                </p>
                <p className="corazon-purpura">💜</p>
              </section>
              <section className="carrusel-Cafe">
                <section className="body-Cafe">
                  <div className="cafe">
                    <p style={{ margin: "0" }}>Infusiones</p>
                  </div>
                </section>
                <BodyCarruselCafe />
              </section></>
            : <h1>Cargando</h1>
        }
      </div>
    </>
  );
};

export default BodyHome;
