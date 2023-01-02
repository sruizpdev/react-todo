import { useState, useEffect } from "react";
import FormNewTask from "./components/FormNewTask";
import Header from "./components/Header";
import ShowListTasks from "./components/ShowListTasks";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const fakeTasks = [
    { name: "Limpiar la casa", complete: false },
    { name: "Hacer la compra", complete: false },
    { name: "Dar de comer a los gatos", complete: false },
  ];

  useEffect(() => {
    setTasksList(fakeTasks);
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="container m-auto mt-5">
        <div className="my-5">
          <FormNewTask />
        </div>

        <ShowListTasks tasksList={tasksList} />
      </div>
    </div>
  );
}

export default App;
