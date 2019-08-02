import React from "react";
import TodoItem from "../todoItem";

const TodoList = () => (
  <div className="todo-list">
    <TodoItem text="Hello" />
    <TodoItem text="It's" />
    <TodoItem text="Me" />
  </div>
);

export default TodoList;
