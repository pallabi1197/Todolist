import { useEffect, useState } from "react";
import { useRef } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {


const[todos,setTodos] = useState([]);
const inputref = useRef(null);

const add = () => {
setTodos([...todos,{no:count++,text:inputref.current.value,display:""}]);
inputref.current.value ="";
localStorage.setItem("todos_count", count)
}


useEffect(() => {

setTodos(JSON.parse(localStorage.getItem("todos")));
count = localStorage.getItem("todos_count");

},[])

useEffect(() => {
setTimeout(() => {
console.log(todos);
localStorage.setItem("todos",JSON.stringify(todos));
}, 100);
},[todos])

 

  return (
    <>
    <div className="todo">
      <div className="todo-header">To-Do List</div><br />
      <div className="todo-add">
        <input type="text" placeholder="Add Your Task" className="todo-input" ref={inputref}/>
        <div className="todo-add-btn" onClick={() => {add()}}>ADD</div>
      </div>
      <div className="todo-list">

        {todos.map((item,index) =>{

          return <TodoItems key={index} no={item.no} display={item.display} text={item.text}  setTodos={setTodos}/>

        })}    

        </div>
    </div>

    </>
  );
};

export default Todo;