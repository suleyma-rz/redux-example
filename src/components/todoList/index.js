import React from "react";
import TodoItem from "../todoItem";


const TodoList = ({taskList}) => (
  <div className="todo-list">
      {taskList.map(item=>
          <TodoItem {...item}/>
      )}
  </div>
);

export default TodoList;
