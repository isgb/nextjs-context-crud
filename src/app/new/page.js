'use client'

import { useTasks } from '@/context/TasksContext';
import React, { useState } from 'react'

const Page = () => {

  const [task,setTask] = useState();
  const {createTask} = useTasks()

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' placeholder='Write a title'
        onChange={handleChange}
      />
      <textarea 
        name='description' 
        placeholder='Write a description'
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  )
}

export default Page