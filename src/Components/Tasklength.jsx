import React, { useContext } from 'react'

import Taskcontext from '../Context/TaskContext'

const Tasklength = () => {
  const {Task}=useContext(Taskcontext)
  return (
  <div className="container">
    <h5 className='length'>Length : {Task.length}</h5>
  </div>
  )
}

export default Tasklength