import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/todo-sobre-café.png';

const LogoConNav = ({ widthUser, heightUser }) => {

  const SesionIniciadaLocalStorage = localStorage.getItem('Usuario')

  return (
    <div>
      <NavLink exact to={
        !SesionIniciadaLocalStorage
          ? '/'
          : `/user/${SesionIniciadaLocalStorage}`
      }>
        <img style={{
          width: widthUser && window.screen.availWidth <= 425 ? widthUser : "300px",
          height: heightUser && window.screen.availWidth <= 425 ? heightUser : "300px"
        }}
          src={logo}
          alt="todo-sobre-cafe.png" />
      </NavLink>
    </div>
  );
};

export default LogoConNav;
