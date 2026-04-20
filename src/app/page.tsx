import SectionCard from "@/components/SectionCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl p-6">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Personal Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A space to plan your day with intention.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border bg-white px-3 py-2 text-sm shadow-sm">
              Previous
            </button>
            <div className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm">
              April 20, 2026
            </div>
            <button className="rounded-lg border bg-white px-3 py-2 text-sm shadow-sm">
              Next
            </button>
          </div>
        </header>

        <section className="mb-6 grid gap-6 md:grid-cols-2">
          <SectionCard title="I’m grateful for">
            <p className="text-sm text-gray-500">Add gratitude here.</p>
          </SectionCard>

          <SectionCard title="I’m looking forward to">
            <p className="text-sm text-gray-500">
              Add what you’re looking forward to here.
            </p>
          </SectionCard>
        </section>

        <section className="mb-6">
          <SectionCard title="Focus of the day">
            <p className="text-sm text-gray-500">
              What is the one most important thing for today?
            </p>
          </SectionCard>
        </section>

        <section className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <SectionCard title="Priority list">
              <p className="text-sm text-gray-500">
                Only two tasks allowed here.
              </p>
            </SectionCard>

            <SectionCard title="Other tasks">
              <p className="text-sm text-gray-500">Additional tasks go here.</p>
            </SectionCard>

            <SectionCard title="Habits checklist">
              <p className="text-sm text-gray-500">Habits will go here.</p>
            </SectionCard>

            <SectionCard title="To relax">
              <p className="text-sm text-gray-500">
                Two relaxing options for later.
              </p>
            </SectionCard>
          </div>

          <div className="grid gap-6 lg:grid-rows-[repeat(4,minmax(0,1fr))]">
            <SectionCard title="Appointments">
              <p className="text-sm text-gray-500">
                Scheduled events and time-based plans go here.
              </p>
            </SectionCard>

            <div className="lg:row-span-3">
              <SectionCard title="Notes">
                <div className="h-full min-h-[20rem]">
                  <p className="text-sm text-gray-500">
                    Notes, ideas, reminders, and loose planning go here.
                  </p>
                </div>
              </SectionCard>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <div className="rounded-2xl border bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-sm italic text-gray-600">
              “A calm day starts with a clear plan.”
            </p>
          </div>
        </section>

        <section>
          <SectionCard title="Thoughts, ideas & wins of the day">
            <div className="min-h-[10rem]">
              <p className="text-sm text-gray-500">
                Evening reflection will go here.
              </p>
            </div>
          </SectionCard>
        </section>
      </div>
    </main>
  );
}
