import React, { useEffect, useRef, useState } from "react";
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
  const imagenRef = useRef()
  const ref = useRef()

  useEffect(() => {
    const arregloImg = [capuccino, capuccinoCasero, frapuccino];
    let i = 0;

    let contador = setInterval(() => {
      if (arregloImg.length - 1 > i) {
        imagenRef.current.className = 'claseActivaC'
        setTimeout(() => {
          imagenRef.current.className = 'claseActivaC active'
          setCarrusel(arregloImg[i]);
        }, 1000);
        i++;
      } else {
        imagenRef.current.className = 'claseActivaC'
        setTimeout(() => {
          imagenRef.current.className = 'claseActivaC active'
          setCarrusel(arregloImg[i]);
        }, 1000);
        i = 0;
      }
    }, 4000);
    
    ref.current.className = 'claseActivaC active'

    return () => {
      return clearInterval(contador)
    };
  }, [claseActiva]);
  
  return (
    <div className={`claseActivaC`} ref={ref} style={{ paddingLeft: "9%" }}>
      <img
        ref={imagenRef}
        style={Estilos}
        src={Carrusel}
        alt={"nada"}
      />
    </div>
  );
};

export default BodyCarruselCafe;
