/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react'
import SesionContext from '../../Context/SesionContext'
import Logo from '../../assets/todo-sobre-café.png'
import SesionIniciada from '../../assets/sesion-Iniciada.png'
import InicioDeSesionHome from '../HomeComponents/InicioDeSesionHome'
import ContraseñaOlvidada from '../HomeComponents/ContraseñaOlvidada'
import CrearCuenta from '../HomeComponents/CrearCuenta'
import './Header.css'
import '../HomeComponents/HeaderHome.css'
import NavLinks from './NavLinks'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')
    const {
        contraseñaOlvidada,
        crearCuenta,
        loginUsuario,
        SesionI,
        setloginUsuario,
    } = useContext(SesionContext)
    const [menuControll, setmenuControll] = useState(false)
    const refInicioSesion = useRef()
    const refHamburguesa = useRef()
    const refDespegable = useRef()
    const navUsuario = useRef()
    const navLinks = useRef()
    const bandera = useRef()
    const icono = useRef();
    const icono1 = useRef()

    const link = [
        {
            name: "Menu",
            path:
                !SesionIniciadaLocalStorage
                    ? "/menu"
                    : `/menu/${SesionIniciadaLocalStorage}`
        },
        {
            name: "Postres",
            path:
                !SesionIniciadaLocalStorage
                    ? "/postres"
                    : `/postres/${SesionIniciadaLocalStorage}`
        },
        {
            name: "Infusiones",
            path:
                !SesionIniciadaLocalStorage
                    ? "/infusiones"
                    : `/infusiones/${SesionIniciadaLocalStorage}`
        },
        {
            name: "Contacto",
            path:
                !SesionIniciadaLocalStorage
                    ? "/contacto"
                    : `/contacto/${SesionIniciadaLocalStorage}`
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => { // modifica la visualizacion con animaciones de la bandera al loggearse
        if (SesionI || SesionIniciadaLocalStorage) {
            refInicioSesion.current.className = 'sesion-Iniciada-Header active'
            bandera.current.className = 'contenedor-Bandera-Header active'
        }
    }, [SesionI, SesionIniciadaLocalStorage])

    const menuDespegable = () => { // Menu hamburguesa
        if (!menuControll) {
            navLinks.current.className = 'NavLinks-Home-1 active'
            refDespegable.current.className = 'hamburger active hamburger--squeeze is-active'
            navUsuario.current.className = 'UsuariosHome active'
            refHamburguesa.current.className = 'contenedor-Hamburguesa active'
            icono.current.className = 'logo-Home-Hamburguer activate'
            icono1.current.className = 'logo-Home activate'
        }
        if (menuControll) {
            navLinks.current.className = 'NavLinks-Home-1'
            refDespegable.current.className = 'hamburger hamburger--squeeze'
            navUsuario.current.className = 'UsuariosHome'
            refHamburguesa.current.className = 'contenedor-Hamburguesa'
            icono.current.className = 'logo-Home-Hamburguer'
            icono1.current.className = 'logo-Home'
        }
        setmenuControll(!menuControll)
    }

    return (
        <>
            <div className="Header-Home">
                <NavLink
                    to={
                        !SesionIniciadaLocalStorage
                            ? '/'
                            : `/user/${SesionIniciadaLocalStorage}`
                    }
                    className="logo-Home"
                    style={{ paddingTop: "2%" }}
                    ref={icono1}
                >
                    <img src={Logo} alt="todo-sobre-café" className="imagen-Logo-Home" />
                </NavLink>
                <button
                    ref={refDespegable}
                    onClick={menuDespegable}
                    className="hamburger hamburger--squeeze" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="contenedor-Hamburguesa-2" ref={refHamburguesa}>
                    <NavLink
                        to={
                            !SesionIniciadaLocalStorage
                                ? '/'
                                : `/user/${SesionIniciadaLocalStorage}`
                        }
                        className="logo-Home-Hamburguer"
                        style={{ paddingTop: "2%" }}
                        ref={icono}
                    >
                        <span className='logo-Home-cuadro-Hamburguer'></span>
                        <img src={Logo} alt="todo-sobre-café" className="imagen-Logo-Home-Hamburguer" />
                    </NavLink>
                    <section className="NavLinks-Home-1" ref={navLinks}>
                        {
                            link.map((el, index) => {
                                return (
                                    <NavLinks
                                        el={el}
                                        key={index}
                                        to={el.path}
                                    />
                                )
                            })
                        }
                    </section>
                    <section className="UsuariosHome" ref={navUsuario}>
                        {

                            //*********** Aqui siempre se va a validar el boton hasta que te loguees

                            (SesionIniciadaLocalStorage || SesionI)
                                ? <section className='bandera-Login'>
                                    <div className="sesion-Iniciada-Header" ref={refInicioSesion}>
                                        <NavLink to={`/perfil/user/${SesionIniciadaLocalStorage}`} className='btn-Log-Out'>
                                            <div className="circulo-Blanco-Sesion-Home"></div>
                                            <img src={SesionIniciada} className='vector-Usuario' alt="icono-inicio-sesion" />
                                        </NavLink>
                                    </div>
                                    <div className="contenedor-Bandera-Header" ref={bandera}>
                                        <div className="izquierda-Header"></div>
                                        <div className="derecha-Header"></div>
                                    </div>
                                </section>
                                // aquí cambio el estado de login para visualizar el LoginUsuario de abajo
                                : <button className="boton-Nav-Usuario" onClick={e => { setloginUsuario(true) }}>
                                    <p style={{ margin: "0" }}>Inicia Sesión</p>
                                </button>
                        }
                    </section>
                </div>
                {

                    //********* Esto se visualiza de primera al presionar el btn de arriba

                    loginUsuario
                        ? <InicioDeSesionHome />
                        : false
                }
                {/* loginUsuario puede cambiar la visualización de aquí */}
                {
                    contraseñaOlvidada
                        ? <ContraseñaOlvidada />
                        : false

                }
                {/* loginUsuario puede cambiar la visualización de aquí */}
                {
                    crearCuenta
                        ? <CrearCuenta />
                        : false
                }
            </div>
        </>
    )
}

export default Header
