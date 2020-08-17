import React from 'react';
import { Switch, Route } from 'react-router-dom';
import View1 from './components/View1';
import View2 from './components/View2';

export default (
  <Switch>
    <Route component={View1} exact path='/' />
    <Route component={View2} path='/view2' />
  </Switch>
)