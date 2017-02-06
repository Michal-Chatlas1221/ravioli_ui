import React from 'react';
import $ from 'jquery';

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  submit(event) {
    const form = new FormData(event.target);
    this.props.submitTaskForm(form, this.props.token);
    event.preventDefault();
  }

  render() {
    return(
      <div className="submit-job-container">
        <p className="description">If you have some serious math to do but lack computing power, do not worry!
          Just fill the form below and let us handle it for you.
        </p>
        <form onSubmit={this.submit.bind(this)} id="submit_job">
          <p>
            <label htmlFor="job[name]">Job name</label>
            <input name="job[name]" type="text" id="taskName" required ref={(input) => {this.state.taskName = input}}/>
          </p>
          <p>
            <label htmlFor="job[division_type]">Division Type</label>
            <select name="job[division_type]" id="division_type" required ref={(select) => {this.state.type = select}}>
              <option value="pi">Pi</option>
              <option value="matrix">Matrix multiplication</option>
              <option value="repeat_500">Repeat_500</option>
             </select>
          </p>
          <p>
            <label htmlFor="job[aggregation_type]">Aggregation Type</label>
            <select name="job[aggregation_type]" id="aggregation_type" required ref={(select) => {this.state.type = select}}>
              <option value="pi">Pi</option>
              <option value="matrix">Matrix multiplication</option>
              <option value="list">List</option>
            </select>
          </p>
          <p>
            <label htmlFor="job[input]">Input data set</label>
            <input name="job[input]" type="text" id="input" ref={(input) => {this.state.input = input}}/>
          </p>
          <p className="file-input">
            <label htmlFor="job[script_file]">Script File</label>
            <input name="job[script_file]" type="file" id="script_file" required ref={(input) => {this.state.script_file = input}}/>
          </p>
          <p>
            <label htmlFor="job[divide_server_url]">Divide server url</label>
            <input name="job[divide_server_url]" type="text" id="divide_server_url" ref={(input) => {this.state.divide_server_url = input}}/>
          </p>
          <p>
            <label htmlFor="job[randomized_results]">Randomized results?</label>
            <input name="job[randomized_results]" type="checkbox" id="randomized_results" ref={(input) => {this.state.divide_server_url = input}}/>
          </p>
          <p>
            <label htmlFor="job[replication_rate]">Replication rate</label>
            <input name="job[replication_rate]" type="text" id="replication_rate" ref={(input) => {this.state.divide_server_url = input}}/>
          </p>
          <p>
            <label htmlFor="job[description]">Description</label>
            <input name="job[description]" type="text" id="description" ref={(input) => {this.state.divide_server_url = input}}/>
          </p>
          <p className="button-holder">
            <button type="submit" className="button">
              Submit a job
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default TaskCreator;
