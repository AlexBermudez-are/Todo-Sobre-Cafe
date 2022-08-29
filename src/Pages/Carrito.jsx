import React, { useEffect } from 'react'
import CarritoBody from '../Components/CarritoComponents/CarritoBody'
import CarritoHeaders from '../Components/CarritoComponents/CarritoHeaders'
import BodyFooter from '../Components/HomeComponents/BodyFooter'

const Carrito = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <CarritoHeaders />
            <CarritoBody />
            <BodyFooter />
        </div>
    )
}

export default Carrito
