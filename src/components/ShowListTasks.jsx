import React from "react";
import Task from "./Task";

const ShowListTasks = ({ tasksList }) => {
  return (
    <>
      {tasksList.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </>
  );
};

export default ShowListTasks;
