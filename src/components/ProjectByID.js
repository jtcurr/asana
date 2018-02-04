import React, { Component } from 'react';
import authKeys from '../authKeys.js';
import List from './List';
class ProjectByID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: {},
      tasks: [],
      isError: false
    }
    this.queryPrefix = 'https://app.asana.com/api/1.0/projects/';
  }

  componentDidMount() {
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.id, 'project')
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.id + '/tasks', 'task')
  }

  fetchProjectAndTaskData(queryString, type) {
    fetch(queryString, { 
        method: 'get', 
        headers: {
          'Authorization': 'Bearer ' + authKeys.testKey, 
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((results) => {
          if (results.status === 200) {
            return results.json();
          } else {
            this.setState({
              isError: true
            })
            return;
          }
        })
        .then(resultsData => {
          if(!resultsData) {
            return;
          }
          if(type === 'project') {
            this.setState({
              projectData: resultsData.data
            })
          } else {
            this.setState ({
              tasks: resultsData.data
            })
          }
          console.log('$$$$', this.state.projectData)
          console.log('%%%%', this.state.tasks)
        })
  }

  render() {

    if(this.state.isError) {
      return(
        <div>
          <p>I am sorry that token or projectID was incorrect</p>
        </div>
      )
    } else {
        return (
          <div>
            <span>{this.state.projectData.id}</span>
            <List tasks={this.state.tasks} />
          </div>
        )
    }
  }
}

export default ProjectByID;