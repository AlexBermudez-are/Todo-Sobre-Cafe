/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import torta_De_Limon from '../../assets/torta de llimon.jpg'
import piononos from '../../assets/piononos.jpg'
import alfajores from '../../assets/alfajores.jpg'
import './Body-C-Postre.css'

const Estilos = {
    width: "90%",
    height: "260px",
    borderTopLeftRadius: "5%",
    borderTopRightRadius: "5%",
    borderBottomLeftRadius: "5%",
    borderBottomRightRadius: "5%",
}

const BodyCarruselPostre = () => {

    const imagenRef = useRef()
    const ref = useRef()
    const [Carrusel, setCarrusel] = useState([torta_De_Limon])
    let contador
    let ClearTimer

    const temporizador = () => {
        const arregloImg = [alfajores, piononos, torta_De_Limon];
        let i = 0;

        contador = setInterval(() => {
            if (arregloImg.length - 1 > i) {
                imagenRef.current.className = 'claseActivaP'
                ClearTimer = setTimeout(() => {
                    imagenRef.current.className = 'claseActivaP active'
                    setCarrusel(arregloImg[i]);
                }, 1000);
                setCarrusel(arregloImg[i]);
                i++;
            } else {
                imagenRef.current.className = 'claseActivaP'
                ClearTimer = setTimeout(() => {
                    imagenRef.current.className = 'claseActivaP active'
                    setCarrusel(arregloImg[i]);
                }, 1000);
                i = 0;
            }
        }, 4000);
        ref.current.className = 'claseActivaP div'
    }

    useEffect(() => {
        temporizador()
        return () => {
            return [clearInterval(contador),clearTimeout(ClearTimer)]
        };
    }, []);

    return (
        <div className={`claseActivaP`} ref={ref}>
            <img
                ref={imagenRef}
                style={Estilos}
                src={Carrusel}
                alt="Torta de Limón"
            />
        </div>
    )
}

export default BodyCarruselPostre
