import React from "react";
import CarritoDeCompras from "../CarritoDeCompras";
import InicioDeSesionHome from "../InicioDeSesion";
import LogoConNav from "../LogoConNav";
import "./MenuHeader.css";

const MenuHeader = () => {

  return (
    <div className="Padre">
      <section className="menu-Header">
        <section className="btn-Carrito">
          <CarritoDeCompras />
        </section>
        <section className="logo">
          <LogoConNav />
        </section>
        <section className="inicio-De-Sesion">
          <InicioDeSesionHome />
        </section>
      </section>
    </div>
  );
};

export default MenuHeader;
