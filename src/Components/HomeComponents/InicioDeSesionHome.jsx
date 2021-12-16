import React, { useRef, useState, useEffect, useContext } from 'react'
import axios from "axios";
import './InicioDeSesion.css'
import SesionContext from '../../Context/SesionContext';

let initialState = {
    email: "",
    contraseña: "",
}

const InicioDeSesionHome = ({ setloginUsuario, setcrearCuenta, setcontraseñaOlvidada }) => {

    const { usuarioLogueado } = useContext(SesionContext)
    const [checked, setchecked] = useState(false)
    const [valueForm, setvalueForm] = useState(initialState)
    const [validadorUsuario, setvalidadorUsuario] = useState([])

    const logFail = useRef(),
        failLogueo = useRef()

    let url = 'http://localhost:3005/usuarios'

    useEffect(() => {
        const Usuarios = async () => {
            const datosUsuarios = await axios.get(url),
                usuariosData = await datosUsuarios.data
            setvalidadorUsuario(usuariosData)
        }
        Usuarios()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const validarusuario = (e) => {
        e.preventDefault();

        if (validadorUsuario.length === 0) {
            logFail.current.className = 'sesion-Fallida-E active'
            failLogueo.current.className = 'input-Usuario-Contenedor active'
        } else {
            for (let i = 0; i < validadorUsuario.length; i++) {
                const element = validadorUsuario[i];
                if (element.email === valueForm.email && element.contraseña === valueForm.contraseña) {
                    setloginUsuario(false)
                    localStorage.setItem('Usuario', true)
                    return usuarioLogueado()
                } else {
                    logFail.current.className = 'sesion-Fallida-E active'
                    failLogueo.current.className = 'input-Usuario-Contenedor active'
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

    const crearCuenta = () => {
        setloginUsuario(false)
        setcrearCuenta(true)
    }
    const olvideContraseña = () => {
        setloginUsuario(false)
        setcontraseñaOlvidada(true)
    }

    const cerrar = (e) => {
        setloginUsuario(false)
    }

    return (
        <div className="input-Usuario-Padre" onClick={cerrar}>
            <form className="input-Usuario-Contenedor"
                ref={failLogueo}
                onClick={e => { e.stopPropagation() }}
                onSubmit={validarusuario}>
                <div className="titulo-Sesion">
                    <h1 className='inicia-Sesion-Home'>Inicia Sesión</h1>
                    <button
                        className="btn-Usuario-X"
                        onClick={cerrar}
                    >x</button>
                </div>
                <div className="inputs-Sesion">
                    <label htmlFor="email">
                        <p>Email:</p>
                        <input
                            placeholder="Ejemplo@gmail.com..."
                            type="email"
                            name="email"
                            className="input-Email"
                            onChange={actualizarDatos}
                            value={valueForm.email}
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                            required
                        />
                    </label>
                    <label htmlFor="contraseña">
                        <p>Contraseña:</p>
                        <input
                            placeholder="contraseña..."
                            type="password"
                            name="contraseña"
                            className="input-Contraseña"
                            onChange={actualizarDatos}
                            value={valueForm.contraseña}
                            required
                        />
                    </label>
                    <span className="sesion-Fallida-E" ref={logFail}>El correo o la contraseña ingreasada no son correctos, verifica los datos</span>
                </div>
                <label htmlFor="autorizar" className="inputs-Sesion-A">
                    <input
                        type="checkbox"
                        onChange={actualizarDatos}
                        name="autorizar"
                        required
                        style={{ marginTop: "5%" }}
                    />
                    <p style={{ margin: "14px 5px" }}>Recordarme en este dispositivo</p>
                </label>
                <button type="submit" className="ingresar-Login-Usuario">Ingresar</button>
                <div className="extra-Login">
                    <button className="btn-Extra" type="button" onClick={crearCuenta}>Crear Cuenta</button>
                    <button className="btn-Extra" type="button" onClick={olvideContraseña}>¿Olvidaste tu contraseña? </button>
                </div>
            </form>
        </div>
    )
}

export default InicioDeSesionHome
