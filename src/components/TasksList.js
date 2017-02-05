import React from 'react';

class TasksList extends React.Component {

  componentWillMount() {
    this.props.fetchTasks(this.props.token)
  }

  jobClick(id) {
    //job progress (%%%), wydzielone podjobi ze statusami
  }
  render() {
    console.log("jobListProps", this.props)
    return(
      <div id="tasks-list">
        <p className="description">
          Below you can see list of jobs created by you with details.
        </p>
        {this.props.tasks.map(function(job, id) {
          return (
            <div key={id} className="task">
              <p>Name: {job.name}</p>
              <p>Description: {job.description}</p>
              <p>Job type: {job.type}</p>
              <p>Job input: {job.input}</p>
              <p>Divide url: {job.divide_server_url}</p>
              <p>Progress: {job.progress}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksList;
