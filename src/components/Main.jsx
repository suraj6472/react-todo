import React from 'react'
import SearchAndFilterTask from './SearchAndFilterTask'
import Tasks from './Tasks'

export default function Main() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Task Management</h1>
            <p className="text-gray-600">Keep track of your tasks effortlessly</p>
        </header>
        <SearchAndFilterTask />    
        <Tasks />
    </div>
  )
}
