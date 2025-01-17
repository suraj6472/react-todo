import React from "react";
import { useState } from "react";
export default function AddTask({addTaskAction}) {
  const [task, setTask] = useState('');
  const addTaskHandler = () => {
    if(task.length == 0) return;
    addTaskAction(task)
    setTask('')
  }

  return (
    <>
      <div className="flex items-center space-x-4 mb-6">
        
        <input type="text" id="taskInput" placeholder="Add a new task..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={task} onInput={(e) => setTask(e.target.value)}/>
        
        <button onClick={addTaskHandler} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Task</button>
      
      </div>
    </>
  );
}
