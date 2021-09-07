import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/todo-sobre-café.png'
import CrearCuenta from './CrearCuenta'
import InicioDeSesionHome from '../HomeComponents/InicioDeSesionHome'
import './HeaderHome.css'

const HeaderHome = () => {
    const [crearCuenta, setcrearCuenta] = useState(false)
    const [loginUsuario, setloginUsuario] = useState(false)
    return (
        <>
            <div className="Header-Home">
                <section className="logo-Home" style={{ paddingTop: "2%" }}>
                    <img src={Logo} alt="todo-sobre-café" width="250px" height="250px" />
                </section>
                <section className="NavLinks-Home">
                    <NavLink className="boton-Nav-Left" exact to={"/menu"}><p>Menú del Día</p></NavLink>
                    <NavLink className="boton-Nav-Right" exact to={"/carta"}><p>Carta</p></NavLink>
                    <NavLink className="boton-Nav-Mid" exact to={"/contacto"}><p>Contactanos</p></NavLink>
                </section>
                <section className="UsuariosHome">
                    <button className="boton-Nav-Usuario" onClick={e=>{setloginUsuario(true)}}>
                        <p style={{ margin: "0" }}>Inicia Sesión</p>
                    </button>
                </section>
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
            </div>
        </>
    )
}

export default HeaderHome
