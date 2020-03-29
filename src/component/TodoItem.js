import React, { Fragment } from "react";

function TodoItem(props) {
  return (
    <Fragment>
      <li className="media mt-3">
        <input
          className="mt-2"
          type="checkbox"
          checked={props.todo.status}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <span className="ml-3">{props.todo.title}</span>

        <div className="media-body">
          <button
            className="btn btn-outline-danger ml-5 btn-sm float-right"
            onClick={() => props.removeItemProps(props.todo.id)}
          >
            <b>X Remove</b>
          </button>
        </div>
      </li>
      <hr className="my-2" />
    </Fragment>
  );
}

export default TodoItem;
