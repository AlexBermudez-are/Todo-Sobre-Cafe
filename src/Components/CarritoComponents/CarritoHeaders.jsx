import React from 'react'
import LogoConNav from '../LogoConNav'

const CarritoHeaders = () => {
    return (
        <div>
            <section style={{
                width: "100%",
                display: "flex",
                justifyContent:"center"
            }}>
                <section className="logoC">
                    <LogoConNav />
                </section>
            </section>
        </div>
    )
}

export default CarritoHeaders
