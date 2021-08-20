import React, { useState } from "react";


import './MenuAdulto2.css'

const MenuAdulto2 = ({ Menu }) => {

    const [Scroll, setScroll] = useState("")
    
    const w = window,
         d = document

         d.addEventListener("scroll",e=>{
             const scroll = w.pageYOffset

             if(scroll >= 350){
                 setScroll("active")
             }
         })



  return (
    <section className={`menu-Adulto-2 ${Scroll}`}>
      <div className="info-Platillo2">
        <h1>{Menu ? Menu.nombre : "cargando"}</h1>
        <p>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
      <div className="platillo-2">
        <img
          src={Menu ? Menu.img : "cargando"}
          style={{ height: "415px" }}
          alt=""
        />
        <section className="compra2">
          <button className="btn-Agregar2">
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio2">{Menu ? Menu.precio : "cargando"}</div>
        </section>
      </div>
    </section>
  );
};

export default MenuAdulto2;
