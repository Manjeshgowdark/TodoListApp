import React from 'react';
import './App.css';
import TodoList from './ToDoList';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      todo: [],
      currentTodo:{
        text:"",
        key:""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem= this.addItem.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  //changes the value
  handleChange(event){
    this.setState({
      currentTodo:{
        text: event.target.value,
        key:Math.floor(Math.random()*100)
      }
    });
  }

  //Adds the new value
  addItem(event){
    event.preventDefault();
    const newItem = this.state.currentTodo;
   console.log(newItem);

   if(newItem.text!== ""){
    const newTodo = [...this.state.todo,newItem]

    this.setState({
      todo:newTodo,
      currentTodo:{
        text:"",
        key:""
      }
    });
   }
  }

  //To Delete 
  deleteTodo(key){
   const filterTodo = this.state.todo.filter((item)=>item.key!==key);
   this.setState({
    todo:filterTodo
   });
  }
  render(){
    return(
      <div className="App">
        <header>
          <h1 id="title">To-Do App</h1>
        <form id="to-do" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter the text" value={this.state.currentTodo.text} onChange={this.handleChange}/>
          <button type="submit" >Add</button>
        </form>
        </header>
        <TodoList todo={this.state.todo}
        deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;