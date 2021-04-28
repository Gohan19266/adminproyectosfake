import React from 'react'

export const Navbar = () => {
    return (
        <div className ="navbar navbar-dark bg-dark mb-4">
            <span className = "navbar-brand">
                Proyecto Integrador

            </span>

            <button className = "btn btn-outline-danger">
                <i calssName = "fas fa-sign-out-alt"></i>
                <span>Salir</span>
            </button>
           
            
        </div>
    )
}
