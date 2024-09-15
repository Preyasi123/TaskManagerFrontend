import React, { useEffect, useState } from 'react'
import { CreateTask, TaskDelete } from '../Services/api'

function TaskSummary({refreshRequired}) {

    const [Task_manager, setTask_manager]=useState()
    
async function handleTaskDelete(Id) {
    // console.log(Id)
    let res = await TaskDelete(Id)
    if (res.status>199 && res.status<300){
        GetAllTask()
    }
}

 async function GetAllTask(){
    let res = await CreateTask()
    if (res.status > 199 && res.status<300){
        setTask_manager(res.data)
    } 
    else{
        console.log("Failed to fetch your data..!")
    }
    console.log(res)
}
useEffect(()=>{
    GetAllTask()
}, [refreshRequired])
  return (
    <div>
        <h1>Task details</h1>
        <div className="container">
            <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'></div>
            {/* {Id,Title,Description,Status,Created_at,Updated_at} */}
            
            <table class="table table-striped table-hover" style={{border: "1px solid rgb(0, 0, 0)"}}>
                <tr>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                    <th>CREATED AT</th>
                    <th>UPDATED AT</th>
                    <th>OPTIONS</th>

                </tr>
                <tbody>
                   {Task_manager && Task_manager.map((m,i)=>(
                    <tr>
                        <td>{m.Title}</td>
                        <td>{m.Description}</td>
                        <td>{m.Status}</td>
                        <td>{m.Created_at}</td>
                        <td>{m.Updated_at}</td>
                        <td>
                            <button className='btn btn-primary'>EDIT</button>
                            <button className='btn btn-danger'
                            onClick={()=>handleTaskDelete(m.Id)}
                            >DELETE</button>
                        </td>
                    
                    </tr>
                   ))} 
                </tbody>
            </table>
            </div>
        </div>
    </div> 
  )
}

export default TaskSummary
