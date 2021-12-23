/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import CarritoProductos from './CarritoProductos'
import CarritoContext from '../../Context/CarritoContext'
import { useEffect } from 'react';
import { useState } from 'react';
import './CarritoBody.css'


const CarritoBody = () => {

    const {
        arregloUnico,
        precioTotal,
        precioFinal,
        eliminarPedido,
        eliminarUnidad,
        añadirUnidad
    } = useContext(CarritoContext);

    const [arregloV, setArregloV] = useState([])
    const listaProductos = arregloUnico;

    useEffect(() => {
        const arr = [];
        for (let index = 0; index < listaProductos.length; index++) {
            arr.push(listaProductos[index])
        }
        setArregloV(arr)
    }, [precioFinal, arregloUnico])

    return (
        <div style={{ paddingBottom: "5%" }}>
            <div className='borde-Carrito-Top'></div>
            <section className='cabecera-Carrito'>
                <div className='pedido-Carrito'>Pedido</div>
                <div className='precio-Carrito'>Precio</div>
                <div className='cantidad-Carrito'>Cantidad</div>
            </section>
            <section style={{ paddingBottom: "5%" }}>
                {
                    (arregloV.length > 0)
                        ? arregloV.map((el, index) => {
                            return <CarritoProductos
                                el={el} key={index}
                                precioTotal={precioTotal}
                                eliminarPedido={eliminarPedido}
                                precioFinal={precioFinal}
                                eliminarUnidad={eliminarUnidad}
                                añadirUnidad={añadirUnidad}
                            />
                        })
                        : <div style={{
                            width: "100%",
                            textAlign: "center",
                            paddingTop: "5%",
                            color: "#5d5d5d",
                            fontSize: "1.5rem"
                        }}>
                            <p>Aún no haz agregador productos al carrito</p>
                        </div>
                }
            </section>
            <section className="precio-Total-Carrito">
                <div className="contenedor-Finalizar-Pedido">
                    <section className="opciones-Pedido">
                        <div className='total-Precio'>
                            <p style={{ margin: "0" }}>Total:</p>
                        </div>
                        <div className="precio-Carrito-F">
                            <p style={{ margin: "0" }}>${precioFinal}</p>
                        </div>
                    </section>
                </div>
                <div className="boton-Finalizar-Compra">
                    <button className="button-Carrito-F">Finalizar Compra</button>
                </div>
            </section>
            <div style={{ borderTop: "1px solid red", width: "80%", margin: "auto", marginTop: "5%" }}></div>
        </div>
    )
}

export default CarritoBody
