import React, { Component } from 'react';
import authKeys from '../authKeys.js';
import List from './List';

class ProjectByID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
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
          this.setState({
            isLoaded: true
          })
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
        })
  }

  removeTaskFromList(taskId, taskList) {
    let i = taskList.length;
    while (i--) {
      if (taskList[i].id === taskId) { 
        taskList.splice(i, 1);
      }
    }
    this.setState({
      tasks: taskList
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      )
    }
    if (this.state.isError) {
      return(
        <div>
          <p>I am sorry that token or projectID was incorrect</p>
        </div>
      )
    } else {
        return (
          <div>
            <span>{this.state.projectData.id + ' - ' + this.state.projectData.name}</span>
            <List tasks={this.state.tasks} projectId={this.props.projectData} removeTaskFromList={this.removeTaskFromList.bind(this)} />
          </div>
        )
    }
  }
}

export default ProjectByID;