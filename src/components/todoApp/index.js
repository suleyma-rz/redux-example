import React from "react";
import TodoList from '../todoList'
import TodoInput from '../todoInput'
import Filters from '../filters'

const dummyData=[
    {text:'Hello', completed:true, onClick:()=>{}},
    {text:'Its', completed:false, onClick:()=>{}},
    {text:'Me', completed:false, onClick:()=>{}},
]

const TodoApp = () => (
    <div className="todo-app-container">
        <Filters/>
        <TodoList taskList={dummyData}/>
        <TodoInput />

    </div>
);

export default TodoApp;
