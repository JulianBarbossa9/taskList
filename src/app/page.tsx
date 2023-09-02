'use client';

import { useState } from "react";
import { prisma } from "../../lib/prisma";

interface FormData {
  title: string
  description: string
  id: string
}


export default async function Home() {
  
  const [ inputValue, setInputValue ] = useState<FormData>({title: '', description: '', id: ''})

    let taskList = await prisma.task.findMany()
    console.log(taskList)

  // async function addTask(data:FormData) {
  //   try {
  //     fetch('http://localhost:3000/api/task', {
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'POST'
  //     }).then(() => setInputValue({title:'', description: '', id: '' }))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleSubmit =async (data:FormData) => {
  //   try {
  //     addTask(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-5'>List of Task</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          // handleSubmit(inputValue)
        }}
        className="w-auto min-w-[20%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input 
          type="text"
          placeholder="Add new Task"
          value={inputValue.title}
          onChange={e => setInputValue({...inputValue, title: e.target.value })}
          className="border-2 rounded text-black border-gray-600 p-1 mt-3"
        />
        <textarea 
          placeholder="Description"
          value={inputValue.description}
          onChange={e => setInputValue({...inputValue, description: e.target.value})}
          className="border-2 rounded border-gray-600 p-1 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-3">Add Task</button>
      </form>
    </div>
  )
}
