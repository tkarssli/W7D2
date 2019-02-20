import React from 'react';
import {uniqueId} from '../../util/todo_util'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: ""
    }

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.submit = this.submit.bind(this);

  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  submit(e) {
    e.preventDefault();

    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    
    this.props.createTodo(todo).then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <>
        <div>{this.props.errors.map(err => <p>{err}</p>)}</div>
        <form onSubmit={this.submit}>
          <label>Title: 
            <input 
            type="text"
            value = {this.state.title}
            onChange={this.handleTitleChange}
            />
          </label>
          <label>Body:
            <textarea
            id="form-body" 
            onChange={this.handleBodyChange}
            value={this.state.body}></textarea>
          </label>
          <button>Create Todo for Frodo</button>
        </form>
      </>
    )
  }
}

export default TodoForm;