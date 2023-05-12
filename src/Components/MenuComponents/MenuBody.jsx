import axios from "axios";
import React, { useState, useEffect } from "react";
import MenuAdulto1 from "./MenuAdulto1";
import MenuAdulto2 from "./MenuAdulto2";
import MenuInfantil from "./MenuInfantil";
import "./MenuBody.css";
import { Spinner } from "react-bootstrap";
import json from '../../db.json'

const MenuBody = () => {
  const [Menu_Infantil, setMenu_Infantil] = useState();
  const [Menu_1, setMenu_1] = useState();
  const [Menu_2, setMenu_2] = useState();
  const [scrollMenu2, setscrollMenu2] = useState(false)
  const [scrollMenuI, setscrollMenuI] = useState(false)
  const w = window;
  // const [switchs, setswitchs] = useState(false);

  const url = json;

  w.addEventListener("scroll", e => {
    const scroll = w.pageYOffset
    if (scroll > 300 && scroll < 500 && scrollMenu2 === false) {
      return scrollMenu2 ? '' : setscrollMenu2(true)
    }
    if (scroll > 850 && scroll < 1100 && scrollMenuI === false) {
      return scrollMenuI ? '' : setscrollMenuI(true)
    }
  })

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await url, //axios.get(url),
        res = await datos.menu_Del_Dia,
        { menu_adulto } = await res,
        { menu_infantil } = await res,
        { menu_1, menu_2 } = await menu_adulto;

      setMenu_Infantil(menu_infantil);
      setMenu_1(menu_1);
      setMenu_2(menu_2);
    };
    obtenerDatos();
    return () => {
      setscrollMenu2(false)
      setscrollMenuI(false)
    }
  }, [url]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {
        Menu_1 && Menu_2 && Menu_Infantil
          ? <div className="Padre-Body">
            {
              Menu_1
                ? <MenuAdulto1 Menu={Menu_1} />
                : <Spinner animation="border" variant="warning"
                  style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} />
            }
            {
              Menu_2 && scrollMenu2
                ? <MenuAdulto2 Menu={Menu_2} scrollMenu2={scrollMenu2} setscrollMenu2={setscrollMenu2} />
                : <Spinner animation="border" variant="warning"
                  style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} />
            }
            {
              Menu_Infantil && scrollMenuI
                ? <MenuInfantil Menu={Menu_Infantil} scrollMenuI={scrollMenuI} setscrollMenuI={setscrollMenuI} />
                : <Spinner animation="border" variant="warning"
                  style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} />
            }
          </div>
          : <div style={{ paddingBottom: "4rem", paddingTop: "10rem" }}>
            <Spinner animation="border" variant="warning" style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} />
          </div>
      }
    </div>
  );
};

export default MenuBody;
