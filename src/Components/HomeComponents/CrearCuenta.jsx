/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { setTimeout } from 'timers'
import SesionContext from '../../Context/SesionContext'
import FormEnviado from '../ContactoComponents/FormEnviado'
import './CrearCuenta.css'


const CrearCuenta = () => {

    let initialState = {
        name: "",
        password: "",
        email: "",
        tel: "",
        surname: "",
        cp: "",
    }
    const { crearCuentaF } = useContext(SesionContext)
    const [valueForm, setvalueForm] = useState(initialState)
    const [checked, setchecked] = useState(false)
    const refFormWrong = useRef();
    const refCreateC = useRef()
    const ref = useRef()
    const url = 'https://newbackend2.herokuapp.com/register';

    const validarusuario = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, valueForm)
            refCreateC.current.className = 'cuentaCreada active'
            setTimeout(() => {
                refCreateC.current.className = 'cuentaCreada'
                setTimeout(() => {
                    crearCuentaF()
                }, 1000);
            }, 3000);
        } catch (res) {
            ref.current.className = 'span-Error-Crear-C active'
            refFormWrong.current.className = 'input-C-Usuario-Contenedor active'
            setTimeout(() => {
                ref.current.className = 'span-Error-Crear-C'
                refFormWrong.current.className = 'input-C-Usuario-Contenedor'
            }, 3000);
        }
    }

    const actualizarDatos = (e) => {
        e.target.name === "autorizar"
            ? setchecked(!checked)
            : setvalueForm({
                ...valueForm,
                [e.target.name]: e.target.value
            })
    }

    return (
        <div className="input-C-Usuario-Padre" onClick={crearCuentaF}>
            <form className="input-C-Usuario-Contenedor"
                onClick={e => { e.stopPropagation() }}
                onSubmit={validarusuario}
                ref={refFormWrong}
            >
                <div className="cuentaCreada" ref={refCreateC}>
                    <FormEnviado param={'Cuenta creada con exito :D'} />
                </div>
                <div className="titulo-Sesion">
                    <h1 className='crear-Cuenta-Home'>Crear Cuenta</h1>
                    <button
                        className="btn-C-Usuario-X"
                        onClick={crearCuentaF}
                    >x</button>
                </div>
                <section className="crear-C-Inputs">
                    <div className="inputs-C-Sesion">
                        <label htmlFor="name">
                            <p style={{ margin: "0", color: "#495057" }}>Nombre:</p>
                            <input
                                placeholder="Nombre..."
                                type="text"
                                name="name"
                                className="input-C-name"
                                onChange={actualizarDatos}
                                value={valueForm.name}
                                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,20}$"
                                title="El name no puede contener menos de 10 y mas de 20 caracteres"
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            <p style={{ margin: "0", color: "#495057" }}>Email:</p>
                            <input
                                placeholder="Ejemplo@gmail.com"
                                type="email"
                                name="email"
                                className="input-C-email"
                                onChange={actualizarDatos}
                                pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'
                                required
                            />
                        </label>
                        <label htmlFor="tel">
                            <p className='input-tel' style={{ margin: "0", color: "#495057" }}>Teléfono:</p>
                            <input
                                placeholder="Teléfono..."
                                type="tel"
                                name="tel"
                                className="input-C-tel"
                                onChange={actualizarDatos}
                                value={valueForm.tel}
                                pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
                                title="El numero no puede exceder los 10 digitos"
                                required
                            />
                        </label>
                    </div>
                    <div className="inputs-C-Sesion">
                        <label htmlFor="surname">
                            <p style={{ margin: "0", color: "#495057" }}>Apellido:</p>
                            <input
                                placeholder="Apellido..."
                                type="text"
                                name="surname"
                                className="input-C-surname"
                                onChange={actualizarDatos}
                                value={valueForm.surname}
                                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,20}$"
                                title="El surname no puede contener menos de 10 y mas de 20 caracteres"
                                required
                            />
                        </label>
                        <label htmlFor="password">
                            <p style={{ margin: "0", color: "#495057" }}>Contraseña:</p>
                            <input
                                placeholder="Contraseña..."
                                type="password"
                                name="password"
                                className="input-C-password"
                                onChange={actualizarDatos}
                                value={valueForm.password}
                                pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                                title="La password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
                                required
                            />
                        </label>
                        <label htmlFor="cp">
                            <p style={{ margin: "0", color: "#495057" }}>Código Postal</p>
                            <input
                                placeholder="código postal..."
                                type="text"
                                name="cp"
                                className="input-cp"
                                onChange={actualizarDatos}
                                value={valueForm.cp}
                                pattern="^[0-9]{4}$"
                                title="El codigo postal debe tener 4 numeros y no puede contener letras"
                                required
                            />
                        </label>
                    </div>
                </section>
                <span ref={ref} className="span-Error-Crear-C">El email ingresado ya esta en uso</span>
                <label htmlFor="autorizar" className="inputs-C-Sesion-A">
                    <input
                        type="checkbox"
                        onChange={actualizarDatos}
                        name="autorizar"
                        required
                    />
                    <p style={{ margin: "14px 5px" }}>He leido y acepto los</p>
                    <NavLink exact to="/privacidad" style={{ color: "blue" }}>Terminos y Condiciones de uso y las Politicas de Privacidad.</NavLink>
                </label>
                <button type="submit" className="crear-Usuario">Ingresar</button>
            </form>
        </div>
    )
}

export default CrearCuenta
