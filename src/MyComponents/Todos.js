import React from "react";
import { TodoItem } from "../MyComponents/Todo.js";

export default function Todos(props) {
  const myStyle = {
    minHeight : "70vh"
  }

  return (
    <div className="container my-5" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to Display" : 
        props.todos.map((todo) => {
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
      })
      }
      {/* <TodoItem todo={props.todos[1]}/> */}
    </div>
  );
}
