import { act, createContext, useReducer, useState } from "react";
import React from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  filters: {},
  updateFilters: () => {},
});

export default TaskContext;

const taskUpdateReducer = (state, action) => {
  if (action.identifier == "add_task") {
    state = [
      ...state,
      { ...action.payload, status: "pending", created_at: new Date() },
    ];
    console.log(state);
    return state;
  }

  if (action.identifier == "update_task_status") {
    return [...state].map((task) =>
      task.id == action.payload.id
        ? { ...task, status: action.payload.status }
        : task
    );
  }

  if (action.identifier == "update_task") {
    const updateTaskObj = action.payload.updateTaskObj;
    return [...state].map((task) => task.id == action.payload.id ? { ...task, ...updateTaskObj } : task  );
  }

  return state;
};

export function TaskContextProvider({ children }) {
  const [tasks, dispatchTaskUpdateAction] = useReducer(taskUpdateReducer, []);
  const [filters, setFilter] = useState({ search: "", status: "", sortBy: "" });

  const addTask = (taskObj) => {
    dispatchTaskUpdateAction({ identifier: "add_task", payload: taskObj });
  };

  const updateFilters = (filterObj) => {
    setFilter({ ...filters, ...filterObj });
  };

  const updateTaskStatus = (taskId, status) => {
    dispatchTaskUpdateAction({
      identifier: "update_task_status",
      payload: { id: taskId, status },
    });
  };

  const deleteTask = (taskId) => {
    dispatchTaskUpdateAction({ identifier: "delete_task", payload: taskId });
  };

  const updateTask = (taskId, updateTaskObj) => {
    dispatchTaskUpdateAction({
      identifier: "update_task",
      payload: { id: taskId, updateTaskObj },
    });
  };

  const taskCxt = {
    tasks,
    filters,
    addTask,
    updateFilters,
    updateTaskStatus,
    deleteTask,
    updateTask,
  };

  return (
    <TaskContext.Provider value={taskCxt}>{children}</TaskContext.Provider>
  );
}
