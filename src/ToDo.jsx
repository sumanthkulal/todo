import { useState  } from "react"
import {v4 as uuidv4} from 'uuid';
export default function ToDoList(){

    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}])
    let [newToDo,setNewTodo]=useState("");

    let addTask=()=>{
        setTodos([...todos,{task:newToDo,id:uuidv4(),isDone:false}])
        setNewTodo("")
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)  
    }

    let deltask=(id)=>{
        setTodos((prevTo)=>todos.filter((prevTo)=>prevTo.id!=id));
    }
    let MarkAllDone=()=>{
        setTodos( (prevTodos)=>{
    
                return prevTodos.map((todo)=>{
                    return{
                        ...todo,
                        isDone:true
                    }
                })}
        )

    }

    let MarkAsDone=(id)=>{
        setTodos( (prevTodos)=>{
    
                return prevTodos.map((todo)=>{

                    if(todo.id==id)
                    {
                        return{
                        ...todo,
                        isDone:true
                        }
                    }
                    return todo
                    
                })}
        )

    }
    return(
        <div>
            <input placeholder="add a task" value={newToDo} onChange={updateTodoValue} type="text" name="" id="" />
            <br /><br />
            <button onClick={addTask}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />
            <h4> Tasks ToDo</h4>
            <ul>
                { 
                   todos.map((todo)=>(
                 <li key={todo.id}>
                    <span style={todo.isDone ?{textDecorationLine :"line-through"}:{}}>{todo.task}</span>
                 <button onClick={()=>{ deltask(todo.id)}}>Delete</button>
                 {/* <button onClick={()=>{ updateOne(todo.id)}}>upperOne</button> */}
                <button onClick={()=>{ MarkAsDone(todo.id)}}>Mark As Done</button>

                 </li>))
                }
            </ul>
            <br></br>
            <button onClick={MarkAllDone}> Mark All as Done</button>

        </div>
    )

}