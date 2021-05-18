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

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Proyectos'>
          <Home />
        </Route>
        <Route exact path='/MisProyectos'>
          <MisProyectos />
        </Route>
        <Route exact path='/Perfil'>
          <MiPerfil />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};
