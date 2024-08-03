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
  //  Nextjs13 CRUD con Localstorage, API Context y TailwindCSS 
  // 40:14 / 1:58:47

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