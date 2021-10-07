import { createContext, useState } from "react";

let arrC = []
const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [arregloUnico, setarregloUnico] = useState({})
    const [precioFinal, setprecioFinal] = useState(0)
    const [contadorProductos, setcontadorProductos] = useState(0)

    let precioContext = 0

    const enviandoPedido = (pedido) => {

        const listaPedido = pedido
        if (listaPedido.length > 0) {
            const arrCL = listaPedido[0]
            arrC.push(arrCL)
            setarregloUnico({ ...arregloUnico, ...arrC })
            setcontadorProductos(contadorProductos + 1)
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
        precioContext += precio
        setprecioFinal(precioContext)
    }

    const eliminarPedido = (el, state) => {
        arrC = []
        if (state > 1) {
            let cantidad = state || 1,
                precio = el.precio,
                precioTotal = precioFinal,
                precioResultado = cantidad * precio

            precioTotal -= precioResultado
            console.log(precioResultado, cantidad);
            setprecioFinal(precioTotal)
            for (const key in arregloUnico) {
                if (arregloUnico[key].nombre === el.nombre) {
                    delete arregloUnico[key]
                    setarregloUnico({ ...arregloUnico, ...arregloUnico[key] })
                }
            }
        }
        if (state === 1) {
            let cantidad = state,
                precio = el.precio,
                precioTotal = precioFinal,
                precioResultado = cantidad * precio
            console.log(precioResultado, cantidad);

            precioTotal -= precioResultado

            setprecioFinal(precioTotal)
            for (const key in arregloUnico) {
                if (arregloUnico[key].nombre === el.nombre) {
                    delete arregloUnico[key]
                    setarregloUnico({ ...arregloUnico, ...arregloUnico[key] })
                }
            }
        }
        setcontadorProductos(contadorProductos - 1)
    }

    const eliminarUnidad = (precio) => {
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito -= precio.precio
        setprecioFinal(precioProducto)
    }

    const añadirUnidad = (precio) => {
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito += precio.precio
        setprecioFinal(precioProducto)
    }

    const pedidoFinal = () => {

    }

    const data = {
        enviandoPedido,
        precioTotal,
        pedidoFinal,
        eliminarPedido,
        eliminarUnidad,
        añadirUnidad,
        arregloUnico,
        precioFinal,
        contadorProductos
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
export { CarritoProvider };
export default CarritoContext