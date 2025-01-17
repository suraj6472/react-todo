import React from "react";

export default function Task({
  deleteTaskAction,
  editTaskAction,
  markTaskAsCompletedAction,
  task,
}) {
  return (
    <>
      <li className={`flex justify-between items-center px-4 py-2 border-gray-300 rounded-lg shadow ${ !task.isCompleted ? 'bg-white': 'bg-green-500'}`}>
        
        <span className={`text-gray-700 ${ task.isCompleted && 'line-through'}`}>{task.title}</span>
        
        <div className="actions flex space-x-2">
          
          <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" onClick={() => editTaskAction(task)} >Edit</button>
          
          <button onClick={() => deleteTaskAction(task.id)} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Del</button>
          
          <input type="checkbox" name="" id="" onChange={() => markTaskAsCompletedAction(task)} checked={task.isCompleted}/>
        </div>
      </li>
    </>
  );
}
