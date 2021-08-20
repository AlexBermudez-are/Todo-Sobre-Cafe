import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/todo-sobre-café.png'
import './HeaderHome.css'

const HeaderHome = () => {
    return (
        <>
            <div className="Header-Home">
                <section className="logo-Home" style={{paddingTop:"2%"}}>
                    <img src={Logo} alt="todo-sobre-café" width="300px" height="300px" />
                </section>
                <section className="NavLinks-Home">
                    <NavLink className="boton-Nav-Left" exact to={"/menu"}><p>Menú del Día</p></NavLink>
                    <NavLink className="boton-Nav-Right" exact to={"/carta"}><p>Carta</p></NavLink>
                    <NavLink className="boton-Nav-Mid" exact to={"/contacto"}><p>Contactanos</p></NavLink>
                    <NavLink className="boton-Nav-Mid" exact to={"/reservaciones"}><p>Reservaciones</p></NavLink>
                </section>
                <section className="UsuariosHome">
                    <NavLink className="boton-Nav-Usuario" to={"/usuario"}><p>Inicia Sesión</p></NavLink>
                </section>
            </div>
        </>
    )
}

export default HeaderHome
