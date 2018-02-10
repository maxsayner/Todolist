import React, {Component} from 'react';
import './App.css';
import  './componenets/todoInput';
import Header from '.Components/header';
import TodoInput from './Components/todoInput';
import TodoItem from './Components/todoItem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
          {id: 0, text: "Do laundry,"},
          {id: 1, text: "Walk the dog"},
          {id: 2, text: "Take out the trash"},
          {id: 3, text: "Clean the house"}
      ],
      nextId: 4
      }

      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todoText) {
let todos = this.state.todos.slice();
todos.push({id: this.state.nextId, text: todoText});
this.setState({
    todos: todos,
    nextId: ++this.state.nextId
});
    
      
    }
    removeTodo(id) {
   this.setState({
       todos: this.state.todos.filter((todo, index) => todo.id !== id)
   })
        }
      render() {
    return (
        <div className ="App">
        <div className ="todo-wrapper">
        <Header />
        <TodoInput todoText="" addTodo={this.addTodo}/>
        <ul>
            {
                this.state.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} id={todo.id} =(this.removeTodo)/>
                