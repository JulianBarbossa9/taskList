import { TaskContext } from "@/context/TaskProvider"
import { ITask } from "@/interfaces/TaskInterface"
import { Task } from "@prisma/client"
import axios from "axios"
import {useContext, useEffect, useState} from "react"
import { toast } from "react-toastify"

export interface useTasxResponse{
  getTask:Promise<Task[]>
  createTask:Promise<Task>

}



const useTask=(ignoreFetch?:boolean)=>{
  
  const {listTask,setListTask}=useContext(TaskContext)
  const [loading,setLoading]=useState(listTask.length===0?true:false)

  const getTasks=async()=>{
    try {
      setLoading(true)
      const res =await axios.get("http://localhost:3000/api/task")
      setListTask!(res.data)
      
    } catch (error) {
      console.error(error)
      toast.error('Error connecting to DB')
      
    } finally{
      setLoading(false)
    }
  }

  const submitData =async (data: ITask,setInputValue:(tasl:ITask)=>void) => {
    
    try {
      setLoading(true)
      const body = data
      const createTask = axios.post("http://localhost:3000/api/task",body)
      toast.promise(createTask,{
        pending:"Creating Task",
        error:"Error creating the task, please call a developer D:",
        success:"Task created succesfully"
      }).then(res=>{
        setListTask!([...listTask,res.data])
      }).finally(()=>{
        setInputValue({description: '', title: '', status: false})
      })
      // router.refresh()
      
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const editTask=async (data:ITask,id:string)=>{
    try {
      setLoading(true)
      const editTask = axios.patch(`http://localhost:3000/api/task/${id}`,data)
      toast.promise(editTask,{
        pending:"Updating Task",
        error:"Error updating the task, please call a developer D:",
        success:"Task updated succesfully"
      }).then(res=>{
        const newTasks=listTask.slice()
        const index=newTasks.findIndex(item=>item.id===res.data.id)
        newTasks.splice(index,1,res.data)
        setListTask!(newTasks)
      }).finally(()=>{
        setLoading(false)
      })
      
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const deleteTask=async (id:string)=>{
    try {
      setLoading(true)
      const deleteTask = axios.delete(`http://localhost:3000/api/task/${id}`)
      toast.promise(deleteTask,{
        pending:"Deleting Task",
        error:"Error deleting the task, please call a developer D:",
        success:"Task delete succesfully"
      }).then(res=>{
        const newTasks=listTask.slice()
        const index=newTasks.findIndex(item=>item.id===res.data.id)
        newTasks.splice(index,1)
        setListTask!(newTasks)
      }).finally(()=>{
        setLoading(false)
      })
      
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(()=>{
    if(loading&& !ignoreFetch){
      getTasks()
    }else{
      setLoading(false)
    }
  },[])

  return{
    loading,listTask,setListTask,submitData,editTask, deleteTask
  }




}

export default useTask