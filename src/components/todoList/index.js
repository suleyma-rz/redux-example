import React from "react";
import TodoItem from "../todoItem";

const TodoApp = ({ text }) => (
  <div className="todo-app-container">
    <TodoItem text="Hello" />
    <TodoItem text="It's" />
    <TodoItem text="Me" />
  </div>
);

export default TodoApp;
