import React from 'react'
import  { useContext, useState ,useEffect} from 'react'
import Taskcontext from '../Context/TaskContext'

const TaskInput = () => {
      const {addTask,TaskEdit,updateTask,setTaskEdit}=useContext(Taskcontext)
  useEffect(()=>{
   if(TaskEdit.edit === true )
   {
    setText(TaskEdit.item.text);
   }
  },[TaskEdit]);



  
  const [text,setText]=useState("")
  const handletextchange=(e)=>
  {
    setText(e.target.value)
  }
  const handlesubmit=(e)=>
  {
    e.preventDefault()
   
    const newTask={
      text :text
    }
       if(TaskEdit.edit==true)
  {
        updateTask(TaskEdit.item.id,newTask)
        setTaskEdit({ item: {}, edit: false});
        
  }   
else{
      addTask(newTask)
}
      setText("")
    
  }

  return (
    <div className='card'>
        <form onSubmit={handlesubmit}>
            <h1>Add Your Tasks</h1>
            <div className="input-group">
                <input  type="text" value={text} onChange={handletextchange} placeholder='Enter your Task'/>
               <button className='btn'>
                  Add Task
               </button>
            </div>
         
        </form>
</div>
  )
}

export default TaskInput