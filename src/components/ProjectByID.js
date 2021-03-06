import React, { Component } from 'react';
import List from './List';
import { fetchProjectAndTaskData } from './utils';
import '../css/ProjectByID.css';

class ProjectByID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      projectData: {},
      tasks: [],
      isError: false
    }
    this.fetchProjectAndTaskData = fetchProjectAndTaskData.bind(this);
    this.queryPrefix = 'https://app.asana.com/api/1.0/projects/';
  }

  componentDidMount() {
    console.log(this.props.match.params.projectID)
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.projectID, 'project');
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.projectID + '/tasks', 'task');
  }

  removeTaskFromList(taskId) {
    let taskList = this.state.tasks
    let x = taskList.length;
    while (x--) {
      if (taskList[x].id === taskId) { 
        taskList.splice(x, 1);
      }
    }
    this.setState({
      tasks: taskList
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className='loading-screen'>
          <span>Loading...</span>
        </div>
      )
    }
    if (this.state.isError) {
      return(
        <div className='error-screen'>
          <p>I am sorry that token or projectID was incorrect</p>
        </div>
      )
    } else {
        return (
          <div>
            <div className='list-header-container'>
              <span>{this.state.projectData.id + ' - ' + this.state.projectData.name}</span>
            </div>
            <List tasks={this.state.tasks} projectId={this.props.projectData} removeTaskFromList={this.removeTaskFromList.bind(this)} />
          </div>
        )
    }
  }
}

export default ProjectByID;