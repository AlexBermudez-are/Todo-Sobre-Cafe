import React, {useState} from "react";
import './MenuInfantil.css'

const MenuInfantil = ({ Menu }) => {

    const [Scroll, setScroll] = useState("")
    
    const w = window,
         d = document

         d.addEventListener("scroll",e=>{
             const scroll = w.pageYOffset

             if(scroll >= 800){
                 setScroll("active")
             }
         })

  return (
    <section className={`menu-Infantil ${Scroll}`}>
      <div className="platillo">
        <img
          src={Menu ? Menu.img : "cargando"}
          style={{ height: "415px" }}
          alt=""
        />
        <section className="compra">
          <button className="btn-Agregar">
            <p style={{ margin: "10%" }}>Agregar</p>
            <p style={{ margin: "0", fontSize: "2rem" }}>+</p>
          </button>
          <div className="precio">{Menu ? Menu.precio : "cargando"}</div>
        </section>
      </div>
      <div className="info-Platillo">
        <h1>{Menu ? Menu.nombre : "cargando"}</h1>
        <p>{Menu ? Menu.descripcion : "cargando"}</p>
      </div>
    </section>
  );
};

export default MenuInfantil;
