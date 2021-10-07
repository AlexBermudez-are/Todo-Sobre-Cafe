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
          height: "700px",
          width: "100%"
        }} />
      <section
        style={{
          position: "absolute",
          height: "255px",
          width: "13%",
          backgroundColor: "rgb(238, 161, 17)",
          top: "0",
          marginLeft: "4%",
        }}></section>
      <section style={{
        width: "160px",
        height: "155px",
        backgroundColor: "white",
        position: "absolute",
        top: "7%",
        left: "5%",
        borderRadius: "50%"
      }}></section>
      <div style={{
        display: "inline-flex",
        position: "absolute",
        top: "25%",
        left: "4%"
      }}>
        <div style={{
          width: "140px",
          position: "absolute",
          backgroundColor: "white",
          height: "56px",
          left:"12%",
          borderRadius:"0px 0px 98px 100px",
          top:"-27%"
        }}></div>
        <div style={{
          borderLeft: "95px solid rgb(238, 161, 17)",
          borderTop: "75px solid rgb(238, 161, 17)",
          borderBottom: "50px solid transparent",
          height: "0px",
          width: "0px"
        }}></div>
        <div style={{
          borderRight: "90px solid rgb(238, 161, 17)",
          borderTop: "75px solid rgb(238, 161, 17)",
          borderBottom: "50px solid transparent",
          height: "0px",
          width: "0px"
        }}></div>
      </div>
      <section style={{ position: "absolute", top: "0" }}>
        <LogoConNav />
      </section>
    </div >
  );
};

export default ContactoHeader;
