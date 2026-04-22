"use client";

import { useEffect, useState } from "react";

type TaskItem = {
  text: string;
  completed: boolean;
};

type OtherTasksProps = {
  storageKey: string;
};

export default function OtherTasks({ storageKey }: OtherTasksProps) {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<TaskItem[]>(() => {
    const savedTasks = localStorage.getItem(storageKey);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [storageKey, tasks]);

  function addTask() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTasks([...tasks, { text: trimmed, completed: false }]);
    setInput("");
  }

  function updateTask(index: number, updatedTask: TaskItem) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  }

  function toggleComplete(index: number) {
    updateTask(index, {
      ...tasks[index],
      completed: !tasks[index].completed,
    });
  }

  function deleteTask(indexToDelete: number) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
        placeholder="Add a task..."
        className="w-full bg-transparent text-sm outline-none"
      />

      {tasks.length > 0 && (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <button
                onClick={() => toggleComplete(index)}
                className="text-base text-gray-700"
              >
                {task.completed ? "☑" : "☐"}
              </button>

              <span
                className={`flex-1 ${
                  task.completed ? "text-gray-400 line-through" : ""
                }`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(index)}
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