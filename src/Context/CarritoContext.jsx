import { createContext, useState } from "react";

let arrC = []
const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [arregloUnico, setarregloUnico] = useState({})
    const [precioFinal, setprecioFinal] = useState(0)
    let precioContext = 0

    const enviandoPedido = (pedido) => {

        const listaPedido = pedido
        if (listaPedido.length > 0) {
            const arrCL = listaPedido[0]
            arrC.push(arrCL)
            setarregloUnico({ ...arregloUnico, ...arrC })
        }

        if (arregloUnico) {
            for (const arr in arregloUnico) {
                if (arregloUnico[arr] === undefined) {
                    delete arregloUnico[arr]
                    setarregloUnico({ ...arregloUnico, ...arregloUnico[arr] })
                }
            }
        }
    }


    const precioTotal = (precio) => {
        precioContext+=precio
        setprecioFinal(precioContext)
    }

    const pedidoFinal = () => {

    }

    const data = { enviandoPedido, precioTotal, pedidoFinal, arregloUnico, precioFinal }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
export { CarritoProvider };
export default CarritoContext