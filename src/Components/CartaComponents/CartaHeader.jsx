import React from "react";
import CarritoDeCompras from "../CarritoDeCompras";
import InicioDeSesion from "../InicioDeSesion";
import LogoConNav from "../LogoConNav";

const CartaHeader = () => {
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
          <InicioDeSesion />
        </section>
      </section>
    </div>
  );
};

export default CartaHeader;
