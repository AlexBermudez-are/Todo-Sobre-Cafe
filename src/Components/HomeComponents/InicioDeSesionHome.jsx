/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useContext, useEffect } from 'react'
import axios from "axios";
import './InicioDeSesion.css'
import SesionContext from '../../Context/SesionContext';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

let initialState = {
    email: "",
    password: "",
}

const InicioDeSesionHome = () => {

    const {
        SesionI,
        cerrarMenuLoginF,
        crearCuentaF,
        contraseñaOlvidadaF,
        usuarioLogueado,
    } = useContext(SesionContext)
    const [checked, setchecked] = useState(false)
    const [valueForm, setvalueForm] = useState(initialState)
    const history = useHistory()
    const logFail = useRef(),
        failLogueo = useRef(),
        spinner = useRef();

    let url = 'https://newbackend2.herokuapp.com/login';


    useEffect(() => {

        if (SesionI) history.push(`/user/${SesionI}`)

    }, [SesionI])


    const validarusuario = async (e) => {
        e.preventDefault();

        try {
            
            spinner.current.className = 'spinner-Login active'
            await axios.post(url, valueForm).then(el => {
                usuarioLogueado(el.data.jwt)
                localStorage.setItem("email", valueForm.email)
                spinner.current.className = 'spinner-Login'
                setTimeout(() => {
                    cerrarMenuLoginF()
                }, 300);
            })

        } catch (error) {
            logFail.current.className = 'sesion-Fallida-E active'
            failLogueo.current.className = 'input-Usuario-Contenedor active'
            setTimeout(() => {
                logFail.current.className = 'sesion-Fallida-E'
                failLogueo.current.className = 'input-Usuario-Contenedor'
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
        <div className="input-Usuario-Padre" onClick={cerrarMenuLoginF}>
            <form className="input-Usuario-Contenedor"
                ref={failLogueo}
                onClick={e => { e.stopPropagation() }}
                onSubmit={validarusuario}>
                <div className="titulo-Sesion">
                    <h1 className='inicia-Sesion-Home'>Inicia Sesión</h1>
                    <button
                        className="btn-Usuario-X"
                        onClick={cerrarMenuLoginF}
                    >
                        <p className='btn-x-Close'>x</p>
                    </button>
                </div>
                <div className="inputs-Sesion">
                    <label htmlFor="email">
                        <p>Email:</p>
                        <input
                            autoComplete='off'
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
                    <label htmlFor="password">
                        <p>Contraseña:</p>
                        <input
                            placeholder="contraseña..."
                            type="password"
                            name="password"
                            className="input-Contraseña"
                            onChange={actualizarDatos}
                            value={valueForm.password}
                            required
                        />
                    </label>
                    <span className="sesion-Fallida-E" ref={logFail}>El correo o la contraseña son incorrectos</span>
                </div>
                <label htmlFor="autorizar" className="inputs-Sesion-A">
                    <input
                        type="checkbox"
                        onChange={actualizarDatos}
                        name="autorizar"
                        required
                    />
                    <p style={{ margin: "14px 5px" }}>Recordarme en este dispositivo</p>
                </label>
                <button type="submit" className="ingresar-Login-Usuario">Ingresar</button>
                <div className="extra-Login">
                    <button className="btn-Extra" type="button" onClick={crearCuentaF}>Crear Cuenta</button>
                    <button className="btn-Extra" type="button" onClick={contraseñaOlvidadaF}>¿Olvidaste tu contraseña? </button>
                </div>
            </form>
            <div ref={spinner} className='spinner-Login'>
                <Spinner style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} animation="grow" variant="danger" />
            </div>
        </div>
    )
}

export default InicioDeSesionHome
