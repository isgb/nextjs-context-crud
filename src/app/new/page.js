"use client";

import { useTasks } from "@/context/TasksContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Page = ({ params }) => {
  // const [task,setTask] = useState({
  //   title:"",
  //   description:""
  // });

  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // const handleChange = (e) => {
  //   setTask({...task, [e.target.name]: e.target.value})
  // }

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      // console.log("editando...");
      updateTask(params.id, data);
      toast.success("task updated succedfully");
    } else {
      createTask(data.title, data.description);
      toast.success("task created succedfully");
    }
    router.push("/");
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(params.id){
  //     // console.log("editando...");
  //     updateTask(params.id,task)
  //   }else{
  //     createTask(task.title, task.description)
  //   }
  //   router.push('/');
  // }

  useEffect(() => {
    if (params.id) {
      const taksFound = tasks.find((task) => task.id === params.id);
      if (taksFound) {
        // setTask({
        //   title:taksFound.title,
        //   description:taksFound.description})
        setValue("title", taksFound.title);
        setValue("description", taksFound.description);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      {/* // <form onSubmit={handleSubmit}> */}
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <h2>New Task</h2>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          // name='title'
          placeholder="Write a title"
          // onChange={handleChange}
          // value={task.title}
          {...register("title", { required: true })}
        />
        {errors.title && <span className="block text-red-400 mb-2">this field is required</span>}
        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          // name='description'
          placeholder="Write a description"
          // onChange={handleChange}
          // value={task.description}
          {...register("description", { required: true })}
        ></textarea>

        {errors.description && <span className="block text-red-400 mb-2">this field is required</span>}
        <button 
          className="bg-green-500 hover:bg-green-400 px-py-2 rounded-sm disabled:opacity-30"
        >Save</button>
      </form>
    </div>
  );
};

export default Page;
