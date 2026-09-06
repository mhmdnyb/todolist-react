import { useRef } from "react";
function TaskInput({ tasks, setTask }) {
  const inputRef = useRef();
  function addTask() {
    setTask([...tasks, inputRef.current.value]);
  }
  return (
    <div className="flex  gap-x-3">
      <div className="w-85 rounded-md ring-1 ring-white/50 has-focus:ring-2 has-focus:ring-white/60">
        <input
          ref={inputRef}
          type="text"
          name="taskInput"
          id="taskInput"
          className="rounded-md w-full focus:outline-0 py-2 pl-1"
          placeholder="Enter task name"
        />
      </div>
      <button
        className="bg-linear-to-br from-purple-500 to-purple-400 px-2 py-1 rounded-sm cursor-pointer"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
}
export default TaskInput;
