'use client'

import { createContext,useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
}

export const TaskProvider = ({children}) => {
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title:"my task",
            description: "some task"
        },
        {
            id: 2,
            title:"my first task",
            description: "some first task"
        },
        {
            id: 3,
            title:"my second task",
            description: "some second task"
        },
        ])

    const createTask = (title, description) => 
        setTasks([
            ...tasks,{
                title,
                description,
                id:10
            }
        ])
    
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}