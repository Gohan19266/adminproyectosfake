import React from 'react'
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../services/authentication';

export const PrivateRoute = ({component, ...options}) => {
    const isAuth = isAuthenticated();
    if(isAuth)return <Route {...options} component = {component}/>
    return <Redirect to = '/'/>
}


export const PublicRoute = ({component, ...options}) => {
    const isAuth = isAuthenticated();
    if(!isAuth)return <Route {...options} component = {component}/>
    return <Redirect to = '/Home'/>
}


