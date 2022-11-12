import React, {useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import { Error } from '../errorLogin/error'

export const RouteGuard = ({element}) => {

    const [flag,setFlag] = useState(false)

    const hasJWT = () => {
        localStorage.getItem('token')
            ? setFlag(true)
            : setFlag(false)
    }
/*
    const redireccion = () =>{
        window.location.href='/login'
    }
*/
    console.log(flag)
   // { flag ?  <Route path='/conexion' element={element} />:<Route path='/error'  element={<Error/>}/> }
    return (
        <Routes>
            { flag ?  <Route path='/conexion' element={element} />:<Route path='/error'  element={<Error/>}/> }
        </Routes>
    )
}