import React from 'react';

import { useForm } from "../../hooks/useForm";

import './login.css';

export const Login = () => {


    const [ formLoginValues, handleLoginInputChange] = useForm( {
        lcampusCode:'',
        lPassword:''
    } );

    const {lcampusCode,lPassword} = formLoginValues;

    const handleLogin = (e)=>{

        e.preventDefault();

        console.log(formLoginValues);
    }



    return (
      
        <div className="container login-container">
            
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>INICIO</h3>
                    <form onSubmit = {handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Codigo del Campus "
                                name = "lcampusCode"
                                value = {lcampusCode}
                                onChange ={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name = "lPassword"
                                value = {lPassword}
                                onChange ={handleLoginInputChange}
                            />
                        </div>

                        <div className="wrap">
                            <button className="button-login">Ingresar</button>
                        </div>
                       

                    </form>
                </div>
               
            </div>
        </div>
        
    )
}