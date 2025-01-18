import React from 'react'
import Task from './Task'

export default function Tasks() {
  return (
    <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tasks</h2>
        <div className="grid grid-cols-2 gap-4">
            <Task taskStatus="pending" taskTitle="Task 1" />
            <Task taskStatus="completed" taskTitle="Task 2" />
            <Task taskStatus="in-progress" taskTitle="Task 3" />
            <Task taskStatus="overdue" taskTitle="Task 4" />
            <Task taskStatus="pending" taskTitle="Task 1" />
            <Task taskStatus="completed" taskTitle="Task 2" />
            <Task taskStatus="in-progress" taskTitle="Task 3" />
            <Task taskStatus="overdue" taskTitle="Task 4" />
            <Task taskStatus="pending" taskTitle="Task 1" />
            <Task taskStatus="completed" taskTitle="Task 2" />
            <Task taskStatus="in-progress" taskTitle="Task 3" />
            <Task taskStatus="overdue" taskTitle="Task 4" />
            <Task taskStatus="pending" taskTitle="Task 1" />
            <Task taskStatus="completed" taskTitle="Task 2" />
            <Task taskStatus="in-progress" taskTitle="Task 3" />
            <Task taskStatus="overdue" taskTitle="Task 4" />
        </div>
    </section>
  )
}
