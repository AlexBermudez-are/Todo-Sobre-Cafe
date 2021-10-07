import React, { useEffect, useState } from 'react'
import iconoB from '../../assets/basura.png'
import './CarritoProductos.css'

const CarritoProductos = ({ el, precioTotal, eliminarPedido, eliminarUnidad, añadirUnidad }) => {

    const [state, setstate] = useState();

    const restar = (el) => {
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
    const eliminar = (el) => {
        eliminarPedido(el,state)
    }


    useEffect(() => {
        let precioF = 0
        const cantidad = el.cantidad || 1,
            precio = el.precio;

        for (let index = 0; index < cantidad; index++) {
            precioF += precio
        }

        precioTotal(precioF)
        setstate(cantidad)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <button className="restar" onClick={() => { restar(el) }}>
                        <h1 style={{ margin: "0" }}>-</h1>
                    </button>
                    <h2 style={{ margin: "0" }}>{state}</h2>
                    <button className="sumar" onClick={sumar}>
                        <h1 style={{ margin: "0" }}>+</h1>
                    </button>
                </div>
            </section>
            <section style={{ width: "10%" }}>
                <button onClick={() => {
                    eliminar(el)
                }} style={{ backgroundColor: "white", border: "none", cursor: "pointer" }}>
                    <img src={iconoB} alt="Icono Basura" width="30px" height="30px" />
                </button>
            </section>
        </div>
    )
}

export default CarritoProductos
