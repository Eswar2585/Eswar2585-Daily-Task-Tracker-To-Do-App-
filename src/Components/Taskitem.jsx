
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import React, { useContext, useState } from "react"

import Taskcontext from "../Context/TaskContext";
const FeedbackItem = ({ item }) => {
  const{deleteTask,editTask,completetask}=useContext(Taskcontext)
  return (
    <div className="card">
      <div className="text-display">

        {item.text}
        <button className="delete" onClick={() =>deleteTask(item.id) }>
          <FaRegTrashAlt color="red"/>
        </button>
        <input type="checkbox" className="Complete" onClick={()=>completetask(item.id)}/>
        <button className="edit" onClick={() => editTask(item)}>
       <MdModeEditOutline  color="green"/>
        </button>
      </div>


    </div>




  )
}

export default FeedbackItem