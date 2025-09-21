
const Read = (props) => {

    const todos=props.todos;
    const settodos=props.settodos;
      const deleteHandler = props.deleteHandler;
    
  const rendertodos=todos.map((todo)=>{
    return <li key={todo.id} className="mb-4 p-4 bg-blue-950 flex justify-between  font-sans text-amber-200 items-center">
       <span className="text-xl font-thin ">{todo.title}</span>  <button  className="font-thin text-red-500 text-sm" onClick={()=>deleteHandler(todo.id)}> Delete </button>
</li> 
});

  return (  
    <div className="w-[20%] p-10">
        <h1 className="text-5xl font-thin  mb-10 text-white "><span className="text-red-600">Pending </span> Todos</h1>
      <h1 className="font-serif" >{rendertodos}</h1>
    </div>
  )
}

export default Read
