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
      <div className="create-task-container">
        <p className="description">If you have some serious math to do but lack computing power, do not worry!
          Just fill the form below and let us handle it for you.
        </p>
        <form onSubmit={this.submit.bind(this)} id="create-task">
          <p>
            <label htmlFor="job[name]">Job name</label>
            <input name="job[name]" type="text" id="taskName" ref={(input) => {this.state.taskName = input}}/>
          </p>
          <p>
            <label htmlFor="job[type]">Type</label>
            <select name="job[type]" id="type" ref={(select) => {this.state.type = select}}>
              <option value="pi">Pi</option>
              <option value="matrix">Matrix multiplication</option>
             </select>
          </p>
          <p>
            <label htmlFor="job[input]">Input data set</label>
            <input name="job[input]" type="text" id="input" ref={(input) => {this.state.input = input}}/>
          </p>  
          <p className="file-input">
            <label htmlFor="job[script_file]">Script File</label>
            <input name="job[script_file]" type="file" id="script_file" ref={(input) => {this.state.script_file = input}}/>
          </p>
          <p>
            <label htmlFor="job[divide_server_url]">Divide server url</label>
            <input name="job[divide_server_url]" type="text" id="divide-server-url" ref={(input) => {this.state.divide_server_url = input}}/>
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