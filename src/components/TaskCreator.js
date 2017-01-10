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
    console.log("formData", form)
    this.props.submitTaskForm(form, this.props.token);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.submit.bind(this)} id="form">
        <label htmlFor="job[name]">Job name</label>
        <input name="job[name]" type="text" id="taskName" ref={(input) => {this.state.taskName = input}}/>
        <label htmlFor="job[type]">Type</label>
        <select name="job[type]" id="type" ref={(select) => {this.state.type = select}}>
          <option value="pi">Pi</option>
          <option value="matrix">Matrix multiplication</option>
        </select>
        <label htmlFor="job[input]">Input data set</label>
        <input name="job[input]" type="text" id="input" ref={(input) => {this.state.input = input}}/>
        <label htmlFor="job[script_file]">Script File</label>
        <input name="job[script_file]" type="file" id="script_file" ref={(input) => {this.state.script_file = input}}/>
        <label htmlFor="job[divide_server_url]">Divide server url</label>
        <input name="job[divide_server_url]" type="text" id="divide-server-url" ref={(input) => {this.state.divide_server_url = input}}/>
        <button type="submit">
          Submit task
        </button>
      </form>
    );
  }
}

export default TaskCreator;