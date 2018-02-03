import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectByID from './components/ProjectByID';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route path='/projectByID:id' component={ProjectByID} />
        </div>
      </Router>
    );
  }
}

export default App;
