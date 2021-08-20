import React, { useEffect, useState } from 'react'
import torta_De_Limon from '../../assets/torta de llimon.jpg'
import piononos from '../../assets/piononos.jpg'
import alfajores from '../../assets/alfajores.jpg'
import './Body-C-Postre.css'

const Estilos = {
    width:"400px", 
    height:"300px", 
    borderTopLeftRadius:"5%", 
    borderTopRightRadius:"5%", 
    borderBottomLeftRadius:"5%", 
    borderBottomRightRadius:"5%",
}

const BodyCarruselPostre = ({claseActiva}) =>{
    const [Carrusel, setCarrusel] = useState([torta_De_Limon])
    let activaP = claseActiva
    
        useEffect(() => { 
            const arregloImg = [torta_De_Limon,piononos,alfajores]
            let i = 0

            let contador = setInterval(() => {
                if(arregloImg.length-1 >= i){
                    i++
                    setCarrusel(arregloImg[i])
                    //console.log(i);
                }
                if(i > arregloImg.length-1){
                    i = 0
                    setCarrusel(arregloImg[i])
                }

            }, 5000);
            return () => clearInterval(contador)
        }, [claseActiva])

    return (
        <div className={`claseActivaP ${activaP}`} style={{paddingLeft:"6%"}}>
            <img style={Estilos} src={Carrusel} alt="Torta de Limón" />
        </div>
    )
}

export default BodyCarruselPostre
