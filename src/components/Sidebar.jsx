import React from 'react'
import { useContext } from 'react'
import TaskContext from '../store/TaskContext'

export default function Sidebar() {
const { tasks } = useContext(TaskContext)

  return (
    <aside className="w-1/4 bg-white p-4 rounded shadow overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Summary</h2>
        <ul className="space-y-2">
            <li className="flex justify-between text-gray-600">
                <span>Pending</span> <span>{tasks.filter(task => task.status == 'pending').length}</span>
            </li>
            <li className="flex justify-between text-gray-600">
                <span>In Progress</span> <span>{tasks.filter(task => task.status == 'in-progress').length}</span>
            </li>
            <li className="flex justify-between text-gray-600">
                <span>Completed</span> <span>{tasks.filter(task => task.status == 'completed').length}</span>
            </li>
            <li className="flex justify-between text-gray-600">
                <span>Overdue</span> <span>{tasks.filter(task => task.status == 'overdue').length}</span>
            </li>
        </ul>
    </aside>
    )
}


