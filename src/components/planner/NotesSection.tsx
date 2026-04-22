"use client";

import { useEffect, useState } from "react";

type NotesSectionProps = {
  storageKey: string;
  minHeight?: string;
  placeholder?: string;
};

export default function NotesSection({
  storageKey,
  minHeight = "18rem",
  placeholder = "Write notes, reminders, ideas...",
}: NotesSectionProps) {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(storageKey);
    return savedNotes || "";
  });

  useEffect(() => {
    localStorage.setItem(storageKey, notes);
  }, [storageKey, notes]);

  return (
    <textarea
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      placeholder={placeholder}
      style={{ minHeight }}
      className="w-full resize-none bg-transparent text-sm outline-none"
    />
  );
}
