import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import '../css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/projectID/' + this.state.id)
  }

  render() {
    return (
      <div>
        <div className='image-container'>
          <img className='header-image' alt="AsanaLogo" src={logo} />
        </div>
        <header className='welcome-header'>
          <h1>Welcome to Asana</h1>
        </header>
        <p className='welcome-header'>
          Enter your the ID of the project you are looking for:
        </p>
        <form className='welcome-header' onSubmit={this.handleSubmit}>
          <input className="project-input" type="text" value={this.state.id} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <div className='welcome-notes'>
        <span>546061061520110 for example</span>
        </div>
      </div>
    );
  }
}

export default Home;