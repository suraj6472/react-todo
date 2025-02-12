import React, { useState, useRef, useContext } from "react";
import TaskContext from "../store/TaskContext";

function TaskModal() {

  const taskCtx = useContext(TaskContext)

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const fileInputValue = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
    if (fileInputValue.current) {
      fileInputValue.current.value = "";
    }
  };

  const addTaskHandler = () => {
    const taskObj = {
      id: new Date().getTime(),
      title,
      dueDate,
      description,
      image,
    };
    taskCtx.addTask(taskObj)
    setTitle("");
    setDueDate("");
    setDescription("");
    clearImage();
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button className="fixed bottom-16 right-16 px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600" onClick={() => setIsOpen(true)}>
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Add New Task</h2>
            <div className="mt-4 text-gray-600">
              <form action="#" method="POST" encType="multipart/form-data">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Task</label>
                  <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full border-2 border-grey rounded-md p-2" placeholder="Enter some text" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Date & Time</label>
                  <input type="datetime-local" name="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full border-2 border-grey rounded-md p-2" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Description</label>
                  <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} rows="5" className="w-full border-2 border-grey rounded-md p-2" placeholder="Write something here..."></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Image</label>
                  {!!image && <img src={image} alt="Selected" className="mb-2 w-20 h-20 rounded-md border border-gray-300"/>}
                  <input type="file" onChange={handleImageChange} name="image" ref={fileInputValue} accept="image/*" className="w-full border-2 border-grey rounded-md p-2" />
                </div>

                <div>
                  <button type="button" onClick={addTaskHandler} className="w-full font-medium py-2 px-4 mb-2 rounded-md shadow bg-blue-500 text-white hover:bg-blue-600" >
                    Submit
                  </button>
                  <button onClick={() => setIsOpen(false)} type="button" className="w-full font-medium py-2 px-4 rounded-md shadow text-white bg-red-500 hover:bg-red-600">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskModal;
