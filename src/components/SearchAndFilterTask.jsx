import React from 'react'
import { useContext } from 'react'
import TaskContext from '../store/TaskContext'

export default function SearchAndFilterTask() {
    const { updateFilters } = useContext(TaskContext);
  return (
    <section className="mb-4">
        <div className="flex items-center gap-4">
            <input onChange={(e) => updateFilters({ search: e.target.value })}
                type="text" 
                placeholder="Search tasks" 
                className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <select onChange={(e) => updateFilters({ status: e.target.value })}
                className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Filter by Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
            </select>
            <select onChange={(e) => updateFilters({ sort: e.target.value })}
                className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="created_at">Created Date</option>
                <option value="due_date">Due Date</option>
            </select>
        </div>
    </section>
  )
}
