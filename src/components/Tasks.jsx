import React from "react";
import Task from "./Task";
import { useContext } from "react";
import TaskContext from "../store/TaskContext";

export default function Tasks() {
  const { tasks, filters } = useContext(TaskContext);

  let filteredTasks  = tasks;

  if(filters.status && filteredTasks.length) {
    filteredTasks = filteredTasks.filter(task => task.status == filters.status);
  }

  if(filters.search && filteredTasks.length) {
    filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(filters.search.toLowerCase()));
  }

  if(filters.sort && filteredTasks.length) {
    if(filters.sort == "name") {
      filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if(filters.sort == "created_at") {
      filteredTasks.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if(filters.sort == "due_date") {
      filteredTasks.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <div className="grid grid-cols-2 gap-4">
        {filteredTasks.map((task) => <Task task={task} key={task.id} /> )}
      </div>
    </section>
  );
}
