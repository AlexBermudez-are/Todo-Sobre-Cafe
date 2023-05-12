import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import BtnScrollUp from '../BtnScrollUp';
import CartaInfusiones from './CartaInfusiones';
import json from '../../db.json'

const InfusionesBody = () => {

    const url = json,
        w = window;

    const [Infusiones, setInfusiones] = useState([]);
    const [Scroll, setScroll] = useState(false)
    const [btn, setbtn] = useState()


    useEffect(() => {
        const obtenerDatos = async () => {
            const datos = await url, //axios.get(url),
                res = await datos.carta,
                { infusiones } = await res;
                setInfusiones(infusiones);
        };
        obtenerDatos();
        setScroll(true)
        return () => {
            setScroll(false)
        }
    }, []);

    w.addEventListener("scroll", e => {
        let scrollUp = w.pageYOffset
        if (scrollUp > 1050 && Scroll === true) {
            setbtn(true)
        }
        if (scrollUp === 0) {
            setbtn(false)
        }
    })

    return (

        <>
            {
                Infusiones
                    ? <div>
                        <section className="Padre-I">
                            <section className="seleccion-I">
                                <h1 className="switch-I">Bebidas</h1>
                            </section>
                            <div className="infusiones">
                                {
                                    Infusiones.map((el) => {
                                        return <CartaInfusiones Infusiones={el} key={el.id} />;
                                    })}
                            </div>
                        </section>
                        {btn ? <BtnScrollUp btn={btn} /> : false}
                    </div>
                    : <div style={{ display: "flex", justifyContent: "center", paddingBottom: "4rem" }}>
                        <Spinner style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} animation="border" variant="warning" />
                    </div>
            }
        </>

    )
}

export default InfusionesBody
