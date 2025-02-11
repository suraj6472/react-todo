import { act, createContext, useReducer, useState } from "react";
import React from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  filters: {},
  updateFilters: () => {},
  isTaskModalOpen: false,
  editableTask: null,
});

export default TaskContext;

const taskUpdateReducer = (state, action) => {
  if (action.identifier == "add_task") {
    state = [
      ...state,
      { ...action.payload, status: "pending", created_at: new Date() },
    ];
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

  if (action.identifier == "delete_task") {
    return [...state].filter((task) => task.id != action.payload);
  }

  return state;
};

export function TaskContextProvider({ children }) {
  const [tasks, dispatchTaskUpdateAction] = useReducer(taskUpdateReducer, []);
  const [filters, setFilter] = useState({ search: "", status: "", sortBy: "" });
  const [isTaskModalOpen, toggleTaskModal] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  const addTask = (taskObj) => {
    dispatchTaskUpdateAction({ identifier: "add_task", payload: taskObj });
  };

  const updateFilters = (filterObj) => {
    setFilter({ ...filters, ...filterObj });
  };

  const taskModalVisibilityToggle = (editableTask = false) => {
    setEditableTask(editableTask);
    toggleTaskModal(!isTaskModalOpen);
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
    isTaskModalOpen,
    taskModalVisibilityToggle,
    editableTask,
  };

  return (
    <TaskContext.Provider value={taskCxt}>{children}</TaskContext.Provider>
  );
}
