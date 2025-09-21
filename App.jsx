import { useState } from "react"
import {nanoid} from "nanoid"

import Create from "./Component/Create";
import Read from "./Component/Read"



const App = () => {
  const[todos,settodos]=useState([
    {id:1,title:"kaam karle bhai",iscomplted:false}
  ]);

    const deleteHandler=(id)=>{
    const filterTodo=todos.filter((todo)=>todo.id!=id);
    settodos(filterTodo);
    console.log("id");
  }


  return (
    <div className="flex w-screen min-h-screen bg-gray-800 p-10">

     <Create todos={todos} settodos={settodos}/>
     <Read todos={todos} settodos={settodos} deleteHandler={deleteHandler}/>

    
      </div>
  )
}






export default App;
