import React from 'react';

const TodoListItem = ({todo, remove, update}) => (
  <li >
    {todo.title}
    <button onClick={() => remove(todo)}>Remove</button>
    <button onClick={() => update(todo)}>{todo.done ? "Undo" : "Done"}</button>
  </li>
)

export default TodoListItem;