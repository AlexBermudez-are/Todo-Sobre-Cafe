import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './ContraseñaOlvidada.css'
import SesionContext from '../../Context/SesionContext'
import { useContext } from 'react'

const initialState = {
    email: ''
}

const ContraseñaOlvidada = () => {
    const { contraseñaOlvidadaF } = useContext(SesionContext)
    const [Contraseña, setContraseña] = useState(initialState)
    const [datosUsuarios, setdatosUsuarios] = useState([])
    const contraseña = useRef()
    let url = 'http://localhost:3005/usuarios'

    const cerrarDiv = (e) => {
        e.preventDefault();
        contraseñaOlvidadaF()
    }

    const formContraseña = (e) => {
        setContraseña({
            ...Contraseña,
            [e.target.name]: e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault();
        if (datosUsuarios.length === 0) {
            contraseña.current.className = 'label-Contraseña-Olvidada active'
        } else {
            for (let index = 0; index < datosUsuarios.length; index++) {
                const element = datosUsuarios[index];
                if (element.email === datosUsuarios.email) {

                    return
                } else {
                    contraseña.current.className = 'label-Contraseña-Olvidada active'
                }
            }
        }
    }

    useEffect(() => {
        const si = async () => {
            const datosUsuarios = await axios.get(url),
                resultado = await datosUsuarios.data
            setdatosUsuarios(resultado)
        }
        si()
    }, [url])

    return (
        <div className="padre-Contraseña">
            <form className="contraseña-Div-Padre" onSubmit={enviar}>
                <section className="seccion-Olvidaste-Contraseña">
                    <h2 style={{ margin: "2%" }}>¿Olvidaste tu contraseña?</h2>
                    <button className="btn-Olvidaste-Contraseña" type="button" onClick={cerrarDiv}>X</button>
                </section>
                <section className="hijo-div-Contraseña">
                    <p style={{ margin: "0", marginLeft: "2%" }}>Ingresa tu Email y te enviaremos un mensaje para restaurar tu contraseña</p>
                    <input
                        onChange={formContraseña}
                        value={Contraseña.email}
                        className="input-olvidaste-Contraseña"
                        type="email"
                        name="email"
                        placeholder="Ejemplo@gmail.com"
                        required
                    />
                    <section className='label-Contraseña-Olvidada' ref={contraseña}>
                        <p style={{
                            margin: "0",
                            paddingLeft: "1%",
                            paddingBottom: "3%"
                        }}>El email ingresado no coincide con ninguna cuenta registrada</p>
                    </section>
                    <section className="enviar-Contraseña-O">
                        <button className="submit-Contraseña-O">Enviar</button>
                    </section>
                </section>
            </form>
        </div>
    )
}

export default ContraseñaOlvidada
