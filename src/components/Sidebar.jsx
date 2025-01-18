import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-white p-4 rounded shadow overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Summary</h2>
        <ul className="space-y-2">
            <li className="flex justify-between text-gray-600">
            <span>Pending</span>
            <span>5</span>
            </li>
            <li className="flex justify-between text-gray-600">
            <span>In Progress</span>
            <span>3</span>
            </li>
            <li className="flex justify-between text-gray-600">
            <span>Completed</span>
            <span>8</span>
            </li>
            <li className="flex justify-between text-gray-600">
            <span>Overdue</span>
            <span>2</span>
            </li>
        </ul>
    </aside>
    )
}


