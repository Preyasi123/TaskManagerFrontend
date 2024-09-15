import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import TaskCreate from '../Components/TaskCreate'
import TaskSummary from '../Components/TaskSummary'
function Index() {
  const [refreshRequired, setRefreshRequired] =  useState('')
  return (
    <div>
      <Navbar></Navbar>
      <TaskCreate setRefreshRequired={setRefreshRequired}></TaskCreate>
      <TaskSummary refreshRequired={refreshRequired}></TaskSummary>
    </div>
  )
}

export default Index
