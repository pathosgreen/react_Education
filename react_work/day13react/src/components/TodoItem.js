import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

function TodoItem({ todo,toggleTodo, deleteTodo }) {
  const handleToggle = () =>{
    toggleTodo(todo.id);
  };
  const handleDelete = () =>{
    deleteTodo(todo.id);
  };
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default connect(null, {toggleTodo, deleteTodo})(TodoItem);