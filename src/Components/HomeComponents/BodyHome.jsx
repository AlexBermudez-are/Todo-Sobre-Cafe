import React, { useState } from "react";
import Terraza from "../../assets/Terraza-Cafetería.mp4";
import Logo from "../../assets/todo-sobre-café.png";
import BodyCarruselCafe from "./BodyCarruselCafe";
import BodyCarruselPostre from "./BodyCarruselPostre";
import "./BodyHome.css";

const BodyHome = () => {
  const [scroll, setscroll] = useState(null);

  const w = window;

  w.addEventListener("scroll", (e) => {
    const scrollB = w.pageYOffset;
    if (scrollB > 500) {
      setscroll("active");
    }
  });

  return (
    <>
      <div className="body-Video">
        <video className="video-Home" loop muted autoPlay>
          <source src={Terraza} type="video/mp4" />
        </video>
      </div>

      <div className="body-Contenido">
        <section className="body-Postres">
          <div className="icono-Postre">Postres</div>
        </section>
        <section className="body-Img-Logo">
          <img
            style={{ width: "400px", height: "400px" }}
            src={Logo}
            alt="todo-sobre-café"
          />
        </section>
        <section className="body-Cafe">
          <div className="cafe">infusiones</div>
        </section>
      </div>

      <div className="carrusel-Div">
        <section className="carrusel-Postres">
          <BodyCarruselPostre claseActiva={scroll} />
        </section>
        <section className="body-Texto">
          <p>
            Somos una cafetería dedicada a brindar no solo un buen café. Sino
            una experiencia única y que antes de irte te lleves un buen sabor de
            boca con la mejor compañia y un dulce postre para endulzarte la
            vida.
          </p>
        </section>
        <section className="carrusel-Cafe">
          <BodyCarruselCafe claseActiva={scroll} />
        </section>
      </div>
    </>
  );
};

export default BodyHome;
