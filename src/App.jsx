import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import AddTaskModal from "./components/AddTaskModal";
import { TaskContextProvider } from "./store/TaskContext";
function App() {
  return (
    <TaskContextProvider>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex h-screen">
          <Sidebar />
          <Main />
          <AddTaskModal />
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
