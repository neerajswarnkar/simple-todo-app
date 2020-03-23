import React, { Fragment } from "react";

function TodoItem(props) {
  return (
    <Fragment>
      <input
        type="checkbox"
        checked={props.todo.status}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <button onClick={() => props.removeItemProps(props.todo.id)}>
        Remove
      </button>
      <li>{props.todo.title}</li>
    </Fragment>
  );
}

export default TodoItem;
