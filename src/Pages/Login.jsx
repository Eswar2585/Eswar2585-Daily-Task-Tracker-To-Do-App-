import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const handleSubmit= ()=>
    {
        navigate("/Todolist")
    }
    const handleRegister= ()=>
    {
        navigate("/Register")
    }

  return (
    <div className='Login-section'>


    <div className='Logincard'>
       
        <form className='Login'>
            <h1>Login</h1>
            <div className='inputs'>
             <label>Email :</label> <input type="Email"  placeholder='Enter your Email' />
           
             </div>
              <div className='inputs'>
            <label >Password :</label> <input type='password' placeholder='Password'/> 
           </div>
             
             <button onClick={handleSubmit}> Submit </button>
             <button onClick={handleRegister}>Register </button>
            </form>
            </div>
                </div>
  )
}

export default Login