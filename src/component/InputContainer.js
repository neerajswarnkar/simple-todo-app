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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="add your todo task..."
          value={this.state.title}
          name="title"
          onChange={this.addTodo}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default inputContainer;
