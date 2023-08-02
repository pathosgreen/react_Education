import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
//import { useDispatch, useSelector } from 'react-redux';

function TodoList({ todos }) {
    //const todos = useSelector((state) => state.todos);

    return (
        <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);