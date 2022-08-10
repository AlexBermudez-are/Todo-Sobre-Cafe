/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header/Header'
import BodyFooter from '../Components/HomeComponents/BodyFooter'
import BodyHome from '../Components/HomeComponents/BodyHome'
//Contiene los estilos de los archivos de la carpeta Header

const Home = () => {

    return (
        <>
            <Header />
            <BodyHome />
            <BodyFooter />
        </>
    )
}

export default Home
