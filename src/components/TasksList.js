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
      <div id="jobs_list">
        <p className="description">
          Below you can see list of jobs created by you with details.
        </p>
        {this.props.tasks.map(function(job, id) {
          return (
            <div key={id} className="job">
              <p>Name: {job.name}</p>
              <p>Division type: {job.division_type}</p>
              <p>Aggregation type: {job.aggregation_type}</p>
              <details className="job-extra-info">
                <summary>See more</summary>
                <p>Description: {job.description}</p>
                <p>Input: {job.input}</p>
                <p>Divide url: {job.divide_server_url}</p>
                <p>Results randomization: {job.randomized_results}</p>
                <p>Replication rate: {job.replication_rate}</p>
                <p style={{ width: job.progress*100 + '%' }} className="job-progress"></p>
                <p className="job-progress-text">{job.progress * 100}% completed</p>
                {
                  job.progress === 1 ?
                    <div>
                    Results:
                    <textarea className="results">
                      {job.result}
                    </textarea>
                      <p>Duration: {job.duration} ms</p>
                    </div> :
                    null
                }
              </details>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksList;
