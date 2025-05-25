import React from 'react'
import Header from './Header';
import TaskInput from './TaskInput';
import { TaskProvider } from '../Context/TaskContext';
import InputList from "./InputList";
import Tasklength from './Tasklength';
const Todolist = () => {
  return (
    <div>
        <TaskProvider>
          <Header text="Daily Task Tracker" bgcolor="blue" textcolor="white"/> 
          
    <TaskInput></TaskInput>
    <Tasklength>

    </Tasklength>
    <InputList></InputList>
</TaskProvider>
    </div>
   
  )
}

export default Todolist