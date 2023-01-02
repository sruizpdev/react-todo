import { useState } from "react";

const FormNewTask = ({ tasksList, setTasksList }) => {
  const [newTask, setNewTask] = useState("");

  const generateID = () => {
    return Date.now().toString(10) + Math.random().toString().substring(2);
  };
  const handleForm = (e) => {
    e.preventDefault();
    const taskObject = {
      id: generateID(),
      name: newTask,
      complete: false,
    };
    setTasksList([...tasksList, taskObject]);
    
  };

  return (
    <form onSubmit={handleForm}>
      <label className="block" htmlFor="newTask">
        Add new task
      </label>
      <input
        className="border-2 p-2 mt-3"
        id="newTask"
        type="text"
        placeholder="Add a new task here"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        className="block bg-blue-700 text-white p-2 rounded-md mt-3"
        type="submit"
        value="Add task"
      />
    </form>
  );
};

export default FormNewTask;
