import React from 'react'




export class AddTaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }



  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }


  addTask = (evt) => {
    if (evt.key === 'Enter') {
      fetch('api/tasks/', {
        method: 'POST',
        body: JSON.stringify({ description: evt.target.value }),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(() => {
          this.setState({
            inputValue: ''
          });
        });
    }
  }

  render() {
    return (
      <div className="inputContainer">
        <input
          className="taskInput"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Add a task"
          onKeyPress={this.addTask} />
      </div>
    )
  }
}