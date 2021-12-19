import React, { useEffect, useRef } from 'react'
import up from '../assets/up.png'
import './EstilosPublicos.css'

const w = window


const BtnScrollUp = ({btn}) => {
    
    const refA = useRef()

    const btnA = () => {
        w.scrollTo({
            behavior: "smooth",
            top: 0
          })
    }

    useEffect(() => {
        btn ? refA.current.className="btn-Scroll-H active" : refA.current.className="btn-Scroll-H"
    }, [btn])

    return (
        <button className="btn-Scroll-H" onClick={btnA} ref={refA}>
            <img src={up} alt="flecha Up" width="100px" />
        </button>
    )
}

export default BtnScrollUp
