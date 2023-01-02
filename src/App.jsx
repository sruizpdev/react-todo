import { useState, useEffect } from "react";
import FormNewTask from "./components/FormNewTask";
import Header from "./components/Header";
import ShowListTasks from "./components/ShowListTasks";

function App() {
  let tasksLS = JSON.parse(localStorage.getItem("tasks"));

  if (!tasksLS) {
    tasksLS = [];
  }
  const [tasksList, setTasksList] = useState(tasksLS);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  const deleteTask = (id) => {
    const updateTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(updateTasks);
  };
  
  const updateTask = (id) => {
    console.log("updating task...", id);
  };


  return (
    <div className="App">
      <Header />

      <div className="container m-auto mt-5">
        <div className="my-5">
          <FormNewTask tasksList={tasksList} setTasksList={setTasksList} />
        </div>

        <ShowListTasks tasksList={tasksList} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
