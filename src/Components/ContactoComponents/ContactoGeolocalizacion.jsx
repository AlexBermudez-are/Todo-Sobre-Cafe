import React, { useEffect, useState } from "react";
import { helpHttp } from "../../Helpers/helpHttp";
import "./ContactoGeo.css";
import FormEnviado from "./FormEnviado";
import facebook from '../../assets/faceebok.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const initialState = {
  nombre: "",
  numero: "",
  email: "",
  datos: "",
  id: "",
};

const datosClass = {
  nombre: "",
  numero: "",
  email: "",
};

const ContactoGeolocalizacion = () => {

  const [active, setactive] = useState(datosClass);
  const [form, setform] = useState(initialState);
  const [formOK, setformOK] = useState(false);
  const helper = helpHttp();

  useEffect(() => {
    let contador
    if (formOK === true) {
      contador = setTimeout(() => {
        setformOK(!formOK)
      }, 4000);
    }

    return () => {
      clearTimeout(contador)
    }
  }, [formOK])

  const formulario = (e) => {
    if (e.target.pattern) {
      let regEx = new RegExp(e.target.pattern);
      regEx.exec(e.target.value)
        ? setactive({
          ...active,
          [e.target.name]: "",
        })
        : setactive({
          ...active,
          [e.target.name]: "active",
        });
    }
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const submit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3005/contacto";
    helper
      .post(url, {
        body: form,
        headers: { "content-type": "application/json" },
      })
    setTimeout(() => {
      setformOK(true)
      setform(initialState)
    }, 1000);
  };

  return (
    <section>
      <div className="PadreContacto">
        <h1 style={{ color: "red" }}>¿Quieres trabajar con nosotros?</h1>
        <h2> ¿Tienes alguna sugerencia? </h2>
        <h2> ¡Contactanos! </h2>
      </div>
      <form onSubmit={submit} className="formContacto">
        {formOK ? <FormEnviado /> : ""}
        <div className="contenedorContacto">
          <label htmlFor="nombre">
            Nombre:
            <input
              className={`inputContacto ${active.nombre}`}
              onChange={formulario}
              value={form.nombre}
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              required
            />
            <span className={`labelContacto ${active.nombre}`}>
              El caracter ingresado no es valido
            </span>
          </label>
          <label htmlFor="numero">
            Telefono:
            <input
              className={`inputContacto ${active.numero}`}
              onChange={formulario}
              type="tel"
              name="numero"
              value={form.numero}
              placeholder="Numero Teléfonico"
              pattern="[0-9]{10}"
              required
            />
            <span className={`labelContacto ${active.numero}`}>
              El caracter ingresado no es un número
            </span>
          </label>
          <label htmlFor="email">
            Email:
            <input
              className={`inputContacto ${active.email}`}
              onChange={formulario}
              value={form.email}
              type="email"
              name="email"
              placeholder="Email"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              required
            />
            <span className={`labelContacto ${active.email}`}>
              Porfavor ingrese una direccion de correo valida
            </span>
          </label>
        </div>
        <textarea
          onChange={formulario}
          value={form.datos}
          style={{
            resize: "none",
            width: "60%",
            margin: "auto",
            fontSize: "1.3rem",
          }}
          name="datos"
          cols="30"
          rows="10"
          placeholder="Comentanos..."
          required
        ></textarea>
        <input
          type="submit"
          className="submitContacto"
          style={{ cursor: "pointer" }}
        />
      </form>
      <section className="ubicacion-C">
        <div className="mapa-C">
          <iframe
            title="ubicacion"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.459350600613!2d-57.55511987076555!3d-38.05087484266043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de0a949d16d9%3A0x2bf3db8497eb780f!2sFigueroa%20Alcorta%201499%2C%20B7603BUQ%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1630346064185!5m2!1ses!2sar"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contacto-div">
          <h2 style={{color:"red"}}>¿Quieres visitarnos?</h2>
          <p>Nos encontramos en la calle Figueroa Alcorta #1499, en diagonal con la calle Falsa #123</p>
          <p>Abierto desde las 8:00 hasta las 22:00</p>
          <p style={{color:"blue", fontWeight:"bold"}}>¡Te dejamos nuestras Redes Sociales!</p>
          <section className="redes-Sociales">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" width="50px" height="50px" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" width="50px" height="50px" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" width="50px" height="50px" />
            </a>
          </section>
        </div>
      </section>
    </section>
  );
};

export default ContactoGeolocalizacion;
