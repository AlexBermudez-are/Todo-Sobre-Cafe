/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import iconoB from '../../assets/basura.png'
import './CarritoProductos.css'

const CarritoProductos = ({
    el,
    eliminarPedido,
    eliminarUnidad,
    añadirUnidad
}) => {

    const [state, setstate] = useState(0);

    const restar = () => {
        if (state > 1) {
            setstate(state - 1)
            eliminarUnidad(el)
        }
    }

    const sumar = () => {
        if (state < 5) {
            setstate(state + 1)
            añadirUnidad(el)
        }
    }
    const eliminar = () => {
        eliminarPedido(el)
    }


    useEffect(() => {
        const cantidad = el.cantidad
        setstate(cantidad)
    }, [el])

    return (
        <div className="Padre-Carrito-Lista">
            <section className="info-P">
                <img src={el.img} alt={el.nombre} width="50%" height="140px" />
                <h2>{el.nombre}</h2>
            </section>
            <section className="precio-P">
                <h4>{el.precio}</h4>
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
                    <img src={iconoB} alt="Icono Basura" />
                </button>
            </section>
        </div>
    )
}

export default CarritoProductos
