import React from "react";
import CarritoDeCompras from "../CarritoDeCompras";
import InicioDeSesion from "../InicioDeSesion";
import LogoConNav from "../LogoConNav";
import './PostresHeader.css'
const CartaHeader = () => {
  return (
    <div className="PadreCarta">
      <section className="menu-Header-C">
        <section className="btn-Carrito-C">
          <CarritoDeCompras />
        </section>
        <section className="logoC">
          <LogoConNav />
        </section>
        <section className="inicio-De-Sesion-C">
          <InicioDeSesion />
        </section>
      </section>
    </div>
  );
};

export default CartaHeader;
