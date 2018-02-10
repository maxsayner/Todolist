import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import listContainer from './Components/listContainer.js';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {id: 0, text: "Do laundry,"},
      {id: 1, text: "Walk the dog"},
      {id: 2, text: "Take out the trash"},
      {id: 3, text: "Clean the house"}
  ],
  //nextId: 4
  }
  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
}
addTodo(todoText) {
  let todos = this.state.todos.slice();
  todos.push((id: this.state.nextId, text: todoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId

  });
  
}
removeTodo(id) {
  this.setState {
    todos: this.state.todos.filer(todo, index) => {
      todo.id !== id)
    }
  }

}

  render() {
    return (
      <div>
      <input type="text' value"" onChange={this.handleChange}/>
      <button className="btn btn-primary" onClick=(() => this.addTodo(this.state.value)} >Submit</button>
  </div>
    



