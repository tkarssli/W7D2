import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let {todos, deleteTodo, updateTodo, createTodo, errors} = this.props;
    return (
      <>
        <h1>Frodo's Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} remove={deleteTodo} update={updateTodo} />
          ))}
        </ul>
        <TodoForm createTodo={createTodo} errors={errors} />
      </>
    )
  }
}

export default TodoList

// export default ({ todos, createTodo, errors, deleteTodo, updateTodo }) => (
//   <>
//     <h1>Frodo's Todo List</h1>
//     <ul>
//       {todos.map((todo) => (
//         <TodoListItem key={todo.id} todo={todo} remove={deleteTodo} update={updateTodo} />
//       ))}
//     </ul>
//     <TodoForm createTodo={createTodo} errors={errors} />
//   </>
// )