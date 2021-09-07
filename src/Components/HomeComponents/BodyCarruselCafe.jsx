import React, { useEffect, useState } from "react";
import frapuccino from "../../assets/frapuccino.png";
import capuccino from "../../assets/capuccino-foto-principal.jpg";
import capuccinoCasero from "../../assets/Cafe-Capuchino-Casero.jpg";
import "./Body-C-Postre.css";

const Estilos = {
  width: "92%",
  height: "260px",
  borderTopLeftRadius: "5%",
  borderTopRightRadius: "5%",
  borderBottomLeftRadius: "5%",
  borderBottomRightRadius: "5%",
};

const BodyCarruselCafe = ({ claseActiva }) => {
  const [Carrusel, setCarrusel] = useState([frapuccino]);

  useEffect(() => {
    const arregloImg = [capuccino, capuccinoCasero, frapuccino];
    let i = 0;

    let contador = setInterval(() => {
      if (arregloImg.length - 1 > i) {
        setCarrusel(arregloImg[i]);
        i++;
      } else {
        setCarrusel(arregloImg[i]);
        i = 0;
      }
    }, 4000);

    return () => {
      return clearInterval(contador)
    };
  }, [claseActiva]);

  return (
    <div className={`claseActivaC ${claseActiva}`} style={{ paddingLeft: "9%" }}>
      <img
        className="img-Cafes"
        style={Estilos}
        src={Carrusel}
        alt={"nada"}
      />
    </div>
  );
};

export default BodyCarruselCafe;
