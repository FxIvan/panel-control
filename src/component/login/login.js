import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import torologin from '../../media/img/torologin.svg'
import { RouteGuard } from '../routeGuard/routeGuard'
import './css/login.css'


export const Login = () =>{


    const [ formuser , setFormUser ] = useState({
        user:'',
        password:''
    })

    const [dataJWT , setdataJWT] = useState('')

    const handleChange = async(e) =>{
        setFormUser({
            ...formuser,
            [e.target.name]:e.target.value
        })
    }

    
    const handleSubmit = (e) =>{

        console.log(formuser)
        e.preventDefault()
        axios.post('https://devalmendra.online/v1/register/user/login', formuser)
        .then(token=>{
            localStorage.setItem("token", token);//lo guardamos en el local storage
            window.location.href=('/!#/board')
        })
        .catch(err=>{
            console.log('Este es el error: ' , err)
            window.location.href=('/!#/error')
        })
    
    }



    return(
        <div className='container-page-login'>
            <div className='subcontainer-page-login'>
                <div className='container-imagen-logo-toro'>
                    <img src={torologin} alt='imagen de toro login'/>
                </div>
                <RouteGuard/>
                <div className='container-form'>
                        <form onSubmit={handleSubmit}>
                            <label>USUARIO</label>
                            <input type='text' name='user' onChange={handleChange} placeholder='>>'/>
                            <label>CONTRASEÑA</label>
                            <input type='password' name='password' onChange={handleChange} placeholder='>>'/>
                            <div className='container-button-form'>
                                <input type='submit' value='Ingresar'/>
                            </div>
                        </form>     
                </div>
            </div>
        </div>
    )
}