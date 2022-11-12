import React, { useState } from 'react'
import torologin from '../../media/img/torologin.svg'


export const Login = () =>{


    const [ formuser , setFormUser ] = useState({
        user:'',
        password:''
    })

    const handleChange = async(e) =>{
        setFormUser({
            ...formuser,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () =>{
        console.log(formuser)
    }



    return(
        <div>
            <div>
                <div>
                    <img src={torologin} alt='imagen de toro login'/>
                </div>
                <div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>USUARIO</label>
                            <input type='text' name='user' onChange={handleChange}/>
                            <label>CONTRASEÑA</label>
                            <input type='password' name='password' onChange={handleChange}/>
                            <div>
                                <input type='submit'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}