const Task = ({ task }) => {
  const { id, name, complete } = task;
  return (
    <div>
      {id} {name} {!complete ? "no completada" : "completada"}
    </div>
  );
};

export default Task;
