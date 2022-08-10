import { createContext, useState } from "react";

const SesionContext = createContext()

const SesionProvider = ({ children }) => {

    const [SesionI, setSesionI] = useState('')
    const [contraseñaOlvidada, setcontraseñaOlvidada] = useState(false)
    const [crearCuenta, setcrearCuenta] = useState(false)
    const [loginUsuario, setloginUsuario] = useState(false)

    const usuarioLogueado = (state) => {
        setSesionI(state)
        localStorage.setItem("Usuario", state)
    }
    const cerrarMenuLoginF = () => {
        setloginUsuario(!loginUsuario)
        console.log("cerrar", loginUsuario);
    }
    const crearCuentaF = () => {
        setloginUsuario(false)
        setcrearCuenta(!crearCuenta)
        console.log("crearcuenta");
    }
    const contraseñaOlvidadaF = () => {
        setloginUsuario(false)
        setcontraseñaOlvidada(!contraseñaOlvidada)
        console.log("contraseña");
    }

    const data = {
        cerrarMenuLoginF,
        crearCuentaF,
        contraseñaOlvidadaF,
        contraseñaOlvidada,
        crearCuenta,
        loginUsuario,
        SesionI,
        setcontraseñaOlvidada,
        usuarioLogueado,
        setloginUsuario,
        setcrearCuenta
    }
    return <SesionContext.Provider value={data}>{children}</SesionContext.Provider>
}

export { SesionProvider }
export default SesionContext