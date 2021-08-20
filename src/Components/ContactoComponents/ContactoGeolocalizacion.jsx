import React, { useEffect, useState } from "react";
import { helpHttp } from "../../Helpers/helpHttp";
import "./ContactoGeo.css";
import FormEnviado from "./FormEnviado";

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

  useEffect(()=>{
    let contador 
    if(formOK===true){
      contador = setTimeout(() => {
        setformOK(!formOK)
      }, 5000);
    }

    return()=>{
      clearTimeout(contador)
    }
  },[formOK])

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
    if (e.target.name)
      setform({
        ...form,
        [e.target.name]: e.target.value,
      });
  };

  const submit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3005/contacto";
    if (!form.id) {
      helper
        .post(url, {
          body: form,
          headers: { "content-type": "application/json" },
        })
        .then(setformOK(!formOK))
    }
  };

  return (
    <section>
      <div className="PadreContacto">
        <h1 style={{ color: "red" }}>¿Quieres trabajar con nosotros?</h1>
        <h2 style={{ color: "darkgrey" }}> ¿Tienes alguna sugerencia? </h2>
        <h2 style={{ color: "darkgrey" }}> ¡Contactanos! </h2>
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
              placeholder="Nombre y Apellido..."
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
            Email
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

      <iframe
        style={{ width: "100%", height: "600px" }}
        title="localizacion"
        src="https://www.google.com/maps/embed?pb=!4v1615064908258!6m8!1m7!1srFHi1OpHAftzpRutmdhfpA!2m2!1d-37.99793773677948!2d-57.54904095314244!3f165.49830510540647!4f8.33467557021487!5f0.7820865974627469"
        frameBorder="0"
      ></iframe>
    </section>
  );
};

export default ContactoGeolocalizacion;
