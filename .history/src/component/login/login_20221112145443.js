import React from 'react'
import torologin from '../../media/img/torologin.svg'


export const Login = () =>{
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
                            <input type='text'/>
                            <label>CONTRASEÑA</label>
                            <input type='password'/>
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