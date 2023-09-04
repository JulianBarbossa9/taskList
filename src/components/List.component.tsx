"use client"

import React, { useContext, useEffect, useState } from 'react'
import FormTask from './Formtask.component'
import ListTask from './Listtask.component'
import { Task } from '@prisma/client'
import axios from 'axios'
import { TaskContext } from '@/context/TaskProvider'
import { MoonLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import useTask from '@/hooks/useTasks'

type Props = {}

export default function List({}: Props) {
  
  const{loading}=useTask()

  return (
    <>
    <div className='w-screen m-8'>
      <div className='flex justify-center'>
        {
          loading ? (
            <div >
              <MoonLoader loading color="#5a44e7"/>
            </div>
          )
          :
          <>
            <div className='flex justify-center items-center  w-2/5'>
              <FormTask/>
            </div>
            <div className='w-3/5'>
              <ListTask/>
            </div>
        
          </>
        }
      </div>
    </div>
    </>
  )
}