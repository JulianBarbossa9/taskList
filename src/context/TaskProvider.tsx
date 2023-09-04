"use client"

import ListTask from '@/components/Listtask.component'
import { Task } from '@prisma/client'
import React, { ReactNode, createContext, useState } from 'react'

type Props = {
  children:ReactNode
}

export interface TaskContextInterface {
  listTask:Task[]
  setListTask?:(task:Task[])=>void
}

export const TaskContext=createContext<TaskContextInterface>({listTask:[]})


export default function TaskProvider({children}: Props) {

  const [ listTask, setListTask ] = useState<Task[]>([])


  return (
    <TaskContext.Provider value={{
      listTask,
      setListTask,
    }}>{children}</TaskContext.Provider>
  )
}




