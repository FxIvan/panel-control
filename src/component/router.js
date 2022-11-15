import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from './login/login'
import { Welcome } from './welcome/welcome'
import { RouteGuard } from './routeGuard/routeGuard'
import { NotFound } from './notfound/notfound'

export const Router = () =>{
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        <RouteGuard path='/status' element={<Welcome/>}/>
        </HashRouter>
    )
}