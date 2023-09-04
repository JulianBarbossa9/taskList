"use client";

import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { cache, use, useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import axios from "axios";
import { TaskContext } from "@/context/TaskProvider";
import { toast } from "react-toastify";
import useTask from "@/hooks/useTasks";
import { ITask } from "@/interfaces/TaskInterface";
import { MoonLoader } from "react-spinners";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface TaskI {
  task: {
    id: string;
    title: string;
    description: string;
  }[];
}

// type statusType = 'pending' | 'completed'

type Props = {
  selectedTask?: Task;
};

const FormTask = ({ selectedTask }: Props) => {
  const router = useRouter();

  const { loading, submitData, editTask } = useTask(!selectedTask);

  const [inputValue, setInputValue] = useState<ITask>(
    selectedTask
      ? {
          title: selectedTask.title,
          description: selectedTask?.description ?? "",
          status: Boolean(selectedTask.status),
        }
      : {
          title: "",
          description: "",
          status: false,
        }
  );

  useEffect(() => {
    if (selectedTask) {
      setInputValue({
        title: selectedTask.title,
        description: selectedTask?.description ?? "",
        status: Boolean(selectedTask.status),
      });
    }
  }, [selectedTask]);

  return (
    <div className="md:w-1/2 lg:2-2/5 mx-5 ">
      {selectedTask && (
        <div
          className="text-[30px] self-start hover:cursor-pointer mb-3"
          onClick={() => router.push("/")}
        >
          <AiOutlineArrowLeft />
        </div>
      )}
      <h2 className="font-white text-3xl text-left font-extrabold mb-5">
        {selectedTask ? "Edit Task" : " Add new task"}
      </h2>

      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
        onSubmit={async (event) => {
          event.preventDefault();
          if (selectedTask) {
            editTask(inputValue, selectedTask.id);
            router.push("/");
            return;
          }
          await submitData(inputValue, setInputValue);
        }}
      >
        {/* todo: ERROR */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-black uppercase font-bold"
          >
            Tittle of Task
          </label>
          <input
            type="text"
            placeholder="Add new task"
            value={inputValue.title}
            id="title"
            onChange={(event) =>
              setInputValue({ ...inputValue, title: event.target.value })
            }
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  text-gray-700"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-black uppercase rounded-md font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Do a task list for gudfy"
            value={inputValue.description}
            onChange={(event) =>
              setInputValue({ ...inputValue, description: event.target.value })
            }
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-gray-700"
          />
          {selectedTask && (
            <div className="flex justify-center items center mt-4 gap-4">
              <label
                htmlFor=""
                className="block text-black uppercase rounded-md font-bold"
              >
                Completed
              </label>
              <input
                checked={inputValue.status}
                type="checkbox"
                className="flex"
                onChange={(e) => {
                  setInputValue({ ...inputValue, status: e.target.checked });
                }}
              />
            </div>
          )}

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mt-5"
            disabled={loading}
            value={selectedTask ? "Edit Task" : "Add new Task"}
          />
        </div>
      </form>
    </div>

  );
};

export default FormTask;
