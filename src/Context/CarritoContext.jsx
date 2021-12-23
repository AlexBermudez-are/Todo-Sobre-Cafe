/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

let arrC = [] // Arreglo Clon Principal
const CarritoContext = createContext();
const CarritoProvider = ({ children }) => {

    //PrecioFinal es la suma del total de la compra

    const [arregloUnico, setarregloUnico] = useState([]) // Arreglo Principal
    const [precioFinal, setprecioFinal] = useState(0) // Precio total del carrito
    const [contadorProductos, setcontadorProductos] = useState(0) // Cantidad de productos en el carrito

    let precioContext = 0

    const enviandoPedido = (pedido) => {
        const listaPedido = pedido
        if (listaPedido.length > 0) {
            const arrCL = listaPedido[0] // Toma el pedido y crea una copia del pedido "arrC"
            arrC.push(arrCL)
            setarregloUnico(arrC) // añade el pedido al arreglo Principal
            setcontadorProductos(contadorProductos + 1) // Aumenta en 1 la cantidad de productos en el carrito
        }
    }


    const precioTotal = (precio) => { // Actualiza el precio final del carrito
        precioContext += precio
        setprecioFinal(precioContext)
    }

    const eliminarPedido = (el) => { // Elimina un producto del carrito

        let cantidad = el.cantidad || 1,
            precio = el.precio,
            precioTotal = precioFinal,
            id = el.idUnica,
            precioResultado = cantidad * precio // Multiplica por la cantidad de productos para generar un precio total
        precioTotal -= precioResultado // resta el precio total del proucto eliminado del precio total del carrito

        let newData = arregloUnico.filter((el) => { // filtra el arr del carrito y lo devuelve sin el producto a eliminar
            setcontadorProductos(contadorProductos - 1) // resta en 1 la cantidad de productos del carrito
            return el.idUnica !== id
        });

        const si = arrC.filter(el=>{ // elimina el elemento  del Arreglo Pricipal Clon "arrC"
            return el.idUnica !== id
        })

        arrC = si // devuelve el dato filtrado y lo setea en el arreglo Clon

        setprecioFinal(precioTotal) // Actualiza el precio total
        setarregloUnico(newData)
    }

    const eliminarUnidad = (el) => { // Elimina una unidad de un producto del carrito
        for (let index = 0; index < arregloUnico.length; index++) {
            if (arregloUnico[index].idUnica === el.idUnica) { // Recorre cada elemento del arreglo Principal
                const { cantidad } = arregloUnico[index]
                arregloUnico[index].cantidad = cantidad - 1
            }
        }
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito -= el.precio
        setprecioFinal(precioProducto) // devuelve el precioFinal con el valor de la unidad restada
    }

    const añadirUnidad = (el) => { // Agrega una unidad de un producto del carrito
        for (let index = 0; index < arregloUnico.length; index++) {
            if (arregloUnico[index].idUnica === el.idUnica) { // Recorre cada elemento del arreglo Principal
                const { cantidad } = arregloUnico[index]
                arregloUnico[index].cantidad = cantidad + 1
            }
        }
        let precioCarrito = precioFinal
        let precioProducto = precioCarrito += el.precio
        setprecioFinal(precioProducto) // devuelve el precioFinal con el valor de la unidad añadida
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