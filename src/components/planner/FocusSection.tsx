"use client";

import { useEffect, useState } from "react";

type FocusSectionProps = {
  storageKey: string;
};

export default function FocusSection({ storageKey }: FocusSectionProps) {
  const [focus, setFocus] = useState(() => {
    const savedFocus = localStorage.getItem(storageKey);
    return savedFocus || "";
  });

  useEffect(() => {
    localStorage.setItem(storageKey, focus);
  }, [storageKey, focus]);

  return (
    <input
      type="text"
      value={focus}
      onChange={(e) => setFocus(e.target.value)}
      placeholder="What is the one most important thing for today?"
      className="w-full bg-transparent text-sm outline-none"
    />
  );
}