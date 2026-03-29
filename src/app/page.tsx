import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg">
        <Rocket size={40} />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">LearnQuest</h1>
      <p className="max-w-sm text-gray-500">
        Transform school lessons into themed, gamified adventures for your kids.
      </p>

      <Link
        href="/parent"
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:bg-purple-700 active:scale-[0.97]"
      >
        Parent Dashboard
        <ArrowRight size={16} />
      </Link>
    </main>
  );
}
