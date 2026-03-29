"use client";

import { useState } from "react";
import {
  Sparkles,
  Castle,
  Trophy,
  Rocket,
  Send,
  CheckCircle,
  RotateCcw,
} from "lucide-react";

/* ─── Theme options ───────────────────────────────────────── */

interface ThemeOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  border: string;
}

const THEMES: ThemeOption[] = [
  {
    id: "disney",
    name: "Disney Magic",
    icon: <Castle size={28} />,
    gradient: "from-pink-500 to-purple-600",
    border: "border-pink-400",
  },
  {
    id: "sports",
    name: "Sports Arena",
    icon: <Trophy size={28} />,
    gradient: "from-amber-500 to-orange-600",
    border: "border-amber-400",
  },
  {
    id: "space",
    name: "Space Adventure",
    icon: <Rocket size={28} />,
    gradient: "from-indigo-500 to-cyan-500",
    border: "border-indigo-400",
  },
];

/* ─── Form data shape ─────────────────────────────────────── */

interface LessonFormData {
  kidName: string;
  lessonDescription: string;
  themeId: string;
}

const INITIAL_FORM: LessonFormData = {
  kidName: "",
  lessonDescription: "",
  themeId: "",
};

/* ─── Component ───────────────────────────────────────────── */

export default function LessonForm() {
  const [form, setForm] = useState<LessonFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  /* ── early return: success state ── */
  if (submitted) {
    const selectedTheme = THEMES.find((t) => t.id === form.themeId);
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckCircle size={32} />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold text-emerald-800">
            Lesson Created!
          </h2>
          <p className="text-sm text-emerald-600">
            &ldquo;{form.lessonDescription}&rdquo; is ready for{" "}
            <span className="font-semibold">{form.kidName}</span> with the{" "}
            <span className="font-semibold">{selectedTheme?.name}</span> theme.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_FORM);
            setSubmitted(false);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700 active:scale-[0.97]"
        >
          <RotateCcw size={16} />
          Create Another
        </button>
      </div>
    );
  }

  /* ── helpers ── */
  const isValid =
    form.kidName.trim().length > 0 &&
    form.lessonDescription.trim().length > 0 &&
    form.themeId.length > 0;

  const updateField = <K extends keyof LessonFormData>(
    key: K,
    value: LessonFormData[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ── Kid Name ── */}
      <fieldset className="space-y-2">
        <label
          htmlFor="kidName"
          className="block text-sm font-semibold"
          style={{ color: "var(--color-foreground)" }}
        >
          Kid&apos;s Name
        </label>
        <input
          id="kidName"
          type="text"
          placeholder="e.g. Sofia"
          value={form.kidName}
          onChange={(e) => updateField("kidName", e.target.value)}
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-purple-400"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-card)",
          }}
        />
      </fieldset>

      {/* ── Lesson Description ── */}
      <fieldset className="space-y-2">
        <label
          htmlFor="lessonDesc"
          className="block text-sm font-semibold"
          style={{ color: "var(--color-foreground)" }}
        >
          Lesson Description
        </label>
        <textarea
          id="lessonDesc"
          rows={3}
          placeholder="e.g. Intro to Fractions — adding and subtracting with like denominators"
          value={form.lessonDescription}
          onChange={(e) => updateField("lessonDescription", e.target.value)}
          className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-purple-400"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-card)",
          }}
        />
      </fieldset>

      {/* ── Theme Selector ── */}
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
          Choose a Theme
        </legend>

        <div className="grid grid-cols-3 gap-3">
          {THEMES.map((theme) => {
            const isSelected = form.themeId === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => updateField("themeId", theme.id)}
                className={`
                  relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4
                  transition-all active:scale-[0.96]
                  ${
                    isSelected
                      ? `${theme.border} ring-2 ring-offset-2 ring-purple-400`
                      : "border-transparent"
                  }
                `}
                style={{ background: "var(--color-card)" }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white ${theme.gradient}`}
                >
                  {theme.icon}
                </div>
                <span className="text-xs font-medium">{theme.name}</span>

                {isSelected && (
                  <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-white">
                    <Sparkles size={12} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={!isValid}
        className={`
          flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5
          text-sm font-semibold text-white transition-all active:scale-[0.97]
          ${
            isValid
              ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200"
              : "cursor-not-allowed bg-gray-300"
          }
        `}
      >
        <Send size={16} />
        Create Lesson
      </button>
    </form>
  );
}
