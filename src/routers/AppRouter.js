import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import {Register}  from '../pages/Register/Register';

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
        <Route exact path='/Register'>
          <Register />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};
