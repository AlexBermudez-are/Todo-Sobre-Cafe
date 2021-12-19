import React, { useContext, useEffect, useRef, useState } from "react";
import InicioDeSesionHome from "./HomeComponents/InicioDeSesionHome";
import CrearCuenta from './HomeComponents/CrearCuenta';
import SesionContext from "../Context/SesionContext";
import SesionIniciada from '../assets/sesion-Iniciada.png'
import './EstilosPublicos.css'
import ContraseñaOlvidada from "./HomeComponents/ContraseñaOlvidada";

const InicioDeSesion = () => {

  const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')
  const { SesionI } = useContext(SesionContext)
  const [crearCuenta, setcrearCuenta] = useState(false)
  const [loginUsuario, setloginUsuario] = useState(false)
  const [contraseñaOlvidada, setcontraseñaOlvidada] = useState(false)
  const ref = useRef()
  const bandera = useRef()

  useEffect(() => {
    if (SesionIniciadaLocalStorage) {
      ref.current.className = 'sesion-Iniciada active'
      bandera.current.className = 'contenedor-Bandera active'
    }
  }, [SesionIniciadaLocalStorage])

  return (
    <>
      {
        SesionI || SesionIniciadaLocalStorage
          ? <section className="section">
            <div className="sesion-Iniciada" ref={ref}>
              <div className="circulo-Blanco-Sesion"></div>
              <img src={SesionIniciada} width="100px" alt="icono-inicio-sesion" />
            </div>
            <div className="contenedor-Bandera" ref={bandera}>
              <div className="izquierda"></div>
              <div className="derecha"></div>
            </div>
          </section>
          // siempre se visualiza esto a menos que te loguees
          : <section className="UsuariosHome-G">
            <button className="boton-Nav-Usuario-G" onClick={e => { setloginUsuario(true) }}>
              <p style={{ margin: "0" }}>Inicia Sesión</p>
            </button>
          </section>
      }
      {
        // el boton de arriba visualiza el componente loginUsuario
        // loginUsuario modifica la visualizacion de "crearCuenta", "olvide contraseña" 
        // y del operador ternario de arriba
        loginUsuario
          ? <InicioDeSesionHome
            setloginUsuario={setloginUsuario}
            setcrearCuenta={setcrearCuenta}
            setcontraseñaOlvidada={setcontraseñaOlvidada} />
          : false
      }
      {
        crearCuenta
          ? <CrearCuenta
            crearCuenta={crearCuenta}
            setcrearCuenta={setcrearCuenta} />
          : false
      }
      {
        contraseñaOlvidada
          ? <ContraseñaOlvidada setcontraseñaOlvidada={setcontraseñaOlvidada} />
          : false
      }
    </>
  );
};

export default InicioDeSesion;
