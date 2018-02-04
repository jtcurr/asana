import React, { Component } from 'react';
import authKeys from '../authKeys.js';

class List extends Component {

  render() {
  	const context = this;
    return (
      <ul>
        {this.props.tasks.map(function(task, key) {
          return (
            <li key={key}>
              <a href={'https://app.asana.com/0/' + task.id}>{task.id}</a>
              {' - ' + task.name}
              <button onClick={() => {context.props.removeTaskFromList(task.id, context.props.tasks)}}>Hide</button>
            </li>
          )
        })}
      </ul>
    )
  }
};

export default List