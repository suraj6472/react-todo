import React from 'react'
import moment from 'moment';
import { useContext } from 'react';
import TaskContext from '../store/TaskContext';

export default function Task({task}) {
    const { updateTaskStatus, deleteTask, editTask } = useContext(TaskContext);
    let taskContainerClass = '';
    let taskTextClass = '';
    let taskStatusTitle = '';
    switch (task.status) {
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
            <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
            <div className="flex gap-2">
                <button className="text-yellow-500" title="In Progress" onClick={() => updateTaskStatus(task.id, 'in-progress')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </button>
                <button className="text-green-500" title="Completed" onClick={() => updateTaskStatus(task.id, 'completed')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </button>
                <button className="text-red-500" title="Overdue" onClick={() => updateTaskStatus(task.id, 'overdue')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M12 8v4l3 3" />
                    </svg>
                </button>
                <button className="text-red-500" title="Delete" onClick={() => deleteTask(task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <button className="text-blue-500" title="Edit" onClick={() => editTask(task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h2m-1 0v12m0-12l3.5 3.5M19.5 21H4.5A2.5 2.5 0 012 18.5V8.5A2.5 2.5 0 014.5 6H9m10 5l-6-6" />
                    </svg>
                </button>

            </div>
        </div>
        <p className='mt-2'>
            {task.description.length > 50 ? task.description.substring(0, 50) + '...' : task.description}
        </p>
        <p className="text-gray-600 mt-2">
            <span>Status: <span className={`${taskTextClass} font-semibold`}>{taskStatusTitle}</span></span>
            <span className='float-end'>Due Date: <span className={`${taskTextClass} font-semibold`}>{moment(task.dueDate).format('MMM D, YYYY h:mm A')}</span></span>
        </p>
    </div>
  )
}


