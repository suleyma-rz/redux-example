import React from "react";
import TodoList from '../todoList'
import TodoInput from '../todoInput'
import Filters from '../filters'

const dummyData=[
    {id:0,text:'Hello'},
    {id:2,text:'Its'},
    {id:3,text:'Me'},
]

const TodoApp = () => (
    <div className="todo-app-container">
        <Filters/>
        <TodoList taskList={dummyData}/>
        <TodoInput />

    </div>
);

export default TodoApp;
