/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Components/Header/Header'
import BodyFooter from '../Components/HomeComponents/BodyFooter'
import BodyHome from '../Components/HomeComponents/BodyHome'
import HeaderHome from '../Components/HomeComponents/HeaderHome' // <== No borrar!
//Contiene los estilos de los archivos de la carpeta Header

const Home = () => {
    return (
        <>
            <Header/>
            <BodyHome/>
            <BodyFooter/>
        </>
    )
}

export default Home
