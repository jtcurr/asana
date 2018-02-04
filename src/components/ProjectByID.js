import React, { Component } from 'react';
import List from './List';
import { fetchProjectAndTaskData } from './utils';

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
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.id, 'project');
    this.fetchProjectAndTaskData(this.queryPrefix + this.props.match.params.id + '/tasks', 'task');
  }

  removeTaskFromList(taskId) {
    let taskList = this.state.tasks
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