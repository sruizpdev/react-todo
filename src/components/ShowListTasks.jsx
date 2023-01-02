import React from "react";
import Task from "./Task";

const ShowListTasks = ({ tasksList }) => {
  return (
    <>
      {tasksList.map((task) => {
        return <Task task={task} />;
      })}
    </>
  );
};

export default ShowListTasks;
