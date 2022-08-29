/* eslint-disable react-hooks/exhaustive-deps */
import { ReactComponent as IconUserLoggin } from '../../assets/user_Icon_Loggin.svg'
import React, { useContext, useEffect, useState } from 'react'
import FormEnviado from '../ContactoComponents/FormEnviado';
import SesionContext from '../../Context/SesionContext';
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';
import { useRef } from 'react';
import './UsuarioPerfil.css'
import axios from 'axios';
import LogoConNav from '../LogoConNav';

const initialState = {
  nombre: "",
  apellido: ""
}

const initialState2 = {
  password: ""
}

const UsuarioPerfil = ({ param }) => {

  const localStorageEmail = localStorage.getItem("email")
  const [passwordState, setPassword] = useState(initialState2)
  const { usuarioLogueado, } = useContext(SesionContext)
  const [data, setdata] = useState(initialState)
  const mostrarMenuDelete = useRef()
  const mostrarModel = useRef()
  const history = useHistory()
  const refCreateC = useRef()
  const mostrarP = useRef()
  const spinner = useRef()

  const cerrarSesion = () => {// elimina el estado que controla el inicio de sesion y su token
    const confirmaCerrarSesion = window.confirm('¿Está seguro de querer cerrar sesión?')
    if (confirmaCerrarSesion) {
      usuarioLogueado(false)
      localStorage.removeItem('Usuario')
      localStorage.removeItem("email")
      history.push('/')
    }
  }


  const eliminarCuenta = () => {
    try {
      spinner.current.className = 'spinner-Login active'
      axios.delete('https://newbackend2.herokuapp.com/delete', {
        headers: {},
        data: {
          email: localStorageEmail,
          password: passwordState.password
        }
      }).then(el => {
        spinner.current.className = 'spinner-Login active'
        usuarioLogueado(false)
        localStorage.removeItem('Usuario')
        localStorage.removeItem("email")
        history.push('/')
      })
    } catch (error) {
      spinner.current.className = 'spinner-Login'
      console.log(error);
    }
    console.log({
      "email": localStorageEmail,
      "password": passwordState.password
    });
  }

  const form = (e) => {
    setPassword({
      ...passwordState,
      [e.target.name]: e.target.value
    })
  }

  const mostrarPassword = () => {
    mostrarP.current.type === 'password'
      ? mostrarP.current.type = 'text'
      : mostrarP.current.type = 'password'
  }

  const modelBorrarCuenta = () => {
    if (mostrarModel.current.className === 'container-Menu-Padre') {
      mostrarModel.current.className = 'container-Menu-Padre active'
    } else {
      mostrarModel.current.className = 'container-Menu-Padre'
    }

    if (mostrarMenuDelete.current.className === 'confirmar-Eliminar-Perfil') {
      mostrarMenuDelete.current.className = 'confirmar-Eliminar-Perfil active'
    } else {
      mostrarMenuDelete.current.className = 'confirmar-Eliminar-Perfil'
    }
  }

  useEffect(() => {
    const { name, surname } = param
    let nameUpper = name[0].toUpperCase(),
      surnameUpper = surname[0].toUpperCase();

    let nameLower = name.slice(1),
      surnameLower = surname.slice(1);

    const nombre = nameUpper + nameLower
    const apellido = surnameUpper + surnameLower

    setdata({
      ...data,
      nombre: nombre,
      apellido: apellido
    })

    return {
      nombre, apellido
    }
  }, [])

  return (
    <div className='container-Padre'>
      <section className='header-Perfil-Data'>
        <section className="logoC">
          <LogoConNav widthUser={"200px"} heightUser={'200px'} />
        </section>
      </section>
      <section className="container-Menu-Padre" onSubmit={eliminarCuenta} ref={mostrarModel}>
        <div className="confirmar-Eliminar-Perfil" ref={mostrarMenuDelete}>
          <div className="cuentaCreada" ref={refCreateC}>
            <FormEnviado param={'Cuenta creada con exito :D'} />
          </div>
          <span className='eliminar-Cuenta-Text'>Para eliminar la cuenta, ingrese su contraseña:</span>
          <button className="btn-Usuario-Delete" onClick={modelBorrarCuenta}>
            <p style={{ margin: 0 }}>X</p>
          </button>
          <label className='contenedor-Input-Password' htmlFor="password">
            <input
              type="password"
              name="password"
              ref={mostrarP}
              placeholder='contraseña...'
              onChange={form}
              className='input-Borrar-Cuenta'
              required
            />
          </label>
          <label htmlFor="mostrarPassword" className='contenedor-Mostrar-Contraseña'>
            <input onClick={mostrarPassword} type="checkbox" name="mostrarPassword" />
            <span className="mostrar-Contraseña">Mostrar contraseña</span>
          </label>
          <Button onClick={eliminarCuenta} variant="danger">Eliminar Cuenta</Button>
        </div>
      </section>
      <section className="Icono-Nombre-Apellido-Perfil">
        <IconUserLoggin className='Icon-User-Loggin' />
        <h2 className='Nombre-Usuario-Logueado'>{data.nombre}</h2>
        <h2 className='Nombre-Usuario-Logueado'>{data.apellido}</h2>
      </section>
      <section className="tel-Email-Cp">
        <div className='text-Info-Container'>
          <h4>{param.tel}</h4>
          <span>Teléfono</span>
        </div>
        <div className='text-Info-Container'>
          <h4>{param.email}</h4>
          <span>Email</span>
        </div>
        <div className='text-Info-Container'>
          <h4>{param.cp}</h4>
          <span>Codigo Postal</span>
        </div>
      </section>
      <section className="btns-Usuarios">
        <div className='container-Eliminar-Cuenta' onClick={modelBorrarCuenta}>
          <Button className='btn-Perfil-Eliminar' variant="danger">Eliminar Cuenta</Button>{' '}
        </div>
        <div className='container-Cerrar-Actualizar'>
          <Button className='btns-Perfil-Crud' onClick={cerrarSesion} variant="warning">Cerrar Sesión</Button>{' '}
          <Button className='btns-Perfil-Crud' onClick={cerrarSesion} variant="primary">Actualizar datos</Button>{' '}
        </div>
      </section>
      <div ref={spinner} className='spinner-Login'>
        <Spinner style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} animation="grow" variant="danger" />
      </div>
    </div>
  )
}

export default UsuarioPerfil