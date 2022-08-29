/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react'
import InicioDeSesionHome from '../HomeComponents/InicioDeSesionHome'
import ContraseñaOlvidada from '../HomeComponents/ContraseñaOlvidada'
import carritoVector from '../../assets/carrito-transparente.png'
import SesionIniciada from '../../assets/sesion-Iniciada.png'
import CarritoContext from '../../Context/CarritoContext'
import CrearCuenta from '../HomeComponents/CrearCuenta'
import SesionContext from '../../Context/SesionContext'
import Logo from '../../assets/todo-sobre-café.png'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import './Header.css'

const HeaderYCarrito = () => {
    const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')
    const {
        contraseñaOlvidada,//
        setcontraseñaOlvidada,// contraseñaOlvidada y setContraseñaOlvidada
        crearCuenta,
        loginUsuario,
        SesionI,
        setloginUsuario,
        setcrearCuenta
    } = useContext(SesionContext)
    const { contadorProductos } = useContext(CarritoContext)
    const [menuControll, setmenuControll] = useState(false)
    const refHamburguesa = useRef()
    const navUsuario = useRef()
    const bandera = useRef()
    const refDespegable = useRef()
    const refInicioSesion = useRef()
    const navLinks = useRef()
    const Carrito = useRef()
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

    useEffect(() => {
        if (SesionI || SesionIniciadaLocalStorage) {
            refInicioSesion.current.className = 'sesion-Iniciada-Header active'
            bandera.current.className = 'contenedor-Bandera-Header active'
        }
    }, [SesionI, SesionIniciadaLocalStorage])

    const menuDespegable = () => {
        if (!menuControll) {
            navLinks.current.className = 'NavLinks-Home-2 active'
            refDespegable.current.className = 'hamburger active hamburger--squeeze is-active'
            navUsuario.current.className = 'UsuariosHome active'
            refHamburguesa.current.className = 'contenedor-Hamburguesa active'
            Carrito.current.className = 'carrito-De-Compras active'
            icono.current.className = 'logo-Home-Hamburguer activate'
            icono1.current.className = 'logo-Home activate'
        }
        if (menuControll) {
            navLinks.current.className = 'NavLinks-Home-2'
            refDespegable.current.className = 'hamburger hamburger--squeeze'
            navUsuario.current.className = 'UsuariosHome'
            refHamburguesa.current.className = 'contenedor-Hamburguesa'
            Carrito.current.className = 'carrito-De-Compras'
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
                    <section className="NavLinks-Home-2" ref={navLinks}>
                        <div className="carrito-De-Compras" ref={Carrito}>
                            <NavLink exact to={!SesionIniciadaLocalStorage ? '/carrito' : `/carrito/${SesionIniciadaLocalStorage}`} className="navLink-Carrito">
                                <div className="btn-Carrito-Header">
                                    <p>{contadorProductos}</p>
                                </div>
                                <h2>Carrito: </h2>
                                <img width="75px" height="60px" src={carritoVector} alt="carrito-de-compras" />
                            </NavLink>
                        </div>
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
                            // Aqui siempre se va a validar el boton hasta que te loguees, hasta que quieras loguearte
                            // con el mismo btn
                            (SesionIniciadaLocalStorage || SesionI)
                                ?
                                <section className='bandera-Login'>
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
                    // Esto se visualiza de primera al presionar el btn de arriba
                    loginUsuario
                        ? <InicioDeSesionHome
                            setloginUsuario={setloginUsuario}
                            setcrearCuenta={setcrearCuenta}
                            setcontraseñaOlvidada={setcontraseñaOlvidada}
                        />
                        : false
                }
                {/* loginUsuario puede cambiar la visualización de aquí */}
                {
                    contraseñaOlvidada
                        ? <ContraseñaOlvidada setcontraseñaOlvidada={setcontraseñaOlvidada} />
                        : false

                }
                {/* loginUsuario puede cambiar la visualización de aquí */}
                {
                    crearCuenta
                        ? <CrearCuenta
                            crearCuenta={crearCuenta}
                            setcrearCuenta={setcrearCuenta} />
                        : false
                }
            </div>
        </>
    )
}

export default HeaderYCarrito
