import { useState, useEffect } from "react";
import FormNewTask from "./components/FormNewTask";
import Header from "./components/Header";
import ShowListTasks from "./components/ShowListTasks";

function App() {
  let tasksLS = JSON.parse(localStorage.getItem("tasks"));
  if (!tasksLS) {
    tasksLS = [];
  }
  const [tasksList, setTasksList] = useState([]);

  const fakeTasks = [
    { id: "0001", name: "Limpiar la casa", complete: false },
    { id: "0002", name: "Hacer la compra", complete: false },
    { id: "0003", name: "Dar de comer a los gatos", complete: false },
  ];

  useEffect(() => {
    if (tasksLS) {
      localStorage.setItem("tasks", JSON.stringify(tasksList));
    } else {
      localStorage.setItem("tasks"), JSON.stringify([]);
    }
  }, [tasksLS, tasksList]);

  return (
    <div className="App">
      <Header />

      <div className="container m-auto mt-5">
        <div className="my-5">
          <FormNewTask tasksList={tasksList} setTasksList={setTasksList}/>
        </div>

        <ShowListTasks tasksList={tasksList} />
      </div>
    </div>
  );
}

export default App;
