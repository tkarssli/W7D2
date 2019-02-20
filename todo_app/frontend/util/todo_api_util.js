
export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/todos'
  })
};

export const createTodo = (todo) => {
  return $.ajax({
    method:'POST',
    url: 'http://localhost:3000/api/todos',
    data: {todo}
  })
};

export const updateTodo = (todo) => {
  return $.ajax({
    method: 'PATCH',
    url: `http://localhost:3000/api/todos/${todo.id}`,
    data: { todo }
  })
}

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'DELETE',
    url: `http://localhost:3000/api/todos/${todo.id}`,
    data: { todo }
  })
}