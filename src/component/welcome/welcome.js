import React from 'react'
import { Link } from 'react-router-dom'
import './css/welcome.css'

export const Welcome = ({user}) => {

    console.log("Desde Welcome: ", user)

    const handleSesion = () => {
        localStorage.clear()
        window.location.href = ('/')
    }

    return (
        <div className='container-welcome-page'>
            <div>
                <div className='container-header-welcome'>
                    <div className='subcontainer-header-welcome'>
                        <div className='container-option-header'>
                            <div>
                                <ul>
                                    <li><Link to='/receiving/email'>EMAIL</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-button-sesion'>
                            <div className='subcontainer-button-sesion'>
                                <button onClick={handleSesion}>CERRAR SESION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}