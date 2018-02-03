import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Welcome to Asana</h1>
          </header>
          <p>
            Enter your the ID of the project you are looking for:
          </p>
          <input></input><button>Submit</button>
        </div>
      </Router>
    );
  }
}

export default App;
