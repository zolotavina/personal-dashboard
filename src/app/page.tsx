import SectionCard from "@/components/SectionCard";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-6xl p-6">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Week 1 Project</p>
            <h1 className="text-3xl font-bold tracking-tight">
              Personal Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Tasks, notes, habits, mood, and energy in one place.
            </p>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-3 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Status
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              Version 1 in progress
            </p>
          </div>
        </header>

        <section className="mb-6">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Today</h2>
            <p className="mt-2 text-sm text-gray-600">
              This will become your quick daily overview.
            </p>
          </div>
        </section>

        <section className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SectionCard title="Tasks">
            <TaskList />
          </SectionCard>

          <SectionCard title="Notes">
            <p className="text-sm text-gray-500">Notes section goes here.</p>
          </SectionCard>

          <SectionCard title="Habits">
            <p className="text-sm text-gray-500">Habits tracker goes here.</p>
          </SectionCard>

          <SectionCard title="Mood">
            <p className="text-sm text-gray-500">Mood tracker goes here.</p>
          </SectionCard>

          <SectionCard title="Energy">
            <p className="text-sm text-gray-500">Energy tracker goes here.</p>
          </SectionCard>
        </section>
      </div>
    </main>
  );
}