import React, { useRef, useState, useEffect } from 'react'
import axios from "axios";
import './InicioDeSesion.css'

let initialState = {
    email: "",
    contraseña: "",
}

const InicioDeSesionHome = ({ setloginUsuario, setcrearCuenta }) => {
    const [checked, setchecked] = useState(false)
    const [valueForm, setvalueForm] = useState(initialState)
    const [validadorUsuario, setvalidadorUsuario] = useState([])
    const logFailEmail = useRef(),
        logFailPassword = useRef()
    let url = 'http://localhost:3005/usuarios'

    useEffect(() => {
        const Usuarios = async () => {
            const datosUsuarios = await axios.get(url),
                usuariosData = await datosUsuarios.data
            setvalidadorUsuario(usuariosData)
            console.log(validadorUsuario);
        }
        Usuarios()
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const validarusuario = (e) => {
        e.preventDefault();
        const validarDatosU = validadorUsuario.filter(el=>{
            if(el.email === valueForm.email){
                logFailEmail.current.className = "sesion-Fallida-E"
                console.log("si");
            }else{
                logFailEmail.current.className = "sesion-Fallida-E active"
                console.log("no");
            }
            if(el.contraseña === valueForm.contraseña){
                logFailPassword.current.className = "sesion-Fallida-E"
                console.log("si");
            }else{
                logFailPassword.current.className = "sesion-Fallida-E active"
                console.log("no");
            }
            return true
        })
        console.log(validarDatosU);
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

    const cerrar = (e) => {
        setloginUsuario(false)
    }

    return (
        <div className="input-Usuario-Padre" onClick={cerrar}>
            <form className="input-Usuario-Contenedor"
                onClick={e => { e.stopPropagation() }}
                onSubmit={validarusuario}>
                <div className="titulo-Sesion">
                    <h1 style={{ fontWeight: "100" }}>Inicia Sesión</h1>
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
                        <span className="sesion-Fallida-E" ref={logFailEmail}>El email no coincide con ninguna cuenta</span>
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
                        <span className="sesion-Fallida-P" ref={logFailPassword}>La contraseña es incorrecta</span>
                    </label>
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
                    <button className="btn-Extra" onClick={crearCuenta}>Crear Cuenta</button>
                    <button className="btn-Extra">¿Olvidaste tu contraseña? </button>
                </div>
            </form>
        </div>
    )
}

export default InicioDeSesionHome
