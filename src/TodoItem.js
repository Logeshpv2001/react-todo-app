import React from 'react';

const TodoItem = ({ todo, onDelete, onUpdateStatus }) => {
  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>
      <button onClick={() => onUpdateStatus(todo.id)}>Toggle Status</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
