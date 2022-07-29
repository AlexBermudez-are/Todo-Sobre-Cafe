/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'

const NavLinks = ({el}) => {
    const location = useLocation()
    const BtnHover = useRef();

    useEffect(() => {
        if(location.pathname === el.path){
            BtnHover.current.className='btns-Navs active'
        }
    }, [])

    return (
        <>
            <Link to={el.path} className={"btns-Navs"} ref={BtnHover}>
                <p style={{ margin: "0" }}>
                    {el.name}
                </p>
            </Link>
        </>
    )
}

export default NavLinks
