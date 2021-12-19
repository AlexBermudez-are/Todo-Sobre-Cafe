/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createContext, useState } from "react";

let arrC = []
const CarritoContext = createContext();
const CarritoProvider = ({ children }) => {

    //PrecioFinal es la suma del total de la compra

    const [arregloUnico, setarregloUnico] = useState([])
    const [precioFinal, setprecioFinal] = useState(0)
    const [contadorProductos, setcontadorProductos] = useState(0)

    let precioContext = 0

    const enviandoPedido = (pedido) => {
        const listaPedido = pedido
        if (listaPedido.length > 0) {
            const arrCL = listaPedido[0]
            arrC.push(arrCL)
            setarregloUnico(arrC)
            setcontadorProductos(contadorProductos + 1)
        }
    }


    const precioTotal = (precio) => {
        precioContext += precio
        setprecioFinal(precioContext)
    }

    const eliminarPedido = (el, state) => {

        arrC = []

        let cantidad = state || 1,
            precio = el.precio,
            precioTotal = precioFinal,
            precioResultado = cantidad * precio
        precioTotal -= precioResultado


        setprecioFinal(precioTotal) // Actualiza el precio total
        const eliminarPedidoCompleto = arregloUnico.filter(nuevoArr => nuevoArr.id !== el.id)// Elimina el producto de arr principal
        setarregloUnico(eliminarPedidoCompleto) // Devuelve el arreglo con el producto eliminado
        setcontadorProductos(contadorProductos - 1) //Muestra el numero total de productos en el carrito
    }

    const eliminarUnidad = (el, state) => {
        const producto = {
            nombre: el.nombre,
            id: el.id,
            img: el.img,
            precio: el.precio,
            cantidad: state,
            carta: el.carta
        }
        producto.cantidad--
        for (let index = 0; index < arregloUnico.length; index++) {
            if (arregloUnico[index].id === el.id) {
                let arrCambiado = arregloUnico.splice(index, 1, producto) // Actualiza la cantidad del producto
            }
        }
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito -= el.precio
        setprecioFinal(precioProducto)
    }

    const añadirUnidad = (el, state) => {
        const producto = {
            nombre: el.nombre,
            id: el.id,
            img: el.img,
            precio: el.precio,
            cantidad: state,
            carta: el.carta
        }
        producto.cantidad++
        for (let index = 0; index < arregloUnico.length; index++) {
            if (arregloUnico[index].id === el.id) {
                let arrCambiado = arregloUnico.splice(index, 1, producto)// Actualiza la cantidad del producto
            }
        }
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito += el.precio
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