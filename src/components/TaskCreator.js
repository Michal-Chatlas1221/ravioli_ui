import React from 'react';

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      data: '',
      file: {}
    }
  }
  submit(event) {
    const form = new FormData(event.target);
    console.log(this)
    const values = {
      taskName: this.state.taskName.value,
      data: this.state.data.value,
      file: this.state.file.value,
    }
    this.props.submitTaskForm(values);
    event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.submit.bind(this)}>
        <label htmlFor="taskName">Name</label>
        <input name="taskName" type="text" id="taskName" ref={(input) => {this.state.taskName = input}}/>
        <label htmlFor="data">Data set</label>
        <input name="data" type="text" id="data" ref={(input) => {this.state.data = input}}/>
        <label htmlFor="file">Script File</label>
        <input name="file" type="file" id="file" ref={(input) => {this.state.file = input}}/>
        <button type="submit">
          Submit task
        </button>
      </form>
    );
  }
}

export default TaskCreator;