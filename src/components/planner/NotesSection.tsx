"use client";

import { useEffect, useState } from "react";

type NotesSectionProps = {
  storageKey: string;
};

export default function NotesSection({ storageKey }: NotesSectionProps) {
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
      placeholder="Write notes, reminders, ideas..."
      className="min-h-[18rem] w-full resize-none bg-transparent text-sm outline-none"
    />
  );
}
