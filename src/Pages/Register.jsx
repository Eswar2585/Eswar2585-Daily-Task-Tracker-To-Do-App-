import React from 'react'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const nagivate=useNavigate()
    const handlesubmit=()=>
    {
        nagivate("/")
    }
  return (
     <div className='Login-section'>


    <div className='Logincard'>
       
        <form className='Login'>
            <h1>Register</h1>
            <div className='inputs'>
             <label>Email :</label> <input type="Email"  placeholder='Enter your Email' />
           
             </div>
              <div className='inputs'>
            <label >Password :</label> <input type='password' placeholder='Password'/> 
           </div>
              <div className='inputs'>
            <label> Confirm Password :</label> <input type='password' placeholder='Password'/> 
           </div>
             <button onClick={handlesubmit}> Submit </button>
           
            </form>
            </div>
                </div>
  )
}

export default Register