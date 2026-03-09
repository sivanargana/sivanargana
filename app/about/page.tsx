import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";

export default function About() {
  const data = profile as ProfileData;

  return (
    <main className="px-6 pb-20 pt-36 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">About</p>
        <h1 className="mt-4 text-[clamp(2rem,5.5vw,5rem)] leading-[0.95]">{data.name}</h1>
        <p className="mt-6 max-w-4xl text-[clamp(1.1rem,2.2vw,1.7rem)] text-zinc-200">{data.profile_summary}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-700 p-6">
            <h2 className="text-xl text-zinc-100">Core Skills</h2>
            <p className="mt-3 text-zinc-300">{data.key_skills.join(" , ")}</p>
          </article>
          <article className="rounded-2xl border border-zinc-700 p-6">
            <h2 className="text-xl text-zinc-100">Languages</h2>
            <p className="mt-3 text-zinc-300">{data.languages.join(" / ")}</p>
          </article>
        </div>
      </div>
    </main>
  );
}
