import { dateToString } from "@/helpers/dateUtils";
import React, { useContext, useState } from "react";
import { Task } from "@prisma/client";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { BiCheckboxChecked, BiCheckboxMinus } from "react-icons/bi";
import Link from "next/link";
import { TaskContext } from "@/context/TaskProvider";
import useTask from "@/hooks/useTasks";
import { ITask } from "@/interfaces/TaskInterface";

type Props = {
  task: Task;
};


export default function Task({ task }: Props) {
  const { deleteTask, editTask } = useTask(true);
 
  const [ isChecked, setIsChecked ] = useState(task.status)

  const handleCheckboxClic = () => {
    setIsChecked(!isChecked)
    const updateTask = {
      ...task,
      status: !isChecked,
      description: task.description ?? undefined
    }
    editTask(updateTask, task.id)
    
  }

  return (
    <div className="flex">
     
      <div
        key={task.id}
        className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl "
        >
        <input
          id="green-checkbox"
          type="checkbox"
          value={''}
          checked={isChecked}
          onChange={handleCheckboxClic}
          className="w-6 h-6 text-green-600  border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 mb-4"
          // onClick={() => editTask(task, task.id)}
        />

        
        <h3 className="font-bold mb-3 text-gray-700 uppercase">
          Title: {""}
          <span className="font-normal normal-case">{task.title}</span>
        </h3>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Description: {""}
          <span className="font-normal normal-case">{task.description}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase flex">
          Status: {""}
          <span
            className={`font-bold normal-case ${
              task.status
                ? "text-emerald-500"
                : "text-orange-500 underline underline-offset-2"
            }`}
          >
            {task.status ? " Completed" : " Pending"}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Date: {""}
          <span className="font-normal normal-case">
            {dateToString(task.createdAt)}
          </span>
        </p>

        <div className="flex justify-between mt-10">
          <Link
            href={{ pathname: `/task/${task.id}` }}
            className="py-2 px-10 mr-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >
            <AiOutlineEdit />
          </Link>

          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => deleteTask(task.id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
