import React from 'react';
import './App.css';
import DisplayList from "./components/displayList";

var rand = require('random-key');

export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      title: '',
      todos: []
    }
  }
  
  handleSubmit = event => {
    var title = this.state.title;
    var newTodos = this.state.todos;
    event.preventDefault();
    this.setState({ title: '',
      todos: newTodos.concat({title: title,
        id: rand.generate(),
        done: false
      })
    });
  }

  handleChange = event => {
    var title = event.target.value;
    this.setState({ title: title });
  }

  handleDelete = idToDelete => {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id !== idToDelete
    });
    this.setState({todos: newTodos})
  }

  handleDone = idToMarkDone => {
    var _todos = this.state.todos
    var todo = _todos.filter((todo) => {
      return todo.id === idToMarkDone
    })[0]
    todo.done = !todo.done;
    this.setState({todos: _todos})
  }

  handleDeleteChecked = event => { 
    var newTodos = this.state.todos.filter((todo) => {return !todo.done});
    this.setState({todos: newTodos});
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} 
            value={this.state.title}
             />
          <button>Add</button>
        </form>
        <DisplayList 
          todos={this.state.todos}
          handleDone={this.handleDone}
          handleDelete={this.handleDelete}
        />
        <div>ToDos incompleted: 
          {this.state.todos.filter((todo) => {return !todo.done}).length}
        </div>
        <button onClick={this.handleDeleteChecked}>Delete completed</button>
      </div>
    );
  }
}