const ToDoList = () => {
  const todos = [];
  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      <h1 className="text-2xl">TODO</h1>
      {todos.length === 0 && <div>Add things to do ...</div>}
      <button className="ml-auto w-fit rounded bg-stone-500 px-4 py-2">
        Add todo
      </button>
    </div>
  );
};

export default ToDoList;
