import React from "react";
import form_Enviado from "../../assets/vector-succesful.png";
import './FormEnviado.css'

const FormEnviado = ({param}) => {
  return (
    <div
      style={{
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        position: "absolute",
        backgroundColor: "rgba(226, 226, 226, 0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:'999',
      }}
    >
      <section
        className="succesful"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "1rem",
          border: "solid 3px green",
          fontFamily:"sans-serif",
          fontSize:"1.5rem"
        }}
      >
        <img src={form_Enviado} width="20%" alt="si" />
        <h1>{param}</h1>
        <p>Nos comunicaremos contigo en breve</p>
      </section>
    </div>
  );
};

export default FormEnviado;
