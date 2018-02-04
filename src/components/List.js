import React, { Component } from 'react';

class List extends Component {

  render() {
    const context = this;
    let sortedTasks = this.props.tasks.sort(function(a, b){return b.id-a.id});
    return (
      <ul>
        {sortedTasks.map(function(task, key) {
            return (
              <li key={key}>
                <a href={'https://app.asana.com/0/' + task.id}>{task.id}</a>
                {' - ' + task.name}
                <button onClick={() => {context.props.removeTaskFromList(task.id)}}>Hide</button>
              </li>
            )
        })}
      </ul>
    )
  }
};

export default List