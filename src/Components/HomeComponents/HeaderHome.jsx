import InicioDeSesionHome from '../HomeComponents/InicioDeSesionHome'
import SesionIniciada from '../../assets/sesion-Iniciada.png'
import SesionContext from '../../Context/SesionContext'
import ContraseñaOlvidada from './ContraseñaOlvidada'
import Logo from '../../assets/todo-sobre-café.png'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CrearCuenta from './CrearCuenta'
import './HeaderHome.css'

const HeaderHome = () => {

    const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')
    const { SesionI } = useContext(SesionContext)
    
    const [contraseñaOlvidada, setcontraseñaOlvidada] = useState(false)
    const [crearCuenta, setcrearCuenta] = useState(false)
    const [loginUsuario, setloginUsuario] = useState(false)
    const [menuControll, setmenuControll] = useState(false)
    const menuH = useRef()
    const navUsuario = useRef()
    const bandera = useRef()
    const menuD = useRef()
    const ref = useRef()
    const nav = useRef()

    useEffect(() => {
        if (SesionI || SesionIniciadaLocalStorage) {
            ref.current.className = 'sesion-Iniciada-Home active'
            bandera.current.className = 'contenedor-Bandera-Home active'
        }
    }, [SesionI, SesionIniciadaLocalStorage])

    const menuDespegable = () => {
        if (!menuControll) {
            nav.current.className='NavLinks-Home active'
            menuD.current.className = 'hamburger active hamburger--squeeze is-active'
            navUsuario.current.className='UsuariosHome active'
            menuH.current.className='contenedor-Hamburguesa active'
        }
        if (menuControll) {
            nav.current.className='NavLinks-Home'
            menuD.current.className = 'hamburger hamburger--squeeze'
            navUsuario.current.className='UsuariosHome'
            menuH.current.className='contenedor-Hamburguesa'
        }
        setmenuControll(!menuControll)
    }

    return (
        <>
            <div className="Header-Home">
                <section className="logo-Home" style={{ paddingTop: "2%" }}>
                    <img src={Logo} alt="todo-sobre-café" className="imagen-Logo-Home" />
                </section>
                <button
                    ref={menuD}
                    onClick={menuDespegable}
                    className="hamburger hamburger--squeeze" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="contenedor-Hamburguesa" ref={menuH}>
                    <section className="NavLinks-Home" ref={nav}>
                        <NavLink className="boton-Nav-Left" exact to={"/menu"}><p style={{ margin: "0" }}>Menú del Día</p></NavLink>
                        <NavLink className="boton-Nav-Right" exact to={"/carta"}><p style={{ margin: "0" }}>Carta</p></NavLink>
                        <NavLink className="boton-Nav-Mid" exact to={"/contacto"}><p style={{ margin: "0" }}>Contactanos</p></NavLink>
                    </section>
                    <section className="UsuariosHome" ref={navUsuario}>
                        {
                            // Aqui siempre se va a validar el boton hasta que te loguees, hasta que quieras loguearte
                            // con el mismo btn
                            (SesionIniciadaLocalStorage || SesionI)
                                ?
                                <section style={{ width: "55%" }}>
                                    <div className="sesion-Iniciada-Home" ref={ref}>
                                        <div className="circulo-Blanco-Sesion-Home"></div>
                                        <img src={SesionIniciada} width="100px" alt="icono-inicio-sesion" />
                                    </div>
                                    <div className="contenedor-Bandera-Home" ref={bandera}>
                                        <div className="izquierda-Home"></div>
                                        <div className="derecha-Home"></div>
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

export default HeaderHome
