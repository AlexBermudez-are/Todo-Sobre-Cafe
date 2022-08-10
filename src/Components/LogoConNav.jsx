import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/todo-sobre-café.png';

const LogoConNav = () => {

  const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')

  return (
    <div>
      <NavLink exact to={
        !SesionIniciadaLocalStorage
          ? '/'
          : `/user/${SesionIniciadaLocalStorage}`
      }>
        <img style={{ width: "300px", height: "300px" }} src={logo} alt="todo-sobre-cafe.png" />
      </NavLink>
    </div>
  );
};

export default LogoConNav;
