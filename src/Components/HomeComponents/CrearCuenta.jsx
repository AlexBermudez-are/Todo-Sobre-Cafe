import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { helpHttp } from '../../Helpers/helpHttp'
import FormEnviado from '../ContactoComponents/FormEnviado'
import './CrearCuenta.css'


const CrearCuenta = ({ setcrearCuenta }) => {
    let initialState = {
        nombre: "",
        contraseña: "",
        email: "",
        telefono: "",
        apellido: "",
        direccion: "",
        id: ""
    }

    const [formOK, setformOK] = useState(false);
    const [checked, setchecked] = useState(false)
    const [valueForm, setvalueForm] = useState(initialState)
    const [datos, setdatos] = useState([])
    const ref = useRef()
    const refFormWrong = useRef();

    const url = 'http://localhost:3005/usuarios'
    const help = helpHttp()

    useEffect(() => {
        let contador
        if (formOK === true) {
            contador = setTimeout(() => {
                setformOK(!formOK)
                setcrearCuenta(false)
            }, 4000);
        }

        const datos = async () => {
            const datos = await axios.get(url),
                datosResultados = await datos.data
            setdatos(datosResultados)
            console.log(datos);
        }
        datos()

        return () => {
            clearTimeout(contador)
        }
    }, [formOK, setcrearCuenta])

    const validarusuario = async (e) => {
        e.preventDefault();
        if (datos.length === 0) {
            help.post(url, {
                body: valueForm,
                headers: { "content-type": "application/json" },
            })
            setTimeout(() => {
                setformOK(true)
            }, 1000)
        } else {
            for (let i = 0; i < datos.length; i++) {
                const element = datos[i];
                if (element.email === valueForm.email) {
                    refFormWrong.current.className = 'input-C-Usuario-Contenedor active'
                    return ref.current.className = 'span-Error-Crear-C active'
                } else {
                    help.post(url, {
                        body: valueForm,
                        headers: { "content-type": "application/json" },
                    }).then(res => {
                        setTimeout(() => {
                            setformOK(true)
                        }, 1000)
                        console.log(res)
                    }
                    )
                }
            }
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
        <div className="input-C-Usuario-Padre" onClick={e => { setcrearCuenta(false) }}>
            <form className="input-C-Usuario-Contenedor"
                onClick={e => { e.stopPropagation() }}
                onSubmit={validarusuario}
                ref={refFormWrong}
            >
                {
                    formOK
                        ? <FormEnviado />
                        : false
                }
                <div className="titulo-Sesion">
                    <h1 className='crear-Cuenta-Home'>Crear Cuenta</h1>
                    <button
                        className="btn-C-Usuario-X"
                        onClick={e => { setcrearCuenta(false) }}
                    >x</button>
                </div>
                <section className="crear-C-Inputs">
                    <div className="inputs-C-Sesion">
                        <label htmlFor="nombre">
                            <p style={{ margin: "0", color: "#495057" }}>Nombre:</p>
                            <input
                                placeholder="Nombre..."
                                type="text"
                                name="nombre"
                                className="input-C-nombre"
                                onChange={actualizarDatos}
                                value={valueForm.nombre}
                                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{10,20}$"
                                title="El nombre no puede contener menos de 10 y mas de 20 caracteres"
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
                                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                                required
                            />
                        </label>
                        <label htmlFor="telefono">
                            <p className='input-Telefono' style={{ margin: "0", color: "#495057" }}>Teléfono:</p>
                            <input
                                placeholder="Teléfono..."
                                type="tel"
                                name="telefono"
                                className="input-C-telefono"
                                onChange={actualizarDatos}
                                value={valueForm.telefono}
                                pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
                                title="El numero no puede exceder los 10 digitos"
                                required
                            />
                        </label>
                    </div>
                    <div className="inputs-C-Sesion">
                        <label htmlFor="apellido">
                            <p style={{ margin: "0", color: "#495057" }}>Apellido:</p>
                            <input
                                placeholder="Apellido..."
                                type="text"
                                name="apellido"
                                className="input-C-apellido"
                                onChange={actualizarDatos}
                                value={valueForm.apellido}
                                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{10,20}$"
                                title="El apellido no puede contener menos de 10 y mas de 20 caracteres"
                                required
                            />
                        </label>
                        <label htmlFor="contraseña">
                            <p style={{ margin: "0", color: "#495057" }}>Contraseña:</p>
                            <input
                                placeholder="Contraseña..."
                                type="password"
                                name="contraseña"
                                className="input-C-Contraseña"
                                onChange={actualizarDatos}
                                value={valueForm.contraseña}
                                pattern="(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                                title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
                                required
                            />
                        </label>
                        <label htmlFor="direccion">
                            <p style={{ margin: "0", color: "#495057" }}>Código Postal/Dirección:</p>
                            <input
                                placeholder="Direccion..."
                                type="text"
                                name="direccion"
                                className="input-direccion"
                                onChange={actualizarDatos}
                                value={valueForm.direccion}
                                pattern="^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]{10,25}$"
                                title="La direccion no puede contener menos de 10 y mas de 25 caracteres"
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
