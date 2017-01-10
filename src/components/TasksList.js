import React from 'react';

class TasksList extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.token)
  } //b4 1st r3nd3r

  taskClick(id) {
    //do something with task
  }
  render() {
    console.log("taskListProps", this.props)
    return(
      <div>
        {this.props.tasks.map(function(task, id) {
          return (
            <div key={id}>
              <p>{task.type}</p>
              <p>{task.input}</p>
              <p>{task.script_file}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksList;