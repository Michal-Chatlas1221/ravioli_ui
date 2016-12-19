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
    var formData = $("#form").serializeArray();
    var readyData = {};
    console.log("formData", formData)
    formData.forEach(function(a) {
      readyData[a.name] = a.value
    })
    console.log("readyData", {job: readyData})
    this.props.submitTaskForm({job: readyData}, this.props.token);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.submit.bind(this)} id="form">
        <label htmlFor="taskName">Task name</label>
        <input name="taskName" type="text" id="taskName" ref={(input) => {this.state.taskName = input}}/>
        <label htmlFor="type">Type</label>
        <select name="type" id="type" ref={(select) => {this.state.type = select}}>
          <option value="pi">Pi</option>
          <option value="matrix">Matrix multiplication</option>
        </select>
        <label htmlFor="input">Input data set</label>
        <input name="input" type="text" id="input" ref={(input) => {this.state.input = input}}/>
        <label htmlFor="script_file">Script File</label>
        <input name="script_file" type="file" id="script_file" ref={(input) => {this.state.script_file = input}}/>
        <button type="submit">
          Submit task
        </button>
      </form>
    );
  }
}

export default TaskCreator;