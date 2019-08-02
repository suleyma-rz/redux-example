import React from "react";
import TodoItem, { ItemProps } from "../todoItem";
import PropTypes from 'prop-types'


const TodoList = ({todos, toggleTodo}) => (
  <ul className="todo-list">
      {todos.map(item=>
          <TodoItem key={item.id} {...item} onClick={() => toggleTodo(item.id)}/>
      )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(ItemProps).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;
