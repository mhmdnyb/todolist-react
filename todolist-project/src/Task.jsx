function Task({ title }) {
  return (
    <label htmlFor={title} className="group w-95 h-30 cursor-pointer">
      <input type="checkbox" name={title} id={title} className="sr-only" />
      <div className="group-has-checked:bg-fuchsia-700 bg-fuchsia-500 opacity-80 backdrop-blur-2xl transition-colors w-95 h-30 rounded-md border-2 border-white/50">
        <h1>{title}</h1>
      </div>
    </label>
  );
}
export default Task;
