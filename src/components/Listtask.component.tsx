'use client'

import { TaskContext } from '@/context/TaskProvider'
import { dateToString } from '@/helpers/dateUtils'
import React, { useContext } from 'react'
import Task from './Task.component'
import useTask from '@/hooks/useTasks'



export default function ListTask() {

  const { listTask }=useTask(true)
  
  return (
    <div className='flex flex-wrap'>
      {
        listTask.map((item) => (
            <Task
              key={item.id}
              task={item}
            />
        ))
      }
    </div>
  )
}

