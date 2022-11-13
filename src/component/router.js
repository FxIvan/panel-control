import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from './login/login'
import { Welcome } from './welcome/welcome'



export const Router = () =>{
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route  path='/welcome' element={<Welcome/>} />
            </Routes>
        {/*<RouteGuard path='/status' element={<Welcome/>}/>*/}
        </HashRouter>
    )
}