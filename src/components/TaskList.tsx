"use client";

import { useEffect, useState } from "react";

export default function TaskList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedTasks = localStorage.getItem("tasks");

      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }

      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isReady]);

  function addTask() {
    if (!taskInput.trim()) return;

    setTasks([...tasks, taskInput.trim()]);
    setTaskInput("");
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Add a task..."
          className="flex-1 rounded-lg border px-3 py-2 text-sm"
        />

        <button
          onClick={addTask}
          className="rounded-lg bg-black px-4 py-2 text-sm text-white"
        >
          Add
        </button>
      </div>

      {isReady && (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm"
            >
              <span>{task}</span>

              <button
                onClick={() =>
                  setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))
                }
                className="text-xs font-medium text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
