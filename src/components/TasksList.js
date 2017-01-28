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
      <div id="tasks-list">
        <p className="description">Below you can see list of tasks created by you with 
          provided type, dataset and url of divide server.</p>
        {this.props.tasks.map(function(task, id) {
          return (
            <div key={id} className="task">
              <p>Task type: {task.type}</p>
              <p>Task input: {task.input}</p>
              <p>Divide url: {task.divide_server_url}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksList;