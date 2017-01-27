import React from 'react';

class TasksList extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.token)
  } 

  taskClick(id) {
    //task progress (%%%), wydzielone podtaski ze statusami
  }
  render() {
    console.log("taskListProps", this.props)
    return(
      <div className="task-list-container">
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