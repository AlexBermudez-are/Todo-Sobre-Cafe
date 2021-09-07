import React from 'react'
import CarritoBody from '../Components/CarritoComponents/CarritoBody'
import CarritoHeaders from '../Components/CarritoComponents/CarritoHeaders'
import BodyFooter from '../Components/HomeComponents/BodyFooter'

const Carrito = () => {
    return (
        <div>
            <CarritoHeaders/>
            <CarritoBody/>
            <BodyFooter/>
        </div>
    )
}

export default Carrito
