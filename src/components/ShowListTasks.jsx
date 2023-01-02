import React from "react";
import Task from "./Task";

const ShowListTasks = ({ tasksList, deleteTask }) => {

  return (
    <>
      {tasksList.map((task) => {
        return <Task key={task.id} task={task} deleteTask={deleteTask}/>;
      })}
    </>
  );
};

export default ShowListTasks;
