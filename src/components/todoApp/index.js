import React from "react";
import TodoList from '../todoList'
import TodoInput from '../todoInput'
import Filters from '../filters'

const dummyData=[
    {text:'Hello', completed:true, id:0},
    {text:'Its', completed:false, id:1},
    {text:'Me', completed:false, id:2},
]

const TodoApp = () => (
    <div className="todo-app-container">
        <Filters/>
        <TodoList todos={dummyData} toggleTodo={()=>{}}/>
        <TodoInput />

    </div>
);

export default TodoApp;
