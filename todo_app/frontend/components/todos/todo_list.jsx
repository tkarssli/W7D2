import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default ({ todos, receiveTodo }) => (
  <>
    <h1>Frodo's Todo List</h1>
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </>
)