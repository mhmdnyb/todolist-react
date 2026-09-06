import { useState } from "react";
import TaskInput from "./TaskInput";
import Task from "./Task";
function App() {
  const [tasks, setTask] = useState([]);
  return (
    <>
      <TaskInput tasks={tasks} setTask={setTask}></TaskInput>
      <div className="flex flex-col gap-y-3">
        {tasks.map((task) => {
          return <Task title={task}></Task>;
        })}
      </div>
    </>
  );
}

export default App;
