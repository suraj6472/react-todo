import { act, createContext, useReducer } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
});

import React from "react";

const taskUpdateReducer = (state, action) => {
    if(action.identifier == 'add_task') {
        console.log([...state, action.payload])
        return [...state, action.payload]
    }

    return state;
};

export function TaskContextProvider({ children }) {
  const [tasks, dispatchTaskUpdateAction] = useReducer(taskUpdateReducer, []);

  const addTask = (taskObj) => {
    dispatchTaskUpdateAction({
        identifier: 'add_task',
        payload: taskObj
    })
  };
    const taskCxt = {
      tasks: [],
      addTask,
    };
  return (
    <TaskContext.Provider value={taskCxt}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;
