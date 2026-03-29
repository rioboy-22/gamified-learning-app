import { BookOpen, Sparkles } from "lucide-react";
import LessonForm from "@/components/parent/LessonForm";

export default function ParentDashboard() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-8">
      {/* ── Header ── */}
      <header className="mb-8 space-y-1">
        <div className="flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
            style={{ background: "var(--color-primary)" }}
          >
            <Sparkles size={18} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Parent Dashboard
          </h1>
        </div>
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          Create a gamified lesson for your child in seconds.
        </p>
      </header>

      {/* ── Lesson Card ── */}
      <section
        className="rounded-2xl border p-6 shadow-sm"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-card)",
        }}
      >
        <div className="mb-5 flex items-center gap-2">
          <BookOpen size={18} style={{ color: "var(--color-primary)" }} />
          <h2 className="text-base font-semibold">New Lesson</h2>
        </div>

        <LessonForm />
      </section>
    </main>
  );
}
