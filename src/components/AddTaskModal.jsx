import React, { useState } from "react";

function AddTaskModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button
        className="fixed bottom-16 right-16 px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Modal Title</h2>
            <p className="mt-4 text-gray-600">
              This is a simple modal. You can add any content here.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTaskModal;
