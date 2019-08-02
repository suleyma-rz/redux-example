import React from "react";
import TodoItem from "../todoItem";


const TodoList = ({taskList}) => (
  <div className="todo-list">
      {taskList.map(item=>
          <TodoItem text={item.text} />
      )}
  </div>
);

export default TodoList;
