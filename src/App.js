import React, { useState,useEffect } from 'react';
import "./App.css";
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('Deleted todo',todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo = (title,desc) => {
    console.log('I am adding!',title,desc);
    let sno;
    if (todos.length === 0){
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header title="My TodosList" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;