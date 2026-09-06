function Task({ title }) {
  return (
    <label htmlFor={title} className="group cursor-pointer">
      <input type="checkbox" name={title} id={title} className="sr-only" />
      <div className="group-has-checked:bg-purple-700 bg-purple-500 transition-colors w-95 h-fit rounded-md border-2 border-white/50 py-3 px-1.5">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
      </div>
    </label>
  );
}
export default Task;
