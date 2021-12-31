import React from 'react'
import ContactoGeolocalizacion from './ContactoGeolocalizacion'
import contactoMesero from '../../assets/contacto_mesero.jpg'
import './ContactoHeader.css'

const ContactoBody = () => {
    return (
        <div>
            <img className="img-Contacto-Header" src={contactoMesero} alt="Trabaja con nosotros" />
            <ContactoGeolocalizacion/>
        </div>
    )
}

export default ContactoBody
