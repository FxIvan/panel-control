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
                            <label></label>
                            <input/>
                            <label></label>
                            <input/>
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