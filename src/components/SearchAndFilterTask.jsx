import React from 'react'

export default function SearchAndFilterTask() {
  return (
    <section className="mb-4">
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                placeholder="Search tasks" 
                className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <select 
                className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Filter by Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
            </select>
            <select 
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
