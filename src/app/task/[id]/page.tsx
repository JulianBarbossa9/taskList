"use client";

import FormTask from "@/components/Formtask.component";
import { TaskContext } from "@/context/TaskProvider";
import useTask from "@/hooks/useTasks";
import React, { FC, useContext, useMemo } from "react";
import { MoonLoader } from "react-spinners";

interface pageProps {
  params: { id: string };
}

const EntryTask: FC<pageProps> = ({ params }) => {
  const { listTask, loading } = useTask();
  const selectedTask = useMemo(() => {
    return listTask.find((item) => item.id === params.id);
  }, [listTask]);

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        {loading ? <MoonLoader /> : <FormTask selectedTask={selectedTask} />}
      </div>
    </div>
  );
};

export default EntryTask;
