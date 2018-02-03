import React, { Component } from 'react';
import authKeys from '../../authKeys.js'
class ProjectByID extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    fetch('https://s3-us-west-1.amazonaws.com/asana-dev-test/keys.json').then(res => {
      return res.json()
    }).then(data => {
      fetch('https://app.asana.com/api/1.0/projects/' + this.props.match.params.id, { 
        method: 'get', 
        headers: {
          'Authorization': 'Bearer ' + authKeys.testKey, 
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(tasks => tasks.json())
        .then(taskData => {
        	console.log(taskData)
        })
    })
  }

  fetchProjectData() {

  }

  render() {
    return (
      <div>
      	<p>moots</p>
      </div>
    );
  }
}

export default ProjectByID;