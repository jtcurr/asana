import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProjectByID from '../components/ProjectByID';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact render={props => <Home {...props} />} />
      <Route path='/projectID/:projectID' exact render={props => <ProjectByID {...props}/>} />
    </Switch>
  </Router>
)