import React, { Component, Fragment } from "react";
import TodoList from "./component/TodoList";
import Header from "./component/Header";
import InputContainer from "./component/InputContainer";
// import List from "./component/List";
// import CounterButton from "./component/counterButton";
// import TodoContainer from "./component/TodoContainer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: Date.now(),
          title: "learn React",
          status: ""
        }
      ]
    };
  }

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    });
  };

  removeItem = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodoTask = {
      id: Date.now(),
      title: title,
      status: ""
    };
    this.setState({
      todos: [...this.state.todos, newTodoTask]
    });
    console.log(title);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <InputContainer addTodoProps={this.addTodoItem} />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          removeItemProps={this.removeItem}
        ></TodoList>
      </Fragment>
    );
  }
}

export default App;

/*incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  reset() {
    this.setState({
      count: 0
    });
  }

  <h3>Count : {count}</h3>
        <CounterButton
          title={"+"}
          task={() => this.incrementCount()}
        ></CounterButton>
        <CounterButton
          title={"-"}
          task={() => this.decrementCount()}
        ></CounterButton>
        <CounterButton
          title={"Reset"}
          task={() => this.reset()}
        ></CounterButton>

  */
// Second project Todo

/*

onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  Submit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  <form onSubmit={this.Submit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <hr />
        <List items={this.state.items}></List>

*/
