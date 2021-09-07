import React, { useState } from "react";
import InicioDeSesionHome from "./HomeComponents/InicioDeSesionHome";
import CrearCuenta from './HomeComponents/CrearCuenta'

const InicioDeSesion = () => {

  const [crearCuenta, setcrearCuenta] = useState(false)
  const [loginUsuario, setloginUsuario] = useState(false)
  return (
    <section className="UsuariosHome-G">
      <button className="boton-Nav-Usuario-G" onClick={e => { setloginUsuario(true) }}>
        <p style={{ margin: "0" }}>Inicia Sesión</p>
      </button>
      {
        loginUsuario
          ? <InicioDeSesionHome
            setloginUsuario={setloginUsuario}
            setcrearCuenta={setcrearCuenta} />
          : false
      }
      {
        crearCuenta
          ? <CrearCuenta
            crearCuenta={crearCuenta}
            setcrearCuenta={setcrearCuenta} />
          : false
      }
    </section>
  );
};

export default InicioDeSesion;
