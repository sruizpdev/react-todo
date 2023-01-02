const Task = ({ task, deleteTask }) => {
  const { id, name } = task;

  return (
    <div className="flex justify-between bg-zinc-500 my-4 p-3 text-white">
      {name}{" "}
      <input
        type="submit"
        value="x"
        onClick={() => {
          deleteTask(id);
        }}
      />
    </div>
  );
};

export default Task;
