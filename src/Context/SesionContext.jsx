import { createContext, useState } from "react";

const SesionContext = createContext()

const SesionProvider = ({ children }) => {

    const [SesionI, setSesionI] = useState(false)

    const usuarioLogueado = () => {
        setSesionI(true)
    }

    const data = {
        SesionI,
        usuarioLogueado
    }
    return <SesionContext.Provider value={data}>{children}</SesionContext.Provider>
}

export { SesionProvider }
export default SesionContext