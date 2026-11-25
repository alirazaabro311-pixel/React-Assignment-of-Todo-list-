
import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // task
  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  // Delete task
  function deleteTask(index) {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Todo List
        </h1>

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 w-full rounded-lg mb-4"
        />

        {/* Add button */}
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600"
        >
          Add Task
        </button>

        {/* Display tasks */}
        <ul className="mt-6">

          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg"
            >

              <span>{item}</span>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default App;
