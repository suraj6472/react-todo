import EditTask from "./components/EditTask";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [editableTask, setEditableTask] = useState(null);

  const deleteTaskAction = (taskId) => {
    const updatedTaskList = tasks.filter((task) => task.id != taskId);
    setTasks(updatedTaskList);
  };

  const editTaskAction = (task) => {
    const currentTask = tasks.find((ts) => ts.id == task.id);
    if (currentTask) {
      setEditableTask(currentTask);
    }
  };

  const updateTaskAction = (updatedTask) => {
    if(updatedTask === false) {
      setEditableTask(null);
      return false
    }
    const updatedTasksList = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, title: updatedTask.title } : task
    );
    setTasks(updatedTasksList);
    setEditableTask(null);
  };

  const addTaskAction = (task) => {
    const newTask = { id: new Date().getTime(), title: task, isCompleted: false };
    const updatedTasksList = [...tasks, newTask];
    setTasks(updatedTasksList);
  };

  const markTaskAsCompletedAction = (task) => {
    const updatedTasksList = tasks.map((ts) => ts.id === task.id ? { ...task, isCompleted: !task.isCompleted } : task );
    setTasks(updatedTasksList);
  };

  return (
    <>
      <div className="todo-container mx-auto max-w-lg p-6 bg-gray-100 rounded-lg shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>
        
        <AddTask addTaskAction={addTaskAction}></AddTask>
        
        {!!editableTask && <EditTask updateTaskAction={updateTaskAction} editableTask={editableTask} /> }
        
        <div className="task-container max-h-full overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow">
          <ul id="taskList" className="space-y-4">
            {tasks.length ? tasks.map(task => <Task key={task.id} deleteTaskAction={deleteTaskAction} editTaskAction={editTaskAction} markTaskAsCompletedAction={markTaskAsCompletedAction} task={task}></Task>) : <h1>No task added</h1>}
          </ul>
        </div>
        
      </div>
    </>
  );
}

export default App;
