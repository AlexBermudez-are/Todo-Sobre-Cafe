import React, { useContext } from 'react'
import CarritoProductos from './CarritoProductos'
import CarritoContext from '../../Context/CarritoContext'

const CarritoBody = () => {

    const { arregloUnico, precioTotal, precioFinal } = useContext(CarritoContext);
    const arregloV = [];

    const listaProductos = arregloUnico;
    if (listaProductos) {
        for (const key in listaProductos) {
            arregloV.push(listaProductos[key])
        }
    }

    return (
        <div style={{ paddingBottom: "5%" }}>
            <div style={{ borderTop: "1px solid red", width: "80%", margin: "auto" }}></div>
            <section style={{
                backgroundColor: "rgb(207, 199, 199)",
                display: "flex",
                fontSize: "1.4rem",
                width: "60%",
                margin: "auto",
                marginTop: "4%",
                height: "50px",
                alignItems: "center"
            }}>
                <div style={{ width: "40%", paddingLeft: "5%" }}>Pedido</div>
                <div style={{ width: "25%", textAlign: "center" }}>Precio</div>
                <div style={{ width: "15%", textAlign: "center" }}>Cantidad</div>
            </section>
            <section style={{ paddingBottom: "5%" }}>
                {
                    arregloV ?
                        arregloV.map((el, index) => {
                            return <CarritoProductos
                                el={el} key={index}
                                precioTotal={precioTotal}
                            />
                        }) : false
                }
            </section>
            <section className="precio-Total-Carrito">
                <div className="contenedor-Finalizar-Pedido">
                    <section className="opciones-Pedido">
                        <div>
                            <p>Total:</p>
                        </div>
                        <div className="precio-Carrito-F">${precioFinal}</div>
                    </section>
                </div>
                <div className="boton-Finalizar-Compra">
                    <button className="button-Carrito-F">Finalizar Compra</button>
                </div>
            </section>
            <div style={{ borderTop: "1px solid red", width: "80%", margin: "auto", marginTop:"5%" }}></div>
        </div>
    )
}

export default CarritoBody
