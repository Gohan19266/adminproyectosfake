import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { MisProyectos } from '../pages/MisProyectos/MisProyectos';
import { MiPerfil } from '../pages/MiPerfil/MiPerfil';
import { PublicRoute, PrivateRoute } from './helperRoutes';
import { isAuthenticated } from '../services/authentication';
import { Docente } from '../pages/Docente/Docente';

export const AppRouter = () => {
  const isAuth = isAuthenticated();
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/'>
          <Login />
        </PublicRoute>
        <PrivateRoute path='/Home'>
          <Home />
        </PrivateRoute>
        <PrivateRoute path='/Proyectos'>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path='/MisProyectos'>
          <MisProyectos />
        </PrivateRoute>
        <Route exact path='/Perfil'>
          <MiPerfil />
        </Route>
        <PrivateRoute exact path='/Docente'>
          <Docente />
        </PrivateRoute>

        <Route
          exact
          path='*'
          render={() => {
            return <Redirect to={isAuth ? '/Home' : '/'} />;
          }}
        />

        {/* <Redirect to='/' /> */}
      </Switch>
    </Router>
  );
};
