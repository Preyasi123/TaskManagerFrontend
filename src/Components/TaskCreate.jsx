import React, { useState } from 'react'
import { AddTask } from '../Services/api'

function TaskCreate({setRefreshRequired}) {
    const [task, setTask] = useState({Title:'', Description:'', Status:'', Created_at:'', Updated_at:''})
  async function handleSubmit(event) {
    event.preventDefault()
    // const now = new Date().toISOString();
    // setTask(prevState => ({
    //   ...prevState,
    //   Created_at: now,
    //   Updated_at: now
    // }));
    let res = await AddTask(task)
    console.log(res)
    console.log(task)
    // console.log('Current Task Manager State:', task);
    
    setRefreshRequired('reload') 
}
    return (
    <div>
      <h1>Create Task</h1>
      <div className='container'>
        <div className='row'>
        <div>
            <div className='col-8 border-3 rounded shadow p-4'>
                <h2>Add New Task</h2>
                <form action='#' onSubmit= {handleSubmit}>
                    <div className='mb-4 d-flex gap-1'>
                        <div className='w-100'>
                            <label htmlFor=''>Title</label>
                            <input type="text"
                             className='form-control'
                             onChange={(e)=>setTask({...task, Title:e.target.value})}
                             />
                        </div>
                    </div>

                    <div className='mb-4 d-flex gap-1'>
                        <div className='w-100'>
                            <label htmlFor=''>Description</label>
                            <input type="text" 
                            className='form-control'
                            onChange={(e)=>setTask({...task, Description:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className='mb-4 d-flex gap-1'>
                        <div className='w-100'>
                            <label htmlFor=''>Status</label>
                            <select
                    id='status'
                    className='form-control'
                    value={task.Status}
                    onChange={(e) =>
                    // console.log('Status Changed to:', e.target.value); // Debug statement
                      setTask({ ...task, Status: e.target.value })
                    }
                  >
                    <option value=''>Select</option>
                    <option value='Completed'>Completed</option>
                    <option value='Incompleted'>Incompleted</option>
                  </select>
                        </div>
                    </div>
                        
                    <div className='mb-4 d-flex gap-1'>
                        <div className='w-100'>
                            <button className='btn btn-success'>Register</button>
                        </div>
                    </div>
                </form>
            </div>  

        </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCreate
