import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            removeItemProps={this.props.removeItemProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
