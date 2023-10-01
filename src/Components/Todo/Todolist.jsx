import React, { useState } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={handleTaskChange}
        />
        <div>
          <button onClick={handleTaskSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleTaskDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
