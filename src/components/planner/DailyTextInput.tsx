"use client";

import { useEffect, useState } from "react";

type DailyTextInputProps = {
  storageKey: string;
  placeholder: string;
};

export default function DailyTextInput({
  storageKey,
  placeholder,
}: DailyTextInputProps) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(storageKey);
    return savedValue || "";
  });

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent text-sm outline-none"
    />
  );
}