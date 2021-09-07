import axios from "axios";
import React, { useState, useEffect } from "react";
import MenuAdulto1 from "./MenuAdulto1";
import MenuAdulto2 from "./MenuAdulto2";
import MenuInfantil from "./MenuInfantil";
import "./MenuBody.css";

const MenuBody = () => {
  const [Menu_Infantil, setMenu_Infantil] = useState();
  const [Menu_1, setMenu_1] = useState();
  const [Menu_2, setMenu_2] = useState();

  const url = "http://localhost:3005/menu_Del_Dia";

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await axios.get(url),
        res = await datos.data,
        { menu_adulto } = await res,
        { menu_infantil } = await res,
        { menu_1, menu_2 } = await menu_adulto;

      setMenu_Infantil(menu_infantil);
      setMenu_1(menu_1);
      setMenu_2(menu_2);
    };
    obtenerDatos();
  }, [url]);

  return (
    <div className="Padre-Body">
      {Menu_1 ? <MenuAdulto1 Menu={Menu_1} /> : "cargando"}
      {Menu_2 ? <MenuAdulto2 Menu={Menu_2} /> : "cargando"}
      {Menu_Infantil ? <MenuInfantil Menu={Menu_Infantil} /> : "cargando"}
    </div>
  );
};

export default MenuBody;
