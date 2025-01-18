import React from 'react'

export default function Task({taskStatus, taskTitle}) {
    let taskContainerClass = '';
    let taskTextClass = '';
    let taskStatusTitle = '';
    switch (taskStatus) {
        case 'pending':
            taskContainerClass = 'bg-blue-100';
            taskTextClass = 'text-blue-500';
            taskStatusTitle = 'Pending';
            break;
        case 'in-progress':
            taskContainerClass = 'bg-yellow-100';
            taskTextClass = 'text-yellow-500';
            taskStatusTitle = 'In progress';
            break;
        case 'completed':
            taskContainerClass = 'bg-green-100';
            taskTextClass = 'text-green-500';
            taskStatusTitle = 'Completed';
            break;
        case 'overdue':
            taskContainerClass = 'bg-red-100';
            taskTextClass = 'text-red-500';
            taskStatusTitle = 'Overdue';
            break;
    }
  return (
    <div className={`p-4 rounded shadow ${taskContainerClass}`}>
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">{taskTitle}</h3>
            <div className="flex gap-2">
                <button className="text-yellow-500" title="In Progress">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </button>
                <button className="text-green-500" title="Completed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </button>
                <button className="text-red-500" title="Overdue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M12 8v4l3 3" />
                    </svg>
                </button>
            </div>
        </div>
        <p className="text-gray-600">Status: <span className={`${taskTextClass} font-semibold`}>{taskStatusTitle}</span></p>
    </div>
  )
}


