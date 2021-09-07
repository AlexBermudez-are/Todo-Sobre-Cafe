import React, { useEffect, useState } from 'react'
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

const BodyCarruselPostre = ({ claseActiva }) => {
    const [Carrusel, setCarrusel] = useState([torta_De_Limon])

    useEffect(() => {
        const arregloImg = [alfajores, piononos, torta_De_Limon];
        let i = 0;

        let contador = setInterval(() => {
            if (arregloImg.length - 1 > i) {
                setCarrusel(arregloImg[i]);
                i++;
            } else {
                setCarrusel(arregloImg[i]);
                i = 0;
            }
        }, 4000);

        return () => {
            return clearInterval(contador)
        };
    }, [claseActiva]);

    return (
        <div className={`claseActivaP ${claseActiva}`} style={{ paddingLeft: "6%" }}>
            <img style={Estilos} src={Carrusel} alt="Torta de Limón" />
        </div>
    )
}

export default BodyCarruselPostre
