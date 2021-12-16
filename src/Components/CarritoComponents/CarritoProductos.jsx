/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import iconoB from '../../assets/basura.png'
import './CarritoProductos.css'

const CarritoProductos = ({
    el,
    precioTotal,
    eliminarPedido,
    eliminarUnidad,
    añadirUnidad, 
    update,
    setUpdate
}) => {

    const [state, setstate] = useState(0);

    const restar = () => {
        if (state > 1) {
            setstate(state - 1)
            eliminarUnidad(el, state)
            setUpdate(!update)
        }
    }

    const sumar = () => {
        if (state < 5) {
            setstate(state + 1)
            añadirUnidad(el, state)
            setUpdate(!update)
        }
    }
    const eliminar = () => {
        eliminarPedido(el, state)
        setUpdate(!update)
        console.log(el);
    }


    useEffect(() => {
        let precioF = 0
        const cantidad = el.cantidad || 1,
            precio = el.precio;

        for (let index = 0; index < cantidad; index++) {
            precioF += precio
        }

        precioTotal(precioF) //Suma el monto del producto a al monto del precio total
        setstate(cantidad)
    }, [])

    return (
        <div className="Padre-Carrito-Lista">
            <section className="info-P">
                <img src={el.img} alt={el.nombre} width="50%" height="140px" />
                <h2>{el.nombre}</h2>
            </section>
            <section className="precio-P">
                {el.precio}
            </section>
            <section className="ordenar-Pedido">
                <div className="ordenar-Pedido-Container">
                    <button className="restar" onClick={restar}>
                        <h1 style={{ margin: "0" }}>-</h1>
                    </button>
                    <h2 style={{ margin: "0" }}>{el.cantidad}</h2>
                    <button className="sumar" onClick={sumar}>
                        <h1 style={{ margin: "0" }}>+</h1>
                    </button>
                </div>
            </section>
            <section className='vector-Borrar-Producto'>
                <button onClick={eliminar} style={{ backgroundColor: "white", border: "none", cursor: "pointer" }}>
                    <img src={iconoB} alt="Icono Basura" width="30px" height="30px" />
                </button>
            </section>
        </div>
    )
}

export default CarritoProductos
