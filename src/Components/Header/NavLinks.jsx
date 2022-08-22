/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'

const NavLinks = ({ el }) => {
    const location = useLocation()
    const BtnHover = useRef();
    let locacion

    const [first, setfirst] = useState()

    useEffect(() => {
        locacion = location.pathname
        if (location.pathname === el.path) {
            BtnHover.current.className = 'btns-Navs active'
        }

        if (locacion.includes('postres') && window.screen.availWidth <= 650 && window.screen.availWidth >= 426) {
            return setfirst("30%")
        } else if (locacion.includes('postres') && window.screen.availWidth <= 425) {
            return setfirst("50%")
        } else if (locacion.includes('postres') && window.screen.availWidth > 650) {
            return setfirst("17%")
        } else {
            setfirst(false)
        }

        if (locacion.includes('infusiones') && window.screen.availWidth <= 650 && window.screen.availWidth >= 426) {
            return setfirst("30%")
        } else if (locacion.includes('infusiones') && window.screen.availWidth <= 425) {
            return setfirst("50%")
        } else if (locacion.includes('infusiones') && window.screen.availWidth > 650) {
            return setfirst("17%")
        } else {
            setfirst(false)
        }

        if (locacion.includes('menu') && window.screen.availWidth <= 650 && window.screen.availWidth >= 426) {
            return setfirst("30%")
        } else if (locacion.includes('menu') && window.screen.availWidth <= 425) {
            return setfirst("50%")
        } else if (locacion.includes('menu') && window.screen.availWidth > 650) {
            return setfirst("17%")
        } else {
            setfirst(false)
        }
        return
    }, [])

    return (
        <>
            <Link style={{ width: first }} to={el.path} className={"btns-Navs"} ref={BtnHover}>
                <p style={{ margin: "0" }}>
                    {el.name}
                </p>
            </Link>
        </>
    )
}

export default NavLinks
