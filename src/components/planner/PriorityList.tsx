"use client";

import { useEffect, useState } from "react";

type PriorityItem = {
  text: string;
  completed: boolean;
};

type PriorityListProps = {
  storageKey: string;
};

export default function PriorityList({ storageKey }: PriorityListProps) {
  const [tasks, setTasks] = useState<PriorityItem[]>(() => {
    const savedTasks = localStorage.getItem(storageKey);

    if (savedTasks) {
      const parsed = JSON.parse(savedTasks);

      if (typeof parsed[0] === "string") {
        return [
          {
            text: parsed[0] || "",
            completed: false,
          },
          {
            text: parsed[1] || "",
            completed: false,
          },
        ];
      }

      return parsed;
    }

    return [
      { text: "", completed: false },
      { text: "", completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [storageKey, tasks]);

  function updateText(index: number, value: string) {
    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      text: value,
      completed: value.trim() ? updated[index].completed : false,
    };
    setTasks(updated);
  }

  function toggleComplete(index: number) {
    if (!tasks[index].text.trim()) return;

    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      completed: !updated[index].completed,
    };
    setTasks(updated);
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => {
        const isEmpty = !task.text.trim();

        return (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => toggleComplete(index)}
              disabled={isEmpty}
              className={`text-base ${
                isEmpty ? "cursor-default text-gray-300" : "text-gray-700"
              }`}
            >
              {task.completed ? "☑" : "☐"}
            </button>

            <input
              type="text"
              value={task.text}
              onChange={(e) => updateText(index, e.target.value)}
              placeholder={`Priority task ${index + 1}`}
              className={`w-full bg-transparent text-sm outline-none ${
                task.completed ? "text-gray-400 line-through" : ""
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}