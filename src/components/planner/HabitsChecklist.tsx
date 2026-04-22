"use client";

import { useEffect, useState } from "react";

type HabitItem = {
  name: string;
  completed: boolean;
};

type HabitsChecklistProps = {
  storageKey: string;
};

export default function HabitsChecklist({
  storageKey,
}: HabitsChecklistProps) {
  const [habits, setHabits] = useState<HabitItem[]>(() => {
    const savedHabits = localStorage.getItem(storageKey);

    if (savedHabits) {
      const parsed = JSON.parse(savedHabits);

      return Array.from({ length: 5 }, (_, index) => ({
        name: parsed[index]?.name || "",
        completed: parsed[index]?.completed || false,
      }));
    }

    return Array.from({ length: 5 }, () => ({
      name: "",
      completed: false,
    }));
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(habits));
  }, [storageKey, habits]);

  function updateHabitName(index: number, value: string) {
    const updatedHabits = [...habits];
    updatedHabits[index] = {
      ...updatedHabits[index],
      name: value,
      completed: value.trim() ? updatedHabits[index].completed : false,
    };
    setHabits(updatedHabits);
  }

  function toggleHabit(index: number) {
    if (!habits[index].name.trim()) return;

    const updatedHabits = [...habits];
    updatedHabits[index] = {
      ...updatedHabits[index],
      completed: !updatedHabits[index].completed,
    };
    setHabits(updatedHabits);
  }

  return (
    <div className="space-y-2">
      {habits.map((habit, index) => {
        const isEmpty = !habit.name.trim();

        return (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => toggleHabit(index)}
              disabled={isEmpty}
              className={`text-base ${
                isEmpty ? "cursor-default text-gray-300" : "text-gray-700"
              }`}
            >
              {habit.completed ? "☑" : "☐"}
            </button>

            <input
              type="text"
              value={habit.name}
              onChange={(e) => updateHabitName(index, e.target.value)}
              placeholder={`Habit ${index + 1}`}
              className={`w-full bg-transparent text-sm outline-none ${
                habit.completed ? "text-gray-400 line-through" : ""
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}