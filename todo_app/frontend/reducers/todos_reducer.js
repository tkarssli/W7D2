import _ from "lodash"
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, REFRESH_TODO } from "../actions/todo_actions";

const initialState = {};

const todosReducer = (state = initialState, action) => {
  let todos;
  switch (action.type) {
    case RECEIVE_TODOS:
      todos = {};
      action.todos.forEach(todo => {
        todos[todo.id] = todo;
      })
      return todos;

    case RECEIVE_TODO:
      todos = _.merge({},state);
      todos[action.todo.id] = action.todo;
      return todos;

    case REMOVE_TODO:
      todos = _.merge({}, state);
      delete todos[action.todo.id];
      return todos;

    case REFRESH_TODO:
      todos = _.merge({}, state);
      let isDone = todos[action.todo.id].done;
      todos[action.todo.id].done = isDone ? false : true;
      return todos;
      
    default:
      return state;
  }
};

export default todosReducer;
