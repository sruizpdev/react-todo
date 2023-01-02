const Task = ({ task }) => {
  const { id, name } = task;

  
  return (
    <div className="flex justify-between bg-zinc-500 my-4 p-3 text-white">
      {name} <input type="submit" value="x" onClick={()=>{console.log('pulsado para eliminar')}} />
    </div>
  );
};

export default Task;
