import React from "react";
import contactoMesero from '../../assets/contacto_mesero.jpg'
import './ContactoHeader.css'
import logo from '../../assets/todo-sobre-café.png'
import { NavLink } from "react-router-dom";

const ContactoHeader = () => {
  return (
    <div>
      <img className="img-Contacto-Header" src={contactoMesero} alt="Trabaja con nosotros" />
      <div className="background-Logo"></div>
      <section className="contenedor-Logo-Contacto">
        <NavLink exact to="/">
          <img className="img-Contacto-Logo" src={logo} alt="todo-sobre-cafe.png" />
        </NavLink>
      </section>
    </div >
  );
};

export default ContactoHeader;
