import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REFRESH_TODO = 'REFRESH_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
})

export const refreshTodo = (todo) => ({
  type: REFRESH_TODO,
  todo
})

export const createTodo = (todo) => (dispatch) => {
  return TodoAPIUtil.createTodo(todo)
        .then( 
          resTodo => dispatch(receiveTodo(resTodo)),
          err => dispatch(receiveErrors(err.responseJSON))
          )
        .then(
          () => dispatch(clearErrors())
        )
};

export const deleteTodo = (todo) => (dispatch) => {
  return TodoAPIUtil.deleteTodo(todo)
    .then(
      () => dispatch(removeTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(
      () => dispatch(clearErrors())
    )
};

export const updateTodo = (todo) => (dispatch) => {
  return TodoAPIUtil.updateTodo(todo)
    .then(
      resTodo => dispatch(refreshTodo(resTodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(
      () => dispatch(clearErrors())
    )
};

export const fetchTodos = () => (dispatch) => {
  return TodoAPIUtil.fetchTodos()
    .then(
      resTodos => dispatch(receiveTodos(resTodos)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(
      () => dispatch(clearErrors())
    )
}

window.TodoAPIUtil = TodoAPIUtil;