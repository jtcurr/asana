import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProjectByID from './ProjectByID';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true })
    return (
      <Route path='/new-path' component={ProjectByID}/>
    )
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Asana</h1>
        </header>
        <p>
          Enter your the ID of the project you are looking for:
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.id} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <span>546061061520110 for example</span>
        {this.state.redirect && (
          <Redirect to={'/projectByID' + this.state.id} component={ProjectByID} params='test'/>
        )}
      </div>
    );
  }
}

export default Home;