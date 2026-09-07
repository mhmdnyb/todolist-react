function Task({ title, tasks, setTask }) {
  function removeItem() {
    setTask(
      tasks.filter((task) => {
        if (task != title) {
          return task;
        }
      }),
    );
  }
  return (
    <label htmlFor={title} className="group cursor-pointer">
      <input type="checkbox" name={title} id={title} className="sr-only" />
      <div className="flex items-center justify-between group-has-checked:bg-purple-700 bg-purple-500 transition-colors w-95 h-fit rounded-md border-2 border-white/50 py-3 px-2">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
        <h2
          className="bg-linear-to-bl from-white/40 to-white/30 backdrop-blur-2xl p-1 rounded-md border border-white/30 shadow-black/30 shadow-xs"
          onClick={removeItem}
        >
          x
        </h2>
      </div>
    </label>
  );
}
export default Task;
