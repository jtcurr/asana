import React, { Component } from 'react';

class List extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map(function(task){
          return <li>{task.id}</li>;
        })}
      </ul>
    )
  }
};

export default List