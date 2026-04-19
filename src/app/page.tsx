export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-6xl p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Personal Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Tasks, notes, habits, mood and energy in one place.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Tasks</h2>
            <p className="text-sm text-gray-500">Task list goes here.</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Notes</h2>
            <p className="text-sm text-gray-500">Notes section goes here.</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Habits</h2>
            <p className="text-sm text-gray-500">Habits tracker goes here.</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Mood</h2>
            <p className="text-sm text-gray-500">Mood tracker goes here.</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Energy</h2>
            <p className="text-sm text-gray-500">Energy tracker goes here.</p>
          </div>
        </section>
      </div>
    </main>
  );
}