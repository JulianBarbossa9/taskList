
import FormTask from "@/components/Formtask.component"
import ListTask from "@/components/Listtask.component"
import { prisma } from "../../lib/prisma"
import List from "@/components/List.component"
import TaskProvider from "@/context/TaskProvider"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';


export default async function Home() {
  
  return (
    <main className="m-5">
     <div className="flex flex-row">
      <TaskProvider>
        <ToastContainer/>
        <List/>
      </TaskProvider>
     </div>
    </main>
  )
}
