import React from "react";
import LogoConNav from "../LogoConNav";
import contactoMesero from '../../assets/contacto_mesero.jpg'

const ContactoHeader = () => {
  return (
    <div>
      <img src={contactoMesero} alt="Trabaja con nosotros"
        style={{
          objectFit: "fill",
          position: "relative",
          height: "800px",
          width: "100%"
        }} />
      <section
        style={{
          position: "absolute",
          height: "300px",
          width: "16%",
          backgroundColor: "white",
          top: "0",
          marginLeft: "4%",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderLeft: "4px solid red",
          borderRight: "4px solid red",
          borderBottom: "4px solid red"
        }}></section>
      <section style={{ position: "absolute", top: "0" }}>
        <LogoConNav />
      </section>
    </div>
  );
};

export default ContactoHeader;
