import React from "react";
import TodoList from '../todoList'
import TodoInput from '../todoInput'
import Filters from '../filters'

const TodoApp = () => (
    <div className="todo-app-container">
        <Filters/>
        <TodoList/>
        <TodoInput />

    </div>
);

export default TodoApp;
