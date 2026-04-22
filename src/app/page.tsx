"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SectionCard from "@/components/SectionCard";

const NotesSection = dynamic(
  () => import("@/components/planner/NotesSection"),
  { ssr: false },
);

const FocusSection = dynamic(
  () => import("@/components/planner/FocusSection"),
  { ssr: false },
);

const DailyTextInput = dynamic(
  () => import("@/components/planner/DailyTextInput"),
  { ssr: false },
);

const PriorityList = dynamic(
  () => import("@/components/planner/PriorityList"),
  { ssr: false },
);

const OtherTasks = dynamic(() => import("@/components/planner/OtherTasks"), {
  ssr: false,
});

const HabitsChecklist = dynamic(
  () => import("@/components/planner/HabitsChecklist"),
  { ssr: false },
);

function formatDate(date: Date) {
  return date.toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateKey = selectedDate.toISOString().split("T")[0];

  function goToPreviousDay() {
    setSelectedDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  }

  function goToNextDay() {
    setSelectedDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl p-6">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Daily Planner</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousDay}
              className="rounded-lg border bg-white px-3 py-2 text-sm shadow-sm"
            >
              Previous
            </button>

            <div className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm">
              {formatDate(selectedDate)}
            </div>

            <button
              onClick={goToNextDay}
              className="rounded-lg border bg-white px-3 py-2 text-sm shadow-sm"
            >
              Next
            </button>
          </div>
        </header>

        <section className="mb-6 grid gap-6 md:grid-cols-2">
          <SectionCard title="I’m grateful for...">
            <DailyTextInput
              key={`grateful-${dateKey}`}
              storageKey={`grateful-${dateKey}`}
              placeholder="Add gratitude here."
            />
          </SectionCard>

          <SectionCard title="I’m looking forward to...">
            <DailyTextInput
              key={`forward-${dateKey}`}
              storageKey={`forward-${dateKey}`}
              placeholder="Add what you’re looking forward to here."
            />
          </SectionCard>
        </section>

        <section className="mb-6">
          <SectionCard title="Focus of the day">
            <FocusSection key={dateKey} storageKey={`focus-${dateKey}`} />
          </SectionCard>
        </section>

        <section className="mb-6 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-6">
            <SectionCard title="Priority list">
              <PriorityList
                key={`priorities-${dateKey}`}
                storageKey={`priorities-${dateKey}`}
              />
            </SectionCard>

            <SectionCard title="Other tasks">
              <OtherTasks
                key={`other-tasks-${dateKey}`}
                storageKey={`other-tasks-${dateKey}`}
              />
            </SectionCard>

            <SectionCard title="Habits checklist">
              <HabitsChecklist
                key={`habits-${dateKey}`}
                storageKey={`habits-${dateKey}`}
              />
            </SectionCard>

            <SectionCard title="To relax">
              <p className="text-sm text-gray-500">
                Two relaxing options for later.
              </p>
            </SectionCard>
          </div>

          <div className="flex h-full flex-col gap-6">
            <div className="rounded-2xl border bg-white px-6 py-5 text-center shadow-sm">
              <p className="text-sm italic text-gray-600">
                “A calm day starts with a clear plan.”
              </p>
            </div>

            <SectionCard title="Appointments">
              <p className="text-sm text-gray-500">
                Scheduled events and time-based plans go here.
              </p>
            </SectionCard>

            <SectionCard
              title="Notes"
              className="flex min-h-0 flex-1 flex-col"
              contentClassName="min-h-0 flex-1"
            >
              <NotesSection
                key={dateKey}
                storageKey={`notes-${dateKey}`}
                minHeight="0"
              />
            </SectionCard>
          </div>
        </section>

        <section>
          <SectionCard title="Thoughts, ideas & wins of the day">
            <NotesSection
              key={`reflection-${dateKey}`}
              storageKey={`reflection-${dateKey}`}
              minHeight="8rem"
              placeholder="Wins, lessons, thoughts, ideas..."
            />
          </SectionCard>
        </section>
      </div>
    </main>
  );
}
