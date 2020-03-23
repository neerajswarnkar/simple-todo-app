import React, { Component } from "react";

export default class CounterButton extends Component {
  render() {
    let { task, title } = this.props;
    console.log(this.props);
    return <button onClick={task}>{title}</button>;
  }
}
