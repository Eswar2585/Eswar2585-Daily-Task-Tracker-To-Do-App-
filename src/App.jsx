import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';

import Todolist from './Components/Todolist';
import Register from './Pages/Register';

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path='/Todolist'element={<Todolist/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
