import React, { useState } from 'react'
import torologin from '../../media/img/torologin.svg'


export const Login = () =>{


    const [ formuser , setFormUser ] = useState({
        user:'',
        password:''
    })

    const handleChange = async(e) =>{

    }



    return(
        <div>
            <div>
                <div>
                    <img src={torologin} alt='imagen de toro login'/>
                </div>
                <div>
                    <div>
                        <form>
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