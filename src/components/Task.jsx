const Task = ({ task }) => {
  const { name, complete } = task;
  return (
    <div>
      {name} {!complete ? "no completada" : "completada"}
    </div>
  );
};

export default Task;
