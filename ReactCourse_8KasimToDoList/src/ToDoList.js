import React, { useState } from "react";

function ToDoList(){ 
    const [todos, setTodos]=useState([]);
    const [newtodo,setNewtodo]=useState('');

    const addTodo=() => {
        if(newtodo){
            setTodos([...todos,newtodo]);
            setNewtodo('');
        }

    }
    

    return(
        <div>
            <h2>Görev Listesi</h2>
            <input type="text" value={newtodo} onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <ul>
                {todos.map((gorevitem,index)=>(
                    <li className="list-group-item" key={index}>{gorevitem}</li>
                ))}
            </ul>
            <button onClick={addTodo} className="btn btn-info">Ekle</button>
        </div>
    );

}

export default ToDoList;