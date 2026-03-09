import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";

export default function Work() {
  const data = profile as ProfileData;

  return (
    <main className="px-6 pb-20 pt-36 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">Work</p>
        <h1 className="mt-4 text-[clamp(2rem,5.5vw,5rem)] leading-[0.95]">Projects</h1>

        <div className="mt-10 space-y-5">
          {data.projects.map((item) => (
            <article key={item.name} className="rounded-2xl border border-zinc-700 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.company} • {item.duration}</p>
              <h2 className="mt-3 text-3xl text-zinc-100">{item.name}</h2>
              <p className="mt-3 text-zinc-200">{item.description}</p>
              <p className="mt-4 text-sm text-zinc-400">{item.stack.join(" / ")}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
