import React, { useState } from "react";

export default function EditTask({ editableTask, updateTaskAction }) {
  const [task, setTask] = useState(editableTask.title);
  const updateTaskHandler = () => {
    if (task.length == 0) return;
    const updatedTask = { ...editableTask, title: task };
    updateTaskAction(updatedTask);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex flex-col space-y-4 mb-6">
          <span className="text-right" role="button" onClick={() => updateTaskAction(false)}>X</span>
          <input type="text" id="taskInput" placeholder="Edit the task..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={task} onChange={(e) => setTask(e.target.value)}/>
          <button onClick={updateTaskHandler} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Update Task</button>
        </div>
      </div>
    </div>
  );
}
