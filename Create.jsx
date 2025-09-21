
import {nanoid} from "nanoid"
import { useForm } from "react-hook-form";



const Create = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;


      const{
    register,
    handleSubmit,
    reset,
    formState:{errors},
    }=useForm();
      
  

      const submithandler=(data)=>{
    console.log(data);
    data.iscomplted=false;
    data.id=nanoid();
    console.log(data);
    
    const copytodos=[...todos];
    copytodos.push(data);
    settodos(copytodos);
    reset();


 
    
  };

  return (
    <div className=" w-[60%] p-10   ">
            <h1 className="text-5xl font-thin  mb-10 text-white">Set  <span className="text-red-600">Reminder</span> for <br /> tasks </h1>
      <br />
      <form onSubmit={handleSubmit(submithandler)}>
        <input
        {...register("title",{required:"title is required"})}
        className="border-b   text-white font-serif w-full text-2xl font-thin p-2 outline-0" onChange={(e)=>settitle(e.target.value)}
      
        type="text"
        placeholder="title"
        

        
        />

        {errors.title && <p className="text-red-600"><small>{errors.title.message}</small></p>}
<br />

        <button className="text-xl px-10 text-white py-2 border border-white rounded mt-5">Create Todo</button>






      </form>

    </div>
  )
}

export default Create
