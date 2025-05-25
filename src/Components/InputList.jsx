import React, { useState } from 'react'
import TaskItem from "./Taskitem";
import { useContext } from 'react';
import Taskcontext from '../Context/TaskContext';
const InputList = ({}) => {
   const {Task}=useContext(Taskcontext);

  if(Task.length===0)
   {
    return <center><p>No Task is here please enter</p></center> 
   }

   return (
    <div className="feedback-list">
        {
            Task.map((item)=>(
               <TaskItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}
export default InputList