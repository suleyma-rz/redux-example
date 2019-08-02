import React from "react";
import PropTypes from 'prop-types';

export const ItemProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}).isRequired

const TodoItem = ({ text, onClick, completed }) => (
  <li className="todo-item" onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>
)

TodoItem.propTypes =ItemProps

export default TodoItem;
