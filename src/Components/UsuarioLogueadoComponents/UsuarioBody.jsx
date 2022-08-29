/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import UsuarioPerfil from './UsuarioPerfil';
import { Spinner } from "react-bootstrap";
import React from 'react';
import axios from 'axios';

const url = 'https://newbackend2.herokuapp.com/user_Data';

const UsuarioBody = () => {

    const usuarioEmail = localStorage.getItem("email")
    const [dataPerfil, setdataPerfil] = useState();

    useEffect(() => {
        const init = async () => {
            const dataInicial = await axios.post(url, { email: usuarioEmail })
            setdataPerfil(dataInicial.data)
        }
        init()
    }, [])

    return (
        <div>
            {
                dataPerfil
                    ? <UsuarioPerfil param={dataPerfil} />
                    : <div style={{ display: "flex", justifyContent: "center", paddingBottom: "4rem" }}>
                        <Spinner style={{ width: "5rem", height: "5rem", marginTop: "10%", marginBottom: "10%" }} animation="border" variant="warning" />
                    </div>
            }
        </div>
    )
}

export default UsuarioBody