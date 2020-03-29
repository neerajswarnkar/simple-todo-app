import React, { Component } from "react";

class inputContainer extends Component {
  state = {
    title: ""
  };

  addTodo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
    console.log("Hello");
  };
  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="add your todo task..."
            value={this.state.title}
            name="title"
            onChange={this.addTodo}
          />
          <button className="btn btn-primary ml-2" type="submit">
            <b>+ Add Task</b>
          </button>
        </div>
      </form>
    );
  }
}

export default inputContainer;
