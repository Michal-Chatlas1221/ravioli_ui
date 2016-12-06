import React from 'react';

class TasksList extends React.Component {
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
              <p>{task.taskName}</p>
              <p>{task.data}</p>
              <p>{task.file}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksList;