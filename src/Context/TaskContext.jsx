import axios from 'axios';
import { children, createContext,useState,useEffect } from "react";
 
const Taskcontext=createContext();
 
export const TaskProvider=({children})=>{
    const [Task,setTask]=useState([

 ])
   useEffect(()=>{
         fetchTask();
},[])
 const fetchTask=async()=>{
       const response = await axios.get("http://localhost:3000/posts");
  const sorted = [...response.data].sort((a, b) => b.id - a.id); // Sort tasks descending
  setTask(sorted);
    }
 const addTask= async (newTask)=>
 {
       const response = await axios.post("http://localhost:3000/posts", newTask);
    //  newTask.id = Math.floor(Math.random() * 10000);
    setTask([response.data,...Task])
 }
  const deleteTask=async  (id)=>{
    if(window.confirm("Are you sure to delete")){
        await axios.delete(`http://localhost:3000/posts/${id}`);
  setTask(Task.filter((item) => item.id !==id)
  )
 }
}
  const completetask=(id)=>{
    if(window.confirm("Are you completed the task")){
  setTask(Task.filter((item) => item.id !==id)
  )
 }
}
  
  const [TaskEdit,setTaskEdit]=useState({
        item:{},
        edit:false
    })
   const editTask=(item)=> {
        setTaskEdit({
            item: item,
            edit:true
        })
    }
    const updateTask= async  (id,updItem)=>{
        const response = await axios.put(`http://localhost:3000/posts/${id}`, updItem);
      setTask(
      Task.map((item) =>(item.id ===id) ? {...item, ...updItem}:item)

      )
      
    }

 return <Taskcontext.Provider value={{Task,TaskEdit,addTask,deleteTask,completetask,editTask,setTaskEdit,updateTask}} >
    {children}
 </Taskcontext.Provider>

}
export default Taskcontext;