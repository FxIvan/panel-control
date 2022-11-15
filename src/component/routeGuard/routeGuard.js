import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import { Error } from '../errorLogin/error'
import { Welcome } from '../welcome/welcome'
import { Receiving } from './receiving/receiving'


export const RouteGuard = ({element}) => {

    const [ tokenStatus , setTokenStatus ] = useState()

    const [ resPrueba , setResPrueba ] = useState()

    useEffect(()=>{
        localStorage.getItem("token") ? setTokenStatus(true):setTokenStatus(false)
    },[])

    useEffect(()=>{
        if(tokenStatus){
            axios.get('https://devalmendra.online/sendingdata/client')
            .then(res=>{
                console.log("Dentro de route: " , res)
                setResPrueba(res)
            })
        }
    },[tokenStatus])


    //console.log("TokenStatus: " , tokenStatus)


    return (
     <div>
        {tokenStatus ? <Routes><Route path='/board' element={<Welcome user={tokenStatus}/>}/><Route path='/receiving/email' element={<Receiving/>}/></Routes>:<Routes><Route path='/error' element={<Error/>}/></Routes>}
     </div>  
    )
}