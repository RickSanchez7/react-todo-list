import React, { Component } from "react";
import Item from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>Hello from List</h2>
        <Item />
      </section>
    );
  }
}

export default TodoList;
